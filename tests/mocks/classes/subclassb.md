[typedoc-plugin-markdown](../index.md) > [SubClassB](../classes/subclassb.md)



# Class: SubClassB


This is a class that extends another class.

The constructor of the original class should be overwritten.


## Hierarchy


 [BaseClass](baseclass.md)

**↳ SubClassB**







## Implements

* [INameInterface](../interfaces/inameinterface.md)

## Index

### Constructors

* [constructor](subclassb.md#constructor)


### Properties

* [kind](subclassb.md#kind)
* [name](subclassb.md#name)


### Methods

* [arrowFunction](subclassb.md#arrowfunction)
* [doSomething](subclassb.md#dosomething)
* [getName](subclassb.md#getname)
* [setName](subclassb.md#setname)
* [caTest](subclassb.md#catest)
* [getInstance](subclassb.md#getinstance)
* [getName](subclassb.md#getname-1)



## Constructors
<a id="constructor"></a>


### ⊕ **new SubClassB**(name: *string*): [SubClassB](subclassb.md)


*Overrides [BaseClass](baseclass.md).[constructor](baseclass.md#constructor)*

*Defined in [classes.ts:238](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L238)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | - |





**Returns:** [SubClassB](subclassb.md)

---


## Properties
<a id="kind"></a>

### «Protected» kind

**kind**:  *number* 

*Inherited from [BaseClass](baseclass.md).[kind](baseclass.md#kind)*

*Defined in [classes.ts:65](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L65)*


This is a simple protected member.




___

<a id="name"></a>

###  name

**name**:  *string* 

*Implementation of [INameInterface](../interfaces/inameinterface.md).[name](../interfaces/inameinterface.md#name)*

*Inherited from [BaseClass](baseclass.md).[name](baseclass.md#name)*

*Defined in [classes.ts:60](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L60)*


This is a simple public member.




___


## Methods
<a id="arrowfunction"></a>

###  arrowFunction

► **arrowFunction**(param2: *string*, param1: *number*): void



*Inherited from [BaseClass](baseclass.md).[arrowFunction](baseclass.md#arrowfunction)*

*Defined in [classes.ts:129](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L129)*

This is a simple fat arrow function.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| param2  | string | - | The second parameter needed by this function. |
| param1  | number | - | The first parameter needed by this function. |





**Returns:** void





___

<a id="dosomething"></a>

###  doSomething

► **doSomething**(value: *[string,[SubClassA](subclassa.md),[SubClassB](subclassb.md)]*): void



*Defined in [classes.ts:243](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L243)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | [string,[SubClassA](subclassa.md),[SubClassB](subclassb.md)] | - | - |





**Returns:** void





___

<a id="getname"></a>

###  getName

► **getName**(): string



*Implementation of [INameInterface](../interfaces/inameinterface.md).[getName](../interfaces/inameinterface.md#getname)*

*Inherited from [BaseClass](baseclass.md).[getName](baseclass.md#getname)*

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



*Inherited from [BaseClass](baseclass.md).[setName](baseclass.md#setname)*

*Defined in [classes.ts:117](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L117)*

This is a simple member function.

It should be inherited by all subclasses.



**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | The new name. |





**Returns:** void





___

<a id="catest"></a>

### «Static» caTest

► **caTest**(originalValues: *[BaseClass](baseclass.md)*, newRecord: *any*, fieldNames: *string[]*, mandatoryFields: *string[]*): string



*Inherited from [BaseClass](baseclass.md).[caTest](baseclass.md#catest)*

*Defined in [classes.ts:153](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L153)*
**see**: https://github.com/sebastian-lenz/typedoc/issues/42


**Parameters:**

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



*Inherited from [BaseClass](baseclass.md).[getInstance](baseclass.md#getinstance)*

*Defined in [classes.ts:146](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L146)*

This is a static function.

Static functions should not be inherited.





**Returns:** [BaseClass](baseclass.md)
An instance of BaseClass.






___

<a id="getname-1"></a>

### «Static» getName

► **getName**(): string



*Inherited from [BaseClass](baseclass.md).[getName](baseclass.md#getname-1)*

*Defined in [classes.ts:106](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L106)*

This is a simple static member function.

Static functions should not be inherited. This class has a
member with the same name, both should be documented.





**Returns:** string
Return the name.






___


