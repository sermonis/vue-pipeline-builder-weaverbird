/**
 * Pipeline builder module.
 *
 * This module define the mongo → standard pipeline steps implementation.
 */
import { MongoStep } from '@/lib/translators/mongo';
import { Pipeline } from './steps';
/**
 * extract the requested domain from the first step and return the rest of the
 * pipeline unchanged. This is useful in the GUI where the domain steps is
 * handled differently from the rest of the pipeline. It's also useful in
 * backends such as mongo where the first step corresponds to the collection
 * that has to be queried.
 *
 * @param pipeline the complete pipeline
 * @return an object with 2 keys: `domain` for the domain of the first step and
 * `pipeline` for the rest of the pipeline.
 */
export declare function filterOutDomain(pipeline: Pipeline): {
    domain: string;
    pipeline: import("./steps").PipelineStep[];
};
/**
 * Transform a list of mongo steps into a standard pipeline, as understood
 * by the Pipeline vue.
 *
 * @param mongoSteps the list of input mongo steps
 *
 * @returns the standard pipeline
 */
export declare function mongoToPipe(mongoSteps: MongoStep[]): Pipeline;
