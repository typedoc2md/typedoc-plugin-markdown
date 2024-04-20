import { DocsConfig } from '@devtools/helpers';
import * as fs from 'fs';
import * as path from 'path';
import * as prettier from 'prettier';
import { DeclarationOption, ParameterType } from 'typedoc';

/**
 * Creates models for plugin options
 */

export async function generateOptionsModels(docsConfig: DocsConfig) {
  const optionsConfig = await import(docsConfig.declarationsPath as string);

  const mixedTypes = (Object.entries(optionsConfig) as any).filter(
    ([name, option]) =>
      option.type === ParameterType.Mixed && option.defaultValue,
  );

  const containsManuallyValidatedOptions = Object.values(optionsConfig).some(
    (option) =>
      (option as any).type === ParameterType.Mixed &&
      (option as any).defaultValue,
  );

  const sortedOptionsConfig = Object.fromEntries(
    Object.entries(optionsConfig).sort((a, b) => a[0].localeCompare(b[0])),
  );

  const optionsOutput = `
  // THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.

  ${
    containsManuallyValidatedOptions &&
    `import { ManuallyValidatedOption } from 'typedoc'`
  };

  declare module 'typedoc' {
    export interface TypeDocOptionMap {
      ${(Object.entries(sortedOptionsConfig) as any)
        .map(([name, option]) => `${name}: ${getType(name, option)};`)
        .join('\n')}
    }
  }

  /**
   * Describes the options declared by the plugin.
   *
   * @category Options
   */
  export interface PluginOptions {
    ${(Object.entries(sortedOptionsConfig) as any)
      .map(
        ([name, option]) => `
/**
 * ${option.help}
 */
${name}: ${getType(name, option, true)};`,
      )
      .join('\n')}
  }

  ${mixedTypes
    ?.map(([name, option]) => {
      return `
  /**
   * ${getComments(name)}
   *
   * @category Options
   */
  export interface ${capitalize(name)} {
      ${Object.entries(option.defaultValue as any)
        .map(
          ([key, value]) =>
            `'${key}'${value === undefined ? '?' : ''}: ${getValueType(value)}`,
        )
        .join(';')}
  }
    `;
    })
    .join('\n')}
  `;

  const optionsModelFile = path.join(
    path.dirname(docsConfig.declarationsPath as string),
    'option-types.ts',
  );

  const formatted = await prettier.format(optionsOutput, {
    parser: 'typescript',
    singleQuote: true,
    trailingComma: 'all',
  });

  fs.writeFileSync(optionsModelFile, formatted);
}

function getComments(name: string) {
  if (name === 'textContentMappings') {
    return 'Describes the keys available to replace static text.';
  }
  return '';
}

function getValueType(value: any) {
  if (value === true || value === false) {
    return 'boolean';
  }
  if (typeof value === 'number') {
    return 'number';
  }
  if (Array.isArray(value)) {
    return 'string[]';
  }
  return 'string';
}

function getType(
  name: string,
  option: Partial<DeclarationOption>,
  isInterface = false,
) {
  if (option.type === ParameterType.Array && option.defaultValue) {
    return `(${option.defaultValue
      .toString()
      .split(',')
      .map((item) => `"${item}"`)
      .join(' | ')})[]`;
  }

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
  if (option.type === ParameterType.Flags && option.defaults) {
    return `{${Object.keys(option.defaults)
      .map((key) => `'${key}': boolean`)
      .join(';')}}`;
  }
  if (option.type === ParameterType.Mixed && option.defaultValue) {
    const usePartial = name === 'textContentMappings';
    return isInterface
      ? usePartial
        ? `Partial<${capitalize(name)}>`
        : capitalize(name)
      : usePartial
        ? `ManuallyValidatedOption<Partial<${capitalize(name)}>>`
        : `ManuallyValidatedOption<${capitalize(name)}>`;
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
