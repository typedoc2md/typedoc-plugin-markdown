import * as fs from 'fs';
import {
  Application,
  DeclarationOption,
  Options,
  OptionsReader,
  Reflection,
} from 'typedoc';
import {
  MarkdownPageEvent,
  MarkdownRendererEvent,
} from 'typedoc-plugin-markdown';
import { DEFAULT_SIDEBAR_OPTIONS } from './options';
import * as options from './options/declarations';
import presets from './options/presets';
import { getSidebar } from './sidebar';

export function load(app: Application) {
  Object.entries(options).forEach(([name, option]) => {
    app.options.addDeclaration({
      name,
      ...option,
    } as DeclarationOption);
  });

  app.options.addReader(
    new (class implements OptionsReader {
      name = 'gitlab-wiki-options';
      readonly order = 0;
      readonly supportsPackages = false;
      read(container: Options) {
        Object.entries(presets).forEach(([key, value]) => {
          container.setValue(key, value);
        });
      }
    })(),
  );

  app.renderer.on(
    MarkdownPageEvent.END,
    (page: MarkdownPageEvent<Reflection>) => {
      page.contents = page.contents?.replace(
        /\[([^\]]+)\]\((?!https?:)([^)]+)\)/g,
        (match: string, text: string, url: string) => {
          let relativeUrl = url?.replace(/\.md/g, '');
          if (!relativeUrl.startsWith('.') && !relativeUrl.startsWith('/')) {
            relativeUrl = './' + relativeUrl;
          }
          return `[${text}](${encodeURI(relativeUrl)})`;
        },
      );
    },
  );

  app.renderer.postRenderAsyncJobs.push(
    async (output: MarkdownRendererEvent) => {
      const sidebarOptions = {
        ...DEFAULT_SIDEBAR_OPTIONS,
        ...app.options.getValue('sidebar'),
      };
      if (sidebarOptions.autoConfiguration && output.navigation) {
        const sidebarHeading = sidebarOptions.heading;
        const sidebarContent = getSidebar(output.navigation);
        if (sidebarContent.length) {
          fs.writeFileSync(
            `${output.outputDirectory}/_sidebar.md`,
            `## ${sidebarHeading}\n\n${formatContents(
              getSidebar(output.navigation),
            )}`,
          );
        }
      }
    },
  );
}

function formatContents(contents: string) {
  return (
    contents.replace(/[\r\n]{3,}/g, '\n\n').replace(/^\s+|\s+$/g, '') + '\n'
  );
}
