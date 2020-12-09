import { VueConstructor } from 'vue';
import { Store } from 'vuex';
import BaseStepForm from '@/components/stepforms/StepForm.vue';
import { Pipeline } from '@/lib/steps';
import { VQBState } from '@/store/state';
export declare type RootState = {
    vqb: VQBState;
};
export interface ValidationError {
    dataPath: string;
    keyword: string;
    message?: string;
}
export declare const localVue: VueConstructor<BaseStepForm>;
export declare function buildState(customState: Partial<VQBState>): {
    availableVariables?: import("../../src/lib/variables").VariablesBucket | undefined;
    dataset: import("../../src/lib/dataset").DataSet;
    domains: string[];
    currentDomain?: string | undefined;
    currentPipelineName?: string | undefined;
    currentStepFormName?: "text" | "aggregate" | "append" | "argmax" | "argmin" | "concatenate" | "convert" | "cumsum" | "custom" | "dateextract" | "delete" | "statistics" | "domain" | "duplicate" | "evolution" | "fillna" | "filter" | "formula" | "fromdate" | "ifthenelse" | "join" | "percentage" | "pivot" | "rename" | "replace" | "rollup" | "select" | "sort" | "split" | "substring" | "todate" | "lowercase" | "top" | "uppercase" | "uniquegroups" | "unpivot" | undefined;
    selectedStepIndex: number;
    pipelines: {
        [name: string]: Pipeline;
    };
    stepFormInitialValue?: object | undefined;
    stepFormDefaults?: object | undefined;
    selectedColumns: string[];
    pagesize: number;
    backendMessages: import("../../src/lib/backend-response").BackendWarning[] | import("../../src/lib/backend-response").BackendError[];
    isLoading: {
        dataset: boolean;
        uniqueValues: boolean;
    };
    isRequestOnGoing: boolean;
    variables?: import("../../src/lib/templating").ScopeContext | undefined;
    interpolateFunc?: import("../../src/lib/templating").InterpolateFunction | undefined;
    translator: string;
    variableDelimiters?: import("../../src/lib/variables").VariableDelimiters | undefined;
};
export declare function buildStateWithOnePipeline(pipeline: Pipeline, customState?: Partial<VQBState>): {
    availableVariables?: import("../../src/lib/variables").VariablesBucket | undefined;
    dataset: import("../../src/lib/dataset").DataSet;
    domains: string[];
    currentDomain?: string | undefined;
    currentPipelineName?: string | undefined;
    currentStepFormName?: "text" | "aggregate" | "append" | "argmax" | "argmin" | "concatenate" | "convert" | "cumsum" | "custom" | "dateextract" | "delete" | "statistics" | "domain" | "duplicate" | "evolution" | "fillna" | "filter" | "formula" | "fromdate" | "ifthenelse" | "join" | "percentage" | "pivot" | "rename" | "replace" | "rollup" | "select" | "sort" | "split" | "substring" | "todate" | "lowercase" | "top" | "uppercase" | "uniquegroups" | "unpivot" | undefined;
    selectedStepIndex: number;
    pipelines: {
        [name: string]: Pipeline;
    };
    stepFormInitialValue?: object | undefined;
    stepFormDefaults?: object | undefined;
    selectedColumns: string[];
    pagesize: number;
    backendMessages: import("../../src/lib/backend-response").BackendWarning[] | import("../../src/lib/backend-response").BackendError[];
    isLoading: {
        dataset: boolean;
        uniqueValues: boolean;
    };
    isRequestOnGoing: boolean;
    variables?: import("../../src/lib/templating").ScopeContext | undefined;
    interpolateFunc?: import("../../src/lib/templating").InterpolateFunction | undefined;
    translator: string;
    variableDelimiters?: import("../../src/lib/variables").VariableDelimiters | undefined;
};
export declare function setupMockStore(initialState?: object, plugins?: any[]): Store<RootState>;
declare type ComponentType = typeof BaseStepForm;
declare type TestCaseConfiguration = {
    testlabel?: string;
    store?: Store<RootState>;
    props?: {
        initialStepValue?: object;
        [prop: string]: any;
    };
    data?: object;
};
declare type ValidationErrorConfiguration = TestCaseConfiguration & {
    errors: ValidationError[];
};
declare type MountOptions = {
    propsData?: object;
    data?: object;
};
export declare class BasicStepFormTestRunner {
    componentType: ComponentType;
    stepname: string;
    vue: VueConstructor;
    constructor(componentType: ComponentType, stepname: string, vue?: VueConstructor);
    _mount(shallow: boolean, initialState?: object, optional?: MountOptions): import("@vue/test-utils").Wrapper<import("vue/types/vue").CombinedVueInstance<BaseStepForm, object, object, object, Record<never, any>>>;
    mount(initialState?: object, optional?: MountOptions): import("@vue/test-utils").Wrapper<import("vue/types/vue").CombinedVueInstance<BaseStepForm, object, object, object, Record<never, any>>>;
    shallowMount(initialState?: object, optional?: MountOptions): import("@vue/test-utils").Wrapper<import("vue/types/vue").CombinedVueInstance<BaseStepForm, object, object, object, Record<never, any>>>;
    testInstantiate(): void;
    testExpectedComponents(componentSpec: {
        [prop: string]: number;
    }, initialState?: object): void;
    checkValidationError(_testlabel: any, store: any, propsData: any, data: any, expectedErrors: any): Promise<void>;
    testValidationErrors(configurations: ValidationErrorConfiguration[]): void;
    testValidate(testConfiguration: TestCaseConfiguration, expectedEmit?: object): void;
    testCancel(initialState?: Partial<VQBState>): void;
    testResetSelectedIndex(initialState?: Partial<VQBState>): void;
}
export {};
