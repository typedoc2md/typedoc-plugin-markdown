import { DECLARATIONS_PATH } from '@dev-packages/helpers';
import * as fs from 'fs';
import * as path from 'path';
import * as prettier from 'prettier';
import { DeclarationOption, ParameterType } from 'typedoc';

/**
 * Creates models for plugin options
 */

export async function generateModels() {
  const optionsConfig = await import(DECLARATIONS_PATH);

  const optionsOutput = `
  // THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.

  declare module 'typedoc' {
    export interface TypeDocOptionMap {
      ${(Object.entries(optionsConfig) as any)
        .map(([name, option]) => `${name}: ${getType(option)};`)
        .join('\n')}
    }
  }

  export interface PluginOptions {
    ${(Object.entries(optionsConfig) as any)
      .map(([name, option]) => `${name}: ${getType(option)};`)
      .join('\n')}
  }`;

  const optionsModelFile = path.join(
    process.cwd(),
    'src',
    'options',
    'models.ts',
  );

  const formatted = await prettier.format(optionsOutput, {
    parser: 'typescript',
    singleQuote: true,
    trailingComma: 'all',
  });

  fs.writeFileSync(optionsModelFile, formatted);
}

function getType(option: Partial<DeclarationOption>) {
  if (option.type === ParameterType.Boolean) {
    return 'boolean';
  }
  if (option.type === ParameterType.Array) {
    return 'any[]';
  }
  if (option.type === ParameterType.Flags) {
    return 'Record<string, boolean>';
  }
  if (option.type === ParameterType.Mixed) {
    return 'any';
  }
  if (option.type === ParameterType.Map && option.map) {
    return `${Object.values(option.map)
      .map((value) => `"${value}"`)
      .join(' | ')}`;
  }
  return 'string';
}
