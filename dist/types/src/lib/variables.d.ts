interface AvailableVariable {
    identifier: string;
    value: any;
    category?: string;
    label: string;
}
export declare type VariablesBucket = AvailableVariable[];
export interface VariablesCategory {
    label: string | undefined;
    variables: AvailableVariable[];
}
export interface VariableDelimiters {
    start: string;
    end: string;
}
export {};
