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
    docsPath: '/plugins/frontmatter',
    declarations: true,
    presets: false,
  },
  ['typedoc-plugin-remark']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    optionsPath: 'plugins/remark',
    docsPath: '/plugins/remark',
    declarations: true,
    presets: false,
  },
  ['typedoc-github-wiki-theme']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    optionsPath: 'plugins/github-wiki',
    docsPath: '/plugins/github-wiki',
    declarations: true,
    presets: false,
  },
  ['typedoc-gitlab-wiki-theme']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    optionsPath: 'plugins/gitlab-wiki',
    docsPath: '/plugins/gitlab-wiki',
    declarations: true,
    presets: false,
  },
  ['typedoc-vitepress-theme']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    optionsPath: 'plugins/vitepress',
    docsPath: '/plugins/vitepress',
    declarations: true,
    presets: false,
  },
  ['docusaurus-plugin-typedoc']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    presetsPath: `${process.cwd()}/src/opions/presets.ts`,
    optionsPath: '/plugins/docusaurus',
    docsPath: '/plugins/docusaurus',
    declarations: true,
    presets: false,
  },
};
