[typedoc-plugin-markdown](../index.md) > ["classes"](../modules/_classes_.md) > [BaseClass](../classes/_classes_.baseclass.md)

# Class: BaseClass


This is a simple base class.

[[include:class-example.md]]


## Hierarchy

**BaseClass**

↳  [SubClassA](../classes/_classes_.subclassa.md)




↳  [SubClassB](../classes/_classes_.subclassb.md)







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



<a id="constructor"></a>

## Constructors


## ⊕ **new BaseClass**(name: *string*): [BaseClass](../classes/_classes_.baseclass.md)


## ⊕ **new BaseClass**(source: *[BaseClass](../classes/_classes_.baseclass.md)*): [BaseClass](../classes/_classes_.baseclass.md)


*Defined in [classes.ts:70](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L70)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | - |





**Returns:** [BaseClass](../classes/_classes_.baseclass.md)

*Defined in [classes.ts:72](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L72)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| source  | [BaseClass](../classes/_classes_.baseclass.md) | - | - |





**Returns:** [BaseClass](../classes/_classes_.baseclass.md)


## Properties

<a id="internalclass"></a>
### «Private» internalClass
**internalClass**:  *[InternalClass](../classes/_classes_.internalclass.md)* 

*Defined in [classes.ts:70](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L70)*



This is an instance member of an internal class.




<a id="kind"></a>
### «Protected» kind
**kind**:  *number* 

*Defined in [classes.ts:65](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L65)*



This is a simple protected member.




<a id="name"></a>
###  name
**name**:  *string* 

*Implementation of [INameInterface](../interfaces/_classes_.inameinterface.md).[name](../interfaces/_classes_.inameinterface.md#name)*

*Defined in [classes.ts:60](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L60)*



This is a simple public member.




<a id="instance"></a>
### «Static»«Private» instance
**instance**:  *[BaseClass](../classes/_classes_.baseclass.md)* 

*Defined in [classes.ts:55](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L55)*



This is a static member.

Static members should not be inherited.





<a id="instances"></a>
### «Static»«Private» instances
**instances**:  *[BaseClass](../classes/_classes_.baseclass.md)[]* 

*Defined in [classes.ts:56](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L56)*







## Methods

<a id="arrowfunction"></a>

###  arrowFunction

► **arrowFunction**(param2: *string*, param1: *number*): void

*Defined in [classes.ts:129](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L129)*


This is a simple fat arrow function.


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| param2  | string | - | The second parameter needed by this function. |
| param1  | number | - | The first parameter needed by this function. |





**Returns:** void

---

<a id="checkname"></a>

### «Private» checkName

► **checkName**(): boolean

*Defined in [classes.ts:135](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L135)*


This is a private function.




**Returns:** boolean

---

<a id="getname"></a>

###  getName

► **getName**(): string

*Implementation of [INameInterface](../interfaces/_classes_.inameinterface.md).[getName](../interfaces/_classes_.inameinterface.md#getname)*

*Defined in [classes.ts:94](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L94)*


This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.





**Returns:** string
Return the name.


---

<a id="setname"></a>

###  setName

► **setName**(name: *string*): void

*Defined in [classes.ts:117](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L117)*


This is a simple member function.

It should be inherited by all subclasses.



#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | The new name. |





**Returns:** void

---

<a id="catest"></a>

### «Static» caTest

► **caTest**(originalValues: *[BaseClass](../classes/_classes_.baseclass.md)*, newRecord: *any*, fieldNames: *string[]*, mandatoryFields: *string[]*): string

*Defined in [classes.ts:153](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L153)*

**see**: https://github.com/sebastian-lenz/typedoc/issues/42


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| originalValues  | [BaseClass](../classes/_classes_.baseclass.md) | - | - |
| newRecord  | any | - | - |
| fieldNames  | string[] | - | - |
| mandatoryFields  | string[] | - | - |





**Returns:** string

---

<a id="getinstance"></a>

### «Static» getInstance

► **getInstance**(): [BaseClass](../classes/_classes_.baseclass.md)

*Defined in [classes.ts:146](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L146)*


This is a static function.

Static functions should not be inherited.





**Returns:** [BaseClass](../classes/_classes_.baseclass.md)
An instance of BaseClass.


---

<a id="getname-1"></a>

### «Static» getName

► **getName**(): string

*Defined in [classes.ts:106](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L106)*


This is a simple static member function.

Static functions should not be inherited. This class has a
member with the same name, both should be documented.





**Returns:** string
Return the name.


---



