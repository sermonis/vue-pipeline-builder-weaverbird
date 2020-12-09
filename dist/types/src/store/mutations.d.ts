/**
 * exports the list of store mutations.
 */
import { MutationTree } from 'vuex';
import { BackendError, BackendWarning } from '@/lib/backend-response';
import { Pipeline } from '@/lib/steps';
import { VQBState } from './state';
declare type BackendMessageMutation = {
    type: 'logBackendMessages';
    payload: BackendError[] | BackendWarning[];
};
declare type DatasetMutation = {
    type: 'setDataset';
    payload: Pick<VQBState, 'dataset'>;
};
declare type DeleteStepMutation = {
    type: 'deleteStep';
    payload: {
        index: number;
    };
};
declare type DomainsMutation = {
    type: 'setDomains';
    payload: Pick<VQBState, 'domains'>;
};
declare type PipelineMutation = {
    type: 'setPipeline';
    payload: {
        pipeline: Pipeline;
    };
};
declare type SetCurrentPipelineNameMutation = {
    type: 'setCurrentPipelineName';
    payload: {
        name: string;
    };
};
declare type SelectDomainMutation = {
    type: 'setCurrentDomain';
    payload: Pick<VQBState, 'currentDomain'>;
};
declare type SelectedStepMutation = {
    type: 'selectStep';
    payload: {
        index: number;
    };
};
declare type SelectedColumnsMutation = {
    type: 'setSelectedColumns';
    payload: {
        column: string;
    };
};
declare type SetCurrentPage = {
    type: 'setCurrentPage';
    payload: {
        pageno: number;
    };
};
declare type ToggleColumnSelectionMutation = {
    type: 'toggleColumnSelection';
    payload: {
        column: string;
    };
};
declare type ToggleRequestOnGoing = {
    type: 'toggleRequestOnGoing';
    payload: BackendError;
};
declare type AvailableVariablesMutation = {
    type: 'setAvailableVariables';
    payload: Pick<VQBState, 'availableVariables'>;
};
declare type VariableDelimitersMutation = {
    type: 'setVariableDelimiters';
    payload: Pick<VQBState, 'variableDelimiters'>;
};
export declare type StateMutation = AvailableVariablesMutation | BackendMessageMutation | DatasetMutation | DeleteStepMutation | DomainsMutation | PipelineMutation | SetCurrentPipelineNameMutation | SelectedColumnsMutation | SelectDomainMutation | SelectedStepMutation | SetCurrentPage | ToggleColumnSelectionMutation | ToggleRequestOnGoing | VariableDelimitersMutation;
declare type MutationByType<M, MT> = M extends {
    type: MT;
} ? M : never;
export declare type MutationCallbacks = {
    [K in StateMutation['type']]: (payload: MutationByType<StateMutation, K>['payload']) => void;
};
declare const mutations: MutationTree<VQBState>;
export default mutations;
