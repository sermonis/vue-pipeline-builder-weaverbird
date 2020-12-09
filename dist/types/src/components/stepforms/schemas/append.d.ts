declare const _default: {
    $schema: string;
    title: string;
    type: string;
    properties: {
        name: {
            type: string;
            enum: string[];
        };
        pipelines: {
            type: string;
            items: {
                type: string;
                minLength: number;
            };
            minItems: number;
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
