import { Store } from 'vuex';
import { VQBState } from './state';
/**
 * the default VQB namespace name
 */
export declare const VQB_MODULE_NAME = "vqb";
/**
 * helper to compute the fully qualified property name.
 * e.g. `vqb/pipeline`, `vqb/selecedIndex`
 */
export declare const VQBnamespace: (prop: string) => string;
export declare const VQBModule: import("vuex-class/lib/bindings").BindingHelpers;
export declare function buildStoreModule(initialState?: Partial<VQBState>): {
    namespaced: boolean;
    state: {
        availableVariables?: import("../lib/variables").VariablesBucket | undefined;
        dataset: import("../lib/dataset").DataSet;
        domains: string[];
        currentDomain?: string | undefined;
        currentPipelineName?: string | undefined;
        currentStepFormName?: "text" | "aggregate" | "append" | "argmax" | "argmin" | "concatenate" | "convert" | "cumsum" | "custom" | "dateextract" | "delete" | "statistics" | "domain" | "duplicate" | "evolution" | "fillna" | "filter" | "formula" | "fromdate" | "ifthenelse" | "join" | "percentage" | "pivot" | "rename" | "replace" | "rollup" | "select" | "sort" | "split" | "substring" | "todate" | "lowercase" | "top" | "uppercase" | "uniquegroups" | "unpivot" | undefined;
        selectedStepIndex: number;
        pipelines: {
            [name: string]: import("../lib/steps").Pipeline;
        };
        stepFormInitialValue?: object | undefined;
        stepFormDefaults?: object | undefined;
        selectedColumns: string[];
        pagesize: number;
        backendMessages: import("../lib/backend-response").BackendWarning[] | import("../lib/backend-response").BackendError[];
        isLoading: {
            dataset: boolean;
            uniqueValues: boolean;
        };
        isRequestOnGoing: boolean;
        variables?: import("../lib/templating").ScopeContext | undefined;
        interpolateFunc?: import("../lib/templating").InterpolateFunction | undefined;
        translator: string;
        variableDelimiters?: import("../lib/variables").VariableDelimiters | undefined;
    };
    getters: import("vuex").GetterTree<VQBState, any>;
    mutations: import("vuex").MutationTree<VQBState>;
    actions: import("vuex").ActionTree<VQBState, any>;
};
/**
 * register a VQBModule inside a host Vuex store using `VQB_MODULE_NAME` as key.
 */
export declare function registerModule(rootStore: Store<any>, initialState?: Partial<VQBState>): void;
/**
 * unregister a VQBModule from a host inside a host Vuex store using `VQB_MODULE_NAME` as key.
 */
export declare function unregisterModule(rootStore: Store<any>): void;
/**
 * Vuex store factory
 * Example usage:
 * `> setupStore({domains: ['foo', 'bar'], currentDomain: 'foo'})`
 * => will create an empty state, except for `domains` and `currentDomain` fields.
 *
 * @param initialState the parts of the state we want not to be empty at creation time.
 * @param plugins an optional list of store plugins (e.g. a backend database plugin)
 */
export declare function setupStore(initialState?: Partial<VQBState>, plugins?: any[], autobind?: boolean): Store<VQBState>;
