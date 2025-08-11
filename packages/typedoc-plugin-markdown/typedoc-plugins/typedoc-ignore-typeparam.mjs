// @ts-check

import { Converter, DeclarationReflection, ReflectionKind } from 'typedoc';

/**
 * Local plugin to tweak TypeDoc output for nextra docs
 *
 *  @param {import("../dist/index.js").MarkdownApplication} app
 */
export function load(app) {
  app.converter.on(Converter.EVENT_RESOLVE_END, (context) => {
    context.project
      .getReflectionsByKind(ReflectionKind.All)
      .forEach((reflection) => {
        if (
          reflection instanceof DeclarationReflection &&
          reflection.typeParameters
        ) {
          reflection.typeParameters = [];
        }
      });
  });
}
