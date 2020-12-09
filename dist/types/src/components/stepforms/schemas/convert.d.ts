declare const _default: {
    $schema: string;
    title: string;
    type: string;
    properties: {
        name: {
            type: string;
            enum: string[];
        };
        columns: {
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
        data_type: {
            type: string;
            enum: string[];
            title: string;
            description: string;
            placeholder: string;
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export default _default;
