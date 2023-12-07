import { DocsConfig } from './models';

export const DECLARATIONS_PATH = `${process.cwd()}/src/options/declarations.ts`;

export const PRESETS_PATH = `${process.cwd()}/src/options/presets.ts`;

export const DOCS_CONFIG: Record<string, DocsConfig> = {
  ['typedoc-plugin-markdown']: {
    optionsPath: 'options',
    docsPath: '',
    declarations: true,
    presets: false,
  },
  ['typedoc-plugin-frontmatter']: {
    optionsPath: 'utilities/frontmatter',
    docsPath: '/utilities/frontmatter',
    declarations: true,
    presets: false,
  },
  ['typedoc-plugin-remark']: {
    optionsPath: 'utilities/remark',
    docsPath: '/utilities/remark',
    declarations: true,
    presets: false,
  },
  ['typedoc-github-wiki-theme']: {
    optionsPath: 'themes/github-wiki',
    docsPath: '/themes/github-wiki',
    declarations: false,
    presets: true,
  },
  ['typedoc-gitlab-wiki-theme']: {
    optionsPath: 'themes/gitlab-wiki',
    docsPath: '/themes/gitlab-wiki',
    declarations: false,
    presets: true,
  },
  ['typedoc-vitepress-theme']: {
    optionsPath: 'themes/vitepress',
    docsPath: '/themes/vitepress',
    declarations: true,
    presets: false,
  },
  ['docusaurus-plugin-typedoc']: {
    optionsPath: '/integrations/docusaurus/options',
    docsPath: '/integrations/docusaurus',
    declarations: false,
    presets: false,
  },
};
