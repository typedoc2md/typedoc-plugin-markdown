#!/usr/bin/env ts-node

import { DOCS_CONFIG, DocsConfig, getPackageName } from '@devtools/helpers';
import { consola } from 'consola';
import { generateOptionsDocs } from './tasks/generate-docs';
import { generateOptionsModels } from './tasks/generate-models';

main();

async function main() {
  const docsConfig: DocsConfig = DOCS_CONFIG[getPackageName()];

  if (docsConfig.declarations) {
    await generateOptionsModels(docsConfig);
    await generateOptionsDocs(docsConfig);
  }

  consola.success(`[${getPackageName()}] Prebuild options complete`);
}
