#!/usr/bin/env ts-node

import { DOCS_CONFIG, DocsConfig, getPackageName } from '@devtools/helpers';
import { consola } from 'consola';
import { generateDocs } from './tasks/generate-docs';
import { generateModels } from './tasks/generate-models';

main();

async function main() {
  const docsConfig: DocsConfig = DOCS_CONFIG[getPackageName()];
  if (docsConfig.declarations) {
    await generateModels(docsConfig.declarationsPath);
  }
  await generateDocs(docsConfig);
  consola.success(`[${getPackageName()}] Prebuild options complete`);
}
