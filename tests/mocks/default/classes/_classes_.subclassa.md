[typedoc-plugin-markdown](../README.md) > ["classes"](../modules/_classes_.md) > [SubClassA](../classes/_classes_.subclassa.md)



# Class: SubClassA


This is a class that extends another class.

This class has no own constructor, so its constructor should be inherited
from BaseClass.


## Hierarchy


 [BaseClass](_classes_.baseclass.md)

**↳ SubClassA**







## Implements

* [INameInterface](../interfaces/_classes_.inameinterface.md)
* [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md)

## Index

### Constructors

* [constructor](_classes_.subclassa.md#constructor)


### Properties

* [kind](_classes_.subclassa.md#kind)
* [name](_classes_.subclassa.md#name)


### Accessors

* [nameProperty](_classes_.subclassa.md#nameproperty)
* [readOnlyNameProperty](_classes_.subclassa.md#readonlynameproperty)
* [writeOnlyNameProperty](_classes_.subclassa.md#writeonlynameproperty)


### Methods

* [arrowFunction](_classes_.subclassa.md#arrowfunction)
* [getName](_classes_.subclassa.md#getname)
* [print](_classes_.subclassa.md#print)
* [printName](_classes_.subclassa.md#printname)
* [setName](_classes_.subclassa.md#setname)
* [caTest](_classes_.subclassa.md#catest)
* [getInstance](_classes_.subclassa.md#getinstance)
* [getName](_classes_.subclassa.md#getname-1)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new SubClassA**(name: *`string`*): [SubClassA](_classes_.subclassa.md)


### ⊕ **new SubClassA**(source: *[BaseClass](_classes_.baseclass.md)*): [SubClassA](_classes_.subclassa.md)



*Inherited from [BaseClass](_classes_.baseclass.md).[constructor](_classes_.baseclass.md#constructor)*

*Defined in [classes.ts:70](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L70)*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name | `string` | - |





**Returns:** [SubClassA](_classes_.subclassa.md)


*Inherited from [BaseClass](_classes_.baseclass.md).[constructor](_classes_.baseclass.md#constructor)*

*Defined in [classes.ts:72](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L72)*



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| source | [BaseClass](_classes_.baseclass.md) | - |





**Returns:** [SubClassA](_classes_.subclassa.md)

---


## Properties
<a id="kind"></a>

### «Protected» kind

** ●  kind**:  *`number`* 

*Inherited from [BaseClass](_classes_.baseclass.md).[kind](_classes_.baseclass.md#kind)*

*Defined in [classes.ts:65](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L65)*



This is a simple protected member.




___

<a id="name"></a>

###  name

** ●  name**:  *`string`* 

*Implementation of [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md).[name](../interfaces/_classes_.iprintnameinterface.md#name)*

*Inherited from [BaseClass](_classes_.baseclass.md).[name](_classes_.baseclass.md#name)*

*Defined in [classes.ts:60](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L60)*



This is a simple public member.




___


## Accessors
<a id="nameproperty"></a>

###  nameProperty


getnameProperty(): `string`setnameProperty(value: *`string`*): `void`


*Defined in [classes.ts:199](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L199)*



Returns the name. See [[BaseClass.name]].




**Returns:** `string`
The return value.



*Defined in [classes.ts:209](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L209)*



Sets the name. See [[BaseClass.name]].


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `string` | The new name. |





**Returns:** `void`
The return value.




___

<a id="readonlynameproperty"></a>

###  readOnlyNameProperty


getreadOnlyNameProperty(): `string`


*Defined in [classes.ts:218](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L218)*



Returns the name. See [[BaseClass.name]].




**Returns:** `string`
The return value.




___

<a id="writeonlynameproperty"></a>

###  writeOnlyNameProperty


setwriteOnlyNameProperty(value: *`string`*): `void`


*Defined in [classes.ts:228](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L228)*



Sets the name. See [[BaseClass.name]].


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `string` | The new name. |





**Returns:** `void`
The return value.




___


## Methods
<a id="arrowfunction"></a>

###  arrowFunction

► **arrowFunction**(param2: *`string`*, param1: *`number`*): `void`




*Inherited from [BaseClass](_classes_.baseclass.md).[arrowFunction](_classes_.baseclass.md#arrowfunction)*

*Defined in [classes.ts:129](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L129)*



This is a simple fat arrow function.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| param2 | `string` | The second parameter needed by this function. |
| param1 | `number` | The first parameter needed by this function. |





**Returns:** `void`





___

<a id="getname"></a>

###  getName

► **getName**(): `string`




*Implementation of [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md).[getName](../interfaces/_classes_.iprintnameinterface.md#getname)*

*Inherited from [BaseClass](_classes_.baseclass.md).[getName](_classes_.baseclass.md#getname)*

*Defined in [classes.ts:94](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L94)*



This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.





**Returns:** `string`
Return the name.






___

<a id="print"></a>

###  print

► **print**(value: *`string`*): `void`




*Implementation of [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md).[print](../interfaces/_classes_.iprintnameinterface.md#print)*

*Defined in [classes.ts:185](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L185)*



This is a simple interface function.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `string` | - |





**Returns:** `void`





___

<a id="printname"></a>

###  printName

► **printName**(): `void`




*Implementation of [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md).[printName](../interfaces/_classes_.iprintnameinterface.md#printname)*

*Defined in [classes.ts:190](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L190)*



This is a interface function of IPrintNameInterface




**Returns:** `void`





___

<a id="setname"></a>

###  setName

► **setName**(name: *`string`*): `void`




*Inherited from [BaseClass](_classes_.baseclass.md).[setName](_classes_.baseclass.md#setname)*

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




*Inherited from [BaseClass](_classes_.baseclass.md).[caTest](_classes_.baseclass.md#catest)*

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




*Inherited from [BaseClass](_classes_.baseclass.md).[getInstance](_classes_.baseclass.md#getinstance)*

*Defined in [classes.ts:146](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L146)*



This is a static function.

Static functions should not be inherited.





**Returns:** [BaseClass](_classes_.baseclass.md)
An instance of BaseClass.






___

<a id="getname-1"></a>

### «Static» getName

► **getName**(): `string`




*Inherited from [BaseClass](_classes_.baseclass.md).[getName](_classes_.baseclass.md#getname-1)*

*Defined in [classes.ts:106](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L106)*



This is a simple static member function.

Static functions should not be inherited. This class has a
member with the same name, both should be documented.





**Returns:** `string`
Return the name.






___


