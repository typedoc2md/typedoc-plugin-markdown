[Microsoft TypeScriptSamples](../index.md) >  ["raytracer"](../modules/_raytracer_.md)>  [Color](../classes/_raytracer_.color.md)
# Class Color


## Hierarchy
**Color**








## Constructors
* [constructor](../classes/_raytracer_.color.md#constructor)

## Properties
* [b](../classes/_raytracer_.color.md#b)
* [g](../classes/_raytracer_.color.md#g)
* [r](../classes/_raytracer_.color.md#r)
* [background](../classes/_raytracer_.color.md#background)
* [black](../classes/_raytracer_.color.md#black)
* [defaultColor](../classes/_raytracer_.color.md#defaultcolor)
* [grey](../classes/_raytracer_.color.md#grey)
* [white](../classes/_raytracer_.color.md#white)

## Methods
* [plus](../classes/_raytracer_.color.md#plus)
* [scale](../classes/_raytracer_.color.md#scale)
* [times](../classes/_raytracer_.color.md#times)
* [toDrawingColor](../classes/_raytracer_.color.md#todrawingcolor)

---




<a id="constructor"></a>
## constructor: Constructor


⊕ new Color(r: *number*, g: *number*, b: *number*): [Color](../classes/_raytracer_.color.md)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| r  | number | - |
| g  | number | - |
| b  | number | - |



**Returns:** [Color](../classes/_raytracer_.color.md)







* Defined in [raytracer.ts:24](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L24)












## Properties

<a id="b"></a>

###  b:  *number* 







* Defined in [raytracer.ts:27](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L27)






----
<a id="g"></a>

###  g:  *number* 







* Defined in [raytracer.ts:26](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L26)






----
<a id="r"></a>

###  r:  *number* 







* Defined in [raytracer.ts:25](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L25)






----
<a id="background"></a>

### «Static» background:  *[Color](../classes/_raytracer_.color.md)*  =  Color.black







* Defined in [raytracer.ts:35](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L35)






----
<a id="black"></a>

### «Static» black:  *[Color](../classes/_raytracer_.color.md)*  =  new Color(0.0, 0.0, 0.0)







* Defined in [raytracer.ts:34](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L34)






----
<a id="defaultcolor"></a>

### «Static» defaultColor:  *[Color](../classes/_raytracer_.color.md)*  =  Color.black







* Defined in [raytracer.ts:36](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L36)






----
<a id="grey"></a>

### «Static» grey:  *[Color](../classes/_raytracer_.color.md)*  =  new Color(0.5, 0.5, 0.5)







* Defined in [raytracer.ts:33](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L33)






----
<a id="white"></a>

### «Static» white:  *[Color](../classes/_raytracer_.color.md)*  =  new Color(1.0, 1.0, 1.0)







* Defined in [raytracer.ts:32](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L32)






----


## Methods

<a id="plus"></a>
### «Static» plus: Method

► plus(v1: *[Color](../classes/_raytracer_.color.md)*, v2: *[Color](../classes/_raytracer_.color.md)*): [Color](../classes/_raytracer_.color.md)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| v1  | [Color](../classes/_raytracer_.color.md) | - |
| v2  | [Color](../classes/_raytracer_.color.md) | - |



**Returns:** [Color](../classes/_raytracer_.color.md)







* Defined in [raytracer.ts:30](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L30)









---

<a id="scale"></a>
### «Static» scale: Method

► scale(k: *number*, v: *[Color](../classes/_raytracer_.color.md)*): [Color](../classes/_raytracer_.color.md)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| k  | number | - |
| v  | [Color](../classes/_raytracer_.color.md) | - |



**Returns:** [Color](../classes/_raytracer_.color.md)







* Defined in [raytracer.ts:29](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L29)









---

<a id="times"></a>
### «Static» times: Method

► times(v1: *[Color](../classes/_raytracer_.color.md)*, v2: *[Color](../classes/_raytracer_.color.md)*): [Color](../classes/_raytracer_.color.md)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| v1  | [Color](../classes/_raytracer_.color.md) | - |
| v2  | [Color](../classes/_raytracer_.color.md) | - |



**Returns:** [Color](../classes/_raytracer_.color.md)







* Defined in [raytracer.ts:31](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L31)









---

<a id="todrawingcolor"></a>
### «Static» toDrawingColor: Method

► toDrawingColor(c: *[Color](../classes/_raytracer_.color.md)*): object




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| c  | [Color](../classes/_raytracer_.color.md) | - |



**Returns:** object







* Defined in [raytracer.ts:37](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/04105dc/samples/src/microsoft/raytracer.ts#L37)









---



