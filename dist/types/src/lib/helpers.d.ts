import { DataSetColumnType } from './dataset';
declare type ValueType = number | boolean | string | null;
/**
 * Determines if a value canto be be cast to number
 *
 * @param value the value to be tested
 * @returns a boolean to determine if the value can be connverted to a number
 */
export declare function castFromString(value: string, type: DataSetColumnType): string | number | boolean;
/**
 * Takes a proposed new column name and returns a valid name that does not erase
 * an existing column name. So if the proposed new name already exists in
 * existing columns names, it appends an integer that increments until the new
 * name becomes unique.
 *
 * @param newName the proposed new column name
 * @param existingNames the existing columns names
 */
export declare function generateNewColumnName(newName: string, existingNames: string[]): string;
/**
 * small helper / shortcut for `$${mycol}` in mongo translations
 *
 * @param colname the column name
 */
export declare function $$(colname: string): string;
/**
 * enumerate(iterable[, start]) -> iterator for index, value of iterable
 *
 * enumerate yields pairs containing a count (from `start`, which defaults to
 * zero) and a value yielded by the iterable argument.
 *
 * @param values
 */
export declare function enumerate<T>(values: Iterable<T>, start?: number): Generator<[number, T]>;
/**
 * Return default value if selected value has different typeof
 *
 * @param value the selected value
 * @param defaultValue the default to compare
 */
export declare function keepCurrentValueIfCompatibleType(value: ValueType | ValueType[], defaultValue: ValueType): ValueType;
/**
 * Return default value if selected value is not an array
 *
 * @param value the selected value
 * @param defaultValue the default to compare
 */
export declare function keepCurrentValueIfArrayType(value: ValueType | ValueType[], defaultValue: ValueType[]): ValueType[];
export {};
