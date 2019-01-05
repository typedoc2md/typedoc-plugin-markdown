
#  typedoc-plugin-markdown

## Index

### Modules

* [interfaces](modules/interfaces.md)
* [moduleFunction](modules/modulefunction.md)

### Enumerations

* [Directions](enums/directions.md)
* [Size](enums/size.md)

### Classes

* [BaseClass](classes/baseclass.md)
* [Color](classes/color.md)
* [DefaultExportedClass](classes/defaultexportedclass.md)
* [GenericClass](classes/genericclass.md)
* [InternalClass](classes/internalclass.md)
* [MyFirstClass](classes/myfirstclass.md)
* [MyFourthClass](classes/myfourthclass.md)
* [MySecondClass](classes/mysecondclass.md)
* [MyThirdClass](classes/mythirdclass.md)
* [NonGenericClass](classes/nongenericclass.md)
* [NotExportedClassName](classes/notexportedclassname.md)
* [SubClassA](classes/subclassa.md)
* [SubClassB](classes/subclassb.md)
* [Vector](classes/vector.md)
* [flattenedClass](classes/flattenedclass.md)

### Interfaces

* [A](interfaces/a.md)
* [AB](interfaces/ab.md)
* [ABNumber](interfaces/abnumber.md)
* [ABString](interfaces/abstring.md)
* [B](interfaces/b.md)
* [INameInterface](interfaces/inameinterface.md)
* [IPrintInterface](interfaces/iprintinterface.md)
* [IPrintNameInterface](interfaces/iprintnameinterface.md)

### Variables

* [amount](#markdown-header-Const-amount)
* [color](#markdown-header-Const-color)
* [commentsWithTags](#markdown-header-Const-commentsWithTags)
* [destructArrayA](#markdown-header-destructArrayA)
* [destructArrayB](#markdown-header-destructArrayB)
* [destructArrayC](#markdown-header-destructArrayC)
* [destructArrayWithIgnoresA](#markdown-header-destructArrayWithIgnoresA)
* [destructArrayWithIgnoresRest](#markdown-header-destructArrayWithIgnoresRest)
* [destructArrayWithRest](#markdown-header-destructArrayWithRest)
* [destructArrayWithRestA](#markdown-header-destructArrayWithRestA)
* [destructArrayWithRestB](#markdown-header-destructArrayWithRestB)
* [destructObjectA](#markdown-header-destructObjectA)
* [destructObjectB](#markdown-header-destructObjectB)
* [destructObjectC](#markdown-header-destructObjectC)
* [fakeProtectedVariable](#markdown-header-Protected-fakeProtectedVariable)
* [generalComments](#markdown-header-Const-generalComments)
* [isDone](#markdown-header-Const-isDone)
* [numbers](#markdown-header-Const-numbers)

### Functions

* [createSomething](#markdown-header-createSomething)
* [dest](#markdown-header-dest)
* [drawText](#markdown-header-drawText)
* [exportedFunction](#markdown-header-exportedFunction)
* [fakeProtectedFunction](#markdown-header-Protected-fakeProtectedFunction)
* [flattenedCallback](#markdown-header-flattenedCallback)
* [flattenedIndexSignature](#markdown-header-flattenedIndexSignature)
* [flattenedParameter](#markdown-header-flattenedParameter)
* [functionWithArguments](#markdown-header-functionWithArguments)
* [functionWithDefaults](#markdown-header-functionWithDefaults)
* [functionWithDocLink](#markdown-header-functionWithDocLink)
* [functionWithOptionalValue](#markdown-header-functionWithOptionalValue)
* [functionWithRest](#markdown-header-functionWithRest)
* [genericFunction](#markdown-header-genericFunction)
* [getGenericArray](#markdown-header-getGenericArray)
* [internalFunction](#markdown-header-internalFunction)
* [multipleSignatures](#markdown-header-multipleSignatures)
* [testFunction](#markdown-header-testFunction)
* [variableFunction](#markdown-header-variableFunction)

---

## Variables

### `<Const>` amount

**● amount**: *`number`* = 6

*Defined in [variables.ts:9](https://bitbucket.org/owner/repository_name/src/master/variables.ts?fileviewer&amp;#x3D;file-view-default#variables.ts-9)*

This is a number type

___

### `<Const>` color

**● color**: *`string`* = "blue"

*Defined in [variables.ts:14](https://bitbucket.org/owner/repository_name/src/master/variables.ts?fileviewer&amp;#x3D;file-view-default#variables.ts-14)*

This is a string type

___

### `<Const>` commentsWithTags

**● commentsWithTags**: *`boolean`* = false

*Defined in [doc-comments.ts:27](https://bitbucket.org/owner/repository_name/src/master/doc-comments.ts?fileviewer&amp;#x3D;file-view-default#doc-comments.ts-27)*

*__name__*: AbstractMetadataModule

*__description__*: Provides the module for the [BaseClass](classes/baseclass.md)

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

###  destructArrayA

**● destructArrayA**: *`number`*

*Defined in [destructuring.ts:10](https://bitbucket.org/owner/repository_name/src/master/destructuring.ts?fileviewer&amp;#x3D;file-view-default#destructuring.ts-10)*

___

###  destructArrayB

**● destructArrayB**: *`string`*

*Defined in [destructuring.ts:10](https://bitbucket.org/owner/repository_name/src/master/destructuring.ts?fileviewer&amp;#x3D;file-view-default#destructuring.ts-10)*

___

###  destructArrayC

**● destructArrayC**: *`number`* = 10

*Defined in [destructuring.ts:10](https://bitbucket.org/owner/repository_name/src/master/destructuring.ts?fileviewer&amp;#x3D;file-view-default#destructuring.ts-10)*

___

###  destructArrayWithIgnoresA

**● destructArrayWithIgnoresA**: *`number`*

*Defined in [destructuring.ts:20](https://bitbucket.org/owner/repository_name/src/master/destructuring.ts?fileviewer&amp;#x3D;file-view-default#destructuring.ts-20)*

___

###  destructArrayWithIgnoresRest

**● destructArrayWithIgnoresRest**: *[`number`, `number`]*

*Defined in [destructuring.ts:20](https://bitbucket.org/owner/repository_name/src/master/destructuring.ts?fileviewer&amp;#x3D;file-view-default#destructuring.ts-20)*

___

###  destructArrayWithRest

**● destructArrayWithRest**: *[`number`, `number`]*

*Defined in [destructuring.ts:15](https://bitbucket.org/owner/repository_name/src/master/destructuring.ts?fileviewer&amp;#x3D;file-view-default#destructuring.ts-15)*

___

###  destructArrayWithRestA

**● destructArrayWithRestA**: *`number`*

*Defined in [destructuring.ts:15](https://bitbucket.org/owner/repository_name/src/master/destructuring.ts?fileviewer&amp;#x3D;file-view-default#destructuring.ts-15)*

___

###  destructArrayWithRestB

**● destructArrayWithRestB**: *`number`*

*Defined in [destructuring.ts:15](https://bitbucket.org/owner/repository_name/src/master/destructuring.ts?fileviewer&amp;#x3D;file-view-default#destructuring.ts-15)*

___

###  destructObjectA

**● destructObjectA**: *`number`*

*Defined in [destructuring.ts:5](https://bitbucket.org/owner/repository_name/src/master/destructuring.ts?fileviewer&amp;#x3D;file-view-default#destructuring.ts-5)*

___

###  destructObjectB

**● destructObjectB**: *`string`*

*Defined in [destructuring.ts:5](https://bitbucket.org/owner/repository_name/src/master/destructuring.ts?fileviewer&amp;#x3D;file-view-default#destructuring.ts-5)*

___

###  destructObjectC

**● destructObjectC**: *`number`*

*Defined in [destructuring.ts:5](https://bitbucket.org/owner/repository_name/src/master/destructuring.ts?fileviewer&amp;#x3D;file-view-default#destructuring.ts-5)*

___

### `<Private>` fakePrivateVariable

**● fakePrivateVariable**: *`string`* = "test"

*Defined in [access.ts:12](https://bitbucket.org/owner/repository_name/src/master/access.ts?fileviewer&amp;#x3D;file-view-default#access.ts-12)*

A variable that is made private via comment.

___

### `<Protected>` fakeProtectedVariable

**● fakeProtectedVariable**: *`string`* = "test"

*Defined in [access.ts:18](https://bitbucket.org/owner/repository_name/src/master/access.ts?fileviewer&amp;#x3D;file-view-default#access.ts-18)*

A variable that is made protected via comment.

___

### `<Const>` generalComments

**● generalComments**: *`boolean`* = false

*Defined in [doc-comments.ts:9](https://bitbucket.org/owner/repository_name/src/master/doc-comments.ts?fileviewer&amp;#x3D;file-view-default#doc-comments.ts-9)*

Additionally you can link to other classes, members or functions using double square brackets.

Link to a class: [BaseClass](classes/baseclass.md) Link to a function: [createSomething](#markdown-header-createSomething) Link to a function: [color](interfaces/interfaces.squareconfig.md#markdown-header-Optional-color)

___

### `<Const>` isDone

**● isDone**: *`boolean`* = false

*Defined in [variables.ts:4](https://bitbucket.org/owner/repository_name/src/master/variables.ts?fileviewer&amp;#x3D;file-view-default#variables.ts-4)*

This is a boolean type

___

### `<Const>` numbers

**● numbers**: *`number`[]* =  [1, 2, 3]

*Defined in [variables.ts:19](https://bitbucket.org/owner/repository_name/src/master/variables.ts?fileviewer&amp;#x3D;file-view-default#variables.ts-19)*

This is an array type

___

## Functions

###  createSomething

▸ **createSomething**(): `object`

*Defined in [functions.ts:183](https://bitbucket.org/owner/repository_name/src/master/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-183)*

A function that returns an object. Also no type information is given, the object should be correctly reflected.

**Returns:** `object`

___

###  dest

▸ **dest**(__namedParameters: *`object`*): `string`

*Defined in [destructuring.ts:34](https://bitbucket.org/owner/repository_name/src/master/destructuring.ts?fileviewer&amp;#x3D;file-view-default#destructuring.ts-34)*

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| b | `string` |
| c | `number` |

**Returns:** `string`

___

###  drawText

▸ **drawText**(a: *`any`*, __namedParameters: *`object`*, __namedParameters: *`object`*, b: *`any`*): `number`

*Defined in [destructuring.ts:30](https://bitbucket.org/owner/repository_name/src/master/destructuring.ts?fileviewer&amp;#x3D;file-view-default#destructuring.ts-30)*

Destructuring function parameters.

**Parameters:**

**a: `any`**

This is a normal param

**__namedParameters: `object`**

| Name | Type | Default value |
| ------ | ------ | ------ |
| n | `boolean` | true |

**__namedParameters: `object`**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| bold | `boolean` | false |  Should it be bold? |
| location | [`number`, `number`] |  [0, 0] |  This is the location |
| text | `string` | &quot;&quot; |  This is the text |

**b: `any`**

**Returns:** `number`

___

###  exportedFunction

▸ **exportedFunction**(): `void`

*Defined in [functions.ts:19](https://bitbucket.org/owner/repository_name/src/master/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-19)*

This is a simple exported function.

**Returns:** `void`

___

### `<Private>` fakePrivateFunction

▸ **fakePrivateFunction**(): `void`

*Defined in [access.ts:24](https://bitbucket.org/owner/repository_name/src/master/access.ts?fileviewer&amp;#x3D;file-view-default#access.ts-24)*

A function that is made private via comment.

**Returns:** `void`

___

### `<Protected>` fakeProtectedFunction

▸ **fakeProtectedFunction**(): `void`

*Defined in [access.ts:30](https://bitbucket.org/owner/repository_name/src/master/access.ts?fileviewer&amp;#x3D;file-view-default#access.ts-30)*

A function that is made protected via comment.

**Returns:** `void`

___

###  flattenedCallback

▸ **flattenedCallback**(callback: *`function`*): `void`

*Defined in [flattened.ts:93](https://bitbucket.org/owner/repository_name/src/master/flattened.ts?fileviewer&amp;#x3D;file-view-default#flattened.ts-93)*

A function that has a parameter that requires a typed function callback.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callback | `function` |  The typed function callback. |

**Returns:** `void`

___

###  flattenedIndexSignature

▸ **flattenedIndexSignature**(indexed: *`object`*): `void`

*Defined in [flattened.ts:122](https://bitbucket.org/owner/repository_name/src/master/flattened.ts?fileviewer&amp;#x3D;file-view-default#flattened.ts-122)*

A function that accepts an index signature parameter.

**Parameters:**

**indexed: `object`**

The index signature parameter.

| Name | Type | Description |
| ------ | ------ | ------ |
| test | `string` |  A property of the index signature instance. |

**Returns:** `void`

___

###  flattenedParameter

▸ **flattenedParameter**(options: *`object`*): `void`

*Defined in [flattened.ts:105](https://bitbucket.org/owner/repository_name/src/master/flattened.ts?fileviewer&amp;#x3D;file-view-default#flattened.ts-105)*

A function that accepts an option object defined inline.

**Parameters:**

**options: `object`**

The inline typed options object.

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` anotherValue | `string` |  Another value on the options object parameter. |
| `Optional` moreOptions | `object` |  A typed child object of the options object. |
| `Optional` value | `string` |  A value on the options object parameter. |

**Returns:** `void`

___

###  functionWithArguments

▸ **functionWithArguments**(paramZ: *`string`*, paramG: *`any`*, paramA: *[INameInterface](interfaces/inameinterface.md)*): `number`

*Defined in [functions.ts:59](https://bitbucket.org/owner/repository_name/src/master/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-59)*

This is a function with multiple arguments and a return value.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| paramZ | `string` |  This is a string parameter. |
| paramG | `any` |  This is a parameter flagged with any. This sentence is placed in the next line. |
| paramA | [INameInterface](interfaces/inameinterface.md) |  This is a **parameter** pointing to an interface. ``` var value:BaseClass = new BaseClass('test'); functionWithArguments('arg', 0, value); ``` |

**Returns:** `number`

___

###  functionWithDefaults

▸ **functionWithDefaults**(valueA?: *`string`*, valueB?: *`number`*, valueC?: *`number`*, valueD?: *`boolean`*, valueE?: *`boolean`*): `string`

*Defined in [functions.ts:79](https://bitbucket.org/owner/repository_name/src/master/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-79)*

This is a function with a parameter that has a default value.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` valueA | `string` | &quot;defaultValue&quot; |
| `Default value` valueB | `number` | 100 |
| `Default value` valueC | `number` |  Number.NaN |
| `Default value` valueD | `boolean` | true |
| `Default value` valueE | `boolean` | false |

**Returns:** `string`
The input value or the default value.

___

###  functionWithDocLink

▸ **functionWithDocLink**(): `void`

*Defined in [functions.ts:199](https://bitbucket.org/owner/repository_name/src/master/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-199)*

See [`INameInterface`](interfaces/inameinterface.md) and [INameInterface's name property](interfaces/inameinterface.md#markdown-header-name). Also, check out [Google](http://www.google.com) and [GitHub](https://github.com).

Taken from [http://usejsdoc.org/tags-inline-link.html](http://usejsdoc.org/tags-inline-link.html).

**Returns:** `void`

___

###  functionWithOptionalValue

▸ **functionWithOptionalValue**(requiredParam: *`string`*, optionalParam?: *`string`*): `void`

*Defined in [functions.ts:70](https://bitbucket.org/owner/repository_name/src/master/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-70)*

This is a function with a parameter that is optional.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| requiredParam | `string` |  A normal parameter. |
| `Optional` optionalParam | `string` |  An optional parameter. |

**Returns:** `void`

___

###  functionWithRest

▸ **functionWithRest**(...rest: *`string`[]*): `string`

*Defined in [functions.ts:96](https://bitbucket.org/owner/repository_name/src/master/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-96)*

This is a function with rest parameter.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` rest | `string`[] |  Multiple strings. |

**Returns:** `string`
The combined string.

___

###  genericFunction

▸ **genericFunction**<`T`>(value: *`T`*): `T`

*Defined in [functions.ts:140](https://bitbucket.org/owner/repository_name/src/master/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-140)*

This is a generic function.

**Type parameters:**

#### T 

The type parameter.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `T` |  The typed value. |

**Returns:** `T`
Returns the typed value.

___

###  getGenericArray

▸ **getGenericArray**(): `Array`<`string`>

*Defined in [generics.ts:83](https://bitbucket.org/owner/repository_name/src/master/generics.ts?fileviewer&amp;#x3D;file-view-default#generics.ts-83)*

A function returning a generic array with type parameters.

**Returns:** `Array`<`string`>
The return value with type arguments.

___

###  internalFunction

▸ **internalFunction**(): `void`

*Defined in [functions.ts:13](https://bitbucket.org/owner/repository_name/src/master/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-13)*

This is an internal function.

**Returns:** `void`

___

###  multipleSignatures

▸ **multipleSignatures**(value: *`string`*): `string`

▸ **multipleSignatures**(value: *`object`*): `string`

*Defined in [functions.ts:106](https://bitbucket.org/owner/repository_name/src/master/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-106)*

This is the first signature of a function with multiple signatures.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `string` |  The name value. |

**Returns:** `string`

*Defined in [functions.ts:114](https://bitbucket.org/owner/repository_name/src/master/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-114)*

This is the second signature of a function with multiple signatures.

**Parameters:**

**value: `object`**

An object containing the name value.

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  A value of the object. |

**Returns:** `string`

___

###  testFunction

▸ **testFunction**<`T`>(value: *`T`*): `T`

*Defined in [generics.ts:15](https://bitbucket.org/owner/repository_name/src/master/generics.ts?fileviewer&amp;#x3D;file-view-default#generics.ts-15)*

A generic function

**Type parameters:**

#### T 

The generic type parameter.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `T` |  A generic parameter. |

**Returns:** `T`
A generic return value.

___

###  variableFunction

▸ **variableFunction**(paramZ: *`string`*, paramG: *`any`*, paramA: *[INameInterface](interfaces/inameinterface.md)*): `number`

*Defined in [functions.ts:38](https://bitbucket.org/owner/repository_name/src/master/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-38)*

This is a function with multiple arguments and a return value.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| paramZ | `string` |  This is a string parameter. |
| paramG | `any` |  This is a parameter flagged with any. This sentence is placed in the next line. |
| paramA | [INameInterface](interfaces/inameinterface.md) |  This is a **parameter** pointing to an interface. ``` var value:BaseClass = new BaseClass('test'); functionWithArguments('arg', 0, value); ``` |

**Returns:** `number`

___

