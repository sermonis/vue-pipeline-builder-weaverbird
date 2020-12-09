declare const _default: {
    $schema: string;
    title: string;
    type: string;
    properties: {
        name: {
            type: string;
            enum: string[];
        };
        right_pipeline: {
            type: string;
            minLength: number;
            title: string;
            description: string;
            attrs: {
                placeholder: string;
            };
        };
        type: {
            type: string;
            enum: string[];
            title: string;
            description: string;
            attrs: {
                placeholder: string;
            };
        };
        on: {
            type: string;
            minItems: number;
            items: {
                type: string;
                minItems: number;
                maxItems: number;
                items: {
                    type: string;
                    minLength: number;
                };
            };
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
