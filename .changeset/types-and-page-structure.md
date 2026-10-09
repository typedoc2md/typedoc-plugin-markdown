---
'typedoc-plugin-markdown': patch
---

- Render named tuple members with their names and optional markers (`[first: string, second?: number]`), instead of the element types alone.
- List each parent under "Extends" as its own item, instead of joining them with `.`.
- Render the object members of an intersection under a single "Type Declaration" heading, after the type parameters.
- List each document group's documents only under that group's heading, instead of every group's documents under each heading.
