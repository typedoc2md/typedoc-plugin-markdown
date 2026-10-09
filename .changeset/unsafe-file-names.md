---
'typedoc-plugin-markdown': patch
---

- Remove `#`, `?` and `\` from generated file names, so links to pages such as a document titled `FAQ: What's new? #1` resolve.
- Keep names made only of underscores, so `export function _()` is written to `functions/_.md` instead of an empty file name.
- Match `entryModule` against modules only, so a function or class sharing the module's name keeps its page, and find the entry module when project documents are present.
- Write the readme page once with the core routers and `mergeReadme`, instead of a second page at the same URL.
