module.exports = {
  getSchema: async () => {
    /** @type {import('ts-json-schema-generator/dist/src/Config').Config} */
    const config = {
      path: 'packages/typedoc-plugin-markdown/src/options/option-types.ts',
      tsconfig: 'tsconfig.schema.json',
      type: 'PluginOptions',
      topRef: false,
      additionalProperties: true,
    };
    const { createGenerator } = await import('ts-json-schema-generator');
    const schema = createGenerator(config).createSchema(config.type);
    return schema;
  },
};
