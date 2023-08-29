[**typedoc-plugin-markdown**](README.md)

***

[API](API.md) > classes

# Module: classes

This is the doc comment for file1.ts

Specify this is a module comment and rename it to my-module.

How many lines will it cover.

## Index

### Classes

- [Base](classes.md#base)
- [Derived](classes.md#derived)

## Classes

<a id="base" name="base"></a>

### Base

**`abstract`**

Comments for Class Base

#### Extended By

- [`Derived`](classes.md#derived)

#### Constructors

<a id="constructor" name="constructor"></a>

##### constructor

> **new Base**(`a`): [`Base`](classes.md#base)

Constructor comments

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | Param a comments |

###### Returns

[`Base`](classes.md#base)

###### Source

[classes.ts:64](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L64)

#### Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| <a id="abstractprop" name="abstractprop"></a> **`abstract`** `abstractProp` | `string` | Comments for abstractProp | [classes.ts:18](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L18) |
| <a id="privateprop" name="privateprop"></a> **`private`** `privateProp` | `string` | Comments for privateProp | [classes.ts:28](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L28) |
| <a id="propwithdefault" name="propwithdefault"></a> `propWithDefault` | `string` | Comments for propWithDefault | [classes.ts:43](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L43) |
| <a id="protectedprop" name="protectedprop"></a> **`protected`** `protectedProp` | `string` | Comments for protectedProp | [classes.ts:38](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L38) |
| <a id="readonlyprop" name="readonlyprop"></a> **`readonly`** `readonlyProp` | `string` | Comments for abstractProperty | [classes.ts:33](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L33) |
| <a id="staticprop" name="staticprop"></a> **`static`** `staticProp` | `string` | Comments for staticProp | [classes.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L23) |

#### Accessors

<a id="getter" name="getter"></a>

##### getter

> get **getter**(): `string`

Comments for getter

###### Returns

`string`

###### Source

[classes.ts:48](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L48)

<a id="setter" name="setter"></a>

##### setter

> set **setter**(`value`): `void`

Comments for setter

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | Param comments |

###### Returns

`void`

###### Source

[classes.ts:56](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L56)

#### Methods

<a id="abstractmethod" name="abstractmethod"></a>

##### abstractMethod

> `abstract` **abstractMethod**(): `string`

Comments for abstractMethod

###### Returns

`string`

###### Source

[classes.ts:75](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L75)

<a id="privatemethod" name="privatemethod"></a>

##### privateMethod

> `private` **privateMethod**(): `void`

Comment for publicMethod

###### Returns

`void`

###### Source

[classes.ts:87](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L87)

<a id="publicmethod" name="publicmethod"></a>

##### publicMethod

> **publicMethod**(): `void`

Comment for publicMethod

###### Returns

`void`

###### Source

[classes.ts:80](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L80)

<a id="staticmethod" name="staticmethod"></a>

##### staticMethod

> `static` **staticMethod**(): `void`

Comment for publicMethod

###### Returns

`void`

###### Source

[classes.ts:92](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L92)

***

<a id="derived" name="derived"></a>

### Derived

Comments for Class Derived

#### Extends

- [`Base`](classes.md#base)

#### Constructors

<a id="constructor-2" name="constructor-2"></a>

##### constructor

> **new Derived**(`a`): [`Derived`](classes.md#derived)

Constructor comments

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | Param a comments |

###### Returns

[`Derived`](classes.md#derived)

###### Inherited from

[`Base`](classes.md#base).[`constructor`](classes.md#constructor)

###### Source

[classes.ts:64](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L64)

#### Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| <a id="abstractprop-2" name="abstractprop-2"></a> `abstractProp` | `string` | Comments for abstractProp | [`Base`](classes.md#base).[`abstractProp`](classes.md#abstractprop) | [classes.ts:99](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L99) |
| <a id="derivedprop" name="derivedprop"></a> `derivedProp` | `string` | - | - | [classes.ts:101](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L101) |
| <a id="propwithdefault-2" name="propwithdefault-2"></a> `propWithDefault` | `string` | Comments for propWithDefault | [`Base`](classes.md#base).[`propWithDefault`](classes.md#propwithdefault) | [classes.ts:43](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L43) |
| <a id="protectedprop-2" name="protectedprop-2"></a> **`protected`** `protectedProp` | `string` | Comments for protectedProp | [`Base`](classes.md#base).[`protectedProp`](classes.md#protectedprop) | [classes.ts:38](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L38) |
| <a id="readonlyprop-2" name="readonlyprop-2"></a> **`readonly`** `readonlyProp` | `string` | Comments for abstractProperty | [`Base`](classes.md#base).[`readonlyProp`](classes.md#readonlyprop) | [classes.ts:33](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L33) |
| <a id="staticprop-2" name="staticprop-2"></a> **`static`** `staticProp` | `string` | Comments for staticProp | [`Base`](classes.md#base).[`staticProp`](classes.md#staticprop) | [classes.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L23) |

#### Accessors

<a id="getter-2" name="getter-2"></a>

##### getter

> get **getter**(): `string`

Comments for getter

###### Returns

`string`

###### Inherited from

Base.getter

###### Source

[classes.ts:48](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L48)

<a id="setter-2" name="setter-2"></a>

##### setter

> set **setter**(`value`): `void`

Comments for setter

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | Param comments |

###### Returns

`void`

###### Inherited from

Base.setter

###### Source

[classes.ts:56](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L56)

#### Methods

<a id="abstractmethod-2" name="abstractmethod-2"></a>

##### abstractMethod

> **abstractMethod**(): `string`

Comments for abstractMethod

###### Returns

`string`

###### Overrides

[`Base`](classes.md#base).[`abstractMethod`](classes.md#abstractmethod)

###### Source

[classes.ts:103](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L103)

<a id="derivedmethod" name="derivedmethod"></a>

##### derivedMethod

> **derivedMethod**(): `string`

###### Returns

`string`

###### Source

[classes.ts:107](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L107)

<a id="publicmethod-2" name="publicmethod-2"></a>

##### publicMethod

> **publicMethod**(): `void`

Comment for publicMethod

###### Returns

`void`

###### Inherited from

[`Base`](classes.md#base).[`publicMethod`](classes.md#publicmethod)

###### Source

[classes.ts:80](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L80)

<a id="staticmethod-2" name="staticmethod-2"></a>

##### staticMethod

> `static` **staticMethod**(): `void`

Comment for publicMethod

###### Returns

`void`

###### Inherited from

[`Base`](classes.md#base).[`staticMethod`](classes.md#staticmethod)

###### Source

[classes.ts:92](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L92)
