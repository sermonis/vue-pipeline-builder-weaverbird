/**
 * helper functions to manipulate datasets
 */
import { DataSet } from '@/lib/dataset';
export declare function isDatasetComplete(dataset: DataSet): boolean;
export declare function iterateRecords(dataset: DataSet): Generator<Record<string, any>, void, unknown>;
export declare type ColumnValueStat = {
    value: any;
    count: number;
};
/**
 * Inspect a dataset and generate a new one with unique values statistics.
 *
 * @param {DataSet} dataset the dataset to update
 *
 * @return the _new_ dataset. The original one is left untouched.
 */
export declare function addLocalUniquesToDataset(dataset: DataSet): {
    headers: {
        uniques: {
            values: ColumnValueStat[];
            loaded: boolean;
        };
        name: string;
        type?: "string" | "boolean" | "object" | "integer" | "float" | "date" | undefined;
    }[];
    data: any[][];
    paginationContext?: import("./pagination").PaginationContext | undefined;
};
/**
 * uniqueStatsDataset is a Dataset with two columns:
 *   - the inspected column
 *   - the `__vqb_count__` column
 *
 * Example:
 * uniqueStatsDataset = {
 *   headers: [{name: 'City'}, {name: '__vqb_count__'}]
 *   data: [
 *     ['Paris', 10],
 *     ['Lyon', 1]
 *     ['Marseille', 2]
 *   ]
 * }
 * The output will be:
 * ['City', {
 *   Paris:  {value: 'Paris', count: 10},
 *   Lyon:  {value: 'Lyon', count: 1},
 *   Marseille:  {value: 'Marseille', count: 2},
 * }]
 */
export declare function _prepareColumnStats(uniqueStatsDataset: DataSet): [string, ColumnValueStat[]];
/**
 * Merge a dataset's local value statistics with actual backend statistics.
 *
 * For a given column in the input dataset, if new statistics are found in the
 * incoming statistics, override the local ones.
 *
 * @param {DataSet} dataset the dataset to update
 * @param {object} uniqueStats a mapping columnname → dataset that
 * supposedly come from a backend.
 *
 * @return the _new_ dataset. The original one is left untouched.
 */
export declare function updateLocalUniquesFromDatabase(dataset: DataSet, uniqueStatsDataset: DataSet): {
    headers: import(".").DataSetColumn[];
    data: any[][];
    paginationContext?: import("./pagination").PaginationContext | undefined;
};
