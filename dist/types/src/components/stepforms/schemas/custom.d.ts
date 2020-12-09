declare const _default: {
    $schema: string;
    title: string;
    type: string;
    properties: {
        name: {
            type: string;
            enum: string[];
        };
        query: {
            type: string;
            minLength: number;
            title: string;
            description: string;
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export default _default;
