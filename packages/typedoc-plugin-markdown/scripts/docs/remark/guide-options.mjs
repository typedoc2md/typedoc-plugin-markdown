import { fromMarkdown } from 'mdast-util-from-markdown';
import { headingRange } from 'mdast-util-heading-range';
import { ParameterType } from 'typedoc';
import { TITLE_MAP, groupedConfig } from '../../utils/options.utils.mjs';

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export default function guideOptions() {
  return (tree) => {
    parseOptions(
      tree,

      'fileOutput',
    );

    parseOptions(tree, 'remark');

    parseOptions(tree, 'frontmatter');
  };
}

function parseOptions(tree, key) {
  const heading = TITLE_MAP[key];
  headingRange(tree, heading, (start, nodes, end) => {
    return [start, fromMarkdown(getMarkdown(key)), end];
  });
}

function getMarkdown(key) {
  const md = [];
  groupedConfig[key].forEach((config, i) => {
    md.push(`### \`--${config.name}\``);
    md.push(`\`${getType(config)}\``);
    md.push(`> ${config.help}`);
    md.push(`
  \`\`\`json  
  {
    ${config.name}: "${config.defaultValue}"
  }  
  \`\`\`  
        `);

    md.push(config.comments);
    md.push('***');
  });

  return md.join('\n\n');
}

function getType(option) {
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
