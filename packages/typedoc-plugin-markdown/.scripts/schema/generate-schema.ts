import * as fs from 'fs';
import * as path from 'path';
import * as options from '../../src/options/declarations';

main();

async function main() {
  const { getSchema } = await import('./get-scheme.cjs');
  const schema = await getSchema();

  for (const key in schema.properties) {
    const property = schema.properties[key];
    if (typeof property === 'object' && property !== null) {
      property.description = `[typedoc-plugin-markdown] ${property.description}`;
      property.default = options[key].defaultValue || options[key].defaults;
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
