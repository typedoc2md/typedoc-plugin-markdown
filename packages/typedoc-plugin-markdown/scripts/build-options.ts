import * as fs from 'fs';
import * as path from 'path';
import * as prettier from 'prettier';
import { Project, VariableStatement } from 'ts-morph';
import { DeclarationOption, ParameterType } from 'typedoc';
import * as optionsConfig from '../src/plugin/options/config';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
});

const configFile = path.join(
  __dirname,
  '..',
  'src',
  'plugin',
  'options',
  'config.ts',
);

const configFileTs = project.getSourceFile(path.join(configFile));

const optionsVariableStatements = configFileTs?.getVariableStatements();

const docsFile = path.join(__dirname, '..', 'docs', 'usage', 'options.md');

const docsMd = ['# Options guide'];

Object.entries(optionsConfig).forEach(([key, value], i) => {
  const comments = (optionsVariableStatements as VariableStatement[])[i]
    .getJsDocs()
    .map((doc) => doc.getComment());
  docsMd.push(`## ${key}`);
  docsMd.push(
    `**type** \`${getType(
      value as unknown as DeclarationOption,
    )}\` • **default** \`${getShortDefaultValue(
      value as unknown as DeclarationOption,
    )}\``,
  );
  docsMd.push(`> ${value.help}`);
  docsMd.push(comments.join('\n\n'));
});

prettier
  .format(docsMd.join('\n\n'), { parser: 'markdown' })
  .then((formatted) => {
    fs.writeFileSync(docsFile, formatted);
  });

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

function getType(option: Partial<DeclarationOption>) {
  if (option.type === ParameterType.Boolean) {
    return 'boolean';
  }
  if (option.type === ParameterType.Map && option.map) {
    return `${Object.values(option.map)
      .map((value) => `"${value}"`)
      .join(' | ')}`;
  }
  return 'string';
}

const readmeFile = path.join(__dirname, '..', 'README.md');

const optionsMd: string[] = [];

Object.entries(optionsConfig).forEach(([key, option], i) => {
  const comments = (optionsVariableStatements as VariableStatement[])[i]
    .getJsDocs()
    .map((doc) => doc.getComment());
  optionsMd.push(`**\`--${option.name}\`** \`${getType(option)}\`\n
> ${option.help} ${getDefaultValue(option)}${
    comments?.length
      ? ` <small>[more »](./docs/usage/options.md#${option.name.toLowerCase()})</small>`
      : ''
  } \n`);
});

prettier
  .format(optionsMd.join('\n'), { parser: 'markdown' })
  .then((formatted) => {
    const data = fs
      .readFileSync(readmeFile)
      ?.toString()
      .replace(
        /<!-- START OPTIONS -->((.|\n)*)\<!-- END OPTIONS -->/g,
        `<!-- START OPTIONS -->
${formatted}
<!-- END OPTIONS -->`,
      );
    fs.writeFileSync(readmeFile, data);
  });

function getDefaultValue(option: DeclarationOption) {
  if (option.type !== ParameterType.Flags) {
    return `Defaults to \`${option.defaultValue}\`.`;
  }
  return '';
}

function getShortDefaultValue(option: DeclarationOption) {
  if (option.type !== ParameterType.Flags) {
    return `${option.defaultValue}`;
  }
  return '';
}
