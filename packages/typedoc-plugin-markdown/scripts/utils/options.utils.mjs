import * as path from 'path';
import { Project } from 'ts-morph';
import optionsConfig from '../../dist/plugin/options/config.js';

Array.prototype.groupBy = function (key) {
  return this.reduce((hash, obj) => {
    if (obj[key] === undefined) return hash;
    return Object.assign(hash, {
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    });
  }, {});
};

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
});

const configFile = path.join(
  process.cwd(),
  'src',
  'plugin',
  'options',
  'config.ts',
);

const configFileTs = project.getSourceFile(configFile);
const optionsVariableStatements = configFileTs?.getVariableStatements();

export const parsedConfig = Object.values(optionsConfig).map((value, i) => {
  const docs = optionsVariableStatements[i].getJsDocs().map((doc) => {
    return {
      comments: doc.getComment(),
      category: doc.getTags()[0]?.getComment(),
    };
  })[0];
  return {
    ...value,
    ...docs,
  };
});

export const groupedConfig = parsedConfig.groupBy('category');

export const TITLE_MAP = {
  fileOutput: 'Output Options',
  remark: 'Remark Options',
  frontmatter: 'Frontmatter Options',
};
