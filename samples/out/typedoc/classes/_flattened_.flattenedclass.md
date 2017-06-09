[Typedoc Examples](../index.md) >  ["flattened"](../modules/_flattened_.md)>  [flattenedClass](../classes/_flattened_.flattenedclass.md)
# Class flattenedClass


<p>A class that contains members with flattened properties.</p>








## Hierarchy
**flattenedClass**








## Constructors
* [constructor](../classes/_flattened_.flattenedclass.md#constructor)

## Properties
* [callback](../classes/_flattened_.flattenedclass.md#callback)
* [indexed](../classes/_flattened_.flattenedclass.md#indexed)
* [multipleCallSignatures](../classes/_flattened_.flattenedclass.md#multiplecallsignatures)
* [options](../classes/_flattened_.flattenedclass.md#options)

---




<a id="constructor"></a>
## constructor: Constructor


⊕ new flattenedClass(options: *object*): [flattenedClass](../classes/_flattened_.flattenedclass.md)


<p>A constructor that accepts an option object defined inline.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| options  | object | The inline typed options object. |



**Returns:** [flattenedClass](../classes/_flattened_.flattenedclass.md)







* Defined in [flattened.ts:57](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/flattened.ts#L57)












## Properties

<a id="callback"></a>

###  callback:  *function* 


<p>A member that holds a callback that requires a typed function signature.</p>






#### Type declaration



(param: *number*, optionalParam?: *string*): string




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| param  | number | A parameter of the typed function callback. |
| optionalParam  | string | An optional parameter of the typed function callback. |



**Returns:** string















* Defined in [flattened.ts:28](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/flattened.ts#L28)






----
<a id="indexed"></a>

###  indexed:  *object* 


<p>A member that holds an index signature.</p>






#### Type declaration




[index: number]: object





name: string




Optionalvalue?: number





test: string



<p>A property of the index signature instance.</p>











* Defined in [flattened.ts:36](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/flattened.ts#L36)






----
<a id="multiplecallsignatures"></a>

###  multipleCallSignatures:  *function* 


<p>An object with multiple call signatures.</p>




**see**: https://github.com/sebastian-lenz/typedoc/issues/27


#### Type declaration



(): number
(value: *number*): [flattenedClass](../classes/_flattened_.flattenedclass.md)


<p>Simple call signature.</p>










**Returns:** number

The current value.









<p>Call signature with parameters.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value  | number | The desired value. |



**Returns:** [flattenedClass](../classes/_flattened_.flattenedclass.md)

The calling Foo.















* Defined in [flattened.ts:45](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/flattened.ts#L45)






----
<a id="options"></a>

###  options:  *object* 


<p>A member that accepts an option object defined inline.</p>






#### Type declaration




OptionalanotherValue?: string



<p>Another value on the options object parameter.</p>






OptionalmoreOptions?: object



<p>A typed child object of the options object.</p>








moreValues: number



<p>A value of the typed child object.</p>







Optionalvalue?: string



<p>A value on the options object parameter.</p>











* Defined in [flattened.ts:14](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/flattened.ts#L14)






----


