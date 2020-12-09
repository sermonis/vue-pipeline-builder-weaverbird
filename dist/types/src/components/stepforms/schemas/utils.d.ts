import { Ajv } from 'ajv';
declare type JsonPropSchema = {
    [prop: string]: any;
};
declare type JsonSchema = {
    properties: {
        [prop: string]: JsonPropSchema;
    };
};
export declare type StepFormType = {
    columnNames: string[];
};
/**
 * extend standard JsonSchema with custom keywords (e.g. `columnNameAlreadyUsed`)
 *
 * @param ajv the schema validator instance
 */
export declare function addAjvKeywords(ajv: Ajv): void;
/**
 * Extend a step's jsonschema with a "check this column is not already used" constraint.
 *
 * @param model the original jsonschema
 * @param fieldname the field path inside the schema the constraint should be put on
 * @param colnames the list of existing column names to check on
 */
export declare function addNotInColumnNamesConstraint(model: JsonSchema, fieldname: string, colnames: string[]): JsonSchema;
export {};
