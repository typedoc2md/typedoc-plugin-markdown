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

* [constructor](subclassa.md#markdown-header-constructor)


### Properties

* [kind](subclassa.md#markdown-header-protected-kind)
* [name](subclassa.md#markdown-header-name)


### Accessors

* [nameProperty](subclassa.md#markdown-header-nameproperty)
* [readOnlyNameProperty](subclassa.md#markdown-header-readonlynameproperty)
* [writeOnlyNameProperty](subclassa.md#markdown-header-writeonlynameproperty)


### Methods

* [arrowFunction](subclassa.md#markdown-header-arrowfunction)
* [getName](subclassa.md#markdown-header-getname)
* [print](subclassa.md#markdown-header-print)
* [printName](subclassa.md#markdown-header-printname)
* [setName](subclassa.md#markdown-header-setname)
* [caTest](subclassa.md#markdown-header-static-catest)
* [getInstance](subclassa.md#markdown-header-static-getinstance)
* [getName](subclassa.md#markdown-header-static-getname)



---
## Constructors



### ⊕ **new SubClassA**(name: *`string`*): [SubClassA](subclassa.md)


### ⊕ **new SubClassA**(source: *[BaseClass](baseclass.md)*): [SubClassA](subclassa.md)






**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name | `string` | - |





**Returns:** [SubClassA](subclassa.md)





**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| source | [BaseClass](baseclass.md) | - |





**Returns:** [SubClassA](subclassa.md)

---


## Properties


### «Protected» kind

** ●  kind**:  *`number`* 




This is a simple protected member.




___



###  name

** ●  name**:  *`string`* 




This is a simple public member.




___


## Accessors


###  nameProperty


getnameProperty(): `string`setnameProperty(value: *`string`*): `void`





Returns the name. See [[BaseClass.name]].




**Returns:** `string`
The return value.






Sets the name. See [[BaseClass.name]].


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `string` | The new name. |





**Returns:** `void`
The return value.




___



###  readOnlyNameProperty


getreadOnlyNameProperty(): `string`





Returns the name. See [[BaseClass.name]].




**Returns:** `string`
The return value.




___



###  writeOnlyNameProperty


setwriteOnlyNameProperty(value: *`string`*): `void`





Sets the name. See [[BaseClass.name]].


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `string` | The new name. |





**Returns:** `void`
The return value.




___


## Methods


###  arrowFunction

► **arrowFunction**(param2: *`string`*, param1: *`number`*): `void`







This is a simple fat arrow function.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| param2 | `string` | The second parameter needed by this function. |
| param1 | `number` | The first parameter needed by this function. |





**Returns:** `void`





___



###  getName

► **getName**(): `string`







This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.





**Returns:** `string`
Return the name.






___



###  print

► **print**(value: *`string`*): `void`







This is a simple interface function.


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value | `string` | - |





**Returns:** `void`





___



###  printName

► **printName**(): `void`







This is a interface function of IPrintNameInterface




**Returns:** `void`





___



###  setName

► **setName**(name: *`string`*): `void`







This is a simple member function.

It should be inherited by all subclasses.



**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name | `string` | The new name. |





**Returns:** `void`





___



### «Static» caTest

► **caTest**(originalValues: *[BaseClass](baseclass.md)*, newRecord: *`any`*, fieldNames: *`string`[]*, mandatoryFields: *`string`[]*): `string`






**see**: https://github.com/sebastian-lenz/typedoc/issues/42


**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| originalValues | [BaseClass](baseclass.md) | - |
| newRecord | `any` | - |
| fieldNames | `string`[] | - |
| mandatoryFields | `string`[] | - |





**Returns:** `string`





___



### «Static» getInstance

► **getInstance**(): [BaseClass](baseclass.md)







This is a static function.

Static functions should not be inherited.





**Returns:** [BaseClass](baseclass.md)
An instance of BaseClass.






___



### «Static» getName

► **getName**(): `string`







This is a simple static member function.

Static functions should not be inherited. This class has a
member with the same name, both should be documented.





**Returns:** `string`
Return the name.






___


