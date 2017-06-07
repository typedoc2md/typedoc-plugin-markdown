[raytracer](../index.md) >  ["raytracer"](../modules/raytracer._raytracer_.md)>  [Sphere](../classes/raytracer._raytracer_.sphere.md)
# Class Sphere


### Hierarchy
* Sphere




### Implements
* [Thing](../interfaces/raytracer._raytracer_.thing.md)
 









### new Sphere(center:[Vector](../classes/raytracer._raytracer_.vector.md), radius:number, surface:[Surface](../interfaces/raytracer._raytracer_.surface.md)):[Sphere](../classes/raytracer._raytracer_.sphere.md)





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| center  | [Vector](../classes/raytracer._raytracer_.vector.md) | - |
| radius  | number | - |
| surface  | [Surface](../interfaces/raytracer._raytracer_.surface.md) | - |














**Returns:** [Sphere](../classes/raytracer._raytracer_.sphere.md)







* Defined in [raytracer.ts:96](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L96)












## Properties

| Name  | Type                
| ------ | ------------------- 
| center  | [Vector](../classes/raytracer._raytracer_.vector.md)  
| radius2  | number  
| surface  | [Surface](../interfaces/raytracer._raytracer_.surface.md)  




### intersect(ray:[Ray](../interfaces/raytracer._raytracer_.ray.md)):object





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| ray  | [Ray](../interfaces/raytracer._raytracer_.ray.md) | - |








**Returns:** object







* Defined in [raytracer.ts:102](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L102)











### normal(pos:[Vector](../classes/raytracer._raytracer_.vector.md)):[Vector](../classes/raytracer._raytracer_.vector.md)





#### Parameters:
| Name  | Type                | Description  |
| ------ | ------------------- | ------------ |
| pos  | [Vector](../classes/raytracer._raytracer_.vector.md) | - |








**Returns:** [Vector](../classes/raytracer._raytracer_.vector.md)







* Defined in [raytracer.ts:101](https://github.com/Microsoft/TypeScriptSamples/blob/d205d01/raytracer/raytracer.ts#L101)












