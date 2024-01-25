import { DocsConfig } from './models';

export const PRESETS_PATH = `${process.cwd()}/src/options/presets.ts`;

export const DOCS_CONFIG: Record<string, DocsConfig> = {
  ['typedoc-plugin-markdown']: {
    declarationsPath: `${process.cwd()}/src/plugin/options/declarations.ts`,
    optionsPath: 'options',
    docsPath: '',
    declarations: true,
    presets: false,
  },
  ['typedoc-plugin-frontmatter']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    optionsPath: 'utilities/frontmatter',
    docsPath: '/utilities/frontmatter',
    declarations: true,
    presets: false,
  },
  ['typedoc-plugin-remark']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    optionsPath: 'utilities/remark',
    docsPath: '/utilities/remark',
    declarations: true,
    presets: false,
  },
  ['typedoc-github-wiki-theme']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    optionsPath: 'themes/github-wiki',
    docsPath: '/themes/github-wiki',
    declarations: true,
    presets: true,
  },
  ['typedoc-gitlab-wiki-theme']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    optionsPath: 'themes/gitlab-wiki',
    docsPath: '/themes/gitlab-wiki',
    declarations: true,
    presets: true,
  },
  ['typedoc-vitepress-theme']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    optionsPath: 'themes/vitepress',
    docsPath: '/themes/vitepress',
    declarations: true,
    presets: false,
  },
  ['docusaurus-plugin-typedoc']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    optionsPath: '/integrations/docusaurus/options',
    docsPath: '/integrations/docusaurus',
    declarations: false,
    presets: false,
  },
};
