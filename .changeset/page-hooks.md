---
'typedoc-plugin-markdown': minor
---

- Fire the `page.begin`, `page.end`, `content.begin` and `content.end` hooks on the readme page and on document pages, which previously fired no hooks, so content injected through them (such as front matter) now appears there too. The `index.page.begin` and `index.page.end` hooks still fire on the project page as before.
