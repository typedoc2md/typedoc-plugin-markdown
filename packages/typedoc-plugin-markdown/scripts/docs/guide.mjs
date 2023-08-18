import * as fs from 'fs';
import * as path from 'path';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import { ParameterType } from 'typedoc';
import { TITLE_MAP, groupedConfig } from '../utils/options.utils.mjs';

//optionsGuide('fileOutput', 'output.md');
//optionsGuide('frontmatter', 'frontmatter.md');
//optionsGuide('remark', 'remark.md');

async function optionsGuide(key, filename) {
  const file = await remark()
    .use(remarkGfm)
    .use(remarkToc, { heading: 'Contents' })
    .process(getMd(key));
  fs.writeFileSync(
    path.join(process.cwd(), `./docs/guides/options/${filename}`),
    file.value,
  );
}

function getMd(key) {
  const docsMd = [`# ${TITLE_MAP[key]}`];
  docsMd.push('## Contents');

  groupedConfig[key].forEach((config, i) => {
    docsMd.push(`## ${config.name} `);
    docsMd.push(`**\`${getType(config)}\`**`);
    docsMd.push(`${config.help}`);
    docsMd.push(`
  \`\`\`json  
  {
    ${config.name}: "${config.defaultValue}"
  }  
  \`\`\`  
        `);

    docsMd.push(config.comments);
  });

  return docsMd.join('\n\n');
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

function getDefaultValue(option) {
  if (option.type !== ParameterType.Flags) {
    return `\`${option.defaultValue}\``;
  }
  return '';
}

function getShortDefaultValue(option) {
  if (option.type !== ParameterType.Flags) {
    return `${option.defaultValue}`;
  }
  return '';
}
