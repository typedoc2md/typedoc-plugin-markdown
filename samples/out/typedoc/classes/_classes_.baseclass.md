[Typedoc Examples](../index.md) >  ["classes"](../modules/_classes_.md)>  [BaseClass](../classes/_classes_.baseclass.md)
# Class BaseClass


<p>This is a simple base class.</p>


<p>This is a simple example on how to use BaseClass.</p>
<p><img src="../media/logo-128.png" alt="My image alt text"></p>






## Hierarchy
**BaseClass**

* [SubClassA](../classes/_classes_.subclassa.md)
* [SubClassB](../classes/_classes_.subclassb.md)



## Implements
* [INameInterface](../interfaces/_classes_.inameinterface.md)
 






## Constructors
* [constructor](../classes/_classes_.baseclass.md#constructor)

## Properties
* [kind](../classes/_classes_.baseclass.md#kind)
* [name](../classes/_classes_.baseclass.md#name)
* [instance](../classes/_classes_.baseclass.md#instance)
* [instances](../classes/_classes_.baseclass.md#instances)

## Methods
* [arrowFunction](../classes/_classes_.baseclass.md#arrowfunction)
* [getName](../classes/_classes_.baseclass.md#getname)
* [setName](../classes/_classes_.baseclass.md#setname)
* [caTest](../classes/_classes_.baseclass.md#catest)
* [getInstance](../classes/_classes_.baseclass.md#getinstance)
* [getName](../classes/_classes_.baseclass.md#getname-1)

---




<a id="constructor"></a>
## constructor: Constructor


⊕ new BaseClass(name: *string*): [BaseClass](../classes/_classes_.baseclass.md)
⊕ new BaseClass(source: *[BaseClass](../classes/_classes_.baseclass.md)*): [BaseClass](../classes/_classes_.baseclass.md)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name  | string | - |



**Returns:** [BaseClass](../classes/_classes_.baseclass.md)







* Defined in [classes.ts:76](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L76)













#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| source  | [BaseClass](../classes/_classes_.baseclass.md) | - |



**Returns:** [BaseClass](../classes/_classes_.baseclass.md)







* Defined in [classes.ts:79](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L79)












## Properties

<a id="internalclass"></a>

### «Private» internalClass:  *[InternalClass](../classes/_classes_.internalclass.md)* 


<p>This is an instance member of an internal class.</p>










* Defined in [classes.ts:76](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L76)






----
<a id="kind"></a>

### «Protected» kind:  *number* 


<p>This is a simple protected member.</p>










* Defined in [classes.ts:63](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L63)






----
<a id="name"></a>

###  name:  *string* 


<p>This is a simple public member.</p>







*Implementation of [INameInterface](../interfaces/_classes_.inameinterface.md).[name](../interfaces/_classes_.inameinterface.md#name)*



* Defined in [classes.ts:58](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L58)






----
<a id="instance"></a>

### «Static» instance:  *[BaseClass](../classes/_classes_.baseclass.md)* 


<p>This is a static member.</p>


<p>Static members should not be inherited.</p>








* Defined in [classes.ts:70](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L70)






----
<a id="instances"></a>

### «Static» instances:  *[BaseClass](../classes/_classes_.baseclass.md)[]* 







* Defined in [classes.ts:71](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L71)






----


## Methods

<a id="arrowfunction"></a>
###  arrowFunction: Method

► arrowFunction(param2: *string*, param1: *number*): void


<p>This is a simple fat arrow function.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| param2  | string | The second parameter needed by this function. |
| param1  | number | The first parameter needed by this function. |



**Returns:** void







* Defined in [classes.ts:140](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L140)









---

<a id="checkname"></a>
### «Private» checkName: Method

► checkName(): boolean


<p>This is a private function.</p>










**Returns:** boolean







* Defined in [classes.ts:147](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L147)









---

<a id="getname"></a>
###  getName: Method

► getName(): string


<p>This is a simple member function.</p>


<p>It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.</p>








**Returns:** string

Return the name.




*Implementation of [INameInterface](../interfaces/_classes_.inameinterface.md).[getName](../interfaces/_classes_.inameinterface.md#getname)*



* Defined in [classes.ts:102](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L102)









---

<a id="setname"></a>
###  setName: Method

► setName(name: *string*): void


<p>This is a simple member function.</p>


<p>It should be inherited by all subclasses.</p>





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name  | string | The new name. |



**Returns:** void







* Defined in [classes.ts:127](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L127)









---

<a id="catest"></a>
### «Static» caTest: Method

► caTest(originalValues: *[BaseClass](../classes/_classes_.baseclass.md)*, newRecord: *any*, fieldNames: *string[]*, mandatoryFields: *string[]*): string






**see**: https://github.com/sebastian-lenz/typedoc/issues/42



#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| originalValues  | [BaseClass](../classes/_classes_.baseclass.md) | - |
| newRecord  | any | - |
| fieldNames  | string[] | - |
| mandatoryFields  | string[] | - |



**Returns:** string







* Defined in [classes.ts:167](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L167)









---

<a id="getinstance"></a>
### «Static» getInstance: Method

► getInstance(): [BaseClass](../classes/_classes_.baseclass.md)


<p>This is a static function.</p>


<p>Static functions should not be inherited.</p>








**Returns:** [BaseClass](../classes/_classes_.baseclass.md)

An instance of BaseClass.







* Defined in [classes.ts:159](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L159)









---

<a id="getname-1"></a>
### «Static» getName: Method

► getName(): string


<p>This is a simple static member function.</p>


<p>Static functions should not be inherited. This class has a
member with the same name, both should be documented.</p>








**Returns:** string

Return the name.







* Defined in [classes.ts:115](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/classes.ts#L115)









---



