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
        format: {
            type: string;
            minLength: number;
            title: string;
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export default _default;
