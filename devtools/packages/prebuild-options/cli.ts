#!/usr/bin/env tsx

import { DOCS_CONFIG, DocsConfig, getPackageName } from '@devtools/helpers';
import { consola } from 'consola';
import { generateOptionsDocs } from './tasks/generate-docs.js';
import { generateOptionsModels } from './tasks/generate-models.js';

main();

async function main() {
  const docsConfig: DocsConfig = DOCS_CONFIG[getPackageName()];

  if (docsConfig.declarations) {
    await generateOptionsModels(docsConfig);
    await generateOptionsDocs(docsConfig);
  }

  consola.success(`[${getPackageName()}] Prebuild options complete`);
}
