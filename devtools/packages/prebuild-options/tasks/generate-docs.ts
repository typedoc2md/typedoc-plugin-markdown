/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty */
import { DocsConfig } from '@devtools/helpers';
import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import * as prettier from 'prettier';
import { Project, VariableStatement } from 'ts-morph';
import { ParameterType } from 'typedoc';
import { fileURLToPath } from 'url';
import { injectStringToFile } from './utils/inject-string-to-file.js';
import { table } from './utils/table.js';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

/**
 * Cached TypeDoc options JSON used for tables and option metadata.
 */
const typedocJson = JSON.parse(
  fs.readFileSync(path.join(getJsonPath(), 'typedoc-options.json'), 'utf-8'),
);
/**
 * Tags that should not be included in the option tag output.
 */
const categoryIgnoreTags = new Set([
  'deprecated',
  'category',
  'omitExample',
  'defaultValue',
  'example',
  'hidden',
]);

/**
 * Generates option documentation pages for the plugin.
 */
export async function generateOptionsDocs(docsConfig: DocsConfig) {
  const project = new Project({
    tsConfigFilePath: 'tsconfig.json',
  });

  const outputPage: string[] = [];

  if (docsConfig.optionsFile !== 'options/index.mdx') {
    outputPage.push(`import { Callout } from 'nextra/components';`);
    outputPage.push('# Plugin Options');
  }

  if (docsConfig.docsPath === '/docs') {
    //outputPage.push(
    //  `This page documents additional options that are exposed by this plugin.`,
    //);
  } else {
    if (docsConfig.presets) {
      outputPage.push(
        `<Callout type="info">Please view options exposed by [typedoc-plugin-markdown](/docs/options) in addition to those listed here.</Callout>`,
      );
    }
  }

  if (docsConfig.presets) {
    outputPage.push('## Preset Options');
    outputPage.push(
      'The following are preset typedoc-plugin-markdown options:',
    );
    const { presets }: any = await import(docsConfig.presetsPath as string);
    const config = presets;
    delete config.plugin;
    const presetsJson = JSON.stringify(config, null, 2);

    outputPage.push(`\`\`\`json
${presetsJson}
\`\`\``);
    outputPage.push('## Plugin Options');
    outputPage.push('The following options are exposed by this plugin:');
  }

  if (docsConfig.declarations) {
    const declarationsConfig: any = await import(
      docsConfig.declarationsPath as string
    );
    const configFileTs = project.getSourceFile(
      docsConfig.declarationsPath as string,
    );

    const optionsVariableStatements =
      (configFileTs?.getVariableStatements() as VariableStatement[]) ?? [];

    const parsedConfig = optionsVariableStatements
      .map((variableStatement) => {
        const name = (
          variableStatement.compilerNode.declarationList.declarations[0]
            .name as any
        ).escapedText;
        const option = declarationsConfig[name];
        const docs = getDocTags(variableStatement);
        return {
          name,
          ...option,
          ...(docs ? docs : { category: 'other' }),
        };
      })
      .filter((option) => !option.hidden);

    const groupedConfig: Record<string, any> = groupBy(
      parsedConfig,
      'category',
    );

    const compiledText = configFileTs?.compilerNode.text || '';

    const categoryDescriptions = extractCategories(compiledText);

    const categories = Object.entries(groupedConfig);

    for (const [categoryName, options] of categories) {
      const out: string[] = [
        categories.length > 1
          ? `import { Callout, FileTree } from 'nextra/components';`
          : '',
      ];
      let optionLevel =
        !docsConfig.presets || categories.length > 1 ? '##' : '###';
      if (categories.length > 1) {
        out.push(`# ${getDocsTitle(categoryName)}`);
        optionLevel = '##';
        if (Object.keys(categoryDescriptions)?.length) {
          out.push(categoryDescriptions[categoryName]);
        }
        out.push('');
        outputPage.push(`### ${getDocsTitle(categoryName)}`);

        if (Object.keys(categoryDescriptions)?.length) {
          outputPage.push(
            `<Callout type="important">${categoryDescriptions[categoryName]}</Callout>`,
          );
        }
      }

      const optionTableRows: string[][] = [];

      options.forEach((option) => {
        optionTableRows.push([
          `[${option.name}](./options/${categoryName.toLowerCase()}#${option.name.toLowerCase()})`,
          option.help,
        ]);

        if (!option.help) {
          throw new Error(
            `Option "${option.name}" is missing a help description.`,
          );
        }

        out.push(
          `${optionLevel} ${
            option.deprecated ? `~${option.name}~` : `${option.name}`
          }`,
        );
        if (option.deprecated) {
          out.push(`<Callout type="warning">${option.deprecated}</Callout>`);
        } else {
          out.push(`<Callout>${option.help}</Callout>`);
        }

        const meta: string[] = [];
        const type = getType(option);
        if (type) {
          meta.push(type);
        }
        if (
          option.type !== ParameterType.Flags &&
          option.type !== ParameterType.Array &&
          option.type !== ParameterType.Mixed &&
          option.type !== ParameterType.Object
        ) {
          const def = getDefaultValue(option);
          if (!['navigationJson', 'pageTitleTemplates'].includes(option.name)) {
            meta.push(`Defaults to \`${def}\`.`);
          }
        }
        if (meta.length) {
          out.push(`> ${meta.join(' ')}`);
        }

        if (option.comments?.length) {
          out.push(option.comments);
          option.tags?.forEach((tag) => {
            out.push(`**${tag.name}**`);
            out.push(tag.comments);
          });
        }

        if (!option.omitExample) {
          if (
            !option.example &&
            option.defaultValue &&
            option.type === ParameterType.Mixed &&
            Object.keys(option.defaultValue).length &&
            (!Array.isArray(option.defaultValue) || option.defaultValue?.length)
          ) {
            //out.push('Below is the full list of keys and default values:');
          }
        }

        let exampleJson = {};

        try {
          exampleJson = JSON.parse(`{
            "${option.name}": ${getExampleValue(option)}
          }`);
        } catch (e) {}
        if (!option.omitExample) {
          out.push(`
\`\`\`json filename="typedoc.json"
${JSON.stringify(exampleJson, null, 2)}
\`\`\``);
        }
      });
      if (categories.length > 1) {
        outputPage.push(table(['Option Name', 'Description'], optionTableRows));
        const catDocPath = path.join(
          getPagesPath(docsConfig.optionsPath as string),
          'options',
          `${categoryName.toLowerCase()}.mdx`,
        );
        const formattedOut = await prettier.format(out.join('\n\n'), {
          parser: 'mdx',
          singleQuote: true,
        });
        fs.writeFileSync(catDocPath, formattedOut);
      } else {
        outputPage.push(out.join('\n\n'));
      }
    }

    const optionDocPath = path.join(
      getPagesPath(docsConfig.optionsPath as string),
      docsConfig.optionsFile || 'options.mdx',
    );

    if (docsConfig.optionsFile === 'options/index.mdx') {
      const optionsIndexPagePath = path.join(
        getPagesPath(docsConfig.optionsPath as string),
        'options',
        `index.mdx`,
      );

      await injectStringToFile(
        optionsIndexPagePath,
        table(
          ['Option Name', 'Description'],
          Object.entries(typedocJson.outputOptions.options).map(
            ([key, value]) => {
              return [
                `[${key}](./options/output#${key.toLowerCase()})`,
                value,
              ] as string[];
            },
          ),
        ),
        'TYPEDOC_OUTPUT_OPTIONS_START',
        'TYPEDOC_OUTPUT_OPTIONS_END',
      );

      await injectStringToFile(
        optionsIndexPagePath,
        table(
          ['Option Group', 'Description'],
          typedocJson.conversionOptions.map((option) => [
            `[${option.name}](https://typedoc.org/documents/Options.${option.name}.html)`,
            option.description,
          ]),
        ),
        'TYPEDOC_CONVERSION_OPTIONS_START',
        'TYPEDOC_CONVERSION_OPTIONS_END',
      );

      await injectStringToFile(
        optionsIndexPagePath,
        outputPage.join('\n\n'),
        'PLUGIN_OPTIONS',
      );
    } else {
      const formattedOut = await prettier.format(outputPage.join('\n\n'), {
        parser: 'mdx',
        singleQuote: true,
      });

      fs.writeFileSync(optionDocPath, formattedOut);
    }
  }
}

/**
 * Returns a human-readable string describing the parameter type.
 */
function getType(option: any) {
  if (option.type === ParameterType.Array && option.defaultValue?.length) {
    return `Accepts an array of the following values ${option.defaultValue
      .toString()
      .split(',')
      .map((item) => `\`"${item}"\``)
      .join(' ')}.`;
  }

  if (option.type === ParameterType.Array) {
    return 'Accepts an array of string values.';
  }

  if (
    option.type === ParameterType.String ||
    option.type === ParameterType.Path
  ) {
    return 'Accepts a string value.';
  }

  if (option.type === ParameterType.Boolean) {
    return 'Accepts a boolean value.';
  }

  if (
    [ParameterType.Mixed, ParameterType.Object, ParameterType.Flags].includes(
      option.type,
    ) &&
    (option.defaultValue || option.defaults)
  ) {
    return Array.isArray(option.defaultValue) || Array.isArray(option.defaults)
      ? 'Accepts an Array.'
      : 'Accepts a key/value object.';
  }

  if (option.type === ParameterType.Map && option.map) {
    const values = Object.values(option.map);
    return `Accepts ${values.length === 2 ? 'either' : 'one of'} ${values
      .map((value) => `\`"${value}"\``)
      .join(` ${values.length === 2 ? 'or' : '|'} `)}.`;
  }
  return null;
}

/**
 * Resolves the default value string for an option.
 */
function getDefaultValue(option) {
  if (option.default) {
    return option.default;
  }

  if (option.type === ParameterType.Boolean) {
    return option.defaultValue;
  }

  if (option.defaults) {
    return JSON.stringify(option.defaults);
  }

  if (option.type === ParameterType.Array) {
    return '';
  }

  if (option.type === ParameterType.Mixed) {
    return JSON.stringify(option.defaultValue);
  }

  if (option.type === ParameterType.Object) {
    return JSON.stringify(option.defaultValue);
  }

  return `"${option.defaultValue}"`;
}

/**
 * Resolves the example value string for an option.
 */
function getExampleValue(option) {
  if (option.example) {
    return option.example;
  }
  return getDefaultValue(option);
}

/**
 * Resolves the docs content directory for a given docs path.
 */
function getPagesPath(docsPath: string) {
  return path.join(__dirname, '..', '..', '..', '..', 'docs', 'content', docsPath);
}

/**
 * Resolves the docs JSON directory path.
 */
function getJsonPath() {
  const jsonPath = path.join(__dirname, '..', '..', '..', '..', 'docs', 'json');
  return jsonPath;
}

/**
 * Formats a category name for use as a docs title.
 */
function getDocsTitle(categoryName: string) {
  return categoryName === 'other' ? 'Plugin Options' : categoryName;
}

/**
 * Groups a list of objects by a key.
 */
function groupBy(array: any[], key: string) {
  return array.reduce(
    (r, v, i, a, k = v[key]) => ((r[k] || (r[k] = [])).push(v), r),
    {},
  );
}

/**
 * Extracts category descriptions from JSDoc `@categoryDescription` tags.
 */
function extractCategories(input) {
  const regex =
    /@categoryDescription\s+(\w+)\s*\n\s*\*\s*([\w\s\S]*?)(?=\n\s*\*)/g;
  let match;
  const categories = {};

  while ((match = regex.exec(input)) !== null) {
    let description = match[2].trim();
    description = description.replace(/^\*/g, '').trim();
    categories[match[1]] = description;
  }

  return categories;
}

/**
 * Parses the first JSDoc block for a variable statement into a docs model.
 */
function getDocTags(variableStatement: VariableStatement) {
  const docs = variableStatement.getJsDocs();
  if (!docs.length) return null;

  const doc = docs[0];
  const tags = doc.getTags();
  return {
    comments: (doc.getComment() as string)
      ?.replace(/\\\//g, '/')
      .replace(/\\@/g, '@'),
    tags: tags
      .filter((tag) => !categoryIgnoreTags.has(tag.getTagName()))
      .map((tag) => ({
        name: tag.getTagName(),
        comments: tag.getComment(),
      })),
    hidden: tags.some((tag) => tag.getTagName() === 'hidden'),
    omitExample: tags.some((tag) => tag.getTagName() === 'omitExample'),
    example: tags.find((tag) => tag.getTagName() === 'example')?.getComment(),
    deprecated: tags
      .find((tag) => tag.getTagName() === 'deprecated')
      ?.getComment(),
    default: tags
      .find((tag) => tag.getTagName() === 'defaultValue')
      ?.getComment(),
    category:
      tags.find((tag) => tag.getTagName() === 'category')?.getComment() ||
      'other',
  };
}
