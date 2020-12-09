declare const _default: {
    $schema: string;
    title: string;
    type: string;
    properties: {
        name: {
            type: string;
            enum: string[];
        };
        rank_on: {
            type: string;
            minLength: number;
            title: string;
            description: string;
            attrs: {
                placeholder: string;
            };
        };
        sort: {
            type: string;
            title: string;
            description: string;
            attrs: {
                placeholder: string;
            };
            enum: string[];
        };
        limit: {
            type: string;
            title: string;
            description: string;
            attrs: {
                placeholder: string;
            };
        };
        groups: {
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
    };
    required: string[];
    additionalProperties: boolean;
};
export default _default;
