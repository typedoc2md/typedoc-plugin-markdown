// @ts-check

/**
 * Local plugin to tweak TypeDoc output for nextra docs
 *
 * @param {import("typedoc-plugin-markdown").MarkdownApplication} app
 */
export function load(app) {
  app.converter.addUnknownSymbolResolver((ref) => {
    if (ref?.symbolReference?.path && ref.moduleSource !== 'typedoc') {
      const name = ref?.symbolReference?.path[0].path;
      return {
        target: `https://typedoc.org/api/classes/${name}`,
        caption: name,
      };
    }
  });
}
