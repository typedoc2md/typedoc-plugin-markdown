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

### new Color(r:number, g:number, b:number):[Color](../classes/_raytracer_.color.md)





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| r  | number | - |
| g  | number | - |
| b  | number | - |








**Returns:** [Color](../classes/_raytracer_.color.md)







* Defined in raytracer.ts:24












## Properties

<a id="b"></a>

### **b**:  *number* 







* Defined in raytracer.ts:27






<a id="g"></a>

### **g**:  *number* 







* Defined in raytracer.ts:26






<a id="r"></a>

### **r**:  *number* 







* Defined in raytracer.ts:25






<a id="background"></a>

### **background**:  *[Color](../classes/_raytracer_.color.md)*  =  Color.black







* Defined in raytracer.ts:35






<a id="black"></a>

### **black**:  *[Color](../classes/_raytracer_.color.md)*  =  new Color(0.0, 0.0, 0.0)







* Defined in raytracer.ts:34






<a id="defaultcolor"></a>

### **defaultColor**:  *[Color](../classes/_raytracer_.color.md)*  =  Color.black







* Defined in raytracer.ts:36






<a id="grey"></a>

### **grey**:  *[Color](../classes/_raytracer_.color.md)*  =  new Color(0.5, 0.5, 0.5)







* Defined in raytracer.ts:33






<a id="white"></a>

### **white**:  *[Color](../classes/_raytracer_.color.md)*  =  new Color(1.0, 1.0, 1.0)







* Defined in raytracer.ts:32








## Methods

<a id="plus"></a>
### plus(v1:[Color](../classes/_raytracer_.color.md), v2:[Color](../classes/_raytracer_.color.md)):[Color](../classes/_raytracer_.color.md)
(*Static*)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| v1  | [Color](../classes/_raytracer_.color.md) | - |
| v2  | [Color](../classes/_raytracer_.color.md) | - |







**Returns:** [Color](../classes/_raytracer_.color.md)







* Defined in raytracer.ts:30









---

<a id="scale"></a>
### scale(k:number, v:[Color](../classes/_raytracer_.color.md)):[Color](../classes/_raytracer_.color.md)
(*Static*)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| k  | number | - |
| v  | [Color](../classes/_raytracer_.color.md) | - |







**Returns:** [Color](../classes/_raytracer_.color.md)







* Defined in raytracer.ts:29









---

<a id="times"></a>
### times(v1:[Color](../classes/_raytracer_.color.md), v2:[Color](../classes/_raytracer_.color.md)):[Color](../classes/_raytracer_.color.md)
(*Static*)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| v1  | [Color](../classes/_raytracer_.color.md) | - |
| v2  | [Color](../classes/_raytracer_.color.md) | - |







**Returns:** [Color](../classes/_raytracer_.color.md)







* Defined in raytracer.ts:31









---

<a id="todrawingcolor"></a>
### toDrawingColor(c:[Color](../classes/_raytracer_.color.md)):object
(*Static*)




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| c  | [Color](../classes/_raytracer_.color.md) | - |






**Returns:** object







* Defined in raytracer.ts:37









---



