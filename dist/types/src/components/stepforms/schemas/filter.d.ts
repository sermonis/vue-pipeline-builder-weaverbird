declare const _default: {
    $schema: string;
    title: string;
    type: string;
    properties: {
        name: {
            type: string;
            enum: string[];
        };
        condition: {
            if: {
                required: string[];
            };
            then: {
                $ref: string;
            };
            else: {
                if: {
                    required: string[];
                };
                then: {
                    $ref: string;
                };
                else: {
                    if: {
                        required: string[];
                    };
                    then: {
                        $ref: string;
                    };
                };
            };
        };
    };
    definitions: {
        andCondition: {
            properties: {
                and: {
                    type: string;
                    minItems: number;
                    title: string;
                    items: {
                        if: {
                            required: string[];
                        };
                        then: {
                            $ref: string;
                        };
                        else: {
                            if: {
                                required: string[];
                            };
                            then: {
                                $ref: string;
                            };
                            else: {
                                if: {
                                    required: string[];
                                };
                                then: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                };
            };
            required: string[];
            additionalProperties: boolean;
        };
        orCondition: {
            properties: {
                or: {
                    type: string;
                    minItems: number;
                    title: string;
                    items: {
                        if: {
                            required: string[];
                        };
                        then: {
                            $ref: string;
                        };
                        else: {
                            if: {
                                required: string[];
                            };
                            then: {
                                $ref: string;
                            };
                            else: {
                                if: {
                                    required: string[];
                                };
                                then: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                };
            };
            required: string[];
            additionalProperties: boolean;
        };
        simpleCondition: {
            type: string;
            properties: {
                column: {
                    type: string;
                    minLength: number;
                    title: string;
                    description: string;
                    attrs: {
                        placeholder: string;
                    };
                };
                value: {
                    type: string[];
                    title: string;
                    description: string;
                    attrs: {
                        placeholder: string;
                    };
                };
                operator: {
                    type: string;
                    enum: string[];
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
    };
    required: string[];
    additionalProperties: boolean;
};
export default _default;
