/* eslint-disable @typescript-eslint/no-unused-vars */
import { DocsConfig, SRC_PATH } from '@devtools/helpers';
import * as fs from 'fs';
import * as path from 'path';
import * as prettier from 'prettier';
import { DeclarationOption, ParameterType } from 'typedoc';

const ignoreTypes = [
  'textContentMappings',
  'remarkStringifyOptions',
  'yamlStringifyOptions',
];

export async function generateOptionsModels(docsConfig: DocsConfig) {
  const optionsConfig = await import(docsConfig.declarationsPath as string);

  const sortedOptionsConfig = Object.fromEntries(
    Object.entries(optionsConfig).sort((a, b) => a[0].localeCompare(b[0])),
  );

  await writeTypeDocDeclarations(docsConfig, sortedOptionsConfig);
  await writeOptionsTypes(docsConfig, sortedOptionsConfig);
}

async function writeTypeDocDeclarations(
  docsConfig: DocsConfig,
  sortedOptionsConfig: any,
) {
  const typedocDeclarationsFile = path.join(SRC_PATH, '_typedoc.d.ts');

  const manuallyValidatedOptions = Object.entries(sortedOptionsConfig)
    .filter(
      ([name, option]) =>
        (option as any).type === ParameterType.Mixed &&
        (option as any).defaultValue,
    )
    .map(([name, option]) => capitalize(name, false));

  const out: string[] = [];

  out.push(`// THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.
import { ManuallyValidatedOption } from 'typedoc';${docsConfig.optionsPath === 'plugins/frontmatter' ? `\nimport { ToStringOptions } from 'yaml';` : ''}`);

  if (manuallyValidatedOptions.length) {
    manuallyValidatedOptions.forEach((option: any) => {
      if (
        !ignoreTypes.map((t) => t.toLowerCase()).includes(option.toLowerCase())
      ) {
        out.push(`import { ${option} } from './types/options.js';`);
      }
    });
  }

  out.push(`declare module 'typedoc' {`);
  out.push(`export interface TypeDocOptionMap {
    ${(Object.entries(sortedOptionsConfig) as any)
      .map(
        ([name, option]) => `${name}: ${getType(name, option, false, true)};`,
      )
      .join('\n')}
  }`);

  if (docsConfig.translatablePath) {
    out.push(`

  export namespace Internationalization {
      export interface TranslatableStrings {
        theme_default_value: [];
        theme_default_type: [];
        theme_description: [];
        theme_event: [];
        theme_re_exports: [];
        theme_renames_and_re_exports: [];
        theme_extends: [];
        theme_extended_by: [];
        theme_globals: [];
        theme_member: [];
        theme_member_plural: [];
        theme_modifier: [];
        theme_name: [];
        theme_package: [];
        theme_packages: [];
        theme_type: [];
        theme_value: [];
        theme_version: [];
    }
  }`);
  }
  out.push(`}`);
  const formatted = await prettier.format(out.join('\n'), {
    parser: 'typescript',
    singleQuote: true,
    trailingComma: 'all',
  });

  fs.writeFileSync(typedocDeclarationsFile, formatted);
}

async function writeOptionsTypes(
  docsConfig: DocsConfig,
  sortedOptionsConfig: any,
) {
  const mixedTypes = (Object.entries(sortedOptionsConfig) as any).filter(
    ([name, option]) =>
      option.type === ParameterType.Mixed && option.defaultValue,
  );

  const optionsOutput: string[] = [];

  optionsOutput.push(`
  /*
   * THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY
   */
  ${docsConfig.optionsPath === 'plugins/frontmatter' ? `import { ToStringOptions } from 'yaml';` : ''}
  /**
   * Describes the options declared by the plugin.
   */
  export interface PluginOptions {
    ${(Object.entries(sortedOptionsConfig) as any)
      .map(
        ([name, option]) => `
/**
 * ${option.help}
 */
${name}?: ${getType(name, option, true)};`,
      )
      .join('\n')}
  }

  ${mixedTypes
    ?.filter(([name]) => !ignoreTypes.includes(name))
    .map(([name, option]) => {
      return `
    ${
      // this is a hack need to fix properly
      name === 'remarkPlugins'
        ? `export type RemarkPlugin =
  | string
  | [string, Record<string, any>]
  | {
      applyTo: string[];
      plugins: (string | [string, Record<string, any>])[];
    };`
        : `export interface ${capitalize(name)} {
      ${Object.entries(option.defaultValue as any)
        .map(
          ([key, value]) =>
            `'${key}'${value === undefined ? '?' : ''}: ${getValueType(key, value)}`,
        )
        .join(';')}
  }`
    }

    `;
    })
    .join('\n')}
  `);

  const optionsModelFile = path.join(process.cwd(), 'src/types/options.ts');

  const formatted = await prettier.format(optionsOutput.join('\n\n'), {
    parser: 'typescript',
    singleQuote: true,
    trailingComma: 'all',
  });

  fs.writeFileSync(optionsModelFile, formatted);
}

function getValueType(key: string, value: any) {
  if (key === 'pageTitleTemplates') {
    return `{
    index?: string | ((args: { name: string }) => string);
    member?: string;
    module?: string;
  }`;
  }
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
  isDeclarationFile = false,
) {
  if (name === 'pageTitleTemplates') {
    return `{
    index?: string | ((name: { projectName: string; version: string }) => string);
    member?: string | ((name: { name: string; rawName: string; kind: string; isDeprecated:boolean, group?: string, codeKeyword?: string, keyword?: string,   }) => string);
    module?: string | ((name: { name: string, rawName: string; kind: string, isDeprecated:boolean }) => string);
  }`;
  }

  if (option.type === ParameterType.Array && option.defaultValue?.length) {
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
    return 'string[]';
  }
  if (option.type === ParameterType.Flags && option.defaults) {
    return `{${Object.keys(option.defaults)
      .map((key) => `'${key}'?: boolean`)
      .join(';')}}`;
  }
  if (option.type === ParameterType.Mixed && option.defaultValue) {
    // hack - need to fix this

    const useAny = ignoreTypes.includes(name);
    return isInterface
      ? useAny
        ? 'any'
        : capitalize(name)
      : useAny
        ? `ManuallyValidatedOption<Partial<any>>`
        : `ManuallyValidatedOption<${capitalize(name)}>`;
  }

  if (option.type === ParameterType.Map && option.map) {
    return `${Object.values(option.map)
      .map((value) => `"${value}"`)
      .join(' | ')}`;
  }

  if (option.type === ParameterType.Object) {
    const defaults = (option as any).defaults || {};
    const objectWithDefaults =
      typeof defaults === 'object' &&
      Object.keys(defaults as object).length === 0;
    const outType = objectWithDefaults
      ? name === 'yamlStringifyOptions'
        ? 'ToStringOptions'
        : 'Record<string, any>'
      : `{${Object.keys(defaults as any)
          .map((key) => `'${key}'?: boolean;`)
          .join('')}}`;
    return objectWithDefaults && isDeclarationFile
      ? `ManuallyValidatedOption<${outType}>`
      : outType;
  }
  const outType = `{${Object.keys((option as any).defaultValue as any)
    .map((key) => `'${key}'?: string;`)
    .join('')}}`;
  return isInterface ? outType : `ManuallyValidatedOption<${outType}>`;
}

function capitalize(str: string, includeArray = true) {
  if (str.endsWith('s')) {
    str = `${str.slice(0, -1)}${includeArray ? '[]' : ''}`;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
