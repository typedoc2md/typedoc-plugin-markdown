


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

* [amount](#amount)
* [color](#color)
* [greeter](#greeter)
* [isDone](#isdone)
* [numbers](#numbers)
* [publicVar](#publicvar)


### Functions

* [createSomething](#createsomething)
* [exportedFunction](#exportedfunction)
* [functionWithArguments](#functionwitharguments)
* [functionWithDefaults](#functionwithdefaults)
* [functionWithDocLink](#functionwithdoclink)
* [functionWithOptionalValue](#functionwithoptionalvalue)
* [functionWithRest](#functionwithrest)
* [genericFunction](#genericfunction)
* [internalFunction](#internalfunction)
* [multipleSignatures](#multiplesignatures)
* [publicFunction](#publicfunction)
* [variableFunction](#variablefunction)


### Object literals

* [aMixedObject](#amixedobject)



# Variables
<a id="amount"></a>

###  amount

**amount**:  *number*  = 6

*Defined in [basic-types.ts:20](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L20)*



This is a number type
```
const decimal: number = 6;
```




___

<a id="color"></a>

###  color

**color**:  *string*  = "blue"

*Defined in [basic-types.ts:28](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L28)*



This is a string type
```
const color: string = "blue";
```




___

<a id="greeter"></a>

###  greeter

**greeter**:  *[Greeter](classes/greeter.md)*  =  new Greeter('world')

*Defined in [internal.ts:18](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/internal.ts#L18)*





___

<a id="isdone"></a>

###  isDone

**isDone**:  *boolean*  = false

*Defined in [basic-types.ts:12](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L12)*



This is a boolean type
```
const isDone: boolean = false;
```




___

<a id="numbers"></a>

###  numbers

**numbers**:  *number[]*  =  [1, 2, 3]

*Defined in [basic-types.ts:36](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L36)*



This is an array type
```
const numbers: number[] = [1, 2, 3];
```




___


<a id="publicvar"></a>

###  publicVar

**publicVar**:  *"public variable"*  = "public variable"

*Defined in [private-members.ts:2](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L2)*





___


# Functions
<a id="createsomething"></a>

###  createSomething

► **createSomething**(): object



*Defined in [functions.ts:161](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L161)*


A function that returns an object.
Also no type information is given, the object should be correctly reflected.




**Returns:** object





___

<a id="exportedfunction"></a>

###  exportedFunction

► **exportedFunction**(): void



*Defined in [functions.ts:12](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L12)*


This is a simple exported function.




**Returns:** void





___

<a id="functionwitharguments"></a>

###  functionWithArguments

► **functionWithArguments**(paramZ: *string*, paramG: *any*, paramA: *[INameInterface](interfaces/inameinterface.md)*): number



*Defined in [functions.ts:41](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L41)*


This is a function with multiple arguments and a return value.


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| paramZ  | string | - | This is a string parameter. |
| paramG  | any | - | This is a parameter flagged with any.    This sentence is placed in the next line. |
| paramA  | [INameInterface](interfaces/inameinterface.md) | - | This is a **parameter** pointing to an interface. |





**Returns:** number





___

<a id="functionwithdefaults"></a>

###  functionWithDefaults

► **functionWithDefaults**(valueA?: *string*, valueB?: *number*, valueC?: *number*, valueD?: *boolean*, valueE?: *boolean*): string



*Defined in [functions.ts:61](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L61)*


This is a function with a parameter that has a default value.


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| valueA  | string | &quot;defaultValue&quot; | - |
| valueB  | number | 100 | - |
| valueC  | number |  Number.NaN | - |
| valueD  | boolean | true | - |
| valueE  | boolean | false | - |





**Returns:** string
The input value or the default value.






___

<a id="functionwithdoclink"></a>

###  functionWithDocLink

► **functionWithDocLink**(): void



*Defined in [functions.ts:176](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L176)*


See {@linkcode INameInterface} and [INameInterface's name property]{@link INameInterface.name}.
Also, check out {@link http://www.google.com|Google} and
{@link https://github.com GitHub}.

Taken from http://usejsdoc.org/tags-inline-link.html.





**Returns:** void





___

<a id="functionwithoptionalvalue"></a>

###  functionWithOptionalValue

► **functionWithOptionalValue**(requiredParam: *string*, optionalParam?: *string*): void



*Defined in [functions.ts:52](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L52)*


This is a function with a parameter that is optional.


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| requiredParam  | string | - | A normal parameter. |
| optionalParam  | string | - | An optional parameter. |





**Returns:** void





___

<a id="functionwithrest"></a>

###  functionWithRest

► **functionWithRest**(...rest: *string[]*): string



*Defined in [functions.ts:78](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L78)*


This is a function with rest parameter.


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| rest  | string[] | - | Multiple strings. |





**Returns:** string
The combined string.






___

<a id="genericfunction"></a>

###  genericFunction

► **genericFunction**T(value: *T*): T



*Defined in [functions.ts:121](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L121)*


This is a generic function.


**Type parameters:**

#### T 

The type parameter.

#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | T | - | The typed value. |





**Returns:** T
Returns the typed value.






___

<a id="internalfunction"></a>

###  internalFunction

► **internalFunction**(): void



*Defined in [functions.ts:6](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L6)*


This is an internal function.




**Returns:** void





___

<a id="multiplesignatures"></a>

###  multipleSignatures

► **multipleSignatures**(value: *string*): string

► **multipleSignatures**(value: *object*): string



*Defined in [functions.ts:88](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L88)*


This is the first signature of a function with multiple signatures.


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | string | - | The name value. |





**Returns:** string



*Defined in [functions.ts:96](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L96)*


This is the second signature of a function with multiple signatures.


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | object | - | An object containing the name value. |





**Returns:** string





___


<a id="publicfunction"></a>

###  publicFunction

► **publicFunction**(): string



*Defined in [private-members.ts:10](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L10)*




**Returns:** string





___

<a id="variablefunction"></a>

###  variableFunction

► **variableFunction**(paramZ: *string*, paramG: *any*, paramA: *[INameInterface](interfaces/inameinterface.md)*): number



*Defined in [functions.ts:25](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L25)*


This is a function with multiple arguments and a return value.


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| paramZ  | string | - | This is a string parameter. |
| paramG  | any | - | This is a parameter flagged with any.    This sentence is placed in the next line. |
| paramA  | [INameInterface](interfaces/inameinterface.md) | - | This is a **parameter** pointing to an interface. |





**Returns:** number





___


<a id="amixedobject"></a>

## Object literal: aMixedObject

<a id="amixedobject.somenumber"></a>

###  someNumber

**someNumber**:  *number*  = 10

*Defined in [basic-types.ts:45](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L45)*





___
<a id="amixedobject.somestring"></a>

###  someString

**someString**:  *string*  = "hello"

*Defined in [basic-types.ts:46](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L46)*





___
<a id="amixedobject.somefunction"></a>

###  someFunction

► **someFunction**(): string



*Defined in [basic-types.ts:42](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L42)*




**Returns:** string





___


