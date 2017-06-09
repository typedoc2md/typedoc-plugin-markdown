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


⊕ new TodoList(models?: *any*, opts?: *any*): [TodoList](../classes/_todos_.todolist.md)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| models  | any | - |
| opts  | any | - |



**Returns:** [TodoList](../classes/_todos_.todolist.md)




Inherited from [Collection](_todos_.backbone.collection.md).[constructor](_todos_.backbone.collection.md#constructor)



* Defined in [todos.ts:59](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L59)












## Properties

<a id="length"></a>

###  length:  *number* 




Inherited from [Collection](_todos_.backbone.collection.md).[length](_todos_.backbone.collection.md#length)



* Defined in [todos.ts:62](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L62)






----
<a id="localstorage"></a>

###  localStorage:  *any*  =  new Store("todos-backbone")







* Defined in [todos.ts:160](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L160)






----
<a id="model"></a>

###  model:  *[Todo](../classes/_todos_.todo.md)*  =  Todo







* Defined in [todos.ts:157](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L157)






----


## Methods

<a id="bind"></a>
###  bind: Method

► bind(ev: *string*, f: *Function*, ctx?: *any*): void




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| ev  | string | - |
| f  | Function | - |
| ctx  | any | - |



**Returns:** void




Inherited from [Collection](_todos_.backbone.collection.md).[bind](_todos_.backbone.collection.md#bind)



* Defined in [todos.ts:61](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L61)









---

<a id="comparator"></a>
###  comparator: Method

► comparator(todo: *[Todo](../classes/_todos_.todo.md)*): any




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| todo  | [Todo](../classes/_todos_.todo.md) | - |



**Returns:** any







* Defined in [todos.ts:180](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L180)









---

<a id="create"></a>
###  create: Method

► create(attrs: *any*, opts?: *any*): any




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| attrs  | any | - |
| opts  | any | - |



**Returns:** any




Inherited from [Collection](_todos_.backbone.collection.md).[create](_todos_.backbone.collection.md#create)



* Defined in [todos.ts:63](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L63)









---

<a id="done"></a>
###  done: Method

► done(): [Todo](../classes/_todos_.todo.md)[]







**Returns:** [Todo](../classes/_todos_.todo.md)[]







* Defined in [todos.ts:163](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L163)









---

<a id="each"></a>
###  each: Method

► each(f: *function*): void




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| f  | function | - |



**Returns:** void




Inherited from [Collection](_todos_.backbone.collection.md).[each](_todos_.backbone.collection.md#each)



* Defined in [todos.ts:64](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L64)









---

<a id="fetch"></a>
###  fetch: Method

► fetch(opts?: *any*): void




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| opts  | any | - |



**Returns:** void




Inherited from [Collection](_todos_.backbone.collection.md).[fetch](_todos_.backbone.collection.md#fetch)



* Defined in [todos.ts:65](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L65)









---

<a id="filter"></a>
###  filter: Method

► filter(f: *function*): [Todo](../classes/_todos_.todo.md)[]




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| f  | function | - |



**Returns:** [Todo](../classes/_todos_.todo.md)[]




Inherited from [Collection](_todos_.backbone.collection.md).[filter](_todos_.backbone.collection.md#filter)



* Defined in [todos.ts:68](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L68)









---

<a id="last"></a>
###  last: Method

► last(): [Todo](../classes/_todos_.todo.md)
► last(n: *number*): [Todo](../classes/_todos_.todo.md)[]







**Returns:** [Todo](../classes/_todos_.todo.md)




Inherited from [Collection](_todos_.backbone.collection.md).[last](_todos_.backbone.collection.md#last)



* Defined in [todos.ts:66](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L66)













#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| n  | number | - |



**Returns:** [Todo](../classes/_todos_.todo.md)[]




Inherited from [Collection](_todos_.backbone.collection.md).[last](_todos_.backbone.collection.md#last)



* Defined in [todos.ts:67](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L67)









---

<a id="nextorder"></a>
###  nextOrder: Method

► nextOrder(): any







**Returns:** any







* Defined in [todos.ts:174](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L174)









---

<a id="remaining"></a>
###  remaining: Method

► remaining(): any







**Returns:** any







* Defined in [todos.ts:168](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L168)









---

<a id="without"></a>
###  without: Method

► without(...values: *[Todo](../classes/_todos_.todo.md)[]*): [Todo](../classes/_todos_.todo.md)[]




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| values  | [Todo](../classes/_todos_.todo.md)[] | - |



**Returns:** [Todo](../classes/_todos_.todo.md)[]




Inherited from [Collection](_todos_.backbone.collection.md).[without](_todos_.backbone.collection.md#without)



* Defined in [todos.ts:69](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L69)









---



