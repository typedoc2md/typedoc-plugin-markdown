---
'typedoc-plugin-markdown': patch
---

- Match `entryModule` against modules only, so a function or class sharing the module's name keeps its page, find the entry module when project documents are present, and write the readme page once with the core routers and `mergeReadme` instead of a second page at the same URL.
