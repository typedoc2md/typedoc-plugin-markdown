module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['chore', 'docs', 'feat', 'fix', 'test', 'refactor'],
    ],
    'scope-empty': [2, 'never'],
    'scope-enum': [
      2,
      'always',
      [
        'all',
        'core',
        'frontmatter',
        'remark',
        'docusaurus',
        'vitepress',
        'githubwiki',
        'gitlabwiki',
        'docs',
        'refactor',
        'quality',
      ],
    ],
  },

  ignores: [(commit) => commit.startsWith('Version Packages')],
};
