---
'typedoc-plugin-markdown': patch
---

- Keep literal values verbatim in code blocks (`useCodeBlocks`). Literals that looked like markdown were rewritten: `'[a](b)'` became `"a"`, `'&lt;b&gt;'` became `"<b>"` and `'C:\\temp'` lost a backslash.
- Escape backslashes in text rendered outside code, so `'C:\\temp'` displays as written instead of as `C:\temp`.
- List a class under every hierarchy root it extends or implements on the hierarchy summary page, instead of only the first.
