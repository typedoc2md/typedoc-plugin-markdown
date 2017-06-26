


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

* [INameInterface](interfaces/inameinterface.md)
* [IPrintInterface](interfaces/iprintinterface.md)
* [IPrintNameInterface](interfaces/iprintnameinterface.md)


### Variables

* [amount](#markdown-header-amount)
* [color](#markdown-header-color)
* [greeter](#markdown-header-greeter)
* [isDone](#markdown-header-isdone)
* [numbers](#markdown-header-numbers)
* [privateVar](#markdown-header-private-privatevar)
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
* [privateFunction](#markdown-header-private-privatefunction)
* [publicFunction](#markdown-header-publicfunction)
* [variableFunction](#markdown-header-variablefunction)


### Object literals

* [aMixedObject](#markdown-header-object-literal-amixedobject)



---
# Variables


###  amount

** ●  amount**:  *`number`*  = 6




This is a number type
```
const decimal: number = 6;
```




___



###  color

** ●  color**:  *`string`*  = "blue"




This is a string type
```
const color: string = "blue";
```




___



###  greeter

** ●  greeter**:  *[Greeter](classes/greeter.md)*  =  new Greeter('world')






___



###  isDone

** ●  isDone**:  *`boolean`*  = false




This is a boolean type
```
const isDone: boolean = false;
```




___



###  numbers

** ●  numbers**:  *`number`[]*  =  [1, 2, 3]




This is an array type
```
const numbers: number[] = [1, 2, 3];
```




___



### «Private» privateVar

** ●  privateVar**:  *"marked private variable"*  = "marked private variable"




Marked as private




___



###  publicVar

** ●  publicVar**:  *"public variable"*  = "public variable"






___


# Functions


###  createSomething

► **createSomething**(): object







A function that returns an object.
Also no type information is given, the object should be correctly reflected.




**Returns:** object





___



###  exportedFunction

► **exportedFunction**(): `void`







This is a simple exported function.




**Returns:** `void`





___



###  functionWithArguments

► **functionWithArguments**(paramZ: *`string`*, paramG: *`any`*, paramA: *[INameInterface](interfaces/inameinterface.md)*): `number`







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







See {@linkcode INameInterface} and [INameInterface's name property]{@link INameInterface.name}.
Also, check out {@link http://www.google.com|Google} and
{@link https://github.com GitHub}.

Taken from http://usejsdoc.org/tags-inline-link.html.





**Returns:** `void`





___



###  functionWithOptionalValue

► **functionWithOptionalValue**(requiredParam: *`string`*, optionalParam?: *`string`*): `void`







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







This is an internal function.




**Returns:** `void`





___



###  multipleSignatures

► **multipleSignatures**(value: *`string`*): `string`

► **multipleSignatures**(value: *object*): `string`







This is the first signature of a function with multiple signatures.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `string` | The name value. |





**Returns:** `string`







This is the second signature of a function with multiple signatures.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | object | An object containing the name value. |





**Returns:** `string`





___



### «Private» privateFunction

► **privateFunction**(): `string`







Marked as private




**Returns:** `string`





___



###  publicFunction

► **publicFunction**(): `string`









**Returns:** `string`





___



###  variableFunction

► **variableFunction**(paramZ: *`string`*, paramG: *`any`*, paramA: *[INameInterface](interfaces/inameinterface.md)*): `number`







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

** ●  someNumber**:  *`number`*  = 10






___


###  someString

** ●  someString**:  *`string`*  = "hello"






___


###  someFunction

► **someFunction**(): `string`









**Returns:** `string`





___


