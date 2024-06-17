[Packages Index](../../../../../README.md) / [typedoc-plugin-markdown](../../../../README.md) / [theme](../../../README.md) / [types](../README.md) / UrlMapping

# Interface: UrlMapping\<Model>

The model used to define the URL mapping structure.

## Contents

* [Type Parameters](#type-parameters)
* [Properties](#properties)

## Type Parameters

| Type Parameter |
| -------------- |
| `Model`        |

## Properties

| Property   | Type                                                                                                                  |
| ---------- | --------------------------------------------------------------------------------------------------------------------- |
| `url`      | `string`                                                                                                              |
| `model`    | `Model`                                                                                                               |
| `template` | (`data`: [`MarkdownPageEvent`](../../../../app/namespaces/events/classes/MarkdownPageEvent.md)\<`Model`>) => `string` |
