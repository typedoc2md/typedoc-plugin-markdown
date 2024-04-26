import * as fs from 'fs';
import * as options from '../../../packages/typedoc-plugin-markdown/src/options/declarations';

main();

async function main() {
  const { getSchema } = await import('./get-scheme.cjs');
  const schema = await getSchema();

  for (const key in schema.properties) {
    schema.properties[key].description =
      `[typedoc-plugin-markdown] ${schema.properties[key].description}`;
    schema.properties[key].default =
      options[key].defaultValue || options[key].defaults;
    if (schema.properties[key].required) {
      delete schema.properties[key].required;
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

  const schemaString = JSON.stringify(schemaWrapper, null, 2);
  fs.writeFileSync('./docs/public/schema.json', schemaString);
}
