/**
 * base helpers to create a database backend service.
 *
 * Expose the expected interface of a `BackendService` plugin
 * and provide a simple factory to create a `backend service` plugin.
 *
 * This plugin will hook up on store mutations to call corresponding operations
 * on an actual database.
 */
import { Store } from 'vuex';
import { BackendResponse } from '@/lib/backend-response';
import { DataSet } from '@/lib/dataset';
import { Pipeline } from '@/lib/steps';
export interface BackendService {
    /**
     * @param store the Vuex store hosting the application
     *
     * @return a promise that holds the list of available collections
     */
    listCollections(store: Store<any>): BackendResponse<string[]>;
    /**
     * @param store the Vuex store hosting the application
     * @param pipeline the pipeline to translate and execute on the backend
     * @param limit if specified, a limit to be applied on the results. How is limit
     * is applied is up to the concrete implementor (either in the toolchain, the query
     * or afterwareds on the resultset)
     * @param offset if specified, an offset to apply to resultset
     *
     * @return a promise that holds the result of the pipeline execution,
     * formatted as as `DataSet`
     */
    executePipeline(store: Store<any>, pipeline: Pipeline, limit: number, offset: number): BackendResponse<DataSet>;
}
/**
 * `BackendServiceInternal` is a copy of `BackendService` but without the `store` param.
 * We will use the service in actions of "vqb" vuex module.
 * Consequently we won't be able to pass to the service the hosting store.
 * We are then force to build an "internal version" of this service with the hosting store wrapped inside.
 */
interface BackendServiceInternal {
    listCollections(): BackendResponse<string[]>;
    executePipeline(pipeline: Pipeline, limit: number, offset: number): BackendResponse<DataSet>;
}
export declare let backendService: BackendServiceInternal;
/**
 * instantiates a plugin that hooks store mutations to corresponding
 * backend operations.
 *
 * @param service the actual database backend service instance
 * @return a plugin function usable in the `plugins` field of the store.
 */
export declare function servicePluginFactory(service: BackendService): (store: Store<any>) => void;
export {};
