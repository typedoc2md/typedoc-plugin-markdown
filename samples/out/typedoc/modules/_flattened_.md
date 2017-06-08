[Typedoc Examples](../index.md) >  ["flattened"](../modules/_flattened_.md)
# External module "flattened"








## Classes
* [flattenedClass](../classes/_flattened_.flattenedclass.md)

## Functions
* [flattenedCallback](../modules/_flattened_.md#flattenedcallback)
* [flattenedIndexSignature](../modules/_flattened_.md#flattenedindexsignature)
* [flattenedParameter](../modules/_flattened_.md#flattenedparameter)

---




<a id="flattenedcallback"></a>
### flattenedCallback(callback:function):void



<p>A function that has a parameter that requires a typed function callback.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| callback  | function | The typed function callback. |




(param:number, optionalParam?:string):string




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| param  | number | A parameter of the typed function callback. |
| optionalParam  | string | An optional parameter of the typed function callback. |







**Returns:** string










**Returns:** void







* Defined in flattened.ts:86










<a id="flattenedindexsignature"></a>
### flattenedIndexSignature(indexed:object):void



<p>A function that accepts an index signature parameter.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| indexed  | object | The index signature parameter. |





[index: number]: object


name:string



Optionalvalue?:number



test:string



<p>A property of the index signature instance.</p>







**Returns:** void







* Defined in flattened.ts:115










<a id="flattenedparameter"></a>
### flattenedParameter(options:object):void



<p>A function that accepts an option object defined inline.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| options  | object | The inline typed options object. |





[name: string]: any


OptionalanotherValue?:string



<p>Another value on the options object parameter.</p>





OptionalmoreOptions?:object



<p>A typed child object of the options object.</p>





moreValues:number



<p>A value of the typed child object.</p>





Optionalvalue?:string



<p>A value on the options object parameter.</p>







**Returns:** void







* Defined in flattened.ts:98












