import { consola } from 'consola';
import { prebuildResources } from './prebuild-resources';

main();

async function main() {
  await prebuildResources();
  consola.success('[typedoc-plugin-markdown] Prebuild code complete');
}
