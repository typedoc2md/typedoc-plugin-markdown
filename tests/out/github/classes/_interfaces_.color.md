[typedoc-plugin-markdown](../README.md) > ["interfaces"](../modules/_interfaces_.md) > [Color](../classes/_interfaces_.color.md)

# Class: Color

## Hierarchy

**Color**

## Index

### Constructors

* [constructor](_interfaces_.color.md#constructor)

### Properties

* [b](_interfaces_.color.md#b)
* [g](_interfaces_.color.md#g)
* [r](_interfaces_.color.md#r)
* [background](_interfaces_.color.md#background)
* [black](_interfaces_.color.md#black)
* [defaultColor](_interfaces_.color.md#defaultcolor)
* [grey](_interfaces_.color.md#grey)
* [white](_interfaces_.color.md#white)

### Methods

* [plus](_interfaces_.color.md#plus)
* [scale](_interfaces_.color.md#scale)
* [times](_interfaces_.color.md#times)
* [toDrawingColor](_interfaces_.color.md#todrawingcolor)

---

## Constructors

<a id="constructor"></a>

### ⊕ **new Color**(r: *`number`*, g: *`number`*, b: *`number`*): [Color](_interfaces_.color.md)

*Defined in interfaces.ts:24*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| r | `number`   |  - |
| g | `number`   |  - |
| b | `number`   |  - |

**Returns:** [Color](_interfaces_.color.md)

---

## Properties

<a id="b"></a>

###  b

**●  b**:  *`number`* 

*Defined in interfaces.ts:27*

___

<a id="g"></a>

###  g

**●  g**:  *`number`* 

*Defined in interfaces.ts:26*

___

<a id="r"></a>

###  r

**●  r**:  *`number`* 

*Defined in interfaces.ts:25*

___

<a id="background"></a>

### `<Static>` background

**●  background**:  *[Color](_interfaces_.color.md)*  =  Color.black

*Defined in interfaces.ts:35*

___

<a id="black"></a>

### `<Static>` black

**●  black**:  *[Color](_interfaces_.color.md)*  =  new Color(0.0, 0.0, 0.0)

*Defined in interfaces.ts:34*

___

<a id="defaultcolor"></a>

### `<Static>` defaultColor

**●  defaultColor**:  *[Color](_interfaces_.color.md)*  =  Color.black

*Defined in interfaces.ts:36*

___

<a id="grey"></a>

### `<Static>` grey

**●  grey**:  *[Color](_interfaces_.color.md)*  =  new Color(0.5, 0.5, 0.5)

*Defined in interfaces.ts:33*

___

<a id="white"></a>

### `<Static>` white

**●  white**:  *[Color](_interfaces_.color.md)*  =  new Color(1.0, 1.0, 1.0)

*Defined in interfaces.ts:32*

___

## Methods

<a id="plus"></a>

### `<Static>` plus

▸ **plus**(v1: *[Color](_interfaces_.color.md)*, v2: *[Color](_interfaces_.color.md)*): [Color](_interfaces_.color.md)

*Defined in interfaces.ts:30*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| v1 | [Color](_interfaces_.color.md)   |  - |
| v2 | [Color](_interfaces_.color.md)   |  - |

**Returns:** [Color](_interfaces_.color.md)

___

<a id="scale"></a>

### `<Static>` scale

▸ **scale**(k: *`number`*, v: *[Color](_interfaces_.color.md)*): [Color](_interfaces_.color.md)

*Defined in interfaces.ts:29*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| k | `number`   |  - |
| v | [Color](_interfaces_.color.md)   |  - |

**Returns:** [Color](_interfaces_.color.md)

___

<a id="times"></a>

### `<Static>` times

▸ **times**(v1: *[Color](_interfaces_.color.md)*, v2: *[Color](_interfaces_.color.md)*): [Color](_interfaces_.color.md)

*Defined in interfaces.ts:31*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| v1 | [Color](_interfaces_.color.md)   |  - |
| v2 | [Color](_interfaces_.color.md)   |  - |

**Returns:** [Color](_interfaces_.color.md)

___

<a id="todrawingcolor"></a>

### `<Static>` toDrawingColor

▸ **toDrawingColor**(c: *[Color](_interfaces_.color.md)*): `object`

*Defined in interfaces.ts:37*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| c | [Color](_interfaces_.color.md)   |  - |

**Returns:** `object`

___

