// @ts-check

import { ReflectionKind } from 'typedoc';
import { MemberRouter } from 'typedoc-plugin-markdown';

/**
 * @param {import('typedoc').Application} app
 */
export function load(app) {
  app.renderer.defineRouter('custom-router', CustomRouter);
}

export class CustomRouter extends MemberRouter {
  /**
   * @param {import('typedoc').ProjectReflection} reflection
   */
  getIdealBaseName(reflection) {
    if (reflection.kind === ReflectionKind.Class) {
      return `custom-class-directory/${reflection.name}`;
    }
    return super.getIdealBaseName(reflection);
  }

  /**
   * @param {import('typedoc').RouterTarget} from
   * @param {import('typedoc').RouterTarget} to
   */
  relativeUrl(from, to) {
    return `wiki/${super.relativeUrl(from, to)}`;
  }
}
