import { fromMarkdown } from 'mdast-util-from-markdown';
import { headingRange } from 'mdast-util-heading-range';
import { ParameterType } from 'typedoc';
import {
  INTRO_MAP,
  TITLE_MAP,
  groupedConfig,
} from '../../utils/options.utils.mjs';

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export default function guideOptions() {
  return (tree) => {
    parseOptions(tree, 'fileOutput');
    parseOptions(tree, 'ui');
    parseOptions(tree, 'other');
  };
}

function parseOptions(tree, key) {
  const heading = TITLE_MAP[key];
  headingRange(tree, heading, (start, nodes, end) => {
    return [start, fromMarkdown(getMarkdown(key)), end];
  });
}

function getMarkdown(key) {
  const md = [INTRO_MAP[key]];

  groupedConfig[key].forEach((config, i) => {
    md.push(`### \`--${config.name}\``);
    md.push(`${config.help} Defaults to \`${getDefaultValue(config)}\`.`);
    md.push(`
\`\`\`shell
--${config.name} ${getType(config)}
\`\`\`
  `);
    if (config.comments?.length > 0) {
      md.push('#### Usage');
      md.push(config.comments);
    }
    md.push('[↑ Top](#options-guide)');
    md.push('***');
  });

  return md.join('\n\n');
}

function getType(option) {
  if (option.type === ParameterType.Boolean) {
    return '<boolean>';
  }
  if (option.type === ParameterType.Flags) {
    return `<${Object.keys(option.defaults)
      .map((key) =>
        JSON.stringify({
          [key]: 'boolean',
        }),
      )
      .join(', ')
      .replaceAll('"boolean"', ' boolean')}>`;
  }
  if (option.type === ParameterType.Array) {
    return `Array<\n    [${option.defaultValue
      .toString()
      .split(',')
      .map((item) => `'${item}'`)
      .join(' | ')}]\n  >`;
  }
  if (option.type === ParameterType.Map && option.map) {
    return `<${Object.values(option.map)
      .map((value) => `"${value}"`)
      .join('|')}>`;
  }
  return '<string>';
}

function getDefaultValue(option) {
  if (option.type === ParameterType.Boolean) {
    return option.defaultValue;
  }
  if (option.type === ParameterType.Flags) {
    return JSON.stringify(option.defaults);
  }
  if (option.type === ParameterType.Array) {
    return `[${option.defaultValue
      .toString()
      .split(',')
      .map((item) => `'${item}'`)
      .join(', ')}]`;
  }
  return `"${option.defaultValue}"`;
}

function getOptions(intro, key) {
  return [
    {
      type: 'paragraph',
      children: [
        ...groupedConfig[key].map((config) => {
          return {
            type: 'paragraph',
            children: [
              {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    value: config.name,
                  },
                  { type: 'break' },
                ],
              },
            ],
          };
        }),
      ],
    },
  ];
}
