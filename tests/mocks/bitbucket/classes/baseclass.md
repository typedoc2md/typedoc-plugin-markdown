[typedoc-plugin-markdown](../index.md) > [BaseClass](../classes/baseclass.md)



# Class: BaseClass


This is a simple base class.

This is a simple example on how to use BaseClass.

![My image alt text](../media/logo-128.png)


## Hierarchy

**BaseClass**

↳  [SubClassA](subclassa.md)




↳  [SubClassB](subclassb.md)








## Implements

* [INameInterface](../interfaces/inameinterface.md)

## Index

### Constructors

* [constructor](baseclass.md#markdown-header-constructor)


### Properties

* [internalClass](baseclass.md#markdown-header-private-internalclass)
* [kind](baseclass.md#markdown-header-protected-kind)
* [name](baseclass.md#markdown-header-name)
* [instance](baseclass.md#markdown-header-static-private-instance)
* [instances](baseclass.md#markdown-header-static-private-instances)


### Methods

* [arrowFunction](baseclass.md#markdown-header-arrowfunction)
* [checkName](baseclass.md#markdown-header-private-checkname)
* [getName](baseclass.md#markdown-header-getname)
* [setName](baseclass.md#markdown-header-setname)
* [caTest](baseclass.md#markdown-header-static-catest)
* [getInstance](baseclass.md#markdown-header-static-getinstance)
* [getName](baseclass.md#markdown-header-static-getname)



---
## Constructors



### ⊕ **new BaseClass**(name: *`string`*): [BaseClass](baseclass.md)


### ⊕ **new BaseClass**(source: *[BaseClass](baseclass.md)*): [BaseClass](baseclass.md)






**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name | `string` | - |





**Returns:** [BaseClass](baseclass.md)





**Parameters:**

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| source | [BaseClass](baseclass.md) | - |





**Returns:** [BaseClass](baseclass.md)

---


## Properties


### «Private» internalClass

** ●  internalClass**:  *[InternalClass](internalclass.md)* 




This is an instance member of an internal class.




___



### «Protected» kind

** ●  kind**:  *`number`* 




This is a simple protected member.




___



###  name

** ●  name**:  *`string`* 




This is a simple public member.




___



### «Static»«Private» instance

** ●  instance**:  *[BaseClass](baseclass.md)* 




This is a static member.

Static members should not be inherited.





___



### «Static»«Private» instances

** ●  instances**:  *[BaseClass](baseclass.md)[]* 






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



### «Private» checkName

► **checkName**(): `boolean`







This is a private function.




**Returns:** `boolean`





___



###  getName

► **getName**(): `string`







This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.





**Returns:** `string`
Return the name.






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


