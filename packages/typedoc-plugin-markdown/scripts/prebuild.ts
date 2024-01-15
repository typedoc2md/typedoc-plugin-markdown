import { consola } from 'consola';
import { prebuildKinds } from './prebuild-kinds';
import { prebuildResources } from './prebuild-resources';

main();

async function main() {
  await prebuildKinds();
  await prebuildResources();
  consola.success('[typedoc-plugin-markdown] Prebuild code complete');
}
