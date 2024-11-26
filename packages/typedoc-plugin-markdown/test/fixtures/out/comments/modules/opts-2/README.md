# typedoc-stubs

Comments form module comments

> links

Links using `{@link}` inline tags.

- [CommentInterface](https://example.com/README.md#CommentInterface) - Links to CommentInterface
- [Links to CommentInterface.prop](https://example.com/README.md#prop)
- [Links to CommentInterface.propb](https://example.com/README.md#propb)
- [CommentEnum.MemberB](https://example.com/README.md#MemberB)
- [SameName:var](https://example.com/README.md#SameName-1)
- [SameName:interface](https://example.com/README.md#SameName)
- [SameName.prop](https://example.com/README.md#prop-2)
- [prop:var](https://example.com/README.md#prop-3)
- [_prop_with_underscore:var](https://example.com/README.md#_prop_with_underscore)
- [TypeWithGenerics](https://example.com/README.md#TypeWithGenericsC-D)

External links:

- [Google](https://www.google.com)
- [`https://www.google.com`](https://www.google.com)

Relative Links:

- [Relative Document](https://example.com/_media/PROJECT_DOC_1.md)
- [Relative Link](../../../groups/members/opts-1/index.md)

Relative Image Links:

\<img src="https://example.com/_media/logo.png" alt="Logo" /\>

![Logo](https://example.com/_media/logo.svg)

## See

 - Comments for a tag
 - Comments for tag written on same line

## Html And Jsx

A \<tag\>\</tag\> in comments

A `<tag>` in backticks

Another object `{ x: 1 }`.

\<div style=\{\{backgroundColor: "#fff", padding: 16\}\}\>
 \<img style=\{\{display: "block"\}\} height="48" width="48"/\>
\</div\>

Some random \{\{braces\}\}.

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

<a id="CommentEnum" name="CommentEnum"></a>

### CommentEnum

#### Enumeration Members

<table>
<thead>
<tr>
<th align="left">Enumeration Member</th>
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="Member" name="Member"></a> `Member`

</td>
<td>

`0`

</td>
<td>

Comment for Member

Some \<p\> html \</p\> and \<tag\>\</tag\>.

**Deprecated**

Deprecated member

**See**

[SameName](https://example.com/README.md#SameName)

</td>
</tr>
<tr>
<td>

<a id="MemberB" name="MemberB"></a> `MemberB`

</td>
<td>

`1`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

***

<a id="EnumMembersTable" name="EnumMembersTable"></a>

### EnumMembersTable

#### Enumeration Members

<table>
<thead>
<tr>
<th align="left">Enumeration Member</th>
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="member1" name="member1"></a> `member1`

</td>
<td>

`"member1"`

</td>
<td>

The subroutine recursively parsed the hexadecimal data.

</td>
</tr>
</tbody>
</table>

## Classes

<a id="BaseClassProperties" name="BaseClassProperties"></a>

### BaseClassProperties

#### Extended by

- [`ClassPropertiesTable`](https://example.com/README.md#ClassPropertiesTable)

#### Constructors

<a id="Constructors" name="Constructors"></a>

##### new BaseClassProperties()

> **new BaseClassProperties**(): [`BaseClassProperties`](https://example.com/README.md#BaseClassProperties)

###### Returns

[`BaseClassProperties`](https://example.com/README.md#BaseClassProperties)

#### Properties

<table>
<thead>
<tr>
<th align="left">Property</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="propA" name="propA"></a> ~~`propA`~~

</td>
<td>

`string`

</td>
<td>

**Deprecated**

</td>
</tr>
<tr>
<td>

<a id="propB" name="propB"></a> `propB`

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

***

<a id="ClassPropertiesTable" name="ClassPropertiesTable"></a>

### ClassPropertiesTable

#### Extends

- [`BaseClassProperties`](https://example.com/README.md#BaseClassProperties)

#### Constructors

<a id="Constructors-1" name="Constructors-1"></a>

##### new ClassPropertiesTable()

> **new ClassPropertiesTable**(): [`ClassPropertiesTable`](https://example.com/README.md#ClassPropertiesTable)

###### Returns

[`ClassPropertiesTable`](https://example.com/README.md#ClassPropertiesTable)

###### Inherited from

[`BaseClassProperties`](https://example.com/README.md#BaseClassProperties).[`constructor`](https://example.com/README.md#Constructors)

#### Properties

<table>
<thead>
<tr>
<th align="left">Property</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="prop1" name="prop1"></a> `prop1`

</td>
<td>

`boolean`

</td>
<td>

The subroutine recursively parsed the hexadecimal data.
to generate the binary output for input validation.

</td>
</tr>
<tr>
<td>

<a id="prop2" name="prop2"></a> `prop2`

</td>
<td>

`RegExp`

</td>
<td>

Below is a breakdown of the notable performances:

- The CPU executed the instruction set in parallel with the GPU computations.
- The RAM efficiently cached the frequently accessed data for faster retrieval.
- The SSD accessed the stored files with lightning speed due to its high read/write capabilities.

</td>
</tr>
<tr>
<td>

<a id="prop3" name="prop3"></a> `prop3?`

</td>
<td>

`string`

</td>
<td>

> Example of Triple Code Block

```ts
def greet(name):
print("Hello, " + name + "!")
```

</td>
</tr>
<tr>
<td>

<a id="propA-1" name="propA-1"></a> ~~`propA`~~

</td>
<td>

`string`

</td>
<td>

**Deprecated**

</td>
</tr>
<tr>
<td>

<a id="propB-1" name="propB-1"></a> `propB`

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="propWithFlag" name="propWithFlag"></a> `propWithFlag`

</td>
<td>

`string`

</td>
<td>

**`Experimental`**

Experimental flag comments

</td>
</tr>
</tbody>
</table>

## Interfaces

<a id="BaseInterfaceProperties" name="BaseInterfaceProperties"></a>

### BaseInterfaceProperties

#### Extended by

- [`InterfacePropertiesTable`](https://example.com/README.md#InterfacePropertiesTable)

#### Properties

<table>
<thead>
<tr>
<th align="left">Property</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="propA-2" name="propA-2"></a> ~~`propA`~~

</td>
<td>

`string`

</td>
<td>

**Deprecated**

</td>
</tr>
<tr>
<td>

<a id="propB-2" name="propB-2"></a> `propB`

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

***

<a id="CommentInterface" name="CommentInterface"></a>

### CommentInterface

#### Extended by

- [`CommentInterfaceExtended`](https://example.com/README.md#CommentInterfaceExtended)

#### Properties

<table>
<thead>
<tr>
<th align="left">Property</th>
<th align="left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="prop" name="prop"></a> `prop`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="propb" name="propb"></a> `propb`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

<a id="CommentInterfaceExtended" name="CommentInterfaceExtended"></a>

### CommentInterfaceExtended

#### Extends

- [`CommentInterface`](https://example.com/README.md#CommentInterface)

#### Properties

<table>
<thead>
<tr>
<th align="left">Property</th>
<th align="left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="prop-1" name="prop-1"></a> `prop`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="propb-1" name="propb-1"></a> `propb`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="propc" name="propc"></a> `propc`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

<a id="InterfacePropertiesTable" name="InterfacePropertiesTable"></a>

### InterfacePropertiesTable

#### Extends

- [`BaseInterfaceProperties`](https://example.com/README.md#BaseInterfaceProperties)

#### Properties

<table>
<thead>
<tr>
<th align="left">Property</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="prop1-1" name="prop1-1"></a> `prop1`

</td>
<td>

`boolean`

</td>
<td>

The subroutine recursively parsed the hexadecimal data.
to generate the binary output for input validation.

</td>
</tr>
<tr>
<td>

<a id="prop2-1" name="prop2-1"></a> `prop2`

</td>
<td>

`RegExp`

</td>
<td>

Below is a breakdown of the notable performances:

- The CPU executed the instruction set in parallel with the GPU computations.
- The RAM efficiently cached the frequently accessed data for faster retrieval.
- The SSD accessed the stored files with lightning speed due to its high read/write capabilities.

</td>
</tr>
<tr>
<td>

<a id="prop3-1" name="prop3-1"></a> `prop3?`

</td>
<td>

`string`

</td>
<td>

> Example of Triple Code Block

```ts
def greet(name):
print("Hello, " + name + "!")
```

</td>
</tr>
<tr>
<td>

<a id="prop4" name="prop4"></a> `prop4`

</td>
<td>

\{`a`: `string`;`b`: `string`; \}

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="a" name="a"></a> `prop4.a`

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="b" name="b"></a> `prop4.b`

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="propA-3" name="propA-3"></a> ~~`propA`~~

</td>
<td>

`string`

</td>
<td>

**Deprecated**

</td>
</tr>
<tr>
<td>

<a id="propB-3" name="propB-3"></a> `propB`

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

***

<a id="SameName" name="SameName"></a>

### SameName

#### Properties

<table>
<thead>
<tr>
<th align="left">Property</th>
<th align="left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="prop-2" name="prop-2"></a> `prop`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="propb-2" name="propb-2"></a> `propb`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

## Type Aliases

<a id="TypeDeclarationTable" name="TypeDeclarationTable"></a>

### TypeDeclarationTable

> **TypeDeclarationTable**: \{`declaration1`: `boolean`;`declaration2`: `boolean`;`declaration4`: `100`; \}

#### Type declaration

<table>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`declaration1`

</td>
<td>

`boolean`

</td>
<td>

The subroutine recursively parsed the hexadecimal data.
to generate the binary output for input validation.

</td>
</tr>
<tr>
<td>

`declaration2`

</td>
<td>

`boolean`

</td>
<td>

The subroutine recursively parsed the hexadecimal data.
to generate the binary output for input validation.

</td>
</tr>
<tr>
<td>

`declaration4`

</td>
<td>

`100`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Source

[index.ts:1](http://source-url)

***

<a id="typeWithBlockTags" name="typeWithBlockTags"></a>

### typeWithBlockTags

> **typeWithBlockTags**: \{`x`: `string`; \}

Variable with block tags summary

#### Example

```ts
const x = 1;
```

#### Type declaration

<table>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`x`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Remarks

Other block tags

#### Source

[index.ts:1](http://source-url)

***

<a id="TypeWithGenericsC-D" name="TypeWithGenericsC-D"></a>

### TypeWithGenerics\<C, D\>

> **TypeWithGenerics**\<`C`, `D`\>: `C` \| `D`

#### Type Parameters

<table>
<thead>
<tr>
<th align="left">Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`C`

</td>
</tr>
<tr>
<td>

`D`

</td>
</tr>
</tbody>
</table>

#### Source

[index.ts:1](http://source-url)

## Variables

<a id="_prop_with_underscore" name="_prop_with_underscore"></a>

### \_prop\_with\_underscore

> `const` **\_prop\_with\_underscore**: `true` = `true`

#### Source

[index.ts:1](http://source-url)

***

<a id="prop-3" name="prop-3"></a>

### prop

> `const` **prop**: `true` = `true`

#### Source

[index.ts:1](http://source-url)

***

<a id="propb-3" name="propb-3"></a>

### propb

> `const` **propb**: `true` = `true`

#### Source

[index.ts:1](http://source-url)

***

<a id="SameName-1" name="SameName-1"></a>

### SameName

> **SameName**: `true`

#### Source

[index.ts:1](http://source-url)

***

<a id="TypeDeclarationTable-1" name="TypeDeclarationTable-1"></a>

### TypeDeclarationTable

> **TypeDeclarationTable**: \{`declaration1`: `string`;`declaration2`: `number`; \}

#### Type declaration

<table>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`declaration1`

</td>
<td>

`string`

</td>
<td>

'declaration3'

</td>
</tr>
<tr>
<td>

`declaration2`

</td>
<td>

`number`

</td>
<td>

100

</td>
</tr>
</tbody>
</table>

#### Source

[index.ts:1](http://source-url)

## Functions

<a id="constFunction" name="constFunction"></a>

### constFunction()

> **constFunction**(`text`): `boolean`

constFunction comments

#### Parameters

<table>
<thead>
<tr>
<th align="left">Parameter</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`text`

</td>
<td>

`string`

</td>
<td>

Some param

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### Remarks

Some remarks

#### Source

[index.ts:1](http://source-url)

***

<a id="constFunctionWithReturns" name="constFunctionWithReturns"></a>

### constFunctionWithReturns()

> **constFunctionWithReturns**(`text`): `boolean`

constFunctionWithReturns comments

#### Parameters

<table>
<thead>
<tr>
<th align="left">Parameter</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`text`

</td>
<td>

`string`

</td>
<td>

Some param

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

Return comments

#### Remarks

Some remarks

#### Source

[index.ts:1](http://source-url)

***

<a id="functionWithBlockTags" name="functionWithBlockTags"></a>

### functionWithBlockTags()

> **functionWithBlockTags**(`x`, `y`): `void`

Function with block tags summary

#### Example

```ts
const x = 1;
```

#### Parameters

<table>
<thead>
<tr>
<th align="left">Parameter</th>
<th align="left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`x`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`y`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### See

abc.com

#### Remarks

Other block tags

#### Source

[index.ts:1](http://source-url)

***

<a id="multipleExampleTags" name="multipleExampleTags"></a>

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

<a id="parametersTable" name="parametersTable"></a>

### parametersTable()

> **parametersTable**\<`T`\>(`param1`, `param2`, `param3`): `number`

Adds two numbers together.

#### Type Parameters

<table>
<thead>
<tr>
<th align="left">Type Parameter</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
<td>

The type of the numbers to be added.

</td>
</tr>
</tbody>
</table>

#### Parameters

<table>
<thead>
<tr>
<th align="left">Parameter</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`param1`

</td>
<td>

`number`

</td>
<td>

The first param
to be added.

</td>
</tr>
<tr>
<td>

`param2`

</td>
<td>

`number`

</td>
<td>

The second param to be added.

Some additional text for num2.

</td>
</tr>
<tr>
<td>

`param3`

</td>
<td>

`number`

</td>
<td>

The third param to be added.

</td>
</tr>
</tbody>
</table>

#### Returns

`number`

#### Source

[index.ts:1](http://source-url)

***

<a id="singleExampleTag" name="singleExampleTag"></a>

### singleExampleTag()

> **singleExampleTag**(): `boolean`

Function with single example tag

#### Example

If there is a code block, then both TypeDoc and VSCode will treat
text outside of the code block as regular text.

```ts
factorial(1)
```

#### Returns

`boolean`

Return comments

#### Source

[index.ts:1](http://source-url)
