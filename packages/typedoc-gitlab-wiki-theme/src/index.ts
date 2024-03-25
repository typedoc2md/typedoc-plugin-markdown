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
  NavigationItem,
  PluginOptions,
} from 'typedoc-plugin-markdown';
import { DEFAULT_SIDEBAR_OPTIONS } from './options';
import * as options from './options/declarations';
import presets from './options/presets';

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
        /\[([^\]]+)\]\((?!https?:|\/|\.)([^)]+)\)/g,
        (match: string, text: string, url: string) => {
          let relativeUrl = url?.replace(/(.*).md/, '$1');
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
        const sidebarContent = getSidebar(
          output.navigation,
          app.options.getValue('outputFileStrategy'),
        );
        if (sidebarContent.length) {
          fs.writeFileSync(
            `${output.outputDirectory}/_sidebar.md`,
            `## ${sidebarHeading}\n\n${formatContents(
              getSidebar(
                output.navigation,
                app.options.getValue('outputFileStrategy'),
              ),
            )}`,
          );
        }
      }
    },
  );
}

export function navigation(navigationItems: NavigationItem[]): string {
  const md: string[] = [];
  navigationItems.forEach((navigationItem) => {
    if (navigationItem.url) {
      md.push(`- [${navigationItem.title}](${navigationItem.url})`);
    }
    if (navigationItem.children?.length) {
      md.push(`## ${navigationItem.title} \n`);
      navigationItem.children?.forEach((navItem) => {
        md.push(`- [${navItem.title}](${navItem.url})`);
      });
      md.push('\n');
    }
  });
  return md.join('\n');
}

export function getSidebar(
  navigationItems: NavigationItem[],
  outputFileStrategy: PluginOptions['outputFileStrategy'],
) {
  const parseSidebarUrl = (url: string) => url.replace(/(.*).md/, '$1');
  const md: string[] = [];
  const isGlobals = navigationItems?.every((child) => !Boolean(child.url));

  if (isGlobals) {
    navigationItems.forEach((navigationItem) => {
      md.push(`### ${navigationItem.title}`);
      if (navigationItem.children) {
        const childList = navigationItem.children
          ?.map(
            (child) =>
              `- [${child.title}](${parseSidebarUrl(child.url || '')})`,
          )
          .join('\n');
        md.push(childList);
      }
    });
  } else {
    if (outputFileStrategy === 'members') {
      navigationItems.forEach((navigationItem, i) => {
        md.push(`### ${navigationItem.title}`);
        if (navigationItem.children) {
          navigationItem.children.forEach((child) => {
            md.push(`#### ${child.title}`);
            if (child.children) {
              const childList = child.children
                ?.map(
                  (innerChild) =>
                    `- [${innerChild.title}](${
                      innerChild.url ? parseSidebarUrl(innerChild.url) : ''
                    })`,
                )
                .join('\n');
              md.push(childList);
            }
          });
        }
      });
    } else {
      const childList = navigationItems
        ?.map(
          (navItem) =>
            `- [${navItem.title}](${navItem.url ? parseSidebarUrl(navItem.url) : ''})`,
        )
        .join('\n');
      md.push(childList);
    }
  }
  return md.join('\n\n');
}

function formatContents(contents: string) {
  return (
    contents.replace(/[\r\n]{3,}/g, '\n\n').replace(/^\s+|\s+$/g, '') + '\n'
  );
}
