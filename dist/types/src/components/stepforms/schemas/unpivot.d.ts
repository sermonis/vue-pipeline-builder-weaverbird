declare const _default: {
    $schema: string;
    title: string;
    type: string;
    properties: {
        name: {
            type: string;
            enum: string[];
        };
        keep: {
            type: string;
            items: {
                type: string;
                minlength: number;
            };
            minItems: number;
            title: string;
            description: string;
            attrs: {
                placeholder: string;
            };
        };
        unpivot: {
            type: string;
            items: {
                type: string;
                minlength: number;
            };
            minItems: number;
            title: string;
            description: string;
            attrs: {
                placeholder: string;
            };
        };
        unpivot_column_name: {
            type: string;
            minLength: number;
            title: string;
            description: string;
            attrs: {
                placeholder: string;
            };
        };
        value_column_name: {
            type: string;
            minLength: number;
            title: string;
            description: string;
            attrs: {
                placeholder: string;
            };
        };
        dropna: {
            type: string;
            default: boolean;
            title: string;
            description: string;
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export default _default;
