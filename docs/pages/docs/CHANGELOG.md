# Changelog

## 4.1 (2024-06-21)

Version 4.1 introduces API compatibility fixes for TypeDoc 0.26.

### New features

#### TypeDoc 0.26 Feature Support

##### Localization

The plugin respects TypeDoc's 0.26 new localization model. For this reason the existing option `--textContentMappings` has been deprecated in favour of using this implementation.

##### Documents

The plugin respects TypeDoc's `@documents` implementation and attempts to follow a similar output structure.
In addition a new option [`--inlineDocuments`]() is available that will place documents in-place.

#### Table Changes

This release addresses some of the limitations of previous table implementations.

Options effected are `--parametersFormat`, `--propertiesFormat`, `--enumMembersFormat`, `--typeDeclarationFormat` and `--indexFormat`,

##### Markdown vs HTML tables

Pure markdown have a limitation whereby block level elements can not render inside a cell. A workaround to this is an attempt to parse content into HTML, however this in itself is an anti pattern and introduces other issues (for example there is no way to ascertain how code blocks are handled by the host markdown parser).

To overcome this issue a new key **"htmlTable"** which will wrap comments in an html table cell, which means that features such as code blocks can now render as intended and all parsing is the responsibility of the host's markdown parser.

Please note this does involve an output change whereby all line breaks are now stripped from the existing **"table"** key. If you would like to preserve markdown block elements in tabular format please updated to use the **"htmlTable"** key.

##### Additional Table Options

Please two additional table options have been exposed:

- **Column Visibility**: The option [`--tableColumnVisibility`]() introduces the ability to control what columns are displayed in output. This could be useful for some reflections that contain several columns.
- **Header alignment**: The plugin now does not define any header alignment by default. This typically results in table headers visually appearing center aligned. If you would prefer left align headers please use the [`--leftAlignTableHeaders`]() option.

## 4.0.2 (2024-05-15)

### Patch Changes

- Fix symbol url anchors when "flattenOutputFiles" is "true" ([#616](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/616))
- Normalize line breaks and tags within table columns ([#615](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/615))
- Remove superfluous spaces and symbol on external links ([#614](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/614))
- Escape all angle brackets with "santizeComments" ([#612](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/612))
- Correctly handle quoted symbol names ([#611](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/611))
- Correctly handle excludeScopesInPaths in windows ([#610](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/610))

## 4.0.1 (2024-05-07)

### Patch Changes

- Remove superfluous newlines from table column descriptions ([#591](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/591)).
- Handle multiple `@example` tags on same reflection.
- Fix missing extended by definitions.
- Escape Symbols with signatures correctly.

## 4.0.0 (2024-05-03)

> v4 is a major release that includes a number of bug fixes, new features and UI improvements.

### Architectural Changes

- Handlebars as a dependency has been removed.
- Updated customization model with the ability to set hooks, events and custom theming.
- Exposed navigation structure.

### Features

- Updated output file structure.
- Improved and cleaner UI.
- A set of updated and additional new options with comprehensive documentation.
- Exported option types and JSON schema.

### Structural Changes

- Each module member is now output to its own file by default. See option `--outputFileStrategy`. To achieve the same output as v3 (whereby only Classes, Enums and Interfaces have their own file), set the option `membersWithOwnFile` option.
- Parameters are output as a list by default. To achieve the same output as v3 (where parameters are output as a table), use option `--parametersFormat=table`.

### Breaking Changes

- Because the file structure has changed you may need to update any cross references to files in your documentation.
- Setting `theme` to `"markdown"` is no longer required and should be removed.
- The option `indexTitle` has been removed. Please use the `"title.indexPage"` key with option `--textContentMappings`.
- The option `allReflectionsHaveOwnDocument` has been removed (this behaviour is now the default). Please see option `outputFileStrategy`](/docs/options#outputfilestrategy).
- The option `entryDocument` has been renamed to `entryFileName` to better reflect its purpose.
- The option `namedAnchors` has been renamed to `useHTMLAnchors` to better reflect its purpose.
- The option `hideInPageTOC` has been removed. In-page TOC are no longer included by default. You can include in-page TOCs by using `typedoc-plugin-remark` and the `remark-toc` plugin.
- The option `objectLiteralTypeDeclarationStyle` has been removed. Please use option `--typeDeclarationFormat=list`.

### Bug Fixes

- Duplication in callback/callable/function properties. ([#581](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/581)).
- @experimental / @internal annotations. ([#556](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/556))
- Fix events output and strike-through deprecated items. ([#534](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/534))
- Class static functions are no longer marked. ([#533](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/533))
- @example block not rendered with Headline ([#501](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/501))
- Support for categories ([#499](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/499))
- Correctly resolve package readme urls from member pages. ([#483](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/483))
- Add the ability to add a separate frontmatter for readme file. ([#469](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/469))
- Items in tables are not linkable. ([#463](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/463))
- Custom i18n texts. ([#458](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/458))
- How to improve the formatting for types?. ([#456](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/456))
- How to change title format. ([#450](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/450))
- Export Docusaurus plugin options type. ([#440](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/440))
- How to export interface as a table. ([#403](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/403))
- Broken Link caused by Typescript class being defined in an index file. ([#402](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/403))
- Markdown plugin inserts unnecessary escape characters. ([#398](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/398))
- Potential bug with optional function argument. ([#396](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/396))
- Respect monorepo `readmeFile` configuration ([#383](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/383))
- Embed all objects under a Module/Namespace onto single page. ([#338](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/338))
- Extra spaces when merging lines in a table. ([#331](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/331))
- Does not support namespace (or module) and interface with same name. ([#300](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/300))
- Integration with VitePress? ([#287](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/287))
- Typedoc comments with text wrapped in `<` and `>` breaks Docusaurus Markdown parser. ([#276](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/276))
- Navigation support? ([#262](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/262))
- Sidebar Category Support? ([#213](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/213))
- Properties as Table like function properties. ([#109](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/109))
- Provide a link/excerpt/screenshot to a demo/example rendered output ([#102](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/102))

---

Earlier changelog entries can be found in `CHANGELOG_ARCHIVE.md`.
