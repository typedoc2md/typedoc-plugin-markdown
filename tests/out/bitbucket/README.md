
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

* [amount](#markdown-header-const-amount)
* [color](#markdown-header-const-color)
* [commentsWithTags](#markdown-header-const-commentswithtags)
* [fakeProtectedVariable](#markdown-header-protected-fakeprotectedvariable)
* [generalComments](#markdown-header-const-generalcomments)
* [isDone](#markdown-header-const-isdone)
* [numbers](#markdown-header-const-numbers)

### Functions

* [createSomething](#markdown-header-createsomething)
* [exportedFunction](#markdown-header-exportedfunction)
* [fakeProtectedFunction](#markdown-header-protected-fakeprotectedfunction)
* [flattenedCallback](#markdown-header-flattenedcallback)
* [flattenedIndexSignature](#markdown-header-flattenedindexsignature)
* [flattenedParameter](#markdown-header-flattenedparameter)
* [functionWithArguments](#markdown-header-functionwitharguments)
* [functionWithDefaults](#markdown-header-functionwithdefaults)
* [functionWithDocLink](#markdown-header-functionwithdoclink)
* [functionWithOptionalValue](#markdown-header-functionwithoptionalvalue)
* [functionWithRest](#markdown-header-functionwithrest)
* [genericFunction](#markdown-header-genericfunction)
* [getGenericArray](#markdown-header-getgenericarray)
* [internalFunction](#markdown-header-internalfunction)
* [multipleSignatures](#markdown-header-multiplesignatures)
* [testFunction](#markdown-header-testfunction)
* [variableFunction](#markdown-header-variablefunction)

---

## Variables

### `<Const>` amount

**●  amount**:  *`number`*  = 6

*Defined in [variables.ts:9](https://bitbucket.org/owner/repository_name/src/master/src/variables.ts?fileviewer&amp;#x3D;file-view-default#variables.ts-9)*

This is a number type

___

### `<Const>` color

**●  color**:  *`string`*  = "blue"

*Defined in [variables.ts:14](https://bitbucket.org/owner/repository_name/src/master/src/variables.ts?fileviewer&amp;#x3D;file-view-default#variables.ts-14)*

This is a string type

___

### `<Const>` commentsWithTags

**●  commentsWithTags**:  *`boolean`*  = false

*Defined in [doc-comments.ts:27](https://bitbucket.org/owner/repository_name/src/master/src/doc-comments.ts?fileviewer&amp;#x3D;file-view-default#doc-comments.ts-27)*

*__name__*: AbstractMetadataModule

*__description__*: Provides the module for the [BaseClass](classes/baseclass.md)

    {
     declarations: [AbstractMetadataComponent],
     exports: [AbstractMetadataComponent],
     imports: [
       IonicModule,
       StackIonSelectModule,
     ],
     providers: [],
    }

___

### `<Protected>` fakeProtectedVariable

**●  fakeProtectedVariable**:  *`string`*  = "test"

*Defined in [access.ts:18](https://bitbucket.org/owner/repository_name/src/master/src/access.ts?fileviewer&amp;#x3D;file-view-default#access.ts-18)*

A variable that is made protected via comment.

___

### `<Const>` generalComments

**●  generalComments**:  *`boolean`*  = false

*Defined in [doc-comments.ts:9](https://bitbucket.org/owner/repository_name/src/master/src/doc-comments.ts?fileviewer&amp;#x3D;file-view-default#doc-comments.ts-9)*

Additionally you can link to other classes, members or functions using double square brackets.

Link to a class: [BaseClass](classes/baseclass.md) Link to a function: [createSomething](#markdown-header-createsomething) Link to a function: [color](interfaces/interfaces.squareconfig.md#markdown-header-optional-color)

___

### `<Const>` isDone

**●  isDone**:  *`boolean`*  = false

*Defined in [variables.ts:4](https://bitbucket.org/owner/repository_name/src/master/src/variables.ts?fileviewer&amp;#x3D;file-view-default#variables.ts-4)*

This is a boolean type

___

### `<Const>` numbers

**●  numbers**:  *`number`[]*  =  [1, 2, 3]

*Defined in [variables.ts:19](https://bitbucket.org/owner/repository_name/src/master/src/variables.ts?fileviewer&amp;#x3D;file-view-default#variables.ts-19)*

This is an array type

___

## Functions

###  createSomething

▸ **createSomething**(): `object`

*Defined in [functions.ts:183](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-183)*

A function that returns an object. Also no type information is given, the object should be correctly reflected.

**Returns:** `object`

___

###  exportedFunction

▸ **exportedFunction**(): `void`

*Defined in [functions.ts:19](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-19)*

This is a simple exported function.

**Returns:** `void`

___

### `<Protected>` fakeProtectedFunction

▸ **fakeProtectedFunction**(): `void`

*Defined in [access.ts:30](https://bitbucket.org/owner/repository_name/src/master/src/access.ts?fileviewer&amp;#x3D;file-view-default#access.ts-30)*

A function that is made protected via comment.

**Returns:** `void`

___

###  flattenedCallback

▸ **flattenedCallback**(callback: *`function`*): `void`

*Defined in [flattened.ts:93](https://bitbucket.org/owner/repository_name/src/master/src/flattened.ts?fileviewer&amp;#x3D;file-view-default#flattened.ts-93)*

A function that has a parameter that requires a typed function callback.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | `function`   |  The typed function callback. |

**Returns:** `void`

___

###  flattenedIndexSignature

▸ **flattenedIndexSignature**(indexed: *`object`*): `void`

*Defined in [flattened.ts:122](https://bitbucket.org/owner/repository_name/src/master/src/flattened.ts?fileviewer&amp;#x3D;file-view-default#flattened.ts-122)*

A function that accepts an index signature parameter.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| indexed | `object`   |  The index signature parameter. |

**Returns:** `void`

___

###  flattenedParameter

▸ **flattenedParameter**(options: *`object`*): `void`

*Defined in [flattened.ts:105](https://bitbucket.org/owner/repository_name/src/master/src/flattened.ts?fileviewer&amp;#x3D;file-view-default#flattened.ts-105)*

A function that accepts an option object defined inline.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | `object`   |  The inline typed options object. |

**Returns:** `void`

___

###  functionWithArguments

▸ **functionWithArguments**(paramZ: *`string`*, paramG: *`any`*, paramA: *[INameInterface](interfaces/inameinterface.md)*): `number`

*Defined in [functions.ts:59](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-59)*

This is a function with multiple arguments and a return value.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paramZ | `string`   |  This is a string parameter. |
| paramG | `any`   |  This is a parameter flagged with any. This sentence is placed in the next line. |
| paramA | [INameInterface](interfaces/inameinterface.md)   |  This is a **parameter** pointing to an interface. ``` var value:BaseClass = new BaseClass('test'); functionWithArguments('arg', 0, value); ``` |

**Returns:** `number`

___

###  functionWithDefaults

▸ **functionWithDefaults**(valueA?: *`string`*, valueB?: *`number`*, valueC?: *`number`*, valueD?: *`boolean`*, valueE?: *`boolean`*): `string`

*Defined in [functions.ts:79](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-79)*

This is a function with a parameter that has a default value.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| valueA | `string`  | &quot;defaultValue&quot; |   - |
| valueB | `number`  | 100 |   - |
| valueC | `number`  |  Number.NaN |   - |
| valueD | `boolean`  | true |   - |
| valueE | `boolean`  | false |   - |

**Returns:** `string`
The input value or the default value.

___

###  functionWithDocLink

▸ **functionWithDocLink**(): `void`

*Defined in [functions.ts:199](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-199)*

See [`INameInterface`](interfaces/inameinterface.md) and [INameInterface's name property](interfaces/inameinterface.md#markdown-header-name). Also, check out [Google](http://www.google.com) and [GitHub](https://github.com).

Taken from [http://usejsdoc.org/tags-inline-link.html](http://usejsdoc.org/tags-inline-link.html).

**Returns:** `void`

___

###  functionWithOptionalValue

▸ **functionWithOptionalValue**(requiredParam: *`string`*, optionalParam?: *`string`*): `void`

*Defined in [functions.ts:70](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-70)*

This is a function with a parameter that is optional.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| requiredParam | `string`   |  A normal parameter. |
| optionalParam | `string`   |  An optional parameter. |

**Returns:** `void`

___

###  functionWithRest

▸ **functionWithRest**(...rest: *`string`[]*): `string`

*Defined in [functions.ts:96](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-96)*

This is a function with rest parameter.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rest | `string`[]   |  Multiple strings. |

**Returns:** `string`
The combined string.

___

###  genericFunction

▸ **genericFunction**T(value: *`T`*): `T`

*Defined in [functions.ts:140](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-140)*

This is a generic function.

**Type parameters:**

#### T 

The type parameter.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `T`   |  The typed value. |

**Returns:** `T`
Returns the typed value.

___

###  getGenericArray

▸ **getGenericArray**(): `Array`.<`string`>

*Defined in [generics.ts:83](https://bitbucket.org/owner/repository_name/src/master/src/generics.ts?fileviewer&amp;#x3D;file-view-default#generics.ts-83)*

A function returning a generic array with type parameters.

**Returns:** `Array`.<`string`>
The return value with type arguments.

___

###  internalFunction

▸ **internalFunction**(): `void`

*Defined in [functions.ts:13](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-13)*

This is an internal function.

**Returns:** `void`

___

###  multipleSignatures

▸ **multipleSignatures**(value: *`string`*): `string`

▸ **multipleSignatures**(value: *`object`*): `string`

*Defined in [functions.ts:106](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-106)*

This is the first signature of a function with multiple signatures.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`   |  The name value. |

**Returns:** `string`

*Defined in [functions.ts:114](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-114)*

This is the second signature of a function with multiple signatures.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `object`   |  An object containing the name value. |

**Returns:** `string`

___

###  testFunction

▸ **testFunction**T(value: *`T`*): `T`

*Defined in [generics.ts:15](https://bitbucket.org/owner/repository_name/src/master/src/generics.ts?fileviewer&amp;#x3D;file-view-default#generics.ts-15)*

A generic function

**Type parameters:**

#### T 

The generic type parameter.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `T`   |  A generic parameter. |

**Returns:** `T`
A generic return value.

___

###  variableFunction

▸ **variableFunction**(paramZ: *`string`*, paramG: *`any`*, paramA: *[INameInterface](interfaces/inameinterface.md)*): `number`

*Defined in [functions.ts:38](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-38)*

This is a function with multiple arguments and a return value.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paramZ | `string`   |  This is a string parameter. |
| paramG | `any`   |  This is a parameter flagged with any. This sentence is placed in the next line. |
| paramA | [INameInterface](interfaces/inameinterface.md)   |  This is a **parameter** pointing to an interface. ``` var value:BaseClass = new BaseClass('test'); functionWithArguments('arg', 0, value); ``` |

**Returns:** `number`

___

