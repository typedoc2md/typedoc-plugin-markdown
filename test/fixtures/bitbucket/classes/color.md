[typedoc-plugin-markdown](../README.md) > [Color](../classes/color.md)

# Class: Color

## Hierarchy

**Color**

## Index

### Constructors

* [constructor](color.md#markdown-header-constructor)

### Properties

* [b](color.md#markdown-header-b)
* [g](color.md#markdown-header-g)
* [r](color.md#markdown-header-r)
* [background](color.md#markdown-header-static-background)
* [black](color.md#markdown-header-static-black)
* [defaultColor](color.md#markdown-header-static-defaultcolor)
* [grey](color.md#markdown-header-static-grey)
* [white](color.md#markdown-header-static-white)

### Methods

* [plus](color.md#markdown-header-static-plus)
* [scale](color.md#markdown-header-static-scale)
* [times](color.md#markdown-header-static-times)
* [toDrawingColor](color.md#markdown-header-static-todrawingcolor)

---

## Constructors

###  constructor

⊕ **new Color**(r: *`number`*, g: *`number`*, b: *`number`*): [Color](color.md)

*Defined in [interfaces.ts:24](https://bitbucket.org/owner/repository_name/src/master/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-24)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| r | `number` |
| g | `number` |
| b | `number` |

**Returns:** [Color](color.md)

___

## Properties

###  b

**● b**: *`number`*

*Defined in [interfaces.ts:27](https://bitbucket.org/owner/repository_name/src/master/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-27)*

___

###  g

**● g**: *`number`*

*Defined in [interfaces.ts:26](https://bitbucket.org/owner/repository_name/src/master/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-26)*

___

###  r

**● r**: *`number`*

*Defined in [interfaces.ts:25](https://bitbucket.org/owner/repository_name/src/master/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-25)*

___

### `<Static>` background

**● background**: *[Color](color.md)* =  Color.black

*Defined in [interfaces.ts:35](https://bitbucket.org/owner/repository_name/src/master/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-35)*

___

### `<Static>` black

**● black**: *[Color](color.md)* =  new Color(0.0, 0.0, 0.0)

*Defined in [interfaces.ts:34](https://bitbucket.org/owner/repository_name/src/master/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-34)*

___

### `<Static>` defaultColor

**● defaultColor**: *[Color](color.md)* =  Color.black

*Defined in [interfaces.ts:36](https://bitbucket.org/owner/repository_name/src/master/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-36)*

___

### `<Static>` grey

**● grey**: *[Color](color.md)* =  new Color(0.5, 0.5, 0.5)

*Defined in [interfaces.ts:33](https://bitbucket.org/owner/repository_name/src/master/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-33)*

___

### `<Static>` white

**● white**: *[Color](color.md)* =  new Color(1.0, 1.0, 1.0)

*Defined in [interfaces.ts:32](https://bitbucket.org/owner/repository_name/src/master/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-32)*

___

## Methods

### `<Static>` plus

▸ **plus**(v1: *[Color](color.md)*, v2: *[Color](color.md)*): [Color](color.md)

*Defined in [interfaces.ts:30](https://bitbucket.org/owner/repository_name/src/master/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-30)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [Color](color.md) |
| v2 | [Color](color.md) |

**Returns:** [Color](color.md)

___

### `<Static>` scale

▸ **scale**(k: *`number`*, v: *[Color](color.md)*): [Color](color.md)

*Defined in [interfaces.ts:29](https://bitbucket.org/owner/repository_name/src/master/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| k | `number` |
| v | [Color](color.md) |

**Returns:** [Color](color.md)

___

### `<Static>` times

▸ **times**(v1: *[Color](color.md)*, v2: *[Color](color.md)*): [Color](color.md)

*Defined in [interfaces.ts:31](https://bitbucket.org/owner/repository_name/src/master/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-31)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [Color](color.md) |
| v2 | [Color](color.md) |

**Returns:** [Color](color.md)

___

### `<Static>` toDrawingColor

▸ **toDrawingColor**(c: *[Color](color.md)*): `object`

*Defined in [interfaces.ts:37](https://bitbucket.org/owner/repository_name/src/master/interfaces.ts?fileviewer&amp;#x3D;file-view-default#interfaces.ts-37)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| c | [Color](color.md) |

**Returns:** `object`

___

