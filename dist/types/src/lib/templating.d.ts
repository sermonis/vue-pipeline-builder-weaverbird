/**
 * This module handles template interpolation.
 */
import { ColumnTypeMapping } from '@/lib/dataset';
import { StepMatcher } from '@/lib/matcher';
import * as S from '@/lib/steps';
export declare type ScopeContext = {
    [varname: string]: any;
};
export declare type InterpolateFunction = (template: string, context: ScopeContext) => any;
/**
 * The `PipelineInterpolator` class provides a "step interpolator"
 * implementation for each possible step in a pipeline.
 *
 * A step interpolator is a function that takes a step in parameter and returns
 * the "interpolated" version of a step, given a specific interpolate function
 * (e.g. `_.template`).
 */
export declare class PipelineInterpolator implements StepMatcher<S.PipelineStep> {
    context: ScopeContext;
    /**
     * known column types: will be used to automatically cast interpolated values
     * if column type matches.
     */
    columnTypes: ColumnTypeMapping;
    interpolateFunc: InterpolateFunction;
    constructor(interpolateFunc: InterpolateFunction, context: ScopeContext, columnTypes?: ColumnTypeMapping);
    append(step: Readonly<S.AppendStep>): {
        name: "append";
        pipelines: S.Reference[];
    };
    aggregate(step: Readonly<S.AggregationStep>): {
        name: "aggregate";
        on: any[];
        aggregations: {
            column: any;
            newcolumn: string;
            aggfunction: "sum" | "avg" | "count" | "min" | "max" | "first" | "last";
        }[];
    };
    argmax(step: Readonly<S.ArgmaxStep>): {
        name: "argmax";
        column: string;
        groups?: string[] | undefined;
    };
    argmin(step: Readonly<S.ArgminStep>): {
        name: "argmin";
        column: string;
        groups?: string[] | undefined;
    };
    concatenate(step: Readonly<S.ConcatenateStep>): {
        name: "concatenate";
        columns: string[];
        separator: string;
        new_column_name: string;
    };
    convert(step: Readonly<S.ConvertStep>): {
        name: "convert";
        columns: string[];
        data_type: "boolean" | "integer" | "float" | "date" | "text";
    };
    cumsum(step: Readonly<S.CumSumStep>): {
        valueColumn: any;
        referenceColumn: any;
        groupby: any[];
        newColumn: any;
        name: "cumsum";
    };
    custom(step: Readonly<S.CustomStep>): {
        query: any;
        name: "custom";
    };
    dateextract(step: Readonly<S.DateExtractPropertyStep>): {
        column: any;
        name: "dateextract";
        operation: "year" | "month" | "day" | "hour" | "minutes" | "seconds" | "milliseconds" | "dayOfYear" | "dayOfWeek" | "week";
        new_column_name?: string | undefined;
    };
    domain(step: Readonly<S.DomainStep>): {
        name: "domain";
        domain: string;
    };
    duplicate(step: Readonly<S.DuplicateColumnStep>): {
        name: "duplicate";
        column: string;
        new_column_name: string;
    };
    delete(step: Readonly<S.DeleteStep>): {
        name: "delete";
        columns: string[];
    };
    evolution(step: Readonly<S.EvolutionStep>): {
        dateCol: any;
        valueCol: any;
        indexColumns: any[];
        newColumn: any;
        name: "evolution";
        evolutionType: "vsLastYear" | "vsLastMonth" | "vsLastWeek" | "vsLastDay";
        evolutionFormat: "abs" | "pct";
    };
    fillna(step: Readonly<S.FillnaStep>): {
        value: any;
        name: "fillna";
        column: string;
    };
    filter(step: Readonly<S.FilterStep>): {
        condition: S.FilterCondition;
        name: "filter";
    };
    formula(step: Readonly<S.FormulaStep>): {
        formula: any;
        name: "formula";
        new_column: string;
    };
    fromdate(step: Readonly<S.FromDateStep>): {
        name: "fromdate";
        column: string;
        format: string;
    };
    ifthenelse(step: Readonly<S.IfThenElseStep>): {
        if: S.FilterCondition;
        then: string;
        else: string | Pick<S.IfThenElseStep, "if" | "then" | "else">;
        name: "ifthenelse";
        newColumn: string;
    };
    join(step: Readonly<S.JoinStep>): {
        name: "join";
        right_pipeline: S.Reference;
        type: "left" | "inner" | "left outer";
        on: string[][];
    };
    lowercase(step: Readonly<S.ToLowerStep>): {
        name: "lowercase";
        column: string;
    };
    percentage(step: Readonly<S.PercentageStep>): {
        name: "percentage";
        column: string;
        group?: string[] | undefined;
        newColumnName?: string | undefined;
    };
    pivot(step: Readonly<S.PivotStep>): {
        name: "pivot";
        index: string[];
        column_to_pivot: string;
        value_column: string;
        agg_function: "sum" | "avg" | "count" | "min" | "max";
    };
    rename(step: Readonly<S.RenameStep>): {
        name: "rename";
        oldname: string;
        newname: string;
    };
    statistics(step: Readonly<S.StatisticsStep>): {
        name: "statistics";
        column: string;
        groupbyColumns: string[];
        statistics: S.Statistics[];
        quantiles: S.Quantile[];
    };
    replace(step: Readonly<S.ReplaceStep>): {
        to_replace: any[][];
        name: "replace";
        search_column: string;
    };
    rollup(step: Readonly<S.RollupStep>): S.RollupStep;
    select(step: Readonly<S.SelectStep>): {
        name: "select";
        columns: string[];
    };
    sort(step: Readonly<S.SortStep>): {
        name: "sort";
        columns: S.SortColumnType[];
    };
    split(step: Readonly<S.SplitStep>): {
        name: "split";
        column: string;
        delimiter: string;
        number_cols_to_keep: number;
    };
    substring(step: Readonly<S.SubstringStep>): {
        name: "substring";
        column: string;
        start_index: number;
        end_index: number;
        newColumnName?: string | undefined;
    };
    text(step: Readonly<S.AddTextColumnStep>): {
        text: any;
        name: "text";
        new_column: string;
    };
    todate(step: Readonly<S.ToDateStep>): {
        name: "todate";
        column: string;
        format?: string | undefined;
    };
    top(step: Readonly<S.TopStep>): {
        limit: number;
        name: "top";
        groups?: string[] | undefined;
        rank_on: string;
        sort: "asc" | "desc";
    };
    uniquegroups(step: Readonly<S.UniqueGroupsStep>): {
        name: "uniquegroups";
        on: any[];
    };
    unpivot(step: Readonly<S.UnpivotStep>): {
        name: "unpivot";
        keep: string[];
        unpivot: string[];
        unpivot_column_name: string;
        value_column_name: string;
        dropna: boolean;
    };
    uppercase(step: Readonly<S.ToUpperStep>): {
        name: "uppercase";
        column: string;
    };
    interpolate(pipeline: S.Pipeline): S.Pipeline;
    interpolateStep(step: S.PipelineStep): S.PipelineStep;
}
