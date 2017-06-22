[typedoc-plugin-markdown](../index.md) > [SubClassA](../classes/subclassa.md)



# Class: SubClassA


This is a class that extends another class.

This class has no own constructor, so its constructor should be inherited
from BaseClass.


## Hierarchy


 [BaseClass](baseclass.md)

**↳ SubClassA**






## Implements

* [INameInterface](../interfaces/inameinterface.md)
* [IPrintNameInterface](../interfaces/iprintnameinterface.md)

## Index

### Constructors

* [constructor](subclassa.md#constructor)


### Properties

* [kind](subclassa.md#kind)
* [name](subclassa.md#name)


### Accessors

* [nameProperty](subclassa.md#nameproperty)
* [readOnlyNameProperty](subclassa.md#readonlynameproperty)
* [writeOnlyNameProperty](subclassa.md#writeonlynameproperty)


### Methods

* [arrowFunction](subclassa.md#arrowfunction)
* [getName](subclassa.md#getname)
* [print](subclassa.md#print)
* [printName](subclassa.md#printname)
* [setName](subclassa.md#setname)
* [caTest](subclassa.md#catest)
* [getInstance](subclassa.md#getinstance)
* [getName](subclassa.md#getname-1)



## Constructors
<a id="constructor"></a>


### ⊕ **new SubClassA**(name: *string*): [SubClassA](subclassa.md)


### ⊕ **new SubClassA**(source: *[BaseClass](baseclass.md)*): [SubClassA](subclassa.md)


*Inherited from [BaseClass](baseclass.md).[constructor](baseclass.md#constructor)*

*Defined in [classes.ts:70](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L70)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | - |





**Returns:** [SubClassA](subclassa.md)

*Inherited from [BaseClass](baseclass.md).[constructor](baseclass.md#constructor)*

*Defined in [classes.ts:72](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L72)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| source  | [BaseClass](baseclass.md) | - | - |





**Returns:** [SubClassA](subclassa.md)

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

*Implementation of [IPrintNameInterface](../interfaces/iprintnameinterface.md).[name](../interfaces/iprintnameinterface.md#name)*

*Inherited from [BaseClass](baseclass.md).[name](baseclass.md#name)*

*Defined in [classes.ts:60](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L60)*



This is a simple public member.




___


## Accessors
<a id="nameproperty"></a>

###  nameProperty


getnameProperty(): stringsetnameProperty(value: *string*): void

*Defined in [classes.ts:199](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L199)*


Returns the name. See [[BaseClass.name]].




**Returns:** string
The return value.


*Defined in [classes.ts:209](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L209)*


Sets the name. See [[BaseClass.name]].


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | string | - | The new name. |





**Returns:** void
The return value.




___

<a id="readonlynameproperty"></a>

###  readOnlyNameProperty


getreadOnlyNameProperty(): string

*Defined in [classes.ts:218](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L218)*


Returns the name. See [[BaseClass.name]].




**Returns:** string
The return value.




___

<a id="writeonlynameproperty"></a>

###  writeOnlyNameProperty


setwriteOnlyNameProperty(value: *string*): void

*Defined in [classes.ts:228](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L228)*


Sets the name. See [[BaseClass.name]].


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | string | - | The new name. |





**Returns:** void
The return value.




___


## Methods
<a id="arrowfunction"></a>

###  arrowFunction

► **arrowFunction**(param2: *string*, param1: *number*): void



*Inherited from [BaseClass](baseclass.md).[arrowFunction](baseclass.md#arrowfunction)*

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



*Implementation of [IPrintNameInterface](../interfaces/iprintnameinterface.md).[getName](../interfaces/iprintnameinterface.md#getname)*

*Inherited from [BaseClass](baseclass.md).[getName](baseclass.md#getname)*

*Defined in [classes.ts:94](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L94)*


This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.





**Returns:** string
Return the name.






___

<a id="print"></a>

###  print

► **print**(value: *string*): void



*Implementation of [IPrintNameInterface](../interfaces/iprintnameinterface.md).[print](../interfaces/iprintnameinterface.md#print)*

*Defined in [classes.ts:185](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L185)*


This is a simple interface function.


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | string | - | - |





**Returns:** void





___

<a id="printname"></a>

###  printName

► **printName**(): void



*Implementation of [IPrintNameInterface](../interfaces/iprintnameinterface.md).[printName](../interfaces/iprintnameinterface.md#printname)*

*Defined in [classes.ts:190](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L190)*


This is a interface function of IPrintNameInterface




**Returns:** void





___

<a id="setname"></a>

###  setName

► **setName**(name: *string*): void



*Inherited from [BaseClass](baseclass.md).[setName](baseclass.md#setname)*

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



*Inherited from [BaseClass](baseclass.md).[caTest](baseclass.md#catest)*

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


