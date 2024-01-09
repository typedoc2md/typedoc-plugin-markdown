import { DeclarationOption, ParameterType } from 'typedoc';

/**
 *
 * @example  ["remark-github", "unified-prettier"]
 */
export const remarkPlugins: Partial<DeclarationOption> = {
  help: 'An array of remark plugins.',
  type: ParameterType.Mixed,
};
