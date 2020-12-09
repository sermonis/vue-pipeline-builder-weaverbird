/**
 * Return the jsonschema associated with a given step. In simple cases,
 * it's a static object but in more complicated cases, the schema is computed
 * dynamically according to the form state (e.g. a schema might depend on actual
 * column names).
 *
 * @param stepname the transformation step name
 * @param form the VQB StepForm component the schema will be used in
 */
export default function schemaFactory(stepname: string, form: any): any;
