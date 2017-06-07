[raytracer](../index.md) >  ["raytracer"](../modules/raytracer._raytracer_.md)>  [Color](../classes/raytracer._raytracer_.color.md)
# Class Color


### Hierarchy
* Color












### new Color(r:number, g:number, b:number):[Color](../classes/raytracer._raytracer_.color.md)





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| r  | number | - |
| g  | number | - |
| b  | number | - |














**Returns:** [Color](../classes/raytracer._raytracer_.color.md)







* Defined in [raytracer.ts:24](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L24)












## Properties

| Name  | Type                
| ------ | ------------------- 
| b  | number  
| g  | number  
| r  | number  
| background  | [Color](../classes/raytracer._raytracer_.color.md)  =_ Color.black_ 
| black  | [Color](../classes/raytracer._raytracer_.color.md)  =_ new Color(0.0, 0.0, 0.0)_ 
| defaultColor  | [Color](../classes/raytracer._raytracer_.color.md)  =_ Color.black_ 
| grey  | [Color](../classes/raytracer._raytracer_.color.md)  =_ new Color(0.5, 0.5, 0.5)_ 
| white  | [Color](../classes/raytracer._raytracer_.color.md)  =_ new Color(1.0, 1.0, 1.0)_ 




### plus(v1:[Color](../classes/raytracer._raytracer_.color.md), v2:[Color](../classes/raytracer._raytracer_.color.md)):[Color](../classes/raytracer._raytracer_.color.md)
*Static*




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| v1  | [Color](../classes/raytracer._raytracer_.color.md) | - |
| v2  | [Color](../classes/raytracer._raytracer_.color.md) | - |











**Returns:** [Color](../classes/raytracer._raytracer_.color.md)







* Defined in [raytracer.ts:30](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L30)











### scale(k:number, v:[Color](../classes/raytracer._raytracer_.color.md)):[Color](../classes/raytracer._raytracer_.color.md)
*Static*




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| k  | number | - |
| v  | [Color](../classes/raytracer._raytracer_.color.md) | - |











**Returns:** [Color](../classes/raytracer._raytracer_.color.md)







* Defined in [raytracer.ts:29](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L29)











### times(v1:[Color](../classes/raytracer._raytracer_.color.md), v2:[Color](../classes/raytracer._raytracer_.color.md)):[Color](../classes/raytracer._raytracer_.color.md)
*Static*




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| v1  | [Color](../classes/raytracer._raytracer_.color.md) | - |
| v2  | [Color](../classes/raytracer._raytracer_.color.md) | - |











**Returns:** [Color](../classes/raytracer._raytracer_.color.md)







* Defined in [raytracer.ts:31](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L31)











### toDrawingColor(c:[Color](../classes/raytracer._raytracer_.color.md)):object
*Static*




#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| c  | [Color](../classes/raytracer._raytracer_.color.md) | - |








**Returns:** object







* Defined in [raytracer.ts:37](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L37)












