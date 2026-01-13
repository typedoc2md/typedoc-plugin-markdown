import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { declarations } from '../../src/options/index.js';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

main(false);
main(true);

async function main(published: boolean) {
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
      {
        $ref: published
          ? 'https://typedoc.org/schema.json'
          : '../typedoc/typedoc-config.schema.json',
      },
      {
        ...schema,
      },
    ],
  };

  const schemaFile = published
    ? path.join(__dirname, '../../../../docs/public/schema.json')
    : path.join(__dirname, '../../typedoc-plugin-markdown.schema.json');

  const schemaString = JSON.stringify(schemaWrapper, null, 2);
  fs.writeFileSync(schemaFile, schemaString);
}
