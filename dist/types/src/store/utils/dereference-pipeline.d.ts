import { Pipeline, Reference } from '@/lib/steps';
export declare type PipelinesScopeContext = {
    [pipelineName: string]: Pipeline;
};
/**
 * Dereference pipelines names in the current pipeline being edited, i.e.
 * replaces references to pipelines or domains (by their names) to their corresponding
 * pipelines
 *
 * @param pipeline the pipeline to translate and execute on the backend
 * @param pipelines the pipelines stored in the Vuex store of the app, as an
 * object with the pipeline name as key and the correspondinng pipeline as value
 *
 * @return the dereferenced pipeline
 */
export declare function dereferencePipelines(pipeline: Pipeline, pipelines: PipelinesScopeContext): Pipeline;
/**
 * Gets the names of all the pipelines referencing the given one.
 *
 * @param      {String}                 reference  The given pipeline or pipeline name
 * @param      {PipelinesScopeContext}  pipelines  All the known pipelines
 */
export declare function getPipelineNamesReferencing(reference: string, pipelines: PipelinesScopeContext): string[];
/**
 * Gets the names of all the pipelines referenced by the given one.
 *
 * @param      {Reference}              reference  The given pipeline or pipeline name
 * @param      {PipelinesScopeContext}  pipelines  All the known pipelines
 */
export declare function getPipelineNamesReferencedBy(reference: Reference, pipelines: PipelinesScopeContext): Array<string>;
