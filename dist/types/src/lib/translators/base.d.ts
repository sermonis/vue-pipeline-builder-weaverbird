/**
 * This module defines the base machinery for translators.
 *
 * It exposes the `BaseTranslator` class that should be used by all concrete
 * translator classes.
 *
 * A translator provides a transformation for each available pipeline steps. It
 * has to be named exactly as the pipeline step name it ought to transform. A
 * transformation method must return something that matches the
 * `lib/matchers/OutputStep` type or an array of this type.
 *
 */
import { OutputStep, StepMatcher } from '@/lib/matcher';
import * as S from '@/lib/steps';
export interface ValidationError {
    dataPath: string;
    keyword: string;
    message?: string;
}
/**
 * Custom exception raised when a transform method is called on a step
 * that is not supported by the translator.
 */
export declare class StepNotSupported extends Error {
    constructor(stepname: S.PipelineStepName);
}
/**
 * The `BaseTranslator` is the base class for all translators. It provides:
 *
 * - a default implementation for all pipeline steps that raises a
 *   `StepNotSupported` error.
 *
 * - a `translate` entry point method that takes an array of `PipelineStep`
 *   instances and return an array of objects matching the
 *   `lib/matchers/OutputStep` type.
 *
 * - two properties `supportedSteps` and `unsupportedSteps` that respectively
 *   return the list of supported and unsupported steps by the translator
 *   class. These lists are computed automatically by introspecting the
 *   instance and testing, for each transformation step, if the corresponding
 *   method holds a `__vqb_step_supported__` property. If this value is found
 *   and set to `false`, then the step is considered as not supported.
 *
 * - a `supports` method that tests the support of a given step name.
 */
export declare class BaseTranslator implements StepMatcher<OutputStep> {
    /**
     * `label` will be displayed to the user
     */
    static label: string;
    /**
     * `supportedSteps` returns the list of steps supported by this translator class.
     */
    get supportedSteps(): S.PipelineStepName[];
    /**
     * `unsupportedSteps` returns the list of steps _not_ supported by this translator class.
     */
    get unsupportedSteps(): S.PipelineStepName[];
    /**
     * `supports` returns a boolean indicating if the given step is supported or not.
     *
     * @param stepname the name of the step to test
     */
    supports(stepname: S.PipelineStepName): boolean;
    aggregate(step: Readonly<S.AggregationStep>): void;
    append(step: Readonly<S.AppendStep>): void;
    argmax(step: Readonly<S.ArgmaxStep>): void;
    argmin(step: Readonly<S.ArgminStep>): void;
    concatenate(step: Readonly<S.ConcatenateStep>): void;
    convert(step: Readonly<S.ConvertStep>): void;
    cumsum(step: Readonly<S.CumSumStep>): void;
    custom(step: Readonly<S.CustomStep>): void;
    dateextract(step: Readonly<S.DateExtractPropertyStep>): void;
    domain(step: Readonly<S.DomainStep>): void;
    duplicate(step: Readonly<S.DuplicateColumnStep>): void;
    delete(step: Readonly<S.DeleteStep>): void;
    evolution(step: Readonly<S.EvolutionStep>): void;
    fillna(step: Readonly<S.FillnaStep>): void;
    filter(step: Readonly<S.FilterStep>): void;
    formula(step: Readonly<S.FormulaStep>): void;
    join(step: Readonly<S.JoinStep>): void;
    ifthenelse(step: Readonly<S.IfThenElseStep>): void;
    fromdate(step: Readonly<S.FromDateStep>): void;
    lowercase(step: Readonly<S.ToLowerStep>): void;
    percentage(step: Readonly<S.PercentageStep>): void;
    pivot(step: Readonly<S.PivotStep>): void;
    rename(step: Readonly<S.RenameStep>): void;
    replace(step: Readonly<S.ReplaceStep>): void;
    rollup(step: Readonly<S.RollupStep>): void;
    select(step: Readonly<S.SelectStep>): void;
    sort(step: Readonly<S.SortStep>): void;
    split(step: Readonly<S.SplitStep>): void;
    statistics(step: Readonly<S.StatisticsStep>): void;
    substring(step: Readonly<S.SubstringStep>): void;
    text(step: Readonly<S.AddTextColumnStep>): void;
    todate(step: Readonly<S.ToDateStep>): void;
    top(step: Readonly<S.TopStep>): void;
    uniquegroups(step: Readonly<S.UniqueGroupsStep>): void;
    unpivot(step: Readonly<S.UnpivotStep>): void;
    uppercase(step: Readonly<S.ToUpperStep>): void;
    /**
     * translates an input pipeline into a list of steps that makes sense for the
     * targeted backend.
     *
     * @param pipeline the array of input steps.
     * @returns the list of translated output steps.
     */
    translate(pipeline: S.PipelineStep[]): OutputStep[];
    /**
     * validate the query written in a custom step
     * return null if no error
     */
    validate(_customEditedStep: S.CustomStep): ValidationError[] | null;
}
/**
 * list of all available step names
 */
export declare const ALL_STEP_NAMES: ("text" | "aggregate" | "append" | "argmax" | "argmin" | "concatenate" | "convert" | "cumsum" | "custom" | "dateextract" | "delete" | "statistics" | "domain" | "duplicate" | "evolution" | "fillna" | "filter" | "formula" | "fromdate" | "ifthenelse" | "join" | "percentage" | "pivot" | "rename" | "replace" | "rollup" | "select" | "sort" | "split" | "substring" | "todate" | "lowercase" | "top" | "uppercase" | "uniquegroups" | "unpivot")[];
