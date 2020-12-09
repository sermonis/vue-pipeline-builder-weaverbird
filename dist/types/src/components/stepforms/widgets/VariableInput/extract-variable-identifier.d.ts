import { VariableDelimiters } from '@/lib/variables';
/**
 * Determine if value is variable surrounded by delimiters or not, and if yes, extract its identifier.
 */
export default function extractVariableIdentifier(value: any, variableDelimiters: VariableDelimiters): string | undefined;
