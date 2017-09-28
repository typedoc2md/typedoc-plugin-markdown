[typedoc-plugin-markdown](../README.md) > ["functions"](../modules/_functions_.md)



# External module: "functions"

## Index

### Modules

* [moduleFunction](_functions_.modulefunction.md)


### Interfaces

* [IGameEvent](../interfaces/_functions_.igameevent.md)


### Variables

* [Promise](_functions_.md#promise)


### Functions

* [createSomething](_functions_.md#createsomething)
* [exportedFunction](_functions_.md#exportedfunction)
* [functionWithArguments](_functions_.md#functionwitharguments)
* [functionWithDefaults](_functions_.md#functionwithdefaults)
* [functionWithDocLink](_functions_.md#functionwithdoclink)
* [functionWithOptionalValue](_functions_.md#functionwithoptionalvalue)
* [functionWithRest](_functions_.md#functionwithrest)
* [genericFunction](_functions_.md#genericfunction)
* [internalFunction](_functions_.md#internalfunction)
* [multipleSignatures](_functions_.md#multiplesignatures)
* [returnTypeAny](_functions_.md#returntypeany)
* [returnTypeInterface](_functions_.md#returntypeinterface)
* [returnTypeInterfaceWithPromise](_functions_.md#returntypeinterfacewithpromise)
* [returnTypeObject](_functions_.md#returntypeobject)
* [variableFunction](_functions_.md#variablefunction)



---
## Variables
<a id="promise"></a>

###  Promise

**●  Promise**:  *`any`* 

*Defined in [functions.ts:176](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L176)*





___


## Functions
<a id="createsomething"></a>

###  createSomething

► **createSomething**(): `object`



*Defined in [functions.ts:155](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L155)*



A function that returns an object. Also no type information is given, the object should be correctly reflected.




**Returns:** `object`





___

<a id="exportedfunction"></a>

###  exportedFunction

► **exportedFunction**(): `void`



*Defined in [functions.ts:11](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L11)*



This is a simple exported function.




**Returns:** `void`





___

<a id="functionwitharguments"></a>

###  functionWithArguments

► **functionWithArguments**(paramZ: *`string`*, paramG: *`any`*, paramA: *[INameInterface](../interfaces/_classes_.inameinterface.md)*): `number`



*Defined in [functions.ts:38](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L38)*



This is a function with multiple arguments and a return value.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paramZ | `string`   |  This is a string parameter. |
| paramG | `any`   |  This is a parameter flagged with any. This sentence is placed in the next line. |
| paramA | [INameInterface](../interfaces/_classes_.inameinterface.md)   |  This is a **parameter** pointing to an interface. |





**Returns:** `number`





___

<a id="functionwithdefaults"></a>

###  functionWithDefaults

► **functionWithDefaults**(valueA?: *`string`*, valueB?: *`number`*, valueC?: *`number`*, valueD?: *`boolean`*, valueE: *`any`*): `string`



*Defined in [functions.ts:58](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L58)*



This is a function with a parameter that has a default value.


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| valueA | `string`  | &quot;defaultValue&quot; |   Comment for value A. |
| valueB | `number`  | 100 |   - |
| valueC | `number`  |  Number.NaN |   Comment for value C |
| valueD | `boolean`  | true |   - |
| valueE | `any`  | - |   Comment for value E |





**Returns:** `string`
The input value or the default value.






___

<a id="functionwithdoclink"></a>

###  functionWithDocLink

► **functionWithDocLink**(): `void`



*Defined in [functions.ts:170](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L170)*



See [`INameInterface`](../interfaces/_classes_.inameinterface.md) and [INameInterface's name property](../interfaces/_classes_.inameinterface.md#name). Also, check out [Google](http://www.google.com) and [GitHub](https://github.com).

Taken from [http://usejsdoc.org/tags-inline-link.html](http://usejsdoc.org/tags-inline-link.html).




**Returns:** `void`





___

<a id="functionwithoptionalvalue"></a>

###  functionWithOptionalValue

► **functionWithOptionalValue**(requiredParam: *`string`*, optionalParam?: *`string`*): `void`



*Defined in [functions.ts:48](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L48)*



This is a function with a parameter that is optional.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| requiredParam | `string`   |  A normal parameter. |
| optionalParam | `string`   |  An optional parameter. |





**Returns:** `void`





___

<a id="functionwithrest"></a>

###  functionWithRest

► **functionWithRest**(...rest: *`string`[]*): `string`



*Defined in [functions.ts:74](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L74)*



This is a function with rest parameter.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rest | `string`[]   |  Multiple strings. |





**Returns:** `string`
The combined string.






___

<a id="genericfunction"></a>

###  genericFunction

► **genericFunction**T(value: *`T`*): `T`



*Defined in [functions.ts:116](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L116)*



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

<a id="internalfunction"></a>

###  internalFunction

► **internalFunction**(): `void`



*Defined in [functions.ts:6](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L6)*



This is an internal function.




**Returns:** `void`





___

<a id="multiplesignatures"></a>

###  multipleSignatures

► **multipleSignatures**(value: *`string`*): `string`

► **multipleSignatures**(value: *`object`*): `string`



*Defined in [functions.ts:83](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L83)*



This is the first signature of a function with multiple signatures.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`   |  The name value. |





**Returns:** `string`



*Defined in [functions.ts:91](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L91)*



This is the second signature of a function with multiple signatures.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `object`   |  An object containing the name value. |





**Returns:** `string`





___

<a id="returntypeany"></a>

###  returnTypeAny

► **returnTypeAny**(): `Promise`.<`any`>



*Defined in [functions.ts:191](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L191)*





**Returns:** `Promise`.<`any`>





___

<a id="returntypeinterface"></a>

###  returnTypeInterface

► **returnTypeInterface**(): [IGameEvent](../interfaces/_functions_.igameevent.md)



*Defined in [functions.ts:177](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L177)*





**Returns:** [IGameEvent](../interfaces/_functions_.igameevent.md)





___

<a id="returntypeinterfacewithpromise"></a>

###  returnTypeInterfaceWithPromise

► **returnTypeInterfaceWithPromise**(): `Promise`.<[IGameEvent](../interfaces/_functions_.igameevent.md)>



*Defined in [functions.ts:183](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L183)*





**Returns:** `Promise`.<[IGameEvent](../interfaces/_functions_.igameevent.md)>





___

<a id="returntypeobject"></a>

###  returnTypeObject

► **returnTypeObject**(properties: *`object`*): `object`



*Defined in [functions.ts:201](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L201)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| properties | `object`   |  - |





**Returns:** `object`





___

<a id="variablefunction"></a>

###  variableFunction

► **variableFunction**(paramZ: *`string`*, paramG: *`any`*, paramA: *[INameInterface](../interfaces/_classes_.inameinterface.md)*): `number`



*Defined in [functions.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L23)*



This is a function with multiple arguments and a return value.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paramZ | `string`   |  This is a string parameter. |
| paramG | `any`   |  This is a parameter flagged with any. This sentence is placed in the next line. |
| paramA | [INameInterface](../interfaces/_classes_.inameinterface.md)   |  This is a **parameter** pointing to an interface. |





**Returns:** `number`





___


