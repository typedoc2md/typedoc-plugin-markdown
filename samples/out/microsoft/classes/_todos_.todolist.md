[Microsoft TypeScriptSamples](../index.md) >  ["todos"](../modules/_todos_.md)>  [TodoList](../classes/_todos_.todolist.md)
# Class TodoList


## Hierarchy
* [Collection](../classes/_todos_.backbone.collection.md)[Todo](../classes/_todos_.todo.md)

**TodoList**








## Constructors
* [constructor](../classes/_todos_.todolist.md#constructor)

## Properties
* [length](../classes/_todos_.todolist.md#length)
* [localStorage](../classes/_todos_.todolist.md#localstorage)
* [model](../classes/_todos_.todolist.md#model)

## Methods
* [bind](../classes/_todos_.todolist.md#bind)
* [comparator](../classes/_todos_.todolist.md#comparator)
* [create](../classes/_todos_.todolist.md#create)
* [done](../classes/_todos_.todolist.md#done)
* [each](../classes/_todos_.todolist.md#each)
* [fetch](../classes/_todos_.todolist.md#fetch)
* [filter](../classes/_todos_.todolist.md#filter)
* [last](../classes/_todos_.todolist.md#last)
* [nextOrder](../classes/_todos_.todolist.md#nextorder)
* [remaining](../classes/_todos_.todolist.md#remaining)
* [without](../classes/_todos_.todolist.md#without)

---




<a id="constructor"></a>
## constructor: Constructor

### new TodoList(models?:any, opts?:any):[TodoList](../classes/_todos_.todolist.md)





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| models  | any | - |
| opts  | any | - |







**Returns:** [TodoList](../classes/_todos_.todolist.md)




Inherited from Collection.constructor



* Defined in todos.ts:59












## Properties

<a id="length"></a>

### **length**:  *number* 




Inherited from Collection.length



* Defined in todos.ts:62






<a id="localstorage"></a>

### **localStorage**:  *any*  =  new Store("todos-backbone")







* Defined in todos.ts:160






<a id="model"></a>

### **model**:  *[Todo](../classes/_todos_.todo.md)*  =  Todo







* Defined in todos.ts:157








## Methods

<a id="bind"></a>
### bind(ev:string, f:Function, ctx?:any):void





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| ev  | string | - |
| f  | Function | - |
| ctx  | any | - |








**Returns:** void




Inherited from Collection.bind



* Defined in todos.ts:61









---

<a id="comparator"></a>
### comparator(todo:[Todo](../classes/_todos_.todo.md)):any





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| todo  | [Todo](../classes/_todos_.todo.md) | - |






**Returns:** any







* Defined in todos.ts:180









---

<a id="create"></a>
### create(attrs:any, opts?:any):any





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| attrs  | any | - |
| opts  | any | - |







**Returns:** any




Inherited from Collection.create



* Defined in todos.ts:63









---

<a id="done"></a>
### done():[Todo](../classes/_todos_.todo.md)[]








**Returns:** [Todo](../classes/_todos_.todo.md)[]







* Defined in todos.ts:163









---

<a id="each"></a>
### each(f:function):void





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| f  | function | - |




(elem:[Todo](../classes/_todos_.todo.md)):void




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| elem  | [Todo](../classes/_todos_.todo.md) | - |






**Returns:** void










**Returns:** void




Inherited from Collection.each



* Defined in todos.ts:64









---

<a id="fetch"></a>
### fetch(opts?:any):void





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| opts  | any | - |






**Returns:** void




Inherited from Collection.fetch



* Defined in todos.ts:65









---

<a id="filter"></a>
### filter(f:function):[Todo](../classes/_todos_.todo.md)[]





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| f  | function | - |




(elem:[Todo](../classes/_todos_.todo.md)):boolean




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| elem  | [Todo](../classes/_todos_.todo.md) | - |






**Returns:** boolean










**Returns:** [Todo](../classes/_todos_.todo.md)[]




Inherited from Collection.filter



* Defined in todos.ts:68









---

<a id="last"></a>
### last():[Todo](../classes/_todos_.todo.md)
### last(n:number):[Todo](../classes/_todos_.todo.md)[]








**Returns:** [Todo](../classes/_todos_.todo.md)




Inherited from Collection.last



* Defined in todos.ts:66













#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| n  | number | - |






**Returns:** [Todo](../classes/_todos_.todo.md)[]




Inherited from Collection.last



* Defined in todos.ts:67









---

<a id="nextorder"></a>
### nextOrder():any








**Returns:** any







* Defined in todos.ts:174









---

<a id="remaining"></a>
### remaining():any








**Returns:** any







* Defined in todos.ts:168









---

<a id="without"></a>
### without(...values:[Todo](../classes/_todos_.todo.md)[]):[Todo](../classes/_todos_.todo.md)[]





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| values  | [Todo](../classes/_todos_.todo.md)[] | - |






**Returns:** [Todo](../classes/_todos_.todo.md)[]




Inherited from Collection.without



* Defined in todos.ts:69









---



