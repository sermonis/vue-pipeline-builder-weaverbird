import { BackendError, BackendWarning } from '@/lib/backend-response';
import { DataSet } from '@/lib/dataset';
import { Pipeline, PipelineStepName } from '@/lib/steps';
import { InterpolateFunction, ScopeContext } from '@/lib/templating';
import { VariableDelimiters, VariablesBucket } from '@/lib/variables';
export interface VQBState {
    /**
     * available variables for templating
     */
    availableVariables?: VariablesBucket;
    /**
     * the current dataset.
     */
    dataset: DataSet;
    /**
     * the current list of domains available.
     */
    domains: string[];
    /**
     * FIXME should be a getter from the current pipeline
     * the domain currently selected.
     */
    currentDomain?: string;
    /**
     * the current pipeline (being edited) name
     */
    currentPipelineName?: string;
    /**
     * the current step form displayed
     */
    currentStepFormName?: PipelineStepName;
    /**
     * the last step currently active.
     */
    selectedStepIndex: number;
    /**
     * saved pipelines, with unique name as key and pipeline as value
     */
    pipelines: {
        [name: string]: Pipeline;
    };
    /**
     * object used to fill an edit step form
     */
    stepFormInitialValue?: object;
    /**
     * object used to setup edit step form initially without interfering with
     * `stepFormInitialValue` which has to be left undefined so that default
     * StepForm's props can be used by VueJS.
     *
     * NOTE: This needs to be refactored, that's too many different properties for
     * a single concern (i.e. form filling)
     */
    stepFormDefaults?: object;
    /**
     * the seclected columns (materialized by a styled focus on the DataViewer)
     */
    selectedColumns: string[];
    /**
     * pagination size (i.e. number of results displayed)
     */
    pagesize: number;
    /**
     * error/warning messages send by backend or catch from its interface
     */
    backendMessages: BackendError[] | BackendWarning[];
    /**
     * An object containing all loading state
     * `dataset` if the whole dataset is loading
     * `uniqueValues` unique values of a column are loading
     */
    isLoading: {
        dataset: boolean;
        uniqueValues: boolean;
    };
    /**
     * whether a request to backend service is on ongoing
     */
    isRequestOnGoing: boolean;
    /**
     * variables scope, if any.
     */
    variables?: ScopeContext;
    /**
     * interpolation function
     */
    interpolateFunc?: InterpolateFunction;
    /**
     * the app translator
     */
    translator: string;
    /**
     * variable delimiter for templating
     */
    variableDelimiters?: VariableDelimiters;
}
/**
 * generate the default empty state, useful to update just some parts of it
 * when creating the initial version of store.
 */
export declare function emptyState(): VQBState;
/**
 * @param state current application state
 * @return the pipeline currently edited
 */
export declare function currentPipeline(state: VQBState): Pipeline | undefined;
/**
 * @param state current application state
 * @return the subpart of the pipeline that is currently active.
 */
export declare function activePipeline(state: VQBState): import("../lib/steps").PipelineStep[] | undefined;
/**
 * @param state current application state
 * @return the subpart of the pipeline that is currently inactive.
 */
export declare function inactivePipeline(state: VQBState): import("../lib/steps").PipelineStep[] | undefined;
/**
 * `preparePipeline` responsibility is to prepare the pipeline so as to be ready for direct translation.
 * Specifically, this consists in 2 things:
 *   - dereferencePipelines
 *   - interpolate if an `interpolateFunc` has been set
 */
export declare function preparePipeline(pipeline: Pipeline, state: VQBState): Pipeline;
