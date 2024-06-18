[Home](../README.md) / typedoc-plugin-remark

# typedoc-plugin-remark

"typedoc-plugin-remark" is a utility package that pipes output though specified remark plugins.

## Contents

* [What Does the Package Do?](#what-does-the-package-do)
* [Modules](#modules)

## What Does the Package Do?

* Exposes some additional options to TypeDoc.
* Initializes a new remark processor and transform that syntax tree (mdast) using plugins.

## Modules

| Module                       | Description                                            |
| ---------------------------- | ------------------------------------------------------ |
| [index](index/README.md)     | The plugin entrypoint and bootstrapping of the plugin. |
| [options](options/README.md) | All plugin types are exported from this module.        |
| [types](types/README.md)     | All plugin types are exported from this module.        |
