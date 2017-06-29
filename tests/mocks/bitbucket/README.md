


#  typedoc-plugin-markdown

## Index

### Modules

* [Enums](modules/enums.md)
* [interfaces](modules/interfaces.md)
* [moduleFunction](modules/modulefunction.md)


### Classes

* [BaseClass](classes/baseclass.md)
* [Color](classes/color.md)
* [Employee](classes/employee.md)
* [GenericClass](classes/genericclass.md)
* [Greeter](classes/greeter.md)
* [InternalClass](classes/internalclass.md)
* [NonGenericClass](classes/nongenericclass.md)
* [Person](classes/person.md)
* [SubClassA](classes/subclassa.md)
* [SubClassB](classes/subclassb.md)
* [Vector](classes/vector.md)


### Interfaces

* [IApiElementType](interfaces/iapielementtype.md)
* [IApiGameEvent](interfaces/iapigameevent.md)
* [IApiGameFormations](interfaces/iapigameformations.md)
* [IApiGameSettings](interfaces/iapigamesettings.md)
* [IApiLeaguePositions](interfaces/iapileaguepositions.md)
* [INameInterface](interfaces/inameinterface.md)
* [IPrintInterface](interfaces/iprintinterface.md)
* [IPrintNameInterface](interfaces/iprintnameinterface.md)


### Variables

* [amount](#markdown-header-amount)
* [color](#markdown-header-color)
* [greeter](#markdown-header-greeter)
* [isDone](#markdown-header-isdone)
* [numbers](#markdown-header-numbers)
* [publicVar](#markdown-header-publicvar)


### Functions

* [createSomething](#markdown-header-createsomething)
* [exportedFunction](#markdown-header-exportedfunction)
* [functionWithArguments](#markdown-header-functionwitharguments)
* [functionWithDefaults](#markdown-header-functionwithdefaults)
* [functionWithDocLink](#markdown-header-functionwithdoclink)
* [functionWithOptionalValue](#markdown-header-functionwithoptionalvalue)
* [functionWithRest](#markdown-header-functionwithrest)
* [genericFunction](#markdown-header-genericfunction)
* [internalFunction](#markdown-header-internalfunction)
* [multipleSignatures](#markdown-header-multiplesignatures)
* [publicFunction](#markdown-header-publicfunction)
* [variableFunction](#markdown-header-variablefunction)


### Object literals

* [aMixedObject](#markdown-header-object-literal-amixedobject)



---
# Variables


###  amount

**●  amount**:  *`number`*  = 6

*Defined in [basic-types.ts:20](https://bitbucket.org/owner/repository_name/src/master/src/basic-types.ts?fileviewer&amp;#x3D;file-view-default#basic-types.ts-20)*



This is a number type

    const decimal: number = 6;




___



###  color

**●  color**:  *`string`*  = "blue"

*Defined in [basic-types.ts:28](https://bitbucket.org/owner/repository_name/src/master/src/basic-types.ts?fileviewer&amp;#x3D;file-view-default#basic-types.ts-28)*



This is a string type

    const color: string = "blue";




___



###  greeter

**●  greeter**:  *[Greeter](classes/greeter.md)*  =  new Greeter('world')

*Defined in [internal.ts:18](https://bitbucket.org/owner/repository_name/src/master/src/internal.ts?fileviewer&amp;#x3D;file-view-default#internal.ts-18)*





___



###  isDone

**●  isDone**:  *`boolean`*  = false

*Defined in [basic-types.ts:12](https://bitbucket.org/owner/repository_name/src/master/src/basic-types.ts?fileviewer&amp;#x3D;file-view-default#basic-types.ts-12)*



This is a boolean type

    const isDone: boolean = false;




___



###  numbers

**●  numbers**:  *`number`[]*  =  [1, 2, 3]

*Defined in [basic-types.ts:36](https://bitbucket.org/owner/repository_name/src/master/src/basic-types.ts?fileviewer&amp;#x3D;file-view-default#basic-types.ts-36)*



This is an array type

    const numbers: number[] = [1, 2, 3];




___




###  publicVar

**●  publicVar**:  *"public variable"*  = "public variable"

*Defined in [private-members.ts:2](https://bitbucket.org/owner/repository_name/src/master/src/private-members.ts?fileviewer&amp;#x3D;file-view-default#private-members.ts-2)*





___


# Functions


###  createSomething

► **createSomething**(): object




*Defined in [functions.ts:161](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-161)*



A function that returns an object. Also no type information is given, the object should be correctly reflected.




**Returns:** object





___



###  exportedFunction

► **exportedFunction**(): `void`




*Defined in [functions.ts:12](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-12)*



This is a simple exported function.




**Returns:** `void`





___



###  functionWithArguments

► **functionWithArguments**(paramZ: *`string`*, paramG: *`any`*, paramA: *[INameInterface](interfaces/inameinterface.md)*): `number`




*Defined in [functions.ts:41](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-41)*



This is a function with multiple arguments and a return value.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| paramZ | `string` | This is a string parameter. |
| paramG | `any` | This is a parameter flagged with any.    This sentence is placed in the next line. |
| paramA | [INameInterface](interfaces/inameinterface.md) | This is a **parameter** pointing to an interface. |





**Returns:** `number`





___



###  functionWithDefaults

► **functionWithDefaults**(valueA?: *`string`*, valueB?: *`number`*, valueC?: *`number`*, valueD?: *`boolean`*, valueE?: *`boolean`*): `string`




*Defined in [functions.ts:61](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-61)*



This is a function with a parameter that has a default value.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| valueA | `string` | Default value = &quot;defaultValue&quot;.- |
| valueB | `number` | Default value = 100.- |
| valueC | `number` | Default value =  Number.NaN.- |
| valueD | `boolean` | Default value = true.- |
| valueE | `boolean` | Default value = false.- |





**Returns:** `string`
The input value or the default value.






___



###  functionWithDocLink

► **functionWithDocLink**(): `void`




*Defined in [functions.ts:176](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-176)*



See [`INameInterface`](interfaces/inameinterface.md) and [INameInterface's name property](interfaces/inameinterface.md#markdown-header-name). Also, check out [Google](http://www.google.com) and [GitHub](https://github.com).

Taken from [http://usejsdoc.org/tags-inline-link.html](http://usejsdoc.org/tags-inline-link.html).




**Returns:** `void`





___



###  functionWithOptionalValue

► **functionWithOptionalValue**(requiredParam: *`string`*, optionalParam?: *`string`*): `void`




*Defined in [functions.ts:52](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-52)*



This is a function with a parameter that is optional.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| requiredParam | `string` | A normal parameter. |
| optionalParam | `string` | An optional parameter. |





**Returns:** `void`





___



###  functionWithRest

► **functionWithRest**(...rest: *`string`[]*): `string`




*Defined in [functions.ts:78](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-78)*



This is a function with rest parameter.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| rest | `string`[] | Multiple strings. |





**Returns:** `string`
The combined string.






___



###  genericFunction

► **genericFunction**T(value: *`T`*): `T`




*Defined in [functions.ts:121](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-121)*



This is a generic function.


**Type parameters:**

#### T 

The type parameter.

**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `T` | The typed value. |





**Returns:** `T`
Returns the typed value.






___



###  internalFunction

► **internalFunction**(): `void`




*Defined in [functions.ts:6](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-6)*



This is an internal function.




**Returns:** `void`





___



###  multipleSignatures

► **multipleSignatures**(value: *`string`*): `string`

► **multipleSignatures**(value: *object*): `string`




*Defined in [functions.ts:88](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-88)*



This is the first signature of a function with multiple signatures.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `string` | The name value. |





**Returns:** `string`




*Defined in [functions.ts:96](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-96)*



This is the second signature of a function with multiple signatures.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | object | An object containing the name value. |





**Returns:** `string`





___




###  publicFunction

► **publicFunction**(): `string`




*Defined in [private-members.ts:10](https://bitbucket.org/owner/repository_name/src/master/src/private-members.ts?fileviewer&amp;#x3D;file-view-default#private-members.ts-10)*





**Returns:** `string`





___



###  variableFunction

► **variableFunction**(paramZ: *`string`*, paramG: *`any`*, paramA: *[INameInterface](interfaces/inameinterface.md)*): `number`




*Defined in [functions.ts:25](https://bitbucket.org/owner/repository_name/src/master/src/functions.ts?fileviewer&amp;#x3D;file-view-default#functions.ts-25)*



This is a function with multiple arguments and a return value.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| paramZ | `string` | This is a string parameter. |
| paramG | `any` | This is a parameter flagged with any.    This sentence is placed in the next line. |
| paramA | [INameInterface](interfaces/inameinterface.md) | This is a **parameter** pointing to an interface. |





**Returns:** `number`





___




## Object literal: aMixedObject



###  someNumber

**●  someNumber**:  *`number`*  = 10

*Defined in [basic-types.ts:45](https://bitbucket.org/owner/repository_name/src/master/src/basic-types.ts?fileviewer&amp;#x3D;file-view-default#basic-types.ts-45)*





___


###  someString

**●  someString**:  *`string`*  = "hello"

*Defined in [basic-types.ts:46](https://bitbucket.org/owner/repository_name/src/master/src/basic-types.ts?fileviewer&amp;#x3D;file-view-default#basic-types.ts-46)*





___


###  someFunction

► **someFunction**(): `string`




*Defined in [basic-types.ts:42](https://bitbucket.org/owner/repository_name/src/master/src/basic-types.ts?fileviewer&amp;#x3D;file-view-default#basic-types.ts-42)*





**Returns:** `string`





___


