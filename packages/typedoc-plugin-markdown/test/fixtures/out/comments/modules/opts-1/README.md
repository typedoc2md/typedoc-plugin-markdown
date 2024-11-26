# typedoc-stubs

Comments form module comments

> links

Links using `{@link}` inline tags.

- [CommentInterface](README.md#commentinterface) - Links to CommentInterface
- [Links to CommentInterface.prop](README.md#prop)
- [Links to CommentInterface.propb](README.md#propb-1)
- [CommentEnum.MemberB](README.md#commentenum)
- [SameName:var](README.md#samename-1)
- [SameName:interface](README.md#samename)
- [SameName.prop](README.md#prop-2)
- [prop:var](README.md#prop-3)
- [_prop_with_underscore:var](README.md#_prop_with_underscore)
- [TypeWithGenerics](README.md#typewithgenericsc-d)

External links:

- [Google](https://www.google.com)
- [`https://www.google.com`](https://www.google.com)

Relative Links:

- [Relative Document](_media/PROJECT_DOC_1.md)
- [Relative Link](../../../groups/members/opts-1/index.md)

Relative Image Links:

<img src="_media/logo.png" alt="Logo" />

![Logo](_media/logo.svg)

## See

 - Comments for a tag
 - Comments for tag written on same line

## Html And Jsx

A <tag></tag> in comments

A `<tag>` in backticks

Another object `{ x: 1 }`.

<div style={{backgroundColor: "#fff", padding: 16}}>
 <img style={{display: "block"}} height="48" width="48"/>
</div>

Some random {{braces}}.

```
A <tag> in a code block
Some <p> html </p> inside codeblock
```

> codeBlocks

```css
.class {color:red}
```

```html
<div>x</div> <tag>y</tag>
```

`single line <code> {block}`

## Enumerations

### CommentEnum

#### Enumeration Members

| Enumeration Member | Value | Description | Source |
| ------ | ------ | ------ | ------ |
| `Member` | `0` | Comment for Member Some <p> html </p> and <tag></tag>. **Deprecated** Deprecated member **See** [SameName](README.md#samename) | [index.ts:1](http://source-url) |
| `MemberB` | `1` | - | [index.ts:1](http://source-url) |

***

### EnumMembersTable

#### Enumeration Members

| Enumeration Member | Value | Description | Source |
| ------ | ------ | ------ | ------ |
| `member1` | `"member1"` | The subroutine recursively parsed the hexadecimal data. | [index.ts:1](http://source-url) |

## Classes

### BaseClassProperties

#### Extended by

- [`ClassPropertiesTable`](README.md#classpropertiestable)

#### Constructors

##### new BaseClassProperties()

> **new BaseClassProperties**(): [`BaseClassProperties`](README.md#baseclassproperties)

###### Returns

[`BaseClassProperties`](README.md#baseclassproperties)

#### Properties

| Property | Type | Description | Source |
| ------ | ------ | ------ | ------ |
| ~~`propA`~~ | `string` | **Deprecated** | [index.ts:1](http://source-url) |
| `propB` | `string` | - | [index.ts:1](http://source-url) |

***

### ClassPropertiesTable

#### Extends

- [`BaseClassProperties`](README.md#baseclassproperties)

#### Constructors

##### new ClassPropertiesTable()

> **new ClassPropertiesTable**(): [`ClassPropertiesTable`](README.md#classpropertiestable)

###### Returns

[`ClassPropertiesTable`](README.md#classpropertiestable)

###### Inherited from

[`BaseClassProperties`](README.md#baseclassproperties).[`constructor`](README.md#constructors)

#### Properties

| Property | Modifier | Type | Default value | Description | Overrides | Inherited from | Source |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `prop1` | `private` | `boolean` | `undefined` | The subroutine recursively parsed the hexadecimal data. to generate the binary output for input validation. | - | - | [index.ts:1](http://source-url) |
| `prop2` | `readonly` | `RegExp` | `undefined` | Below is a breakdown of the notable performances: - The CPU executed the instruction set in parallel with the GPU computations. - The RAM efficiently cached the frequently accessed data for faster retrieval. - The SSD accessed the stored files with lightning speed due to its high read/write capabilities. | - | - | [index.ts:1](http://source-url) |
| `prop3?` | `public` | `string` | `undefined` | > Example of Triple Code Block `def greet(name): print("Hello, " + name + "!")` | - | - | [index.ts:1](http://source-url) |
| ~~`propA`~~ | `public` | `string` | `'propAValue'` | **Deprecated** | [`BaseClassProperties`](README.md#baseclassproperties).`propA` | - | [index.ts:1](http://source-url) |
| `propB` | `public` | `string` | `undefined` | - | - | [`BaseClassProperties`](README.md#baseclassproperties).`propB` | [index.ts:1](http://source-url) |
| `propWithFlag` | `public` | `string` | `undefined` | **`Experimental`** Experimental flag comments | - | - | [index.ts:1](http://source-url) |

## Interfaces

### BaseInterfaceProperties

#### Extended by

- [`InterfacePropertiesTable`](README.md#interfacepropertiestable)

#### Properties

##### ~~propA~~

> **propA**: `string`

###### Deprecated

###### Source

[index.ts:1](http://source-url)

##### propB

> **propB**: `string`

###### Source

[index.ts:1](http://source-url)

***

### CommentInterface

#### Extended by

- [`CommentInterfaceExtended`](README.md#commentinterfaceextended)

#### Properties

##### prop

> **prop**: `string`

###### Source

[index.ts:1](http://source-url)

##### propb

> **propb**: `string`

###### Source

[index.ts:1](http://source-url)

***

### CommentInterfaceExtended

#### Extends

- [`CommentInterface`](README.md#commentinterface)

#### Properties

##### prop

> **prop**: `string`

###### Inherited from

[`CommentInterface`](README.md#commentinterface).[`prop`](README.md#prop)

###### Source

[index.ts:1](http://source-url)

##### propb

> **propb**: `string`

###### Inherited from

[`CommentInterface`](README.md#commentinterface).[`propb`](README.md#propb-1)

###### Source

[index.ts:1](http://source-url)

##### propc

> **propc**: `string`

###### Source

[index.ts:1](http://source-url)

***

### InterfacePropertiesTable

#### Extends

- [`BaseInterfaceProperties`](README.md#baseinterfaceproperties)

#### Properties

##### prop1

> **prop1**: `boolean`

The subroutine recursively parsed the hexadecimal data.
to generate the binary output for input validation.

###### Source

[index.ts:1](http://source-url)

##### prop2

> **prop2**: `RegExp`

Below is a breakdown of the notable performances:

- The CPU executed the instruction set in parallel with the GPU computations.
- The RAM efficiently cached the frequently accessed data for faster retrieval.
- The SSD accessed the stored files with lightning speed due to its high read/write capabilities.

###### Source

[index.ts:1](http://source-url)

##### prop3?

> `optional` **prop3**: `string`

> Example of Triple Code Block

```ts
def greet(name):
print("Hello, " + name + "!")
```

###### Source

[index.ts:1](http://source-url)

##### prop4

> **prop4**: `object`

| Name | Type | Source |
| ------ | ------ | ------ |
| `a` | `string` | [index.ts:1](http://source-url) |
| `b` | `string` | [index.ts:1](http://source-url) |

###### Source

[index.ts:1](http://source-url)

##### ~~propA~~

> **propA**: `string`

###### Deprecated

###### Inherited from

[`BaseInterfaceProperties`](README.md#baseinterfaceproperties).[`propA`](README.md#propa)

###### Source

[index.ts:1](http://source-url)

##### propB

> **propB**: `string`

###### Inherited from

[`BaseInterfaceProperties`](README.md#baseinterfaceproperties).[`propB`](README.md#propb)

###### Source

[index.ts:1](http://source-url)

***

### SameName

#### Properties

##### prop

> **prop**: `string`

###### Source

[index.ts:1](http://source-url)

##### propb

> **propb**: `string`

###### Source

[index.ts:1](http://source-url)

## Type Aliases

### TypeDeclarationTable

> **TypeDeclarationTable**: `object`

#### Type declaration

| Name | Type | Description | Source |
| ------ | ------ | ------ | ------ |
| `declaration1` | `boolean` | The subroutine recursively parsed the hexadecimal data. to generate the binary output for input validation. | [index.ts:1](http://source-url) |
| `declaration2` | `boolean` | The subroutine recursively parsed the hexadecimal data. to generate the binary output for input validation. | [index.ts:1](http://source-url) |
| `declaration4` | `100` | - | [index.ts:1](http://source-url) |

#### Source

[index.ts:1](http://source-url)

***

### typeWithBlockTags

> **typeWithBlockTags**: `object`

Variable with block tags summary

#### Type declaration

| Name | Type | Source |
| ------ | ------ | ------ |
| `x` | `string` | [index.ts:1](http://source-url) |

#### Example

```ts
const x = 1;
```

#### Remarks

Other block tags

#### Source

[index.ts:1](http://source-url)

***

### TypeWithGenerics\<C, D\>

> **TypeWithGenerics**\<`C`, `D`\>: `C` \| `D`

#### Type Parameters

| Type Parameter |
| ------ |
| `C` |
| `D` |

#### Source

[index.ts:1](http://source-url)

## Variables

### \_prop\_with\_underscore

> `const` **\_prop\_with\_underscore**: `true` = `true`

#### Source

[index.ts:1](http://source-url)

***

### prop

> `const` **prop**: `true` = `true`

#### Source

[index.ts:1](http://source-url)

***

### propb

> `const` **propb**: `true` = `true`

#### Source

[index.ts:1](http://source-url)

***

### SameName

> **SameName**: `true`

#### Source

[index.ts:1](http://source-url)

***

### TypeDeclarationTable

> **TypeDeclarationTable**: `object`

#### Type declaration

| Name | Type | Default value | Source |
| ------ | ------ | ------ | ------ |
| `declaration1` | `string` | 'declaration3' | [index.ts:1](http://source-url) |
| `declaration2` | `number` | 100 | [index.ts:1](http://source-url) |

#### Source

[index.ts:1](http://source-url)

## Functions

### constFunction()

> **constFunction**(`text`): `boolean`

constFunction comments

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | Some param |

#### Returns

`boolean`

#### Remarks

Some remarks

#### Source

[index.ts:1](http://source-url)

***

### constFunctionWithReturns()

> **constFunctionWithReturns**(`text`): `boolean`

constFunctionWithReturns comments

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | Some param |

#### Returns

`boolean`

Return comments

#### Remarks

Some remarks

#### Source

[index.ts:1](http://source-url)

***

### functionWithBlockTags()

> **functionWithBlockTags**(`x`, `y`): `void`

Function with block tags summary

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `string` |
| `y` | `string` |

#### Returns

`void`

#### Example

```ts
const x = 1;
```

#### See

abc.com

#### Remarks

Other block tags

#### Source

[index.ts:1](http://source-url)

***

### multipleExampleTags()

> **multipleExampleTags**(): `boolean`

Function with multiple example tags

#### Returns

`boolean`

#### Examples

```ts
// If there are no code blocks, TypeDoc assumes the whole tag
// should be a code block. This is not valid TSDoc, but is recognized
// by VSCode and enables better JSDoc support.

factorial(1)
```

If there is a code block, then both TypeDoc and VSCode will treat
text outside of the code block as regular text.

```ts
factorial(1)
```

#### Source

[index.ts:1](http://source-url)

***

### parametersTable()

> **parametersTable**\<`T`\>(`param1`, `param2`, `param3`): `number`

Adds two numbers together.

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` | `string` | The type of the numbers to be added. |

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `param1` | `number` | `undefined` | The first param to be added. |
| `param2` | `number` | `undefined` | The second param to be added. Some additional text for num2. |
| `param3` | `number` | `4` | The third param to be added. |

#### Returns

`number`

#### Source

[index.ts:1](http://source-url)

***

### singleExampleTag()

> **singleExampleTag**(): `boolean`

Function with single example tag

#### Returns

`boolean`

Return comments

#### Example

If there is a code block, then both TypeDoc and VSCode will treat
text outside of the code block as regular text.

```ts
factorial(1)
```

#### Source

[index.ts:1](http://source-url)
