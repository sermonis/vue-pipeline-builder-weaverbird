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
            title: string;
            description: string;
            attrs: {
                placeholder: string;
            };
            items: {
                type: string;
                title: string;
                description: string;
                properties: {
                    column: {
                        type: string;
                        minLength: number;
                    };
                    order: {
                        type: string;
                        enum: string[];
                    };
                };
            };
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export default _default;
