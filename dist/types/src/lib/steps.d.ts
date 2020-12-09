/**
 * This module defines the supported unit-of-transformation steps.
 */
declare type PrimitiveType = number | boolean | string | Date;
declare type Templatable<T> = T | string;
export declare type Reference = Pipeline | string;
export declare type AddTextColumnStep = {
    name: 'text';
    text: string;
    new_column: string;
};
export declare type AggFunctionStep = {
    /** Name of the output column */
    newcolumn: string;
    /** the aggregation operation (e.g. `sum` or `count`) */
    aggfunction: 'sum' | 'avg' | 'count' | 'min' | 'max' | 'first' | 'last';
    /** the column the aggregation function is working on */
    column: string;
};
export declare type AggregationStep = {
    name: 'aggregate';
    /** the list columns we want to aggregate on */
    on: string[];
    /** the list of aggregation operations to perform */
    aggregations: AggFunctionStep[];
};
export declare type AppendStep = {
    name: 'append';
    pipelines: Reference[];
};
export declare type ArgmaxStep = {
    name: 'argmax';
    column: string;
    groups?: string[];
};
export declare type ArgminStep = {
    name: 'argmin';
    column: string;
    groups?: string[];
};
export declare type ConcatenateStep = {
    name: 'concatenate';
    columns: string[];
    separator: string;
    new_column_name: string;
};
export declare type ConvertStep = {
    name: 'convert';
    columns: string[];
    data_type: 'boolean' | 'date' | 'float' | 'integer' | 'text';
};
export declare type CumSumStep = {
    name: 'cumsum';
    valueColumn: string;
    referenceColumn: string;
    groupby?: string[];
    newColumn?: string;
};
export declare type CustomStep = {
    name: 'custom';
    query: string;
};
export declare type DateExtractPropertyStep = {
    name: 'dateextract';
    operation: 'year' | 'month' | 'day' | 'hour' | 'minutes' | 'seconds' | 'milliseconds' | 'dayOfYear' | 'dayOfWeek' | 'week';
    column: string;
    new_column_name?: string;
};
export declare type DeleteStep = {
    name: 'delete';
    columns: string[];
};
export declare type Statistics = 'count' | 'max' | 'min' | 'average' | 'variance' | 'standard deviation';
export declare type Quantile = {
    label?: string;
    nth: any;
    order: any;
};
export declare type StatisticsStep = {
    name: 'statistics';
    column: string;
    groupbyColumns: string[];
    statistics: Statistics[];
    /**
     * array of quantiles
     * Examples:
     * median is 1rst quantile of order 2
     * last decile is 9th quantile of order 10
     */
    quantiles: Quantile[];
};
export declare type DomainStep = {
    name: 'domain';
    domain: string;
};
export declare type DuplicateColumnStep = {
    name: 'duplicate';
    column: string;
    new_column_name: string;
};
export declare type EvolutionStep = {
    name: 'evolution';
    dateCol: string;
    valueCol: string;
    evolutionType: 'vsLastYear' | 'vsLastMonth' | 'vsLastWeek' | 'vsLastDay';
    evolutionFormat: 'abs' | 'pct';
    indexColumns: string[];
    newColumn?: string;
};
export declare type FillnaStep = {
    name: 'fillna';
    column: string;
    value: PrimitiveType;
};
export declare type FilterCondition = FilterSimpleCondition | FilterComboAnd | FilterComboOr;
export declare type FilterComboAnd = {
    and: FilterCondition[];
};
export declare type FilterComboOr = {
    or: FilterCondition[];
};
export declare type FilterSimpleCondition = FilterConditionComparison | FilterConditionEquality | FilterConditionInclusion;
declare type FilterConditionComparison = {
    column: string;
    value: number | string;
    operator: 'gt' | 'ge' | 'lt' | 'le';
};
declare type FilterConditionEquality = {
    column: string;
    value: any;
    operator: 'eq' | 'ne' | 'isnull' | 'notnull' | 'matches' | 'notmatches';
};
export declare type FilterConditionInclusion = {
    column: string;
    value: any[];
    operator: 'in' | 'nin';
};
export declare type FilterStep = {
    name: 'filter';
    condition: FilterCondition;
};
export declare type FormulaStep = {
    name: 'formula';
    new_column: string;
    formula: string;
};
export declare type FromDateStep = {
    name: 'fromdate';
    column: string;
    format: string;
};
export declare type IfThenElseStep = {
    name: 'ifthenelse';
    newColumn: string;
    if: FilterCondition;
    then: string;
    else: string | Omit<IfThenElseStep, 'name' | 'newColumn'>;
};
export declare type JoinStep = {
    name: 'join';
    right_pipeline: Reference;
    type: 'left' | 'inner' | 'left outer';
    on: string[][];
};
export declare type PercentageStep = {
    name: 'percentage';
    column: string;
    group?: string[];
    newColumnName?: string;
};
export declare type PivotStep = {
    name: 'pivot';
    index: string[];
    column_to_pivot: string;
    value_column: string;
    agg_function: 'sum' | 'avg' | 'count' | 'min' | 'max';
};
export declare type RenameStep = {
    name: 'rename';
    oldname: string;
    newname: string;
};
export declare type ReplaceStep = {
    name: 'replace';
    search_column: string;
    to_replace: any[][];
};
export declare type RollupStep = {
    name: 'rollup';
    /** the list of hierarchical columns from lowest to highest level */
    hierarchy: string[];
    /** the list of columnns to aggregate, with related aggregation function to use */
    aggregations: AggFunctionStep[];
    /** Groupby columns if rollup has to be performed by groups */
    groupby?: string[];
    /** To give a custom name to the output label column */
    labelCol?: string;
    /** To give a custom name to the output level column */
    levelCol?: string;
    /** To give a custom name to the output parent column */
    parentLabelCol?: string;
};
export declare type SelectStep = {
    name: 'select';
    columns: string[];
};
export declare type SortColumnType = {
    column: string;
    order: 'asc' | 'desc';
};
export declare type SortStep = {
    name: 'sort';
    columns: SortColumnType[];
};
export declare type SplitStep = {
    name: 'split';
    column: string;
    delimiter: string;
    number_cols_to_keep: number;
};
export declare type SubstringStep = {
    name: 'substring';
    column: string;
    start_index: number;
    end_index: number;
    newColumnName?: string;
};
export declare type ToDateStep = {
    name: 'todate';
    column: string;
    format?: string;
};
export declare type ToLowerStep = {
    name: 'lowercase';
    column: string;
};
export declare type TopStep = {
    name: 'top';
    groups?: string[];
    rank_on: string;
    sort: 'asc' | 'desc';
    limit: Templatable<number>;
};
export declare type ToUpperStep = {
    name: 'uppercase';
    column: string;
};
export declare type UniqueGroupsStep = {
    name: 'uniquegroups';
    on: string[];
};
export declare type UnpivotStep = {
    name: 'unpivot';
    keep: string[];
    unpivot: string[];
    unpivot_column_name: string;
    value_column_name: string;
    dropna: boolean;
};
export declare type PipelineStep = AddTextColumnStep | AggregationStep | AppendStep | ArgmaxStep | ArgminStep | ConcatenateStep | ConvertStep | CumSumStep | CustomStep | DateExtractPropertyStep | DeleteStep | DuplicateColumnStep | DomainStep | EvolutionStep | FillnaStep | FilterStep | FormulaStep | FromDateStep | IfThenElseStep | JoinStep | PercentageStep | PivotStep | RenameStep | ReplaceStep | RollupStep | SelectStep | SplitStep | SortStep | StatisticsStep | SubstringStep | ToDateStep | ToLowerStep | TopStep | ToUpperStep | UniqueGroupsStep | UnpivotStep;
export declare type PipelineStepName = PipelineStep['name'];
export declare type Pipeline = PipelineStep[];
/**
 * Type guard for `FilterComboAnd` type
 * @param cond the condition to test
 */
export declare function isFilterComboAnd(cond: FilterCondition): cond is FilterComboAnd;
/**
 * Type guard for `FilterComboOr` type
 * @param cond the condition to test
 */
export declare function isFilterComboOr(cond: FilterCondition): cond is FilterComboOr;
export {};
