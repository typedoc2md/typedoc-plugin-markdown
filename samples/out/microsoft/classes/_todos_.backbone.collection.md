[Microsoft TypeScriptSamples](../index.md) >  ["todos"](../modules/_todos_.md)>  [Backbone](../modules/_todos_.backbone.md)>  [Collection](../classes/_todos_.backbone.collection.md)
T
# Class Collection
  
 ## Type parameters

#### T 




## Hierarchy
**Collection**

* [TodoList](../classes/_todos_.todolist.md)








## Constructors
* [constructor](../classes/_todos_.backbone.collection.md#constructor)

## Properties
* [length](../classes/_todos_.backbone.collection.md#length)

## Methods
* [bind](../classes/_todos_.backbone.collection.md#bind)
* [create](../classes/_todos_.backbone.collection.md#create)
* [each](../classes/_todos_.backbone.collection.md#each)
* [fetch](../classes/_todos_.backbone.collection.md#fetch)
* [filter](../classes/_todos_.backbone.collection.md#filter)
* [last](../classes/_todos_.backbone.collection.md#last)
* [without](../classes/_todos_.backbone.collection.md#without)

---




<a id="constructor"></a>
## constructor: Constructor


⊕ new Collection(models?: *any*, opts?: *any*): [Collection](../classes/_todos_.backbone.collection.md)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| models  | any | - |
| opts  | any | - |



**Returns:** [Collection](../classes/_todos_.backbone.collection.md)







* Defined in [todos.ts:59](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L59)












## Properties

<a id="length"></a>

###  length:  *number* 







* Defined in [todos.ts:62](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L62)






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







* Defined in [todos.ts:61](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L61)









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







* Defined in [todos.ts:63](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L63)









---

<a id="each"></a>
###  each: Method

► each(f: *function*): void




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| f  | function | - |



**Returns:** void







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







* Defined in [todos.ts:65](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L65)









---

<a id="filter"></a>
###  filter: Method

► filter(f: *function*): T[]




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| f  | function | - |



**Returns:** T[]







* Defined in [todos.ts:68](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L68)









---

<a id="last"></a>
###  last: Method

► last(): T
► last(n: *number*): T[]







**Returns:** T







* Defined in [todos.ts:66](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L66)













#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| n  | number | - |



**Returns:** T[]







* Defined in [todos.ts:67](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L67)









---

<a id="without"></a>
###  without: Method

► without(...values: *T[]*): T[]




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| values  | T[] | - |



**Returns:** T[]







* Defined in [todos.ts:69](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/todos.ts#L69)









---



