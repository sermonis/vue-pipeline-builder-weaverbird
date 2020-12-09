declare const _default: {
    $schema: string;
    title: string;
    type: string;
    properties: {
        name: {
            type: string;
            enum: string[];
        };
        index: {
            type: string;
            minItems: number;
            items: {
                type: string;
                minLength: number;
            };
            title: string;
            description: string;
            attrs: {
                placeholder: string;
            };
        };
        column_to_pivot: {
            type: string;
            minLength: number;
            title: string;
            description: string;
            attrs: {
                placeholder: string;
            };
        };
        value_column: {
            type: string;
            minLength: number;
            title: string;
            description: string;
            attrs: {
                placeholder: string;
            };
        };
        agg_function: {
            type: string;
            enum: string[];
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export default _default;
