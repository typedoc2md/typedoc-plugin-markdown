# Readme files

## Readme options

The plugin adheres to the [readme](https://typedoc.org/guides/options/#readme) option of Typedoc and will copy the file to the root of the project (or for Monorepo's into into package subfolders as defined in the [readmeFile](https://typedoc.org/guides/monorepo/#readmefile) option). To ignore Readme generation completely use `readme --none`.

## Referencing API docs from Readme

By default the readme is copied into the generated documentation as is. If some navigation context is required (for example where there is no navigation context) then there are 2 options to link to the API docs:

- Manually linking to the modules.md file.
- Injecting the Index fragment using the pattern syntax `[TYPEDOC_INDEX]`.

### Example

```markdown
# My Project Readme

Link to [API](modules.md) docs here.

Insert project index (or package index for monorepos):

[TYPEDOC_INDEX]
```
