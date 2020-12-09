import { ColumnTypeMapping } from '@/lib/dataset';
import { FilterComboAnd, FilterComboOr, FilterCondition } from '@/lib/steps';
import { AbstractFilterTree } from '../ConditionsEditor/tree-types';
/**
isFilterCombo return true for:
{ or: [
  { column: 'tata', value: 'B', operator: 'ne' }
  { column: 'titi', value: '2', operator: 'le' }
]} --> FilterComboOr
or
{ and: [
  { column: 'tata', value: 'B', operator: 'ne' }
  { column: 'titi', value: '2', operator: 'le' }
]} --> FilterComboAnd
*/
export declare function isFilterCombo(groupOrCondition: FilterCondition | undefined): groupOrCondition is FilterComboAnd | FilterComboOr;
/**
buildConditionsEditorTree transform this:
{
    name: 'filter',
    condition: {
        and: [
            { column: 'toto', value: 'A', operator: 'eq' },
            { or: [
                { column: 'tata', value: 'B', operator: 'ne' }
        { column: 'titi', value: '2', operator: 'le' }
            ]}
        ]
}

into:
{
    operator: 'and',
    conditions: [{ column: 'toto', value: 'A', operator: 'eq' }],
    groups: [
        operator: 'or',
        conditions: [
      { column: 'tata', value: 'B', operator: 'ne' },
      { column: 'titi', value: '2', operator: 'le' }
    ],
    groups: [],
    ]
}
*/
export declare function buildConditionsEditorTree(groupOrCondition: FilterCondition): {
    operator: "and" | "or";
    conditions: object[];
    groups: object[];
} | {
    operator: string;
    conditions: import("../../lib/steps").FilterSimpleCondition[];
    groups: never[];
};
/**
buildConditionsEditorTree transform this:
{
    operator: 'and',
    conditions: [{ column: 'toto', value: 'A', operator: 'eq' }],
    groups: [
        operator: 'or',
        conditions: [
      { column: 'tata', value: 'B', operator: 'ne' },
      { column: 'titi', value: '2', operator: 'le' }
    ],
    groups: [],
    ]
}
into:
{
  and: [
    { column: 'toto', value: 'A', operator: 'eq' },
    { or: [
      { column: 'tata', value: 'B', operator: 'ne' }
      { column: 'titi', value: '2', operator: 'le' }
    ]}
  ]
}
*/
export declare function buildFilterStepTree(conditionGroup: AbstractFilterTree): any;
/**
castFilterStepTreeValue transform:
{
  and: [
    { column: 'toto', value: '1', operator: 'eq' },
    { column: 'tata', value: 'true', operator: 'eq' },
    { or: [
      { column: 'titi', value: 'B', operator: 'ne' }
      { column: 'tutu', value: '2.1', operator: 'le' }
    ]}
  ]
}
with: columnTypes = {
  toto: integer,
  tutu: float,
  tata: boolean,
}
into:
{
    name: 'filter',
    condition: {
        and: [
            { column: 'toto', value: 1, operator: 'eq' },
      { column: 'tata', value: true, operator: 'eq' },
            { or: [
                { column: 'titi', value: 'B', operator: 'ne' }
        { column: 'tutu', value: 2.1, operator: 'le' }
            ]}
        ]
}
*/
export declare function castFilterStepTreeValue(filterStepTree: FilterCondition, columnTypes: ColumnTypeMapping): FilterCondition;
