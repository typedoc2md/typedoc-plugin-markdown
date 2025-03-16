import {
  CategoryRouter,
  GroupRouter,
  KindDirRouter,
  KindRouter,
  MemberFlatRouter,
  MemberRouter,
  ModuleFlatRouter,
  ModuleRouter,
  StructureDirRouter,
  StructureRouter,
} from '@plugin/router/index.js';
import { MarkdownTheme } from '@plugin/theme/index.js';
import {
  MarkdownRenderer,
  MarkdownRendererHooks,
} from '@plugin/types/index.js';
import * as fs from 'fs';
import * as path from 'path';
import { Application, Context, Converter, EventHooks, Router } from 'typedoc';

/**
 *  Create dedicated hooks and async job collections for markdown rendering.
 */
export function setupRenderer(app: Application) {
  app.renderer.defineTheme('markdown', MarkdownTheme);

  Object.defineProperty(app.renderer, 'markdownHooks', {
    value: new EventHooks<MarkdownRendererHooks, string>(),
  });

  Object.defineProperty(app.renderer, 'routers', {
    value: new Map<string, new (app: Application) => Router>([
      // custom routers
      ['member', MemberRouter],
      ['member-flat', MemberFlatRouter],
      ['module', ModuleRouter],
      ['module-flat', ModuleFlatRouter],

      // core routers (decorated)
      ['kind', KindRouter],
      ['kind-dir', KindDirRouter],
      ['structure', StructureRouter],
      ['structure-dir', StructureDirRouter],
      ['group', GroupRouter],
      ['category', CategoryRouter],
    ]),
  });

  app.converter.on(Converter.EVENT_RESOLVE_END, (context) => {
    if (app.options.packageDir) {
      resolvePackages(app, context, app.options.packageDir);
    }
  });
}

/**
 * Resolves packages meta data for the project.
 *
 * @remarks
 *
 * Currently options set for packages are only stored on the converter and are destroyed before being passed to the Renderer.
 *
 * By intercepting the package options set in the converter and storing them on the renderer we can use them later in the theme.
 */
function resolvePackages(
  app: Application,
  context: Context,
  packageDir: string,
) {
  const packageJsonContents = fs
    .readFileSync(path.join(packageDir, 'package.json'))
    .toString();

  const packageJson = packageJsonContents
    ? JSON.parse(packageJsonContents)
    : {};

  const renderer = app.renderer as MarkdownRenderer;

  renderer.packagesMeta = {
    ...(renderer.packagesMeta || {}),
    [context.project.name]: {
      description: packageJson.description,
      options: app.options,
    },
  };
}
