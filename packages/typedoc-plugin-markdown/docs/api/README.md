# typedoc-plugin-markdown - v4.0.0-next.12

## Modules

| Module                                         | Description                                                                                                               |
| :--------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| [plugin/bootstrap](module.plugin_bootstrap.md) | Exposes the [load](module.plugin_bootstrap.md#function-load) function that is called by TypeDoc to bootstrap the plugin.  |
| [plugin/renderer](module.plugin_renderer.md)   | Contains functionality to decouple HTML logic from the TypeDoc [Renderer](https://typedoc.org/api/classes/Renderer.html). |
| [plugin/models](module.plugin_models.md)       | Models describing custom plugin options.                                                                                  |
| [theme/definition](module.theme_definition.md) | The in-built custom theme and context theme definitions that the plugin initiates.                                        |
| [theme/resources](module.theme_resources.md)   | Contains templates and partials used when generating output.                                                              |
| [theme/helpers](module.theme_helpers.md)       | A set of helpers that parses TypeDoc models to be consumed by theme resources.                                            |
| [theme/models](module.theme_models.md)         | Interfaces used by the theme.                                                                                             |
| [support/elements](module.support_elements.md) | A set of pure functions that returns markdown elements as strings.                                                        |
| [support/utils](module.support_utils.md)       | A set of pure utils to be consumed accross the plugin.                                                                    |
