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
      category: doc.getTags()[0]?.getComment() || 'other',
    };
  })[0];
  return {
    ...value,
    ...(docs ? docs : { category: 'other' }),
  };
});

export const groupedConfig = parsedConfig.groupBy('category');

export const TITLE_MAP = {
  fileOutput: 'File output options',
  ui: 'Structure and formatting options',
  other: 'Utility options',
};

export const INTRO_MAP = {
  fileOutput: '',
  ui: '',
  other: '',
};
