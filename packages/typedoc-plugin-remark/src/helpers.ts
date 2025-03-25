import * as path from 'path';
import { PageKind, Reflection, ReflectionKind } from 'typedoc';
import { MarkdownPageEvent } from 'typedoc-plugin-markdown';
import { KIND_TO_STRING } from './options/constants.js';
import { RemarkPlugin } from './types/options.js';

export function getPlugins(page: MarkdownPageEvent, plugins: RemarkPlugin[]) {
  return plugins.reduce(
    (acc: [string, Record<string, any>][], plugin: RemarkPlugin) => {
      if (
        typeof plugin === 'object' &&
        'applyTo' in plugin &&
        'plugins' in plugin
      ) {
        if (plugin.applyTo.length === 1 && plugin.applyTo[0] === '*') {
          acc = [...acc, ...plugin.plugins];
        }

        if (
          plugin.applyTo.includes('Readme') &&
          page.pageKind === PageKind.Index
        ) {
          acc = [...acc, ...plugin.plugins];
        }
        if (
          plugin.applyTo.includes('Index') &&
          page.pageKind !== PageKind.Index &&
          (page.model as Reflection).kind === ReflectionKind.Project
        ) {
          acc = [...acc, ...plugin.plugins];
        }
        if (
          plugin.applyTo.includes(
            KIND_TO_STRING.get((page.model as Reflection).kind) as string,
          )
        ) {
          acc = [...acc, ...plugin.plugins];
        }
      } else {
        acc.push(plugin);
      }
      return acc;
    },
    [],
  );
}

export function getFullPath(name: string) {
  const isLocalPath = /^\.{1,2}\/|^\//.test(name as string);
  return isLocalPath ? path.resolve(process.cwd(), name as string) : name;
}
