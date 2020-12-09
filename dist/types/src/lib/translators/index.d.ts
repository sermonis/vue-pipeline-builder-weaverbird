/**
 * Translation toolchain utilities.
 *
 * The main exported function is `getTranslator` that takes a
 * backend name as input and returns the corresponding translator.
 *
 */
import { PipelineStepName } from '@/lib/steps';
import { BaseTranslator } from './base';
export declare function registerTranslator(backend: string, translatorClass: typeof BaseTranslator): void;
/** return a function translating an array of pipeline steps to expected backend
 * steps
 *
 * Example usage:
 * ```typescript
 * const translator = getTranslator('mongo36');
 * const result = translator(myPipeline);
 * ```
 */
export declare function getTranslator(backend: string): BaseTranslator;
/**
 * returns the list of backends supporting a given pipeline step.
 *
 * @param stepname the name of the step
 */
export declare function backendsSupporting(stepname: PipelineStepName): string[];
/**
 * returns and object mapping each available backend to its corresponding translator.
 */
export declare function availableTranslators(): {
    [x: string]: typeof BaseTranslator;
};
