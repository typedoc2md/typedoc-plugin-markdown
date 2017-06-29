[typedoc-plugin-markdown](../README.md) > ["classes"](../modules/_classes_.md) > [BaseClass](../classes/_classes_.baseclass.md)



# Class: BaseClass


This is a simple base class.

This is a simple example on how to use BaseClass.

![My image alt text](../media/logo-128.png)

## Hierarchy

**BaseClass**

↳  [SubClassA](_classes_.subclassa.md)




↳  [SubClassB](_classes_.subclassb.md)








## Implements

* [INameInterface](../interfaces/_classes_.inameinterface.md)

## Index

### Constructors

* [constructor](_classes_.baseclass.md#constructor)


### Properties

* [internalClass](_classes_.baseclass.md#internalclass)
* [kind](_classes_.baseclass.md#kind)
* [name](_classes_.baseclass.md#name)
* [instance](_classes_.baseclass.md#instance)
* [instances](_classes_.baseclass.md#instances)


### Methods

* [arrowFunction](_classes_.baseclass.md#arrowfunction)
* [checkName](_classes_.baseclass.md#checkname)
* [getName](_classes_.baseclass.md#getname)
* [setName](_classes_.baseclass.md#setname)
* [caTest](_classes_.baseclass.md#catest)
* [getInstance](_classes_.baseclass.md#getinstance)
* [getName](_classes_.baseclass.md#getname-1)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new BaseClass**(name: *`string`*): [BaseClass](_classes_.baseclass.md)


### ⊕ **new BaseClass**(source: *[BaseClass](_classes_.baseclass.md)*): [BaseClass](_classes_.baseclass.md)



*Defined in [classes.ts:70](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L70)*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name | `string` | - |





**Returns:** [BaseClass](_classes_.baseclass.md)


*Defined in [classes.ts:72](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L72)*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| source | [BaseClass](_classes_.baseclass.md) | - |





**Returns:** [BaseClass](_classes_.baseclass.md)

---


## Properties
<a id="internalclass"></a>

### «Private» internalClass

**●  internalClass**:  *[InternalClass](_classes_.internalclass.md)* 

*Defined in [classes.ts:70](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L70)*



This is an instance member of an internal class.




___

<a id="kind"></a>

### «Protected» kind

**●  kind**:  *`number`* 

*Defined in [classes.ts:65](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L65)*



This is a simple protected member.




___

<a id="name"></a>

###  name

**●  name**:  *`string`* 

*Implementation of [INameInterface](../interfaces/_classes_.inameinterface.md).[name](../interfaces/_classes_.inameinterface.md#name)*

*Defined in [classes.ts:60](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L60)*



This is a simple public member.




___

<a id="instance"></a>

### «Static»«Private» instance

**●  instance**:  *[BaseClass](_classes_.baseclass.md)* 

*Defined in [classes.ts:55](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L55)*



This is a static member.

Static members should not be inherited.




___

<a id="instances"></a>

### «Static»«Private» instances

**●  instances**:  *[BaseClass](_classes_.baseclass.md)[]* 

*Defined in [classes.ts:56](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L56)*





___


## Methods
<a id="arrowfunction"></a>

###  arrowFunction

► **arrowFunction**(param2: *`string`*, param1: *`number`*): `void`




*Defined in [classes.ts:129](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L129)*



This is a simple fat arrow function.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| param2 | `string` | The second parameter needed by this function. |
| param1 | `number` | The first parameter needed by this function. |





**Returns:** `void`





___

<a id="checkname"></a>

### «Private» checkName

► **checkName**(): `boolean`




*Defined in [classes.ts:135](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L135)*



This is a private function.




**Returns:** `boolean`





___

<a id="getname"></a>

###  getName

► **getName**(): `string`




*Implementation of [INameInterface](../interfaces/_classes_.inameinterface.md).[getName](../interfaces/_classes_.inameinterface.md#getname)*

*Defined in [classes.ts:94](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L94)*



This is a simple member function.

It should be inherited by all subclasses. This class has a static member with the same name, both should be documented.




**Returns:** `string`
Return the name.






___

<a id="setname"></a>

###  setName

► **setName**(name: *`string`*): `void`




*Defined in [classes.ts:117](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L117)*



This is a simple member function.

It should be inherited by all subclasses.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name | `string` | The new name. |





**Returns:** `void`





___

<a id="catest"></a>

### «Static» caTest

► **caTest**(originalValues: *[BaseClass](_classes_.baseclass.md)*, newRecord: *`any`*, fieldNames: *`string`[]*, mandatoryFields: *`string`[]*): `string`




*Defined in [classes.ts:153](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L153)*


**see**: https://github.com/sebastian-lenz/typedoc/issues/42


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| originalValues | [BaseClass](_classes_.baseclass.md) | - |
| newRecord | `any` | - |
| fieldNames | `string`[] | - |
| mandatoryFields | `string`[] | - |





**Returns:** `string`





___

<a id="getinstance"></a>

### «Static» getInstance

► **getInstance**(): [BaseClass](_classes_.baseclass.md)




*Defined in [classes.ts:146](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L146)*



This is a static function.

Static functions should not be inherited.




**Returns:** [BaseClass](_classes_.baseclass.md)
An instance of BaseClass.






___

<a id="getname-1"></a>

### «Static» getName

► **getName**(): `string`




*Defined in [classes.ts:106](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L106)*



This is a simple static member function.

Static functions should not be inherited. This class has a member with the same name, both should be documented.




**Returns:** `string`
Return the name.






___


