---
'typedoc-plugin-frontmatter': patch
'typedoc-plugin-remark': patch
'typedoc-vitepress-theme': patch
'typedoc-docusaurus-theme': patch
'docusaurus-plugin-typedoc': patch
'typedoc-github-wiki-theme': patch
'typedoc-gitlab-wiki-theme': patch
---

- Declare `typedoc` as a peer dependency so it resolves from the package's own `node_modules` rather than the consumer's hoisting layout (#891).
