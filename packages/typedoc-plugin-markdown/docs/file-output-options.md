# File output and content organization

TypeDoc creates documentation according to exports. The module structure is drived from the `--entryPoints` configuration. https://typedoc.org/options/input/#entrypoints.

All TypeDoc organization and sorting options will be adhered to https://typedoc.org/options/organization/.

In addition, the plugin aims to provide some additional flexibility as to how files are generated.

## Output folder structure

By default the file structure is generated as per the project module structure.

### --outputFileStrategy

The plugin exposes an additional option `outputFileStrategy` that determines how files are generated. The options are `members` or `modules`.

#### `members` (default)

Each member is exported to its own file. This is the standard behaviour of the HTML theme and the plugin default.

**typedoc.json**

```js
{
  outputFileStrategy: 'members';
}
```

**Folder structure**

```
├── README.md
├── index.md
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

#### `modules`

This mode generates a single file for every Module and Namespace where all module members are hoisted. This creates a flat navigation structure and reduces the amount of files generated.

**typedoc.json**

```js
{
  outputFileStrategy: 'modules';
}
```

**Folder structure**

```
├── README.md
├── index.md
├── module.moduleA.md
├── module.moduleB.md
```

### --includeFileNumberPrefixes

The `--includeFileNumberPrefixesA` prefixes files and folders with number prefxies. This makes them appear in the file system in the same order when sorted by file name and is useful where auto sidebar generation may be required.

**Folder structure**

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

### --excludeGroups

By default members are grouped under their respecitve reflection kind headings:

```markdown
# SomeModule

## Classes

### ClassA

## Functions

### FunctionA
```

This `excludeGroups` option excludes such grouping so all members are rendered and sorted at same level.

```markdown
# SomeModule

## ClassA

## FunctionA
```

The is more relevant when `outputFileStrategy` equals `modules`. When `outputFileStrategy` equals `members` only the index page structure is effected.

This will also effect the generated file output and remove the respective group folders.
