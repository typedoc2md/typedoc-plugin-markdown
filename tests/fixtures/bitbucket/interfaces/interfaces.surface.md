[typedoc-plugin-markdown](../README.md) > [interfaces](../modules/interfaces.md) > [Surface](../interfaces/interfaces.surface.md)

# Interface: Surface

## Hierarchy

**Surface**

## Properties

|Property|Type|
|--------|----|
|[diffuse](interfaces.surface.md#markdown-header-diffuse) | *`function`*|
|[reflect](interfaces.surface.md#markdown-header-reflect) | *`function`*|
|[roughness](interfaces.surface.md#markdown-header-roughness) | *`number`*|
|[specular](interfaces.surface.md#markdown-header-specular) | *`function`*|

###  diffuse

**●  diffuse**:  *`function`* 

*Defined in [interfaces.ts:50](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-50)*

#### Type declaration
▸(pos: *[Vector](../classes/vector.md)*): [Color](../classes/color.md)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pos | [Vector](../classes/vector.md)   |  - |

**Returns:** [Color](../classes/color.md)

___

###  reflect

**●  reflect**:  *`function`* 

*Defined in [interfaces.ts:52](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-52)*

#### Type declaration
▸(pos: *[Vector](../classes/vector.md)*): `number`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pos | [Vector](../classes/vector.md)   |  - |

**Returns:** `number`

___

###  roughness

**●  roughness**:  *`number`* 

*Defined in [interfaces.ts:53](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-53)*

___

###  specular

**●  specular**:  *`function`* 

*Defined in [interfaces.ts:51](https://bitbucket.org/owner/repository_name/src/master/src/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-51)*

#### Type declaration
▸(pos: *[Vector](../classes/vector.md)*): [Color](../classes/color.md)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pos | [Vector](../classes/vector.md)   |  - |

**Returns:** [Color](../classes/color.md)

___

