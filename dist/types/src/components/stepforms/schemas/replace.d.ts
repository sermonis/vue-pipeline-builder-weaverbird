declare const _default: {
    $schema: string;
    title: string;
    type: string;
    properties: {
        name: {
            type: string;
            enum: string[];
        };
        search_column: {
            type: string;
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
        to_replace: {
            type: string;
            items: {
                type: string;
                items: {
                    type: string[];
                    minItems: number;
                    maxItems: number;
                };
                minItems: number;
            };
            minItems: number;
            title: string;
            description: string;
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export default _default;
