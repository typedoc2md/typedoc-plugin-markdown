[Typedoc Examples](../index.md) >  ["classes"](../modules/_classes_.md)>  [SubClassB](../classes/_classes_.subclassb.md)
# Class SubClassB


<p>This is a class that extends another class.</p>


<p>The constructor of the original class should be overwritten.</p>






## Hierarchy
* [BaseClass](../classes/_classes_.baseclass.md)

**SubClassB**



## Implements
* [INameInterface](../interfaces/_classes_.inameinterface.md)
 






## Constructors
* [constructor](../classes/_classes_.subclassb.md#constructor)

## Properties
* [kind](../classes/_classes_.subclassb.md#kind)
* [name](../classes/_classes_.subclassb.md#name)
* [instance](../classes/_classes_.subclassb.md#instance)
* [instances](../classes/_classes_.subclassb.md#instances)

## Methods
* [arrowFunction](../classes/_classes_.subclassb.md#arrowfunction)
* [doSomething](../classes/_classes_.subclassb.md#dosomething)
* [getName](../classes/_classes_.subclassb.md#getname)
* [setName](../classes/_classes_.subclassb.md#setname)
* [caTest](../classes/_classes_.subclassb.md#catest)
* [getInstance](../classes/_classes_.subclassb.md#getinstance)
* [getName](../classes/_classes_.subclassb.md#getname-1)

---




<a id="constructor"></a>
## constructor: Constructor

### new SubClassB(name:string):[SubClassB](../classes/_classes_.subclassb.md)





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| name  | string | - |






**Returns:** [SubClassB](../classes/_classes_.subclassb.md)




Overrides BaseClass.constructor



* Defined in classes.ts:262












## Properties

<a id="kind"></a>

### **kind**:  *number* 


<p>This is a simple protected member.</p>







Inherited from BaseClass.kind



* Defined in classes.ts:63






<a id="name"></a>

### **name**:  *string* 


<p>This is a simple public member.</p>







Implementation of INameInterface.name
Inherited from BaseClass.name



* Defined in classes.ts:58






<a id="instance"></a>

### **instance**:  *[BaseClass](../classes/_classes_.baseclass.md)* 


<p>This is a static member.</p>


<p>Static members should not be inherited.</p>





Inherited from BaseClass.instance



* Defined in classes.ts:70






<a id="instances"></a>

### **instances**:  *[BaseClass](../classes/_classes_.baseclass.md)[]* 




Inherited from BaseClass.instances



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




Inherited from BaseClass.arrowFunction



* Defined in classes.ts:140









---

<a id="dosomething"></a>
### doSomething(value:[string,[SubClassA](../classes/_classes_.subclassa.md),[SubClassB](../classes/_classes_.subclassb.md)]):void





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value  | [string,[SubClassA](../classes/_classes_.subclassa.md),[SubClassB](../classes/_classes_.subclassb.md)] | - |






**Returns:** void







* Defined in classes.ts:267









---

<a id="getname"></a>
### getName():string



<p>This is a simple member function.</p>


<p>It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.</p>








**Returns:** string

Return the name.




Implementation of INameInterface.getName
Inherited from BaseClass.getName



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




Inherited from BaseClass.setName



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




Inherited from BaseClass.caTest



* Defined in classes.ts:167









---

<a id="getinstance"></a>
### getInstance():[BaseClass](../classes/_classes_.baseclass.md)
(*Static*)


<p>This is a static function.</p>


<p>Static functions should not be inherited.</p>








**Returns:** [BaseClass](../classes/_classes_.baseclass.md)

An instance of BaseClass.




Inherited from BaseClass.getInstance



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




Inherited from BaseClass.getName



* Defined in classes.ts:115









---



