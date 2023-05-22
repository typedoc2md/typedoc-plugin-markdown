# File output and content organization options

TypeDoc creates documentation according to `--entryPoints` configuration. https://typedoc.org/options/input/#entrypoints and files are generated according to resultant project structure.

All TypeDoc organization and sorting options will be adhered to https://typedoc.org/options/organization/.

In addition, the plugin aims to provide some additional flexibility as to how files are generated.

- [outputFileStrategy](#outputfilestrategy)
- [includeFileNumberPrefixes](#includefilenumberprefixes)
- [entryFileName](#entryfilename)
- [skipIndexPage](#skipindexpage)
- [indexPageTitle](#indexpagetitle)
- [excludeGroups](#excludegroups)

## outputFileStrategy

> [`members`, `modules`] - Default `members`

Determines how the files are generated. The available values are `members` or `modules`. Defaults to `members`.

### members

```js
{
  outputFileStrategy: 'members';
}
```

Generates an individual file for each exported member/symbol. This is the standard behaviour of the HTML theme and the plugin default.

```
├── README.md
├── globals.md
│ ├── module.moduleA
|    ├── index.md
|    ├── classes
|      ├── class.ClassA.md
│    ├── interfaces
|      ├── interface.InterfaceA.md
│ ├── module.moduleB
|    ├── index.md
|    ├── classes
|      ├── class.ClassA.md
│    ├── interfaces
|      ├── interface.InterfaceA.md
```

### modules

```js
{
  outputFileStrategy: 'modules';
}
```

Generates a single file for every Module and Namespace where all members are hoisted. This creates a flat navigation structure and reduces the amount of files generated.

```
├── README.md
├── globals.md
├── module.moduleA.md
├── module.moduleB.md
```

## includeFileNumberPrefixes

> Default `false`

```js
{
  includeFileNumberPrefixes: true;
}
```

The `--includeFileNumberPrefixesA` prefixes files and folders with number prefixes. This makes them appear in the file system in the same order when sorted by file name and is useful where auto sidebar generation may be required.

```
├── index.md
│ ├── 01-module.moduleA
|    ├── index.md
|    ├── 01-Classes
|      ├── 01-class.ClassA.md
|      ├── 02-class.ClassB.md
│    ├── 02-Interfaces
|      ├── 01-interface.InterfaceA.md
│ ├── 02-module.moduleB
```

## entryFileName

> Default `README.md`

```js
{
  entryFileName: 'README.md';
}
```

The file name of folder entry pages. `README.md` is recognised when browsing folders on repos and Wikis, while using `index.md` makes the behavior more in line with documentation sites. Defaults to `README.md`.

Note the content of this file is either the API entry / index page, or the project readme (dependant on if a readme file is resolved or not).

a. If a readme file is resolved then two root files are generated:

```
├── {entryFileName} - (the project readme file)
├── API.md - (API index page)
```

b. If a readme file is NOT resolved, then the index page becomes the entryFileName page.

```
├── {entryFileName} - (API index page)
```

## skipIndexPage

> Default `false`

```js
{
  skipIndexPage: true;
}
```

Skips writing of the API index page to the file system.

The API index page may not always be required - for example if there is additional navigation context.

In addition it is possible to inject the index page contents into the readme. This can be acheived by adding the placeholder text `$TYPEDOC_GLOBALS` into the readme file.

## indexPageTitle

> Default `{projectName}`

```js
{
  indexPageTitle: 'API Reference';
}
```

Optionally sets the title of the API index page to something other than the project name.

## excludeGroups

```js
{
  excludeGroups: true;
}
```

By default members are grouped under their respecitve reflection kind headings:

This `excludeGroups` option excludes such grouping so all members are rendered and sorted at same level.

### With groups

```markdown
# SomeModule

## Classes

### ClassA

## Functions

### FunctionA
```

### Without groups

```markdown
# SomeModule

## ClassA

## FunctionA
```

The is more relevant when `outputFileStrategy` equals `modules`. When `outputFileStrategy` equals `members` only the index page structure is effected.

This will also effect the generated file output and remove the respective group folders.
