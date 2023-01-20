# File output options

TypeDoc creates documentation according to exports. The modules strucutre will be driven by the implemented an entry point config. https://typedoc.org/guides/options/#entrypointstrategy.

The plugin aims to provide some flexibility as to how files can be generated.

## Configuring how files are generated

By default all exported symbols are contained in their own file as per the HTML theme. Modules and namespaces always have a file in their own scope, however configuring what symbols are hoisted onto the module file can be configured with the `symbolsWithOwnFile` option.

All symobols can be hoisted onto a single module/namespace file with `none`, or to defined at a granular level the option accepts an array of the following types of symbol.

- `class` - reflections which represent a class.
- `interface` - reflections which represent an interface
- `type` - reflections which represent a type alias
- `enum` - reflections which represent an enum.
- `function` - reflections which represent a function's or method's signatures.
- `var` - reflections which represent a variable.

### Examples

The following will create seperate files for classes and interfaces only.

```bash
--symbolsWithOwnFile class --symbolsWithOwnFile interface
```

To hoist all symbols onto the module document can be achieved with the `none` options. If exporting from a single this will effectively result in a single file documentation.

```bash
--symbolsWithOwnFile none
```

_Note when definiting arrays using a json options file is less verbose:_

```js
{
  symbolsWithOwnFile: ['class', 'interface'];
}
```

## Configuring the output directory structure

### Default structure (by symbols)

As per the HTML theme, by default the plugin groups exports in directories following the symbol type producing the following output.

```
├── README.md
│ ├── classes
|    ├── moduleA.classA.md
|    ├── moduleB.classA.md
│ ├── interfaces
│    ├── moduleA.interfaceA.md
│    ├── moduleB.interfaceA.md
│ ├── modules
|    ├── moduleA.md
|    ├── moduleB.md
```

### Module structure

In some instances this structure is not optimum, for example when navigation might depend on it, where a more deteministic structure would be preferred.

To generate a file structure following the module paths use the `--fileStructure modules` option.

#### Example

```bash
--fileStructure modules
```

```
├── README.md
│ ├── moduleA
|    ├── classes
|      ├── ClassA.md
│    ├── interfaces
|      ├── InterfaceA.md
│ ├── moduleB
|    ├── classes
|      ├── ClassA.md
│    ├── interfaces
|      ├── InterfaceA.md
```
