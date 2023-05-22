[typedoc-plugin-markdown](README.md) > plugin/bootstrap

# plugin/bootstrap

Exposes the [load](module.plugin_bootstrap.md#function-load) function that is called by TypeDoc to bootstrap the plugin.

## Function: load()

```ts
load(app): void
```

The main plugin entrypoint containing all bootstrapping logic.

On a high level:

1. The in-built [MarkdownTheme](module.theme_definition.md#class-markdowntheme) is added to the application renderer and then replaces the default theme.

```ts
app.renderer.defineTheme('markdown', MarkdownTheme);
```

2. Additional options are declared using the following pattern.

```ts
app.options.addDeclaration({
  name: 'newOption`,
  help: '[Markdown Plugin] Expose a new option to do something.',
  type: ParameterType.String,
  defaultValue: 'someDefaultValue',
});
```

3. Initiates some custom functions on the renderer to decouple HTML logic. See [plugin/renderer](module.plugin_renderer.md).

### Parameters

| Parameter | Type                                                              | Description                                                          |
| :-------- | :---------------------------------------------------------------- | :------------------------------------------------------------------- |
| app       | [`Application`](https://typedoc.org/api/classes/Application.html) | An instance of TypeDoc's Application that serves as the plugin host. |

### Returns

`void`
