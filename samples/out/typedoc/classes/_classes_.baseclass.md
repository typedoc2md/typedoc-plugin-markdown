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

### new BaseClass(name:string):[BaseClass](../classes/_classes_.baseclass.md)
### new BaseClass(source:[BaseClass](../classes/_classes_.baseclass.md)):[BaseClass](../classes/_classes_.baseclass.md)





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name  | string | - |






**Returns:** [BaseClass](../classes/_classes_.baseclass.md)







* Defined in classes.ts:76













#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| source  | [BaseClass](../classes/_classes_.baseclass.md) | - |






**Returns:** [BaseClass](../classes/_classes_.baseclass.md)







* Defined in classes.ts:79












## Properties

<a id="internalclass"></a>

### **internalClass**:  *[InternalClass](../classes/_classes_.internalclass.md)* 


<p>This is an instance member of an internal class.</p>










* Defined in classes.ts:76






<a id="kind"></a>

### **kind**:  *number* 


<p>This is a simple protected member.</p>










* Defined in classes.ts:63






<a id="name"></a>

### **name**:  *string* 


<p>This is a simple public member.</p>







Implementation of INameInterface.name



* Defined in classes.ts:58






<a id="instance"></a>

### **instance**:  *[BaseClass](../classes/_classes_.baseclass.md)* 


<p>This is a static member.</p>


<p>Static members should not be inherited.</p>








* Defined in classes.ts:70






<a id="instances"></a>

### **instances**:  *[BaseClass](../classes/_classes_.baseclass.md)[]* 







* Defined in classes.ts:71








## Methods

<a id="arrowfunction"></a>
### arrowFunction(param2:string, param1:number):void



<p>This is a simple fat arrow function.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| param2  | string | The second parameter needed by this function. |
| param1  | number | The first parameter needed by this function. |







**Returns:** void







* Defined in classes.ts:140









---

<a id="checkname"></a>
### checkName():boolean
(*Private*)


<p>This is a private function.</p>










**Returns:** boolean







* Defined in classes.ts:147









---

<a id="getname"></a>
### getName():string



<p>This is a simple member function.</p>


<p>It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.</p>








**Returns:** string

Return the name.




Implementation of INameInterface.getName



* Defined in classes.ts:102









---

<a id="setname"></a>
### setName(name:string):void



<p>This is a simple member function.</p>


<p>It should be inherited by all subclasses.</p>





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name  | string | The new name. |






**Returns:** void







* Defined in classes.ts:127









---

<a id="catest"></a>
### caTest(originalValues:[BaseClass](../classes/_classes_.baseclass.md), newRecord:any, fieldNames:string[], mandatoryFields:string[]):string
(*Static*)






**see**: https://github.com/sebastian-lenz/typedoc/issues/42



#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| originalValues  | [BaseClass](../classes/_classes_.baseclass.md) | - |
| newRecord  | any | - |
| fieldNames  | string[] | - |
| mandatoryFields  | string[] | - |









**Returns:** string







* Defined in classes.ts:167









---

<a id="getinstance"></a>
### getInstance():[BaseClass](../classes/_classes_.baseclass.md)
(*Static*)


<p>This is a static function.</p>


<p>Static functions should not be inherited.</p>








**Returns:** [BaseClass](../classes/_classes_.baseclass.md)

An instance of BaseClass.







* Defined in classes.ts:159









---

<a id="getname-1"></a>
### getName():string
(*Static*)


<p>This is a simple static member function.</p>


<p>Static functions should not be inherited. This class has a
member with the same name, both should be documented.</p>








**Returns:** string

Return the name.







* Defined in classes.ts:115









---



