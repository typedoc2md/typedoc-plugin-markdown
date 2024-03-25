import { DocsConfig } from './models';

export const PRESETS_PATH = `${process.cwd()}/src/options/presets.ts`;

export const DOCS_CONFIG: Record<string, DocsConfig> = {
  ['typedoc-plugin-markdown']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    optionsPath: '/docs',
    docsPath: '/docs',
    declarations: true,
    presets: false,
  },
  ['typedoc-plugin-frontmatter']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    optionsPath: 'plugins/frontmatter',
    docsPath: '/plugins/frontmatter/introduction',
    declarations: true,
    presets: false,
  },
  ['typedoc-plugin-remark']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    optionsPath: 'plugins/remark',
    docsPath: '/plugins/remark/introduction',
    declarations: true,
    presets: false,
  },
  ['typedoc-github-wiki-theme']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    optionsPath: 'plugins/github-wiki',
    docsPath: '/plugins/github-wiki/introduction',
    declarations: true,
    presets: true,
  },
  ['typedoc-gitlab-wiki-theme']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    optionsPath: 'plugins/gitlab-wiki',
    docsPath: '/plugins/gitlab-wiki/introduction',
    declarations: true,
    presets: true,
  },
  ['typedoc-vitepress-theme']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    optionsPath: 'plugins/vitepress',
    docsPath: '/plugins/vitepress/introduction',
    declarations: true,
    presets: false,
  },
  ['docusaurus-plugin-typedoc']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    optionsPath: '/plugins/docusaurus/options',
    docsPath: '/plugins/docusaurus/introduction',
    declarations: false,
    presets: false,
  },
};
