import * as S from '@/lib/steps';
import { VariableDelimiters } from './variables';
/**
 * Compute a human-readable representation of a pipeline step.
 *
 * @param step the step we want to compute a label for
 * @return the human-readable label.
 */
export declare function humanReadableLabel(step: S.PipelineStep): string;
export declare function labelWithReadeableVariables(label: string | null, variableDelimiters: VariableDelimiters | null, replaceDelimiters: VariableDelimiters | null): string;
