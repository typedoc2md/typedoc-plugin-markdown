---
'typedoc-plugin-markdown': patch
---

- Fire the `page.begin`, `page.end`, `content.begin` and `content.end` hooks on the readme page and on document pages, which previously fired no hooks. Content injected through these hooks, such as front matter added in `page.begin`, now also appears on those pages. The `index.page.begin` and `index.page.end` hooks still fire on the project page as before.
