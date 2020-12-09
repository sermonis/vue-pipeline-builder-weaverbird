/**
 * mongo specific helpers for dataset manipulation.
 */
import { DataSet, DataSetColumnType } from '@/lib/dataset';
declare type MongoDocument = {
    [k: string]: any;
};
export declare type MongoResults = MongoDocument[];
/**
 * transform a mongo resultset (i.e. a list of json documents) into
 * a `DataSet` structure
 */
export declare function mongoResultsToDataset(results: MongoResults): DataSet;
export declare function _guessType(val: any, prevType?: any): DataSetColumnType | null;
/**
 * @descritpion extend a `DataSet` headers with inferred types, base on value of columns
 * @param {DataSet} dataset - The dataset that we want to extend headers with inferred types
 * @param {number} [maxRows=50] - Determine on how many rows we're goind to do our guess
 *
 */
export declare function inferTypeFromDataset(dataset: DataSet, maxRows?: number): DataSet;
export {};
