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

### Base

**`abstract`**

Comments for Class Base

#### Extended By

- [`Derived`](classes.md#derived)

#### Constructors

##### constructor

```ts
new Base(a): Base
```

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

##### abstractProp

```ts
abstract abstractProp: string
```

Comments for abstractProp

###### Source

[classes.ts:18](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L18)

##### privateProp

```ts
private privateProp: string
```

Comments for privateProp

###### Source

[classes.ts:28](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L28)

##### propWithDefault

```ts
propWithDefault: string = 'propWithDefault'
```

Comments for propWithDefault

###### Source

[classes.ts:43](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L43)

##### protectedProp

```ts
protected protectedProp: string
```

Comments for protectedProp

###### Source

[classes.ts:38](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L38)

##### readonlyProp

```ts
readonly readonlyProp: string
```

Comments for abstractProperty

###### Source

[classes.ts:33](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L33)

##### staticProp

```ts
static staticProp: string
```

Comments for staticProp

###### Source

[classes.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L23)

#### Accessors

##### getter

```ts
get getter(): string
```

Comments for getter

###### Returns

`string`

###### Source

[classes.ts:48](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L48)

##### setter

```ts
set setter(value): void
```

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

##### abstractMethod

```ts
abstract abstractMethod(): string
```

Comments for abstractMethod

###### Returns

`string`

###### Source

[classes.ts:75](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L75)

##### privateMethod

```ts
private privateMethod(): void
```

Comment for publicMethod

###### Returns

`void`

###### Source

[classes.ts:87](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L87)

##### publicMethod

```ts
publicMethod(): void
```

Comment for publicMethod

###### Returns

`void`

###### Source

[classes.ts:80](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L80)

##### staticMethod

```ts
static staticMethod(): void
```

Comment for publicMethod

###### Returns

`void`

###### Source

[classes.ts:92](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L92)

***

### Derived

Comments for Class Derived

#### Extends

- [`Base`](classes.md#base)

#### Constructors

##### constructor

```ts
new Derived(a): Derived
```

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

##### abstractProp

```ts
abstractProp: string = 'abstractProp'
```

Comments for abstractProp

###### Overrides

[`Base`](classes.md#base).[`abstractProp`](classes.md#abstractprop)

###### Source

[classes.ts:99](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L99)

##### derivedProp

```ts
derivedProp: string
```

###### Source

[classes.ts:101](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L101)

##### propWithDefault

```ts
propWithDefault: string = 'propWithDefault'
```

Comments for propWithDefault

###### Inherited from

[`Base`](classes.md#base).[`propWithDefault`](classes.md#propwithdefault)

###### Source

[classes.ts:43](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L43)

##### protectedProp

```ts
protected protectedProp: string
```

Comments for protectedProp

###### Inherited from

[`Base`](classes.md#base).[`protectedProp`](classes.md#protectedprop)

###### Source

[classes.ts:38](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L38)

##### readonlyProp

```ts
readonly readonlyProp: string
```

Comments for abstractProperty

###### Inherited from

[`Base`](classes.md#base).[`readonlyProp`](classes.md#readonlyprop)

###### Source

[classes.ts:33](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L33)

##### staticProp

```ts
static staticProp: string
```

Comments for staticProp

###### Inherited from

[`Base`](classes.md#base).[`staticProp`](classes.md#staticprop)

###### Source

[classes.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L23)

#### Accessors

##### getter

```ts
get getter(): string
```

Comments for getter

###### Returns

`string`

###### Inherited from

Base.getter

###### Source

[classes.ts:48](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L48)

##### setter

```ts
set setter(value): void
```

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

##### abstractMethod

```ts
abstractMethod(): string
```

Comments for abstractMethod

###### Returns

`string`

###### Overrides

[`Base`](classes.md#base).[`abstractMethod`](classes.md#abstractmethod)

###### Source

[classes.ts:103](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L103)

##### derivedMethod

```ts
derivedMethod(): string
```

###### Returns

`string`

###### Source

[classes.ts:107](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L107)

##### publicMethod

```ts
publicMethod(): void
```

Comment for publicMethod

###### Returns

`void`

###### Inherited from

[`Base`](classes.md#base).[`publicMethod`](classes.md#publicmethod)

###### Source

[classes.ts:80](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L80)

##### staticMethod

```ts
static staticMethod(): void
```

Comment for publicMethod

###### Returns

`void`

###### Inherited from

[`Base`](classes.md#base).[`staticMethod`](classes.md#staticmethod)

###### Source

[classes.ts:92](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/classes.ts#L92)
