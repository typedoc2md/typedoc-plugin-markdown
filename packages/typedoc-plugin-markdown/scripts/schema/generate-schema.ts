import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { declarations } from '../../src/options/index.js';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

main();

async function main() {
  const { getSchema } = await import('./get-scheme.cjs');
  const schema = await getSchema();

  for (const key in schema.properties) {
    const property = schema.properties[key];
    if (typeof property === 'object' && property !== null) {
      property.description = `[typedoc-plugin-markdown] ${property.description || (property as any)?.deprecated}`;
      property.default =
        declarations[key].defaultValue || declarations[key].defaults;
      if (property.required) {
        delete property.required;
      }
    }
  }

  if (schema.required) {
    delete schema.required;
  }

  const $schema = schema.$schema;

  delete schema.$schema;

  const schemaWrapper = {
    $schema,
    allOf: [
      { $ref: 'https://typedoc.org/schema.json' },
      {
        ...schema,
      },
    ],
  };

  const schemaFile = path.join(
    __dirname,
    '../../../../docs/public/schema.json',
  );

  const schemaString = JSON.stringify(schemaWrapper, null, 2);
  fs.writeFileSync(schemaFile, schemaString);
}
