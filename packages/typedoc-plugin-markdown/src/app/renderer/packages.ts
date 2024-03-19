import * as fs from 'fs';
import * as path from 'path';
import { Application, Context } from 'typedoc';
import { MarkdownRenderer } from './renderer-types';

export function resolvePackages(
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
