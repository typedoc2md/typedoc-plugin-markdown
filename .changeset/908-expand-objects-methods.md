---
'typedoc-plugin-markdown': minor
---

This release is a sweep of rendering fixes checked against TypeDoc's own output. Most of them change the generated markdown, so expect diffs when docs are regenerated. No option or public type changes.

- Render methods inside object types with their call signatures, every overload and their comments, instead of only the first overload's return type. This applies to expanded objects (`expandObjects`), properties tables, parameter tables and lists, and type declaration tables, where nested methods also keep their path prefix (`inner.fn()`) (#908).
