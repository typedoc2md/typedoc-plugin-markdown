import * as fs from 'fs';
import * as path from 'path';
import * as prettier from 'prettier';
import { DeclarationOption, ParameterType } from 'typedoc';
import * as optionsConfig from '../../src/plugin/options/config';

export function prepareOptions() {
  const optionsOutput = `
  // THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.

  declare module 'typedoc' {
    export interface TypeDocOptionMap {
      ${Object.entries(optionsConfig)
        .map(([key, option], i) => {
          return `${option.name}: ${getType(option)};`;
        })
        .join('\n')}
    }
  }

  export interface PluginOptions {
    ${Object.entries(optionsConfig)
      .map(([key, option], i) => {
        return `${option.name}: ${getType(option)};`;
      })
      .join('\n')}
  }`;

  const optionsModelFile = path.join(
    __dirname,
    '..',
    '..',
    'src',
    'plugin',
    'options',
    'models.ts',
  );

  prettier
    .format(optionsOutput, {
      parser: 'typescript',
      singleQuote: true,
      trailingComma: 'all',
    })
    .then((formatted) => {
      fs.writeFileSync(optionsModelFile, formatted);
    });
}

function getType(option: Partial<DeclarationOption>) {
  if (option.type === ParameterType.Boolean) {
    return 'boolean';
  }
  if (option.type === ParameterType.Array) {
    return 'any[]';
  }
  if (option.type === ParameterType.Map && option.map) {
    return `${Object.values(option.map)
      .map((value) => `"${value}"`)
      .join(' | ')}`;
  }
  return 'string';
}
