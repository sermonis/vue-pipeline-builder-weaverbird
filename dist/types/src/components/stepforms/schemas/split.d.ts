declare const _default: {
    $schema: string;
    title: string;
    type: string;
    properties: {
        name: {
            type: string;
            enum: string[];
        };
        column: {
            type: string;
            minLength: number;
            title: string;
            description: string;
            attrs: {
                placeholder: string;
            };
        };
        delimiter: {
            type: string;
            title: string;
            description: string;
            attrs: {
                placeholder: string;
            };
            minLength: number;
        };
        number_cols_to_keep: {
            type: string;
            title: string;
            description: string;
            attrs: {
                placeholder: string;
            };
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export default _default;
