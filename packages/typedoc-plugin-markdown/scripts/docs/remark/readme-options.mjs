import { fromMarkdown } from 'mdast-util-from-markdown';
import { headingRange } from 'mdast-util-heading-range';
import { TITLE_MAP, groupedConfig } from '../../utils/options.utils.mjs';

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export default function readmeOptions() {
  return (tree) => {
    parseOptions(
      tree,
      'Options that define how output files are generated.',
      'fileOutput',
    );
    parseOptions(tree, 'Remark options.', 'remark');
    parseOptions(tree, 'Frontmatter options.', 'frontmatter');
  };
}

function parseOptions(tree, intro, key) {
  const heading = TITLE_MAP[key];
  headingRange(tree, heading, (start, nodes, end) => {
    return [start, fromMarkdown(getMarkdown(key)), end];
  });
}

function getMarkdown(key) {
  return groupedConfig[key]
    .map((config) => `- [\`--${config.name}\`]()`)
    .join('\n');
}
