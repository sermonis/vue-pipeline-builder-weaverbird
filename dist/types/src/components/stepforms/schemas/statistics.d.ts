declare const _default: {
    $schema: string;
    title: string;
    type: string;
    properties: {
        name: {
            type: string;
            const: string;
        };
        column: {
            type: string;
            minLength: number;
        };
        groupbyColumns: {
            type: string;
            items: {
                type: string;
                minLength: number;
            };
        };
        statistics: {
            type: string;
            items: {
                type: string;
                enum: string[];
            };
        };
        quantiles: {
            type: string;
            items: {
                type: string;
                required: string[];
                properties: {
                    label: {
                        type: string;
                    };
                    nth: {
                        type: string;
                    };
                    order: {
                        type: string;
                    };
                };
            };
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export default _default;
