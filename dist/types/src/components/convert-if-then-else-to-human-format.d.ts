import { IfThenElseStep } from '@/lib/steps';
export declare const EMPTY_CONDITION_SIGN = "<span class=\"empty\">[null]</span>";
/**
 * Convert a ifthenelse into a human readable format.
 *
 * Delete else step if elseif mode is on
 *
 * @param {IfThenElseStep} ifthenelse
 */
export default function convertIfThenElseToHumanFormat(ifthenelse: Omit<IfThenElseStep, 'name' | 'newColumn'>): string;
