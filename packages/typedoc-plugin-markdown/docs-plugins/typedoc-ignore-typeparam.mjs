// @ts-check

import { Converter, ReflectionKind } from 'typedoc';

/**
 * Local plugin to tweak TypeDoc output for nextra docs
 *
 *  @param {import("typedoc-plugin-markdown").MarkdownApplication} app
 */
export function load(app) {
  const ignoredTypeParameters = [];
  app.converter.on(
    Converter.EVENT_CREATE_TYPE_PARAMETER,
    (_ctx, param, node) => {
      if (node?.getFullText().includes('@ignore')) {
        ignoredTypeParameters.push(param);
      }
    },
  );
  app.converter.on(Converter.EVENT_RESOLVE_BEGIN, () => {
    for (const param of ignoredTypeParameters) {
      removeIfPresent(param.parent.typeParameters, param);
      const ctor = param.parent.children?.find((r) =>
        r.kindOf(ReflectionKind.Constructor),
      );
      for (const s of ctor?.signatures ?? []) {
        removeIf(s.typeParameters, (p) => p.name === param.name);
      }
    }
    ignoredTypeParameters.length = 0;
  });
}

function removeIf(arr, fn) {
  const index = arr?.findIndex(fn) ?? -1;
  if (index !== -1) {
    arr.splice(index, 1);
  }
}

function removeIfPresent(arr, item) {
  const index = arr?.indexOf(item) ?? -1;
  if (index !== -1) {
    arr.splice(index, 1);
  }
}
