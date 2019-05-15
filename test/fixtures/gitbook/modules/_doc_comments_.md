

# Type aliases

<a id="option"></a>

##  Option

**Ƭ Option**: *"One" \| "Two"*

*Defined in [doc-comments.ts:55](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/test/src/doc-comments.ts#L55)*

Option for bar()

___

# Variables

<a id="commentswithtags"></a>

## `<Const>` commentsWithTags

**● commentsWithTags**: *`boolean`* = false

*Defined in [doc-comments.ts:27](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/test/src/doc-comments.ts#L27)*

*__name__*: AbstractMetadataModule

*__description__*: Provides the module for the [BaseClass](../classes/_classes_.baseclass.md)

```json
{
 "declarations": ["AbstractMetadataComponent"],
 "exports": ["AbstractMetadataComponent"],
 "imports": [
   "IonicModule",
   "StackIonSelectModule"
 ],
 "providers": []
}
```

___
<a id="generalcomments"></a>

## `<Const>` generalComments

**● generalComments**: *`boolean`* = false

*Defined in [doc-comments.ts:9](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/test/src/doc-comments.ts#L9)*

Additionally you can link to other classes, members or functions using double square brackets.

Link to a class: [BaseClass](../classes/_classes_.baseclass.md) Link to a function: [createSomething](_functions_.md#createsomething) Link to a function: [color](../interfaces/_interfaces_.interfaces.squareconfig.md#color)

___

# Functions

<a id="bar"></a>

##  bar

▸ **bar**(o: *[Option](_doc_comments_.md#option)*): `void`

*Defined in [doc-comments.ts:51](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/test/src/doc-comments.ts#L51)*

bar method.

Doc outside tag

*   Line 1 [Option](_doc_comments_.md#option)
*   Line 2 [Option](_doc_comments_.md#option)

**Parameters:**

| Name | Type |
| ------ | ------ |
| o | [Option](_doc_comments_.md#option) |

**Returns:** `void`
Doc inside tag

*   Line 1 [Option](_doc_comments_.md#option)
*   Line 2 [Option](_doc_comments_.md#option)

___
<a id="foo"></a>

##  foo

▸ **foo**(): `void`

*Defined in [doc-comments.ts:36](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/test/src/doc-comments.ts#L36)*

Some deprecation

*__deprecated__*:
 ```typescript
somethingElse();
```

**Returns:** `void`

___

