# Changelog

## 4.2.5

### Patch Changes

- Expose comment for arrow functions in type declarations ([#670](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/670))
- Tables generated with the "htmlTable" key will include `<thead>` and `<tbody>` elements to fix MDX compatibility issues ([#671](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/671))
- Expose missing descriptions with accessor keyword ([#664](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/664))

## 4.2.4 (2024-08-13)

### Patch Changes

- Expose comments to reflections with the accessor keyword ([#664](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/664))
- Omit constructors from category groups ([#661](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/661))
- Update categories structure in navigation to match interface model

## 4.2.3 (2024-07-24)

### Patch Changes

- Fix missing return comments for const functions ([#656](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/656))

## 4.2.2 (2024-07-22)

### Patch Changes

- Correctly resolve comment summary for const functions ([#656](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/656))
- Fix anchor links containing generics ([#655](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/655))

## 4.2.1 (2024-07-11)

### Patch Changes

- Fix missing index descriptions for signatures ([#618](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/618))

## 4.2.0 (2024-07-10)

### Minor Changes

- Exposed "modulesFileName" option ([#647](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/647))
- Write `.nojekyll` file if TypeDocs "githubPages" option is true ([#650](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/650))
- Exposed "blockTagsPreserveOrder" option to configure ordering of comment block tags ([#627](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/627)).
- Exposed "useHTMLEncodedBrackets" option for alternative angle bracket escaping([#564](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/564)).

## 4.1.2 (2024-07-05)

### Patch Changes

- Support TypeDoc 0.26 relative links implementation ([#645](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/645)).

## 4.1.1 (2024-06-30)

### Patch Changes

- Normalize window paths when "publicPath" is set ([#639](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/639))

## 4.1.0 (2024-06-22)

### New Features

- Theme support for TypeDoc’s 0.26 localization model.
- Theme support for TypeDoc’s 0.26 documents implementation.
- Exposed a new key "htmlTable" to formatting options enabling block elements to render as intended inside table cells. Affects all existing formatting options. Fixes ([#618](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/618)).
- Added new formatting options --classPropertiesFormat, --interfacePropertiesFormat and --propertyMembersFormat to further control formatting of different declaration structures.
- Supports the ability to control what table columns are rendered with the --tableColumnSettings option.

### Patch Changes

- Handle duplicate files when tagged in same group ([#625](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/625))
- Fix issues with tables and block tags ([#618](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/618))

## 4.0.3 (2024-05-27)

### Patch Changes

- Remove superfluous quotes from prop names ([#619](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/619))
- Fix display of index descriptions in tables ([#618](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/618))

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

### New Features

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
