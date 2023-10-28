import { fromMarkdown } from 'mdast-util-from-markdown';
import { headingRange } from 'mdast-util-heading-range';
import {
  INTRO_MAP,
  TITLE_MAP,
  groupedConfig,
} from '../../utils/options.utils.mjs';

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export default function readmeOptions() {
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
  const intro = INTRO_MAP[key];
  const list = groupedConfig[key]
    .map((config) => {
      return `- [\`--${
        config.name
      }\`](./docs/plugin-options.md#--${config.name.toLowerCase()})`;
    })
    .join('\n');
  return [intro, list].join('\n\n');
}
