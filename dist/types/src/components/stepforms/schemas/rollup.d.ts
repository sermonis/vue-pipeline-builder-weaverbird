declare const _default: {
    $schema: string;
    title: string;
    type: string;
    properties: {
        name: {
            type: string;
            const: string;
        };
        hierarchy: {
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
        aggregations: {
            type: string;
            items: {
                type: string;
                properties: {
                    column: {
                        type: string;
                        minLength: number;
                    };
                    aggfunction: {
                        type: string;
                        enum: string[];
                    };
                    newcolumn: {
                        type: string;
                        minLength: number;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            minItems: number;
            title: string;
            description: string;
        };
        groupby: {
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
        labelCol: {
            type: string;
            minLength: number;
            title: string;
            description: string;
            attrs: {
                placeholder: string;
            };
        };
        levelCol: {
            type: string;
            minLength: number;
            title: string;
            description: string;
            attrs: {
                placeholder: string;
            };
        };
        parentLabelCol: {
            type: string;
            minLength: number;
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
