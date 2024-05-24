import { DocsConfig } from './models';

export const SRC_PATH = `${process.cwd()}/src`;
export const PRESETS_PATH = `${process.cwd()}/src/options/presets.ts`;

export const DOCS_CONFIG: Record<string, DocsConfig> = {
  ['typedoc-plugin-markdown']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    translatablePath: `${process.cwd()}/src/app/translatable.ts`,
    optionsPath: '/docs',
    docsPath: '/docs',
    declarations: true,
    presets: false,
    categories: {
      file: 'Options that are used to configure how files are output.',
      display:
        'Options that are used to configure how the output is structured and displayed .',
      utility:
        'Options that are used for general configuration and utility purposes.',
    },
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
    presetsPath: `${process.cwd()}/src/options/presets.ts`,
    optionsPath: 'plugins/github-wiki',
    docsPath: '/plugins/github-wiki',
    declarations: true,
    presets: true,
  },
  ['typedoc-gitlab-wiki-theme']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    presetsPath: `${process.cwd()}/src/options/presets.ts`,
    optionsPath: 'plugins/gitlab-wiki',
    docsPath: '/plugins/gitlab-wiki',
    declarations: true,
    presets: true,
  },
  ['typedoc-vitepress-theme']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    presetsPath: `${process.cwd()}/src/options/presets.ts`,
    optionsPath: 'plugins/vitepress',
    docsPath: '/plugins/vitepress',
    declarations: true,
    presets: true,
  },
  ['docusaurus-plugin-typedoc']: {
    declarationsPath: `${process.cwd()}/src/options/declarations.ts`,
    presetsPath: `${process.cwd()}/src/options/presets.ts`,
    optionsPath: '/plugins/docusaurus',
    docsPath: '/plugins/docusaurus',
    declarations: true,
    presets: true,
  },
};
