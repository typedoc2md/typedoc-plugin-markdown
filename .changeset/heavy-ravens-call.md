---
'typedoc-plugin-markdown': patch
---

- Anchors inside table cells (when property formats equal "table") are now namespaced by reflection kind (for example property-foo) to prevent collisions with Markdown heading slugs and ensure stable in-page links (#856).
