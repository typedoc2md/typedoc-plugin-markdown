
#  typedoc-plugin-markdown
↩ [Back to Index](#index)
## Index

### External modules

* [&quot;basic-types&quot;](#external-module-basic-types-)
* [&quot;classes&quot;](#external-module-classes-)
* [&quot;enums&quot;](#external-module-enums-)
* [&quot;functions&quot;](#external-module-functions-)
* [&quot;interfaces&quot;](#external-module-interfaces-)
* [&quot;internal&quot;](#external-module-internal-)
* [&quot;private-members&quot;](#external-module-private-members-)




For programs to be useful, we need to be able to work with some of the simplest units of data:
numbers, strings, structures, boolean values, and the like.

## Index

### Variables

* [amount](#amount-variable)
* [color](#color-variable)
* [isDone](#isdone-variable)
* [numbers](#numbers-variable)


### Object literals

* [aMixedObject](#amixedobject-object literal)



## Variables



###  amount

**amount**:  *number*  = 6

*Defined in [basic-types.ts:20](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L20)*



This is a number type
```
const decimal: number = 6;
```




###  color

**color**:  *string*  = "blue"

*Defined in [basic-types.ts:28](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L28)*



This is a string type
```
const color: string = "blue";
```




###  isDone

**isDone**:  *boolean*  = false

*Defined in [basic-types.ts:12](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L12)*



This is a boolean type
```
const isDone: boolean = false;
```




###  numbers

**numbers**:  *number[]*  =  [1, 2, 3]

*Defined in [basic-types.ts:36](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L36)*



This is an array type
```
const numbers: number[] = [1, 2, 3];
```




<a id="amixedobject"></a>
## Object literal: aMixedObject

This is an object with various types



###  someNumber

**someNumber**:  *number*  = 10

*Defined in [basic-types.ts:45](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L45)*





###  someString

**someString**:  *string*  = "hello"

*Defined in [basic-types.ts:46](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L46)*




###  someFunction

► **someFunction**(): string



*Defined in [basic-types.ts:42](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/basic-types.ts#L42)*




**Returns:** string



----






## Index

### Classes

* [BaseClass](#class-baseclass)
* [GenericClass](#class-genericclass)
* [InternalClass](#class-internalclass)
* [NonGenericClass](#class-nongenericclass)
* [SubClassA](#class-subclassa)
* [SubClassB](#class-subclassb)


### Interfaces

* [INameInterface](#interface-inameinterface)
* [IPrintInterface](#interface-iprintinterface)
* [IPrintNameInterface](#interface-iprintnameinterface)




This is a simple base class.

[[include:class-example.md]]


## Hierarchy

**BaseClass**

↳  [SubClassA](#class-subclassa)




↳  [SubClassB](#class-subclassb)







## Implements

* [INameInterface](#interface-inameinterface)

## Index

### Constructors

* [constructor](#constructor-constructor)


### Properties

* [internalClass](#-private-internalclass-property)
* [kind](#-protected-kind-property)
* [name](#name-property)
* [instance](#-private-instance-property)
* [instances](#-private-instances-property)


### Methods

* [arrowFunction](#arrowfunction-method)
* [checkName](#-private-checkname-method)
* [getName](#getname-method)
* [setName](#setname-method)
* [caTest](#-static-catest-method)
* [getInstance](#-static-getinstance-method)
* [getName](#-static-getname-method)



<a id="constructor"></a>

## Constructors


## ⊕ **new BaseClass**(name: *string*): [BaseClass](#class-baseclass)


## ⊕ **new BaseClass**(source: *[BaseClass](#class-baseclass)*): [BaseClass](#class-baseclass)


*Defined in [classes.ts:70](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L70)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | - |





**Returns:** [BaseClass](#class-baseclass)

*Defined in [classes.ts:72](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L72)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| source  | [BaseClass](#class-baseclass) | - | - |





**Returns:** [BaseClass](#class-baseclass)


## Properties


### «Private» internalClass
**internalClass**:  *[InternalClass](#class-internalclass)* 

*Defined in [classes.ts:70](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L70)*



This is an instance member of an internal class.





### «Protected» kind
**kind**:  *number* 

*Defined in [classes.ts:65](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L65)*



This is a simple protected member.





###  name
**name**:  *string* 

*Implementation of INameInterface.name*

*Defined in [classes.ts:60](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L60)*



This is a simple public member.





### «Static»«Private» instance
**instance**:  *[BaseClass](#class-baseclass)* 

*Defined in [classes.ts:55](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L55)*



This is a static member.

Static members should not be inherited.






### «Static»«Private» instances
**instances**:  *[BaseClass](#class-baseclass)[]* 

*Defined in [classes.ts:56](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L56)*







## Methods



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



### «Private» checkName

► **checkName**(): boolean



*Defined in [classes.ts:135](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L135)*


This is a private function.




**Returns:** boolean



---



###  getName

► **getName**(): string



*Implementation of INameInterface.getName*

*Defined in [classes.ts:94](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L94)*


This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.





**Returns:** string
Return the name.




---



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



### «Static» caTest

► **caTest**(originalValues: *[BaseClass](#class-baseclass)*, newRecord: *any*, fieldNames: *string[]*, mandatoryFields: *string[]*): string



*Defined in [classes.ts:153](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L153)*

**see**: https://github.com/sebastian-lenz/typedoc/issues/42


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| originalValues  | [BaseClass](#class-baseclass) | - | - |
| newRecord  | any | - | - |
| fieldNames  | string[] | - | - |
| mandatoryFields  | string[] | - | - |





**Returns:** string



---



### «Static» getInstance

► **getInstance**(): [BaseClass](#class-baseclass)



*Defined in [classes.ts:146](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L146)*


This is a static function.

Static functions should not be inherited.





**Returns:** [BaseClass](#class-baseclass)
An instance of BaseClass.




---



### «Static» getName

► **getName**(): string



*Defined in [classes.ts:106](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L106)*


This is a simple static member function.

Static functions should not be inherited. This class has a
member with the same name, both should be documented.





**Returns:** string
Return the name.




---





This is a generic class.

## Type parameters
#### T :  [BaseClass](#class-baseclass)

This a type parameter.


## Hierarchy

**GenericClass**

↳  [NonGenericClass](#class-nongenericclass)







## Index

### Constructors

* [constructor](#constructor-constructor)


### Properties

* [p2](#-protected-p2-property)
* [p3](#p3-property)
* [p4](#-private-p4-property)
* [value](#value-property)


### Methods

* [getValue](#getvalue-method)
* [setValue](#setvalue-method)



<a id="constructor"></a>

## Constructors


## ⊕ **new GenericClass**(p1: *any*, p2: *T*, p3: *number*, p4: *number*): [GenericClass](#class-genericclass)


*Defined in [classes.ts:254](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L254)*


Constructor short text.


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| p1  | any | - | Constructor param |
| p2  | T | - | Private string property |
| p3  | number | - | Public number property |
| p4  | number | - | Public implicit any property |





**Returns:** [GenericClass](#class-genericclass)


## Properties


### «Protected» p2
**p2**:  *T* 

*Defined in [classes.ts:264](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L264)*



Private string property





###  p3
**p3**:  *number* 

*Defined in [classes.ts:264](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L264)*



Public number property





### «Private» p4
**p4**:  *number* 

*Defined in [classes.ts:264](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L264)*



Public implicit any property






###  value
**value**:  *T* 

*Defined in [classes.ts:254](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L254)*







## Methods



###  getValue

► **getValue**(): T



*Defined in [classes.ts:274](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L274)*




**Returns:** T



---



###  setValue

► **setValue**(value: *T*): void



*Defined in [classes.ts:270](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L270)*



#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | T | - | [[getValue]] is the counterpart. |





**Returns:** void



---





This is an internal class, it is not exported.

## Hierarchy

**InternalClass**




## Index

### Constructors

* [constructor](#constructor-constructor)



<a id="constructor"></a>

## Constructors


## ⊕ **new InternalClass**(options: *object*): [InternalClass](#class-internalclass)


*Defined in [classes.ts:169](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L169)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| options  | object | - | - |





**Returns:** [InternalClass](#class-internalclass)




This a non generic class derived from a [[GenericClass|generic class]].

## Hierarchy


 [GenericClass](#class-genericclass)[SubClassB](#class-subclassb)

**↳ NonGenericClass**






## Index

### Constructors

* [constructor](#constructor-constructor)


### Properties

* [p2](#-protected-p2-property)
* [p3](#p3-property)
* [value](#value-property)


### Methods

* [getValue](#getvalue-method)
* [setValue](#setvalue-method)



<a id="constructor"></a>

## Constructors


## ⊕ **new NonGenericClass**(p1: *any*, p2: *[SubClassB](#class-subclassb)*, p3: *number*, p4: *number*): [NonGenericClass](#class-nongenericclass)


*Inherited from GenericClass.constructor*

*Defined in [classes.ts:254](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L254)*


Constructor short text.


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| p1  | any | - | Constructor param |
| p2  | [SubClassB](#class-subclassb) | - | Private string property |
| p3  | number | - | Public number property |
| p4  | number | - | Public implicit any property |





**Returns:** [NonGenericClass](#class-nongenericclass)


## Properties


### «Protected» p2
**p2**:  *[SubClassB](#class-subclassb)* 

*Inherited from GenericClass.p2*

*Defined in [classes.ts:264](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L264)*



Private string property





###  p3
**p3**:  *number* 

*Inherited from GenericClass.p3*

*Defined in [classes.ts:264](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L264)*



Public number property





###  value
**value**:  *[SubClassB](#class-subclassb)* 

*Inherited from GenericClass.value*

*Defined in [classes.ts:254](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L254)*







## Methods



###  getValue

► **getValue**(): [SubClassB](#class-subclassb)



*Inherited from GenericClass.getValue*

*Defined in [classes.ts:274](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L274)*




**Returns:** [SubClassB](#class-subclassb)



---



###  setValue

► **setValue**(value: *[SubClassB](#class-subclassb)*): void



*Inherited from GenericClass.setValue*

*Defined in [classes.ts:270](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L270)*



#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | [SubClassB](#class-subclassb) | - | [[getValue]] is the counterpart. |





**Returns:** void



---





This is a class that extends another class.

This class has no own constructor, so its constructor should be inherited
from BaseClass.


## Hierarchy


 [BaseClass](#class-baseclass)

**↳ SubClassA**






## Implements

* [INameInterface](#interface-inameinterface)
* [IPrintNameInterface](#interface-iprintnameinterface)

## Index

### Constructors

* [constructor](#constructor-constructor)


### Properties

* [kind](#-protected-kind-property)
* [name](#name-property)


### Accessors

* [nameProperty](#nameproperty-accessor)
* [readOnlyNameProperty](#readonlynameproperty-accessor)
* [writeOnlyNameProperty](#writeonlynameproperty-accessor)


### Methods

* [arrowFunction](#arrowfunction-method)
* [getName](#getname-method)
* [print](#print-method)
* [printName](#printname-method)
* [setName](#setname-method)
* [caTest](#-static-catest-method)
* [getInstance](#-static-getinstance-method)
* [getName](#-static-getname-method)



<a id="constructor"></a>

## Constructors


## ⊕ **new SubClassA**(name: *string*): [SubClassA](#class-subclassa)


## ⊕ **new SubClassA**(source: *[BaseClass](#class-baseclass)*): [SubClassA](#class-subclassa)


*Inherited from BaseClass.constructor*

*Defined in [classes.ts:70](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L70)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | - |





**Returns:** [SubClassA](#class-subclassa)

*Inherited from BaseClass.constructor*

*Defined in [classes.ts:72](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L72)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| source  | [BaseClass](#class-baseclass) | - | - |





**Returns:** [SubClassA](#class-subclassa)


## Properties


### «Protected» kind
**kind**:  *number* 

*Inherited from BaseClass.kind*

*Defined in [classes.ts:65](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L65)*



This is a simple protected member.





###  name
**name**:  *string* 

*Implementation of IPrintNameInterface.name*

*Inherited from BaseClass.name*

*Defined in [classes.ts:60](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L60)*



This is a simple public member.






### nameProperty


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




### readOnlyNameProperty


getreadOnlyNameProperty(): string

*Defined in [classes.ts:218](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L218)*


Returns the name. See [[BaseClass.name]].




**Returns:** string
The return value.




### writeOnlyNameProperty


setwriteOnlyNameProperty(value: *string*): void

*Defined in [classes.ts:228](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L228)*


Sets the name. See [[BaseClass.name]].


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | string | - | The new name. |





**Returns:** void
The return value.





## Methods



###  arrowFunction

► **arrowFunction**(param2: *string*, param1: *number*): void



*Inherited from BaseClass.arrowFunction*

*Defined in [classes.ts:129](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L129)*


This is a simple fat arrow function.


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| param2  | string | - | The second parameter needed by this function. |
| param1  | number | - | The first parameter needed by this function. |





**Returns:** void



---



###  getName

► **getName**(): string



*Implementation of IPrintNameInterface.getName*

*Inherited from BaseClass.getName*

*Defined in [classes.ts:94](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L94)*


This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.





**Returns:** string
Return the name.




---



###  print

► **print**(value: *string*): void



*Implementation of IPrintNameInterface.print*

*Defined in [classes.ts:185](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L185)*


This is a simple interface function.


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | string | - | - |





**Returns:** void



---



###  printName

► **printName**(): void



*Implementation of IPrintNameInterface.printName*

*Defined in [classes.ts:190](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L190)*


This is a interface function of IPrintNameInterface




**Returns:** void



---



###  setName

► **setName**(name: *string*): void



*Inherited from BaseClass.setName*

*Defined in [classes.ts:117](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L117)*


This is a simple member function.

It should be inherited by all subclasses.



#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | The new name. |





**Returns:** void



---



### «Static» caTest

► **caTest**(originalValues: *[BaseClass](#class-baseclass)*, newRecord: *any*, fieldNames: *string[]*, mandatoryFields: *string[]*): string



*Inherited from BaseClass.caTest*

*Defined in [classes.ts:153](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L153)*

**see**: https://github.com/sebastian-lenz/typedoc/issues/42


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| originalValues  | [BaseClass](#class-baseclass) | - | - |
| newRecord  | any | - | - |
| fieldNames  | string[] | - | - |
| mandatoryFields  | string[] | - | - |





**Returns:** string



---



### «Static» getInstance

► **getInstance**(): [BaseClass](#class-baseclass)



*Inherited from BaseClass.getInstance*

*Defined in [classes.ts:146](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L146)*


This is a static function.

Static functions should not be inherited.





**Returns:** [BaseClass](#class-baseclass)
An instance of BaseClass.




---



### «Static» getName

► **getName**(): string



*Inherited from BaseClass.getName*

*Defined in [classes.ts:106](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L106)*


This is a simple static member function.

Static functions should not be inherited. This class has a
member with the same name, both should be documented.





**Returns:** string
Return the name.




---





This is a class that extends another class.

The constructor of the original class should be overwritten.


## Hierarchy


 [BaseClass](#class-baseclass)

**↳ SubClassB**






## Implements

* [INameInterface](#interface-inameinterface)

## Index

### Constructors

* [constructor](#constructor-constructor)


### Properties

* [kind](#-protected-kind-property)
* [name](#name-property)


### Methods

* [arrowFunction](#arrowfunction-method)
* [doSomething](#dosomething-method)
* [getName](#getname-method)
* [setName](#setname-method)
* [caTest](#-static-catest-method)
* [getInstance](#-static-getinstance-method)
* [getName](#-static-getname-method)



<a id="constructor"></a>

## Constructors


## ⊕ **new SubClassB**(name: *string*): [SubClassB](#class-subclassb)


*Overrides BaseClass.constructor*

*Defined in [classes.ts:238](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L238)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | - |





**Returns:** [SubClassB](#class-subclassb)


## Properties


### «Protected» kind
**kind**:  *number* 

*Inherited from BaseClass.kind*

*Defined in [classes.ts:65](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L65)*



This is a simple protected member.





###  name
**name**:  *string* 

*Implementation of INameInterface.name*

*Inherited from BaseClass.name*

*Defined in [classes.ts:60](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L60)*



This is a simple public member.






## Methods



###  arrowFunction

► **arrowFunction**(param2: *string*, param1: *number*): void



*Inherited from BaseClass.arrowFunction*

*Defined in [classes.ts:129](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L129)*


This is a simple fat arrow function.


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| param2  | string | - | The second parameter needed by this function. |
| param1  | number | - | The first parameter needed by this function. |





**Returns:** void



---



###  doSomething

► **doSomething**(value: *[string,[SubClassA](#class-subclassa),[SubClassB](#class-subclassb)]*): void



*Defined in [classes.ts:243](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L243)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | [string,[SubClassA](#class-subclassa),[SubClassB](#class-subclassb)] | - | - |





**Returns:** void



---



###  getName

► **getName**(): string



*Implementation of INameInterface.getName*

*Inherited from BaseClass.getName*

*Defined in [classes.ts:94](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L94)*


This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.





**Returns:** string
Return the name.




---



###  setName

► **setName**(name: *string*): void



*Inherited from BaseClass.setName*

*Defined in [classes.ts:117](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L117)*


This is a simple member function.

It should be inherited by all subclasses.



#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | The new name. |





**Returns:** void



---



### «Static» caTest

► **caTest**(originalValues: *[BaseClass](#class-baseclass)*, newRecord: *any*, fieldNames: *string[]*, mandatoryFields: *string[]*): string



*Inherited from BaseClass.caTest*

*Defined in [classes.ts:153](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L153)*

**see**: https://github.com/sebastian-lenz/typedoc/issues/42


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| originalValues  | [BaseClass](#class-baseclass) | - | - |
| newRecord  | any | - | - |
| fieldNames  | string[] | - | - |
| mandatoryFields  | string[] | - | - |





**Returns:** string



---



### «Static» getInstance

► **getInstance**(): [BaseClass](#class-baseclass)



*Inherited from BaseClass.getInstance*

*Defined in [classes.ts:146](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L146)*


This is a static function.

Static functions should not be inherited.





**Returns:** [BaseClass](#class-baseclass)
An instance of BaseClass.




---



### «Static» getName

► **getName**(): string



*Inherited from BaseClass.getName*

*Defined in [classes.ts:106](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L106)*


This is a simple static member function.

Static functions should not be inherited. This class has a
member with the same name, both should be documented.





**Returns:** string
Return the name.




---






This is a simple interface.

## Hierarchy

**INameInterface**

↳  [IPrintNameInterface](#interface-iprintnameinterface)







### Implemented by

* [BaseClass](#class-baseclass)
* [SubClassA](#class-subclassa)
* [SubClassB](#class-subclassb)

## Index

### Properties

* [name](#name-property)


### Methods

* [getName](#getname-method)



## Properties


###  name
**name**:  *string* 

*Defined in [classes.ts:11](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L11)*



This is a interface member of INameInterface.

It should be inherited by all subinterfaces.







## Methods



###  getName

► **getName**(): string



*Defined in [classes.ts:18](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L18)*


This is a interface function of INameInterface.

It should be inherited by all subinterfaces.





**Returns:** string



---





This is a simple interface.

## Hierarchy

**IPrintInterface**

↳  [IPrintNameInterface](#interface-iprintnameinterface)







## Index

### Methods

* [print](#print-method)



## Methods



###  print

► **print**(value: *string*): void



*Defined in [classes.ts:30](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L30)*


This is a interface function of IPrintInterface

It should be inherited by all subinterfaces.



#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | string | - | - |





**Returns:** void



---





This is a interface inheriting from two other interfaces.

## Hierarchy


 [INameInterface](#interface-inameinterface)




 [IPrintInterface](#interface-iprintinterface)

**↳ IPrintNameInterface**






### Implemented by

* [SubClassA](#class-subclassa)

## Index

### Properties

* [name](#name-property)


### Methods

* [getName](#getname-method)
* [print](#print-method)
* [printName](#printname-method)



## Properties


###  name
**name**:  *string* 

*Inherited from INameInterface.name*

*Defined in [classes.ts:11](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L11)*



This is a interface member of INameInterface.

It should be inherited by all subinterfaces.







## Methods



###  getName

► **getName**(): string



*Inherited from INameInterface.getName*

*Defined in [classes.ts:18](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L18)*


This is a interface function of INameInterface.

It should be inherited by all subinterfaces.





**Returns:** string



---



###  print

► **print**(value: *string*): void



*Inherited from IPrintInterface.print*

*Defined in [classes.ts:30](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L30)*


This is a interface function of IPrintInterface

It should be inherited by all subinterfaces.



#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | string | - | - |





**Returns:** void



---



###  printName

► **printName**(): void



*Defined in [classes.ts:40](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L40)*


This is a interface function of IPrintNameInterface




**Returns:** void



---






## Index

### Modules

* [Enums](#module-enums)



## Index

### Enumerations

* [Direction](#direction-enumeration)
* [FileAccess](#fileaccess-enumeration)



### Direction

**Direction**:   

*Defined in [enums.ts:3](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L3)*




### Down

**Down**:   

*Defined in [enums.ts:5](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L5)*




### Left

**Left**:   

*Defined in [enums.ts:6](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L6)*




### Right

**Right**:   

*Defined in [enums.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L7)*




### Up

**Up**:    = 1

*Defined in [enums.ts:4](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L4)*





### FileAccess

**FileAccess**:   

*Defined in [enums.ts:10](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L10)*




### G

**G**:    =  '123'.length

*Defined in [enums.ts:17](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L17)*




### None

**None**:   

*Defined in [enums.ts:12](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L12)*




### Read

**Read**:    =  1 << 1

*Defined in [enums.ts:13](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L13)*




### ReadWrite

**ReadWrite**:    =  Read | Write

*Defined in [enums.ts:15](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L15)*




### Write

**Write**:    =  1 << 2

*Defined in [enums.ts:14](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/enums.ts#L14)*









## Index

### Modules

* [moduleFunction](#module-modulefunction)


### Functions

* [createSomething](#createsomething-function)
* [exportedFunction](#exportedfunction-function)
* [functionWithArguments](#functionwitharguments-function)
* [functionWithDefaults](#functionwithdefaults-function)
* [functionWithDocLink](#functionwithdoclink-function)
* [functionWithOptionalValue](#functionwithoptionalvalue-function)
* [functionWithRest](#functionwithrest-function)
* [genericFunction](#genericfunction-function)
* [internalFunction](#internalfunction-function)
* [multipleSignatures](#multiplesignatures-function)
* [variableFunction](#variablefunction-function)




This is the module extending the function moduleFunction().

### Callable
► **moduleFunction**(arg: *string*): string



*Defined in [functions.ts:130](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L130)*


This is a function that is extended by a module.


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| arg  | string | - | An argument. |





**Returns:** string




## Index

### Variables

* [functionVariable](#functionvariable-variable)


### Functions

* [append](#append-function)
* [prepend](#prepend-function)



## Variables



###  functionVariable

**functionVariable**:  *string* 

*Defined in [functions.ts:140](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L140)*



This variable is appended to a function.



## Functions


###  append

► **append**(): void



*Defined in [functions.ts:145](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L145)*


This function is appended to another function.




**Returns:** void



----



###  prepend

► **prepend**(): void



*Defined in [functions.ts:152](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L152)*


This function is appended to another function.




**Returns:** void



----






## Functions


###  createSomething

► **createSomething**(): object



*Defined in [functions.ts:161](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L161)*


A function that returns an object.
Also no type information is given, the object should be correctly reflected.




**Returns:** object



----



###  exportedFunction

► **exportedFunction**(): void



*Defined in [functions.ts:12](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L12)*


This is a simple exported function.




**Returns:** void



----



###  functionWithArguments

► **functionWithArguments**(paramZ: *string*, paramG: *any*, paramA: *[INameInterface](#interface-inameinterface)*): number



*Defined in [functions.ts:41](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L41)*


This is a function with multiple arguments and a return value.


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| paramZ  | string | - | This is a string parameter. |
| paramG  | any | - | This is a parameter flagged with any.    This sentence is placed in the next line. |
| paramA  | [INameInterface](#interface-inameinterface) | - | This is a **parameter** pointing to an interface. |





**Returns:** number



----



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




----



###  functionWithDocLink

► **functionWithDocLink**(): void



*Defined in [functions.ts:176](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L176)*


See {@linkcode INameInterface} and [INameInterface's name property]{@link INameInterface.name}.
Also, check out {@link http://www.google.com|Google} and
{@link https://github.com GitHub}.

Taken from http://usejsdoc.org/tags-inline-link.html.





**Returns:** void



----



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



----



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




----



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




----



###  internalFunction

► **internalFunction**(): void



*Defined in [functions.ts:6](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L6)*


This is an internal function.




**Returns:** void



----



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



----



###  variableFunction

► **variableFunction**(paramZ: *string*, paramG: *any*, paramA: *[INameInterface](#interface-inameinterface)*): number



*Defined in [functions.ts:25](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/functions.ts#L25)*


This is a function with multiple arguments and a return value.


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| paramZ  | string | - | This is a string parameter. |
| paramG  | any | - | This is a parameter flagged with any.    This sentence is placed in the next line. |
| paramA  | [INameInterface](#interface-inameinterface) | - | This is a **parameter** pointing to an interface. |





**Returns:** number



----





## Index

### Modules

* [interfaces](#module-interfaces)



## Index

### Interfaces

* [ClockConstructor](#interface-clockconstructor)
* [ClockInterface](#interface-clockinterface)
* [Shape](#interface-shape)
* [Square](#interface-square)
* [SquareConfig](#interface-squareconfig)
* [StringArray](#interface-stringarray)


### Type aliases

* [SearchFunc](#searchfunc-type alias)


### Variables

* [mySearch](#mysearch-variable)
* [square](#square-variable)


### Functions

* [createClock](#createclock-function)



## Hierarchy

**ClockConstructor**




## Index

### Constructors

* [constructor](#constructor-constructor)



<a id="constructor"></a>

## Constructors


## ⊕ **new ClockConstructor**(hour: *number*, minute: *number*): [ClockInterface](#interface-clockinterface)


*Defined in [interfaces.ts:26](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L26)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| hour  | number | - | - |
| minute  | number | - | - |





**Returns:** [ClockInterface](#interface-clockinterface)



## Hierarchy

**ClockInterface**




## Index

### Properties

* [currentTime](#currenttime-property)


### Methods

* [setTime](#settime-method)
* [tick](#tick-method)



## Properties


###  currentTime
**currentTime**:  *Date* 

*Defined in [interfaces.ts:22](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L22)*







## Methods



###  setTime

► **setTime**(d: *Date*): any



*Defined in [interfaces.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L23)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| d  | Date | - | - |





**Returns:** any



---



###  tick

► **tick**(): any



*Defined in [interfaces.ts:30](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L30)*




**Returns:** any



---




## Hierarchy

**Shape**

↳  [Square](#interface-square)







## Index

### Properties

* [color](#color-property)



## Properties


###  color
**color**:  *string* 

*Defined in [interfaces.ts:38](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L38)*








## Hierarchy


 [Shape](#interface-shape)

**↳ Square**






## Index

### Properties

* [color](#color-property)
* [sideLength](#sidelength-property)



## Properties


###  color
**color**:  *string* 

*Inherited from Shape.color*

*Defined in [interfaces.ts:38](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L38)*






###  sideLength
**sideLength**:  *number* 

*Defined in [interfaces.ts:42](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L42)*








## Hierarchy

**SquareConfig**




## Index

### Properties

* [color](#-optional-color-property)
* [width](#-optional-width-property)



## Properties


### «Optional» color
**color**:  *string* 

*Defined in [interfaces.ts:4](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L4)*






### «Optional» width
**width**:  *number* 

*Defined in [interfaces.ts:5](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L5)*








## Hierarchy

**StringArray**




### Indexable

[ index: number]:string## Index




### SearchFunc

**SearchFunc**:  *function* 

*Defined in [interfaces.ts:9](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L9)*


#### Type declaration
(source: *string*, subString: *string*): boolean


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| source  | string | - | - |
| subString  | string | - | - |





**Returns:** boolean







## Variables



###  mySearch

**mySearch**:  *[SearchFunc](#searchfunc-type alias)* 

*Defined in [interfaces.ts:11](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L11)*





###  square

**square**:  *[Square](#interface-square)*  =  {} as Square

*Defined in [interfaces.ts:45](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L45)*




## Functions


###  createClock

► **createClock**(ctor: *[ClockConstructor](#interface-clockconstructor)*, hour: *number*, minute: *number*): [ClockInterface](#interface-clockinterface)



*Defined in [interfaces.ts:33](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L33)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| ctor  | [ClockConstructor](#interface-clockconstructor) | - | - |
| hour  | number | - | - |
| minute  | number | - | - |





**Returns:** [ClockInterface](#interface-clockinterface)



----







## Index

### Classes

* [Greeter](#class-greeter)


### Variables

* [greeter](#greeter-variable)



## Hierarchy

**Greeter**




## Index

### Constructors

* [constructor](#constructor-constructor)


### Properties

* [greeting](#greeting-property)


### Methods

* [greet](#greet-method)



<a id="constructor"></a>

## Constructors


## ⊕ **new Greeter**(message: *string*): [Greeter](#class-greeter)


*Defined in [internal.ts:9](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/internal.ts#L9)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| message  | string | - | - |





**Returns:** [Greeter](#class-greeter)


## Properties


###  greeting
**greeting**:  *string* 

*Defined in [internal.ts:9](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/internal.ts#L9)*







## Methods



###  greet

► **greet**(): string



*Defined in [internal.ts:13](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/internal.ts#L13)*




**Returns:** string



---





## Variables



###  greeter

**greeter**:  *[Greeter](#class-greeter)*  =  new Greeter('world')

*Defined in [internal.ts:18](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/internal.ts#L18)*





## Index

### Classes

* [Employee](#class-employee)
* [Person](#class-person)


### Variables

* [privateVar](#-private-privatevar-variable)
* [publicVar](#publicvar-variable)


### Functions

* [privateFunction](#-private-privatefunction-function)
* [publicFunction](#publicfunction-function)



## Hierarchy


 [Person](#class-person)

**↳ Employee**






## Index

### Constructors

* [constructor](#constructor-constructor)


### Properties

* [department](#-private-department-property)
* [name](#-protected-name-property)


### Methods

* [getElevatorPitch](#getelevatorpitch-method)
* [getPrivateDetails](#-private-getprivatedetails-method)



<a id="constructor"></a>

## Constructors


## ⊕ **new Employee**(name: *string*, department: *string*): [Employee](#class-employee)


*Overrides Person.constructor*

*Defined in [private-members.ts:29](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L29)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | - |
| department  | string | - | - |





**Returns:** [Employee](#class-employee)


## Properties


### «Private» department
**department**:  *string* 

*Defined in [private-members.ts:29](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L29)*






### «Protected» name
**name**:  *string* 

*Inherited from Person.name*

*Defined in [private-members.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L23)*







## Methods



###  getElevatorPitch

► **getElevatorPitch**(): string



*Defined in [private-members.ts:36](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L36)*




**Returns:** string



---



### «Private» getPrivateDetails

► **getPrivateDetails**(): string



*Defined in [private-members.ts:40](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L40)*




**Returns:** string



---




## Hierarchy

**Person**

↳  [Employee](#class-employee)







## Index

### Constructors

* [constructor](#constructor-constructor)


### Properties

* [name](#-protected-name-property)



<a id="constructor"></a>

## Constructors


## ⊕ **new Person**(name: *string*): [Person](#class-person)


*Defined in [private-members.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L23)*


#### Parameters:

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| name  | string | - | - |





**Returns:** [Person](#class-person)


## Properties


### «Protected» name
**name**:  *string* 

*Defined in [private-members.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L23)*









## Variables



### «Private» privateVar

**privateVar**:  *"marked private variable"*  = "marked private variable"

*Defined in [private-members.ts:8](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L8)*



Marked as private




###  publicVar

**publicVar**:  *"public variable"*  = "public variable"

*Defined in [private-members.ts:2](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L2)*




## Functions


### «Private» privateFunction

► **privateFunction**(): string



*Defined in [private-members.ts:18](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L18)*


Marked as private




**Returns:** string



----



###  publicFunction

► **publicFunction**(): string



*Defined in [private-members.ts:10](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/private-members.ts#L10)*




**Returns:** string



----






