[Typedoc Examples](../index.md) >  ["functions"](../modules/_functions_.md)
# External module "functions"








## Modules
* [moduleFunction](../modules/_functions_.modulefunction.md)

## Functions
* [createSomething](../modules/_functions_.md#createsomething)
* [exportedFunction](../modules/_functions_.md#exportedfunction)
* [functionWithArguments](../modules/_functions_.md#functionwitharguments)
* [functionWithDefaults](../modules/_functions_.md#functionwithdefaults)
* [functionWithDocLink](../modules/_functions_.md#functionwithdoclink)
* [functionWithOptionalValue](../modules/_functions_.md#functionwithoptionalvalue)
* [functionWithRest](../modules/_functions_.md#functionwithrest)
* [genericFunction](../modules/_functions_.md#genericfunction)
* [internalFunction](../modules/_functions_.md#internalfunction)
* [multipleSignatures](../modules/_functions_.md#multiplesignatures)
* [variableFunction](../modules/_functions_.md#variablefunction)

---




<a id="createsomething"></a>
###  createSomething: Function

► createSomething(): object


<p>A function that returns an object.
Also no type information is given, the object should be correctly reflected.</p>










**Returns:** object







* Defined in [functions.ts:175](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/functions.ts#L175)










<a id="exportedfunction"></a>
###  exportedFunction: Function

► exportedFunction(): void


<p>This is a simple exported function.</p>










**Returns:** void







* Defined in [functions.ts:12](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/functions.ts#L12)










<a id="functionwitharguments"></a>
###  functionWithArguments: Function

► functionWithArguments(paramZ: *string*, paramG: *any*, paramA: *[INameInterface](../interfaces/_classes_.inameinterface.md)*): number


<p>This is a function with multiple arguments and a return value.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| paramZ  | string | This is a string parameter. |
| paramG  | any | This is a parameter flagged with any.    This sentence is placed in the next line.
 |
| paramA  | [INameInterface](../interfaces/_classes_.inameinterface.md) | This is a **parameter** pointing to an interface.

~~~
var value:BaseClass &#x3D; new BaseClass(&#x27;test&#x27;);
functionWithArguments(&#x27;arg&#x27;, 0, value);
~~~

 |



**Returns:** number







* Defined in [functions.ts:50](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/functions.ts#L50)










<a id="functionwithdefaults"></a>
###  functionWithDefaults: Function

► functionWithDefaults(valueA?: *string*, valueB?: *number*, valueC?: *number*, valueD?: *boolean*, valueE?: *boolean*): string


<p>This is a function with a parameter that has a default value.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| valueA  | string | - |
| valueB  | number | - |
| valueC  | number | - |
| valueD  | boolean | - |
| valueE  | boolean | - |



**Returns:** string

The input value or the default value.







* Defined in [functions.ts:70](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/functions.ts#L70)










<a id="functionwithdoclink"></a>
###  functionWithDocLink: Function

► functionWithDocLink(): void


<p>See <a href="../interfaces/_classes_.inameinterface.md"><code>INameInterface</code></a> and <a href="../interfaces/_classes_.inameinterface.md#name">INameInterface&#39;s name property</a>.
Also, check out <a href="http://www.google.com" class="external">Google</a> and
<a href="https://github.com" class="external">GitHub</a>.</p>


<p>Taken from <a href="http://usejsdoc.org/tags-inline-link.html">http://usejsdoc.org/tags-inline-link.html</a>.</p>








**Returns:** void







* Defined in [functions.ts:191](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/functions.ts#L191)










<a id="functionwithoptionalvalue"></a>
###  functionWithOptionalValue: Function

► functionWithOptionalValue(requiredParam: *string*, optionalParam?: *string*): void


<p>This is a function with a parameter that is optional.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| requiredParam  | string | A normal parameter. |
| optionalParam  | string | An optional parameter. |



**Returns:** void







* Defined in [functions.ts:61](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/functions.ts#L61)










<a id="functionwithrest"></a>
###  functionWithRest: Function

► functionWithRest(...rest: *string[]*): string


<p>This is a function with rest parameter.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| rest  | string[] | Multiple strings. |



**Returns:** string

The combined string.







* Defined in [functions.ts:87](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/functions.ts#L87)










<a id="genericfunction"></a>
###  genericFunction: Function

► genericFunctionT(value: *T*): T


<p>This is a generic function.</p>






Type parameters:

#### T 



<p>The type parameter.</p>




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value  | T | The typed value. |



**Returns:** T

Returns the typed value.







* Defined in [functions.ts:131](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/functions.ts#L131)










<a id="internalfunction"></a>
###  internalFunction: Function

► internalFunction(): void


<p>This is an internal function.</p>










**Returns:** void







* Defined in [functions.ts:6](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/functions.ts#L6)










<a id="multiplesignatures"></a>
###  multipleSignatures: Function

► multipleSignatures(value: *string*): string
► multipleSignatures(value: *object*): string


<p>This is the first signature of a function with multiple signatures.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value  | string | The name value. |



**Returns:** string







* Defined in [functions.ts:97](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/functions.ts#L97)











<p>This is the second signature of a function with multiple signatures.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| value  | object | An object containing the name value. |



**Returns:** string







* Defined in [functions.ts:105](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/functions.ts#L105)










<a id="variablefunction"></a>
###  variableFunction: Function

► variableFunction(paramZ: *string*, paramG: *any*, paramA: *[INameInterface](../interfaces/_classes_.inameinterface.md)*): number


<p>This is a function with multiple arguments and a return value.</p>







#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| paramZ  | string | This is a string parameter. |
| paramG  | any | This is a parameter flagged with any.    This sentence is placed in the next line.
 |
| paramA  | [INameInterface](../interfaces/_classes_.inameinterface.md) | This is a **parameter** pointing to an interface.

~~~
var value:BaseClass &#x3D; new BaseClass(&#x27;test&#x27;);
functionWithArguments(&#x27;arg&#x27;, 0, value);
~~~

 |



**Returns:** number







* Defined in [functions.ts:30](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/typedoc/functions.ts#L30)












