export declare type GenericFilterTree<ConditionType extends AbstractCondition> = {
    conditions: ConditionType[];
    groups: GenericFilterTree<ConditionType>[];
    operator: ConditionOperator;
};
export declare type ConditionOperator = 'and' | 'or' | '';
export declare type AbstractCondition = any;
export declare type AbstractFilterTree = GenericFilterTree<AbstractCondition>;
