import {
  Application,
  DeclarationOption,
  DeclarationReflection,
  ReflectionKind,
  RendererEvent,
} from 'typedoc';
import { MarkdownPageEvent, OutputFileStrategy } from 'typedoc-plugin-markdown';
import * as options from './options/declarations';

export function load(app: Application) {
  Object.entries(options).forEach(([name, option]) => {
    app.options.addDeclaration({
      name,
      ...option,
    } as DeclarationOption);
  });

  app.renderer.on(MarkdownPageEvent.END, (event: MarkdownPageEvent) => {
    const isModulesOnly = (
      event?.model as DeclarationReflection
    ).children?.every((child) => child.kindOf(ReflectionKind.Module));
    const outputFileStrategy = app.options.getValue('outputFileStrategy');

    const kindsWithToc = [
      ReflectionKind.Namespace,
      ReflectionKind.Class,
      ReflectionKind.Enum,
      ReflectionKind.Interface,
    ];

    if (outputFileStrategy === OutputFileStrategy.Modules) {
      kindsWithToc.push(ReflectionKind.Module);
      if (!isModulesOnly) {
        kindsWithToc.push(ReflectionKind.Project);
      }
    }

    if (kindsWithToc.includes(event.model?.kind)) {
      const contents = event.contents;
      const contentToLines = contents?.split('\n');
      const firstHeadingIndex = contentToLines?.findIndex((line) =>
        line.startsWith('##'),
      );
      if (firstHeadingIndex && firstHeadingIndex > 0) {
        contentToLines?.splice(firstHeadingIndex, 0, `\n\n## Contents\n\n`);
        event.contents = contentToLines?.join('\n');
      }
    }
  });

  app.renderer.postRenderAsyncJobs.push(async (output: RendererEvent) => {
    const remarkPlugins = app.options.getValue('remarkPlugins') as any;
    if (output.urls?.length) {
      await Promise.all(
        output.urls?.map(async (urlMapping) => {
          const { parseContents } = await require('./remark.cjs');
          const filePath = `${output.outputDirectory}/${urlMapping.url}`;
          return await parseContents(filePath, remarkPlugins);
        }),
      );
      if (remarkPlugins.length) {
        app.logger.info(
          `Output parsed using remark plugin(s) [${remarkPlugins
            .map((plugin) => `"${plugin}"`)
            .join(', ')}]`,
        );
      }
    }
  });
}
