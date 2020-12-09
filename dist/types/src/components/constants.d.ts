import { PipelineStepName } from '@/lib/steps';
export declare type ButtonDef = Readonly<{
    icon: string;
    label: string;
    category: string;
    enable: boolean;
}>;
export declare type ActionCategories = {
    add: ActionCategory[];
    compute: ActionCategory[];
    filter: ActionCategory[];
    text: ActionCategory[];
    date: ActionCategory[];
    reshape: ActionCategory[];
    combine: ActionCategory[];
    [key: string]: ActionCategory[];
};
export declare type ActionCategory = {
    name: PipelineStepName;
    label: string;
    defaults?: {
        [prop: string]: any;
    };
};
export declare type groupActions = {
    type: string;
    actions: ActionCategory[];
};
export declare const ACTION_CATEGORIES: ActionCategories;
export declare const SEARCH_ACTION: groupActions[];
export declare const CATEGORY_BUTTONS: ButtonDef[];
export declare const POPOVER_ALIGN: {
    CENTER: string;
    JUSTIFY: string;
    LEFT: string;
    RIGHT: string;
};
export declare enum Alignment {
    Center = "center",
    Justify = "justify",
    Left = "left",
    Right = "right"
}
export declare const POPOVER_SHADOW_GAP = 8;
