[typedoc-plugin-markdown](../index.md) > [BaseClass](../classes/baseclass.md)



# Class: BaseClass


This is a simple base class.

[[include:class-example.md]]


## Hierarchy

**BaseClass**

↳  [SubClassA](subclassa.md)




↳  [SubClassB](subclassb.md)







## Implements

* [INameInterface](../interfaces/inameinterface.md)

## Index

### Constructors

* [constructor](baseclass.md#constructor)


### Properties

* [kind](baseclass.md#kind)
* [name](baseclass.md#name)


### Methods

* [arrowFunction](baseclass.md#arrowfunction)
* [getName](baseclass.md#getname)
* [setName](baseclass.md#setname)
* [caTest](baseclass.md#catest)
* [getInstance](baseclass.md#getinstance)
* [getName](baseclass.md#getname-1)



## Constructors
<a id="constructor"></a>


### ⊕ **new BaseClass**(name: *string*): [BaseClass](baseclass.md)


### ⊕ **new BaseClass**(source: *[BaseClass](baseclass.md)*): [BaseClass](baseclass.md)


*Defined in [classes.ts:70](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L70)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | - |





**Returns:** [BaseClass](baseclass.md)

*Defined in [classes.ts:72](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L72)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| source  | [BaseClass](baseclass.md) | - | - |





**Returns:** [BaseClass](baseclass.md)

---


## Properties
<a id="kind"></a>

### «Protected» kind

**kind**:  *number* 

*Defined in [classes.ts:65](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L65)*



This is a simple protected member.




___

<a id="name"></a>

###  name

**name**:  *string* 

*Implementation of [INameInterface](../interfaces/inameinterface.md).[name](../interfaces/inameinterface.md#name)*

*Defined in [classes.ts:60](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L60)*



This is a simple public member.




___


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





___

<a id="getname"></a>

###  getName

► **getName**(): string



*Implementation of [INameInterface](../interfaces/inameinterface.md).[getName](../interfaces/inameinterface.md#getname)*

*Defined in [classes.ts:94](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L94)*


This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.





**Returns:** string
Return the name.






___

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





___

<a id="catest"></a>

### «Static» caTest

► **caTest**(originalValues: *[BaseClass](baseclass.md)*, newRecord: *any*, fieldNames: *string[]*, mandatoryFields: *string[]*): string



*Defined in [classes.ts:153](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L153)*

**see**: https://github.com/sebastian-lenz/typedoc/issues/42


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| originalValues  | [BaseClass](baseclass.md) | - | - |
| newRecord  | any | - | - |
| fieldNames  | string[] | - | - |
| mandatoryFields  | string[] | - | - |





**Returns:** string





___

<a id="getinstance"></a>

### «Static» getInstance

► **getInstance**(): [BaseClass](baseclass.md)



*Defined in [classes.ts:146](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L146)*


This is a static function.

Static functions should not be inherited.





**Returns:** [BaseClass](baseclass.md)
An instance of BaseClass.






___

<a id="getname-1"></a>

### «Static» getName

► **getName**(): string



*Defined in [classes.ts:106](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L106)*


This is a simple static member function.

Static functions should not be inherited. This class has a
member with the same name, both should be documented.





**Returns:** string
Return the name.






___


