[raytracer](../index.md) >  ["raytracer"](../modules/raytracer._raytracer_.md)>  [Surfaces](../modules/raytracer._raytracer_.surfaces.md)
# Module Surfaces







## Object literals
* [checkerboard](../modules/raytracer._raytracer_.surfaces.md#checkerboard)
* [shiny](../modules/raytracer._raytracer_.surfaces.md#shiny)

---





<a id="checkerboard"></a>
### checkerboard: object





#### **roughness**:  *number*  = 150





* Defined in [raytracer.ts:160](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L160)










### diffuse(pos:[Vector](../classes/raytracer._raytracer_.vector.md)):[Color](../classes/raytracer._raytracer_.color.md)





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| pos  | [Vector](../classes/raytracer._raytracer_.vector.md) | - |








**Returns:** [Color](../classes/raytracer._raytracer_.color.md)







* Defined in [raytracer.ts:145](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L145)











### reflect(pos:[Vector](../classes/raytracer._raytracer_.vector.md)):0.7|0.1





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| pos  | [Vector](../classes/raytracer._raytracer_.vector.md) | - |








**Returns:** 0.7|0.1







* Defined in [raytracer.ts:153](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L153)











### specular(pos:[Vector](../classes/raytracer._raytracer_.vector.md)):[Color](../classes/raytracer._raytracer_.color.md)





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| pos  | [Vector](../classes/raytracer._raytracer_.vector.md) | - |








**Returns:** [Color](../classes/raytracer._raytracer_.color.md)







* Defined in [raytracer.ts:152](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L152)













<a id="shiny"></a>
### shiny: object





#### **roughness**:  *number*  = 250





* Defined in [raytracer.ts:142](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L142)










### diffuse(pos:[Vector](../classes/raytracer._raytracer_.vector.md)):[Color](../classes/raytracer._raytracer_.color.md)





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| pos  | [Vector](../classes/raytracer._raytracer_.vector.md) | - |








**Returns:** [Color](../classes/raytracer._raytracer_.color.md)







* Defined in [raytracer.ts:139](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L139)











### reflect(pos:[Vector](../classes/raytracer._raytracer_.vector.md)):number





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| pos  | [Vector](../classes/raytracer._raytracer_.vector.md) | - |








**Returns:** number







* Defined in [raytracer.ts:141](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L141)











### specular(pos:[Vector](../classes/raytracer._raytracer_.vector.md)):[Color](../classes/raytracer._raytracer_.color.md)





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| pos  | [Vector](../classes/raytracer._raytracer_.vector.md) | - |








**Returns:** [Color](../classes/raytracer._raytracer_.color.md)







* Defined in [raytracer.ts:140](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L140)














