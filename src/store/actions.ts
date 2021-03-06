import { ActionContext, ActionTree } from 'vuex';

import { addLocalUniquesToDataset, updateLocalUniquesFromDatabase } from '@/lib/dataset/helpers.ts';
import { pageOffset } from '@/lib/dataset/pagination';
import { Pipeline } from '@/lib/steps';

import { preparePipeline, VQBState } from './state';

/**
 * Action wrapper so that the state loading is set to true at the start of
 * In weaverbird there are two loading states:
 * - a "global" loading state which means that the whole dataset is currently loading
 * - a "column" loading state which means that unique values of this column are currently loading
 */
function loading(type: 'dataset' | 'uniqueValues') {
  return function loading(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function(context: ActionContext<VQBState, any>, ...args: any[]) {
      context.commit('setLoading', { type, isLoading: true });
      await originalMethod(context, ...args);
      context.commit('setLoading', { type, isLoading: false });
    };

    return descriptor;
  };
}

/**
 * HACK: this class is just a temporary wrapper to be able to use decorators.
 * We'll export its prototype afterwards.
 */
class Actions {
  selectPipeline(context: ActionContext<VQBState, any>, { name }: { name: string }) {
    context.commit('setCurrentPipelineName', { name: name });

    // Reset selected step to last one
    context.commit('selectStep', { index: -1 });

    // Update the preview
    context.dispatch('updateDataset');
  }

  async updateDataset({ commit, getters, state }: ActionContext<VQBState, any>) {
    try {
      commit('setLoading', { type: 'dataset', isLoading: true });
      commit('toggleRequestOnGoing', { isRequestOnGoing: true });
      // No pipeline or an empty pipeline
      if (!getters.activePipeline?.length) {
        // Reset preview to an empty state
        commit('setDataset', {
          dataset: {
            headers: [],
            data: [],
          },
        });
        return;
      }
      const response = await state.backendService.executePipeline(
        preparePipeline(getters.activePipeline, state),
        state.pagesize,
        pageOffset(state.pagesize, getters.pageno),
      );
      const backendMessages = response.error || response.warning || [];
      commit('logBackendMessages', { backendMessages });
      if (response.data) {
        commit('setDataset', {
          dataset: addLocalUniquesToDataset(response.data),
        });
      }
      return response;
    } catch (error) {
      /* istanbul ignore next */
      const response = { error: [{ type: 'error', message: error.toString() }] };
      // Avoid spamming tests results with errors, but could be useful in production
      /* istanbul ignore next */
      if (process.env.NODE_ENV !== 'test') {
        console.error(error);
      }
      /* istanbul ignore next */
      commit('logBackendMessages', {
        backendMessages: response.error,
      });
      /* istanbul ignore next */
      throw error;
    } finally {
      commit('toggleRequestOnGoing', { isRequestOnGoing: false });
      commit('setLoading', { type: 'dataset', isLoading: false });
    }
  }

  // Following actions are the one that have an impact on the preview, and therefore must update the dataset each time their are called
  selectStep({ commit, dispatch }: ActionContext<VQBState, any>, { index }: { index: number }) {
    commit('selectStep', { index });
    dispatch('updateDataset');
  }

  deleteStep({ commit, dispatch }: ActionContext<VQBState, any>, { index }: { index: number }) {
    commit('deleteStep', { index });
    dispatch('updateDataset');
  }

  setCurrentDomain(
    { commit, dispatch }: ActionContext<VQBState, any>,
    payload: Pick<VQBState, 'currentDomain'>,
  ) {
    commit('setCurrentDomain', payload);
    dispatch('updateDataset');
  }

  setCurrentPage(
    { commit, dispatch }: ActionContext<VQBState, any>,
    { pageno }: { pageno: number },
  ) {
    commit('setCurrentPage', { pageno });
    dispatch('updateDataset');
  }

  /**
   * Call backend with a special pipeline to retrieve unique values of the requested column.
   * The current pipeline is completed with a "count aggregation" on the requested column.
   * The result is loaded in store.
   */
  @loading('uniqueValues')
  async loadColumnUniqueValues(
    context: ActionContext<VQBState, any>,
    { column }: { column: string },
  ) {
    const activePipeline = context.getters.activePipeline;
    if (!activePipeline || !activePipeline.length) {
      return;
    }
    const loadUniqueValuesPipeline: Pipeline = [
      ...activePipeline,
      {
        name: 'aggregate',
        aggregations: [
          {
            columns: [column],
            aggfunction: 'count',
            newcolumns: ['__vqb_count__'],
          },
        ],
        on: [column],
      },
    ];

    const response = await context.state.backendService.executePipeline(
      preparePipeline(loadUniqueValuesPipeline, context.state),
      10000, // FIXME: limit is hard-coded
      0,
    );
    if (!response.error) {
      context.commit('setDataset', {
        dataset: updateLocalUniquesFromDatabase(context.state.dataset, response.data),
      });
    }
  }
}

const actions: ActionTree<VQBState, any> = {};
Object.assign(actions, Actions.prototype);
export default actions;
