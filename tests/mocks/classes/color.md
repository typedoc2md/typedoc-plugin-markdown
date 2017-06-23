[typedoc-plugin-markdown](../index.md) > [Color](../classes/color.md)



# Class: Color

## Index

### Constructors

* [constructor](color.md#constructor)


### Properties

* [b](color.md#b)
* [g](color.md#g)
* [r](color.md#r)
* [background](color.md#background)
* [black](color.md#black)
* [defaultColor](color.md#defaultcolor)
* [grey](color.md#grey)
* [white](color.md#white)


### Methods

* [plus](color.md#plus)
* [scale](color.md#scale)
* [times](color.md#times)
* [toDrawingColor](color.md#todrawingcolor)



## Constructors
<a id="constructor"></a>


### ⊕ **new Color**(r: *number*, g: *number*, b: *number*): [Color](color.md)


*Defined in [interfaces.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L23)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| r  | number | - | - |
| g  | number | - | - |
| b  | number | - | - |





**Returns:** [Color](color.md)

---


## Properties
<a id="b"></a>

###  b

**b**:  *number* 

*Defined in [interfaces.ts:26](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L26)*




___

<a id="g"></a>

###  g

**g**:  *number* 

*Defined in [interfaces.ts:25](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L25)*




___

<a id="r"></a>

###  r

**r**:  *number* 

*Defined in [interfaces.ts:24](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L24)*




___

<a id="background"></a>

### «Static» background

**background**:  *[Color](color.md)*  =  Color.black

*Defined in [interfaces.ts:34](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L34)*




___

<a id="black"></a>

### «Static» black

**black**:  *[Color](color.md)*  =  new Color(0.0, 0.0, 0.0)

*Defined in [interfaces.ts:33](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L33)*




___

<a id="defaultcolor"></a>

### «Static» defaultColor

**defaultColor**:  *[Color](color.md)*  =  Color.black

*Defined in [interfaces.ts:35](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L35)*




___

<a id="grey"></a>

### «Static» grey

**grey**:  *[Color](color.md)*  =  new Color(0.5, 0.5, 0.5)

*Defined in [interfaces.ts:32](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L32)*




___

<a id="white"></a>

### «Static» white

**white**:  *[Color](color.md)*  =  new Color(1.0, 1.0, 1.0)

*Defined in [interfaces.ts:31](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L31)*




___


## Methods
<a id="plus"></a>

### «Static» plus

► **plus**(v1: *[Color](color.md)*, v2: *[Color](color.md)*): [Color](color.md)



*Defined in [interfaces.ts:29](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L29)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| v1  | [Color](color.md) | - | - |
| v2  | [Color](color.md) | - | - |





**Returns:** [Color](color.md)





___

<a id="scale"></a>

### «Static» scale

► **scale**(k: *number*, v: *[Color](color.md)*): [Color](color.md)



*Defined in [interfaces.ts:28](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L28)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| k  | number | - | - |
| v  | [Color](color.md) | - | - |





**Returns:** [Color](color.md)





___

<a id="times"></a>

### «Static» times

► **times**(v1: *[Color](color.md)*, v2: *[Color](color.md)*): [Color](color.md)



*Defined in [interfaces.ts:30](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L30)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| v1  | [Color](color.md) | - | - |
| v2  | [Color](color.md) | - | - |





**Returns:** [Color](color.md)





___

<a id="todrawingcolor"></a>

### «Static» toDrawingColor

► **toDrawingColor**(c: *[Color](color.md)*): object



*Defined in [interfaces.ts:36](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/interfaces.ts#L36)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| c  | [Color](color.md) | - | - |





**Returns:** object





___


