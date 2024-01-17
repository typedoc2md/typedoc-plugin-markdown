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

  const mixedTypes = (Object.entries(optionsConfig) as any).filter(
    ([name, option]) =>
      option.type === ParameterType.Mixed && option.defaultValue,
  );

  const containsManuallyValidatedOptions = Object.values(optionsConfig).some(
    (option) =>
      (option as any).type === ParameterType.Mixed &&
      (option as any).defaultValue,
  );

  const optionsOutput = `
  // THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.

  ${
    containsManuallyValidatedOptions &&
    `import { ManuallyValidatedOption } from 'typedoc'`
  };

  declare module 'typedoc' {
    export interface TypeDocOptionMap {
      ${(Object.entries(optionsConfig) as any)
        .map(([name, option]) => `${name}: ${getType(name, option)};`)
        .join('\n')}
    }
  }

  export interface PluginOptions {
    ${(Object.entries(optionsConfig) as any)
      .map(([name, option]) => `${name}: ${getType(name, option)};`)
      .join('\n')}
  }

  ${mixedTypes?.map(([name, option]) => {
    return `
  export interface ${capitalize(name)} {
      ${Object.entries(option.defaultValue as any)
        .map(
          ([key, value]) =>
            `'${key}'${value === undefined ? '?' : ''}: ${getValueType(value)}`,
        )
        .join(';')}
  }
    `;
  })}
  `;

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

function getValueType(value: any) {
  if (value === true || value === false) {
    return 'boolean';
  }
  if (typeof value === 'number') {
    return 'number';
  }
  return 'string';
}

function getType(name: string, option: Partial<DeclarationOption>) {
  if (option.type === ParameterType.Boolean) {
    return 'boolean';
  }
  if (
    option.type === ParameterType.String ||
    option.type === ParameterType.Path
  ) {
    return 'string';
  }
  if (option.type === ParameterType.Array) {
    return 'any[]';
  }
  if (option.type === ParameterType.Flags) {
    return 'Record<string, boolean>';
  }
  if (option.type === ParameterType.Mixed && option.defaultValue) {
    return `ManuallyValidatedOption<${capitalize(name)}>`;
  }

  if (option.type === ParameterType.Map && option.map) {
    return `${Object.values(option.map)
      .map((value) => `"${value}"`)
      .join(' | ')}`;
  }
  return 'any';
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
