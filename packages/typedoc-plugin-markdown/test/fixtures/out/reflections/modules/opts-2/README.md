# typedoc-stubs

Module comments

## Enumerations

### BasicEnum

Comments for enum

#### Enumeration Members

| Enumeration Member | Value | Description |
| :------ | :------ | :------ |
| `MemberA` | `0` | Comments for MemberA |
| `MemberB` | `1` | Comments for MemberB |

***

### EnumWithValues

Comments for enum

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `MemberA` | `"UP"` |
| `MemberB` | `"DOWN"` |

## Classes

### `abstract` AbstractClass

#### Extended by

- [`DerivedClassA`](README.md#derivedclassa)
- [`DerivedClassB`](README.md#derivedclassb)

#### Constructors

##### new AbstractClass()

```ts
new AbstractClass(): AbstractClass
```

###### Returns

[`AbstractClass`](README.md#abstractclass)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `abstractProp` | `abstract` | `string` | Comments for abstractProp |

#### Methods

##### abstractMethod()

```ts
abstract abstractMethod(): string
```

Comments for abstractMethod

###### Returns

`string`

###### Source

[classes.ts:1](http://source-url)

***

### BaseClass

#### Extended by

- [`ChildClassA`](README.md#childclassa)
- [`ChildClassB`](README.md#childclassb)

#### Constructors

##### new BaseClass()

```ts
new BaseClass(): BaseClass
```

###### Returns

[`BaseClass`](README.md#baseclass)

***

### BasicClass

Comments for BasicClass

#### Constructors

##### new BasicClass()

```ts
new BasicClass(): BasicClass
```

###### Returns

[`BasicClass`](README.md#basicclass)

#### Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `prop` | `string` | Comments for prop |

#### Methods

##### method()

```ts
method(): string
```

Comments for method

###### Returns

`string`

###### Source

[classes.ts:1](http://source-url)

***

### CallbacksOptions\<P, A\>

#### Type Parameters

| Type Parameter | Default type |
| :------ | :------ |
| `P` | [`DisposableClass`](README.md#disposableclass) |
| `A` | [`ClassWithModifiers`](README.md#classwithmodifiers) |

#### Constructors

##### new CallbacksOptions()

```ts
new CallbacksOptions<P, A>(): CallbacksOptions<P, A>
```

###### Returns

[`CallbacksOptions`](README.md#callbacksoptionsp-a)\<`P`, `A`\>

***

### ChildClassA

#### Extends

- [`BaseClass`](README.md#baseclass)

#### Extended by

- [`GrandChildClassA`](README.md#grandchildclassa)
- [`GrandChildClassB`](README.md#grandchildclassb)

#### Constructors

##### new ChildClassA()

```ts
new ChildClassA(): ChildClassA
```

###### Returns

[`ChildClassA`](README.md#childclassa)

###### Inherited from

[`BaseClass`](README.md#baseclass).[`constructor`](README.md#constructors-1)

***

### ChildClassB

#### Extends

- [`BaseClass`](README.md#baseclass)

#### Constructors

##### new ChildClassB()

```ts
new ChildClassB(): ChildClassB
```

###### Returns

[`ChildClassB`](README.md#childclassb)

###### Inherited from

[`BaseClass`](README.md#baseclass).[`constructor`](README.md#constructors-1)

***

### ClassWithAccessorKeywords

#### Constructors

##### new ClassWithAccessorKeywords()

```ts
new ClassWithAccessorKeywords(): ClassWithAccessorKeywords
```

###### Returns

[`ClassWithAccessorKeywords`](README.md#classwithaccessorkeywords)

#### Accessors

##### accessor1

Accessor comments

###### Example

```ts
const x = 1;
```

###### Source

[classes.ts:1](http://source-url)

##### accessor2

Accessor comments

###### Remarks

Remark comments

###### Source

[classes.ts:1](http://source-url)

##### accessor3

Accessor comments

###### Source

[classes.ts:1](http://source-url)

***

### ClassWithAccessors

Comments for ClassWithAccessors

#### Constructors

##### new ClassWithAccessors()

```ts
new ClassWithAccessors(): ClassWithAccessors
```

###### Returns

[`ClassWithAccessors`](README.md#classwithaccessors)

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `privateProp` | `private` | `string` |

#### Accessors

##### accessor

###### Get Signature

```ts
get accessor(): string
```

Comments for getter

###### Returns

`string`

###### Set Signature

```ts
set accessor(value: string): void
```

Comments for setter

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | Param comments |

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

##### noGetter

###### Set Signature

```ts
set noGetter(x: string): void
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `x` | `string` |

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

##### noSetter

###### Get Signature

```ts
get noSetter(): string
```

###### Returns

`string`

###### Source

[classes.ts:1](http://source-url)

***

### ClassWithComplexProps

Comments for ClassWithComplexProps

#### Constructors

##### new ClassWithComplexProps()

```ts
new ClassWithComplexProps(): ClassWithComplexProps
```

###### Returns

[`ClassWithComplexProps`](README.md#classwithcomplexprops)

#### Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `objecLiteralProp` | `object` | - |
| `objecLiteralProp.someFunction` | (`a`: `string`) => `string` | Comments for someFunction |
| `objecLiteralProp.someProp` | `string` | Comments for someProp |

***

### ClassWithConstructorOverloads

Comments for ClassWithConstructorOverloads

#### Constructors

##### new ClassWithConstructorOverloads()

```ts
new ClassWithConstructorOverloads(x: number, y: string): ClassWithConstructorOverloads
```

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | Comments for x number |
| `y` | `string` |  |

###### Returns

[`ClassWithConstructorOverloads`](README.md#classwithconstructoroverloads)

###### Source

[classes.ts:1](http://source-url)

##### new ClassWithConstructorOverloads()

```ts
new ClassWithConstructorOverloads(x: string): ClassWithConstructorOverloads
```

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `x` | `string` | Comments for x string |

###### Returns

[`ClassWithConstructorOverloads`](README.md#classwithconstructoroverloads)

###### Source

[classes.ts:1](http://source-url)

##### new ClassWithConstructorOverloads()

```ts
new ClassWithConstructorOverloads(s: string): ClassWithConstructorOverloads
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `s` | `string` |

###### Returns

[`ClassWithConstructorOverloads`](README.md#classwithconstructoroverloads)

###### Source

[classes.ts:1](http://source-url)

***

### ClassWithFlags

Comment for ClassWithFlags

#### Constructors

##### new ClassWithFlags()

```ts
new ClassWithFlags(): ClassWithFlags
```

###### Returns

[`ClassWithFlags`](README.md#classwithflags)

#### Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `expermintalProp` | `public` | `string` | **`Experimental`** |
| `internalProp` | `private` | `string` | **`Internal`** |

#### Methods

##### expermintalMethod()

```ts
expermintalMethod(): void
```

**`Experimental`**

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

##### internalMethod()

```ts
protected internalMethod(): void
```

**`Internal`**

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

***

### `abstract` ClassWithModifiers

Comments for ClassWithModifiers

#### Constructors

##### new ClassWithModifiers()

```ts
new ClassWithModifiers(): ClassWithModifiers
```

###### Returns

[`ClassWithModifiers`](README.md#classwithmodifiers)

#### Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `privateProp` | `private` | `string` | `undefined` | Comments for privateProp |
| `protectedProp` | `protected` | `string` | `undefined` | Comments for protectedProp |
| `publicPropWithDefault` | `public` | `string` | `'propWithDefault'` | Comments for propWithDefault |
| `readonlyProp` | `readonly` | `string` | `undefined` | Comments for abstractProperty |
| `staticProp` | `static` | `string` | `undefined` | Comments for staticProp |

#### Methods

##### privateMethod()

```ts
private privateMethod(): void
```

Comment for privateMethod

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

##### publicMethod()

```ts
publicMethod(): void
```

Comment for publicMethod

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

##### staticMethod()

```ts
static staticMethod(): void
```

Comment for staticMethod

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

***

### ClassWithoutPropCategories

#### Constructors

##### new ClassWithoutPropCategories()

```ts
new ClassWithoutPropCategories(opts: object): ClassWithoutPropCategories
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `opts` | \{ `a`: `string`; `b`: `string`; \} |
| `opts.a` | `string` |
| `opts.b` | `string` |

###### Returns

[`ClassWithoutPropCategories`](README.md#classwithoutpropcategories)

###### Source

[classes.ts:1](http://source-url)

#### Properties

| Property | Type |
| :------ | :------ |
| `prop1` | `string` |
| `prop2` | `string` |

#### Methods

##### method1()

```ts
method1(): void
```

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

##### method2()

```ts
method2(): void
```

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

***

### ClassWithPropCategories

#### Constructors

##### new ClassWithPropCategories()

```ts
new ClassWithPropCategories(opts: object): ClassWithPropCategories
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `opts` | \{ `a`: `string`; `b`: `string`; \} |
| `opts.a` | `string` |
| `opts.b` | `string` |

###### Returns

[`ClassWithPropCategories`](README.md#classwithpropcategories)

###### Source

[classes.ts:1](http://source-url)

#### CatA

##### prop1

```ts
prop1: string;
```

###### Source

[classes.ts:1](http://source-url)

#### CatB

##### prop2

```ts
prop2: string;
```

###### Source

[classes.ts:1](http://source-url)

#### Other

##### method1()

```ts
method1(): void
```

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

##### method2()

```ts
method2(): void
```

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

***

### ClassWithSimpleProps

Comments for ClassWithSimpleProps

#### Constructors

##### new ClassWithSimpleProps()

```ts
new ClassWithSimpleProps(): ClassWithSimpleProps
```

###### Returns

[`ClassWithSimpleProps`](README.md#classwithsimpleprops)

#### Properties

| Property | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `propA` | `string` | `'propAValue'` | Comments for propA |
| `propB` | `string` | `'propBDefaultValue'` | Comments for propB |
| `propC` | `string` | `'propCDefaultValue'` | Comments for propB on two lines |
| `propD` | `string` | `undefined` | Comments for propE |

***

### ClassWithSymbols

#### Constructors

##### new ClassWithSymbols()

```ts
new ClassWithSymbols(): ClassWithSymbols
```

###### Returns

[`ClassWithSymbols`](README.md#classwithsymbols)

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `[symbolConst]?` | `static` | () => `void` |

#### Methods

##### \[dispose\]()

```ts
dispose: void
```

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

***

### ClassWithTypeParameters\<A, B, C\>

Comments for ClassWithTypeParameters

#### Type Parameters

| Type Parameter | Default type | Description |
| :------ | :------ | :------ |
| `A` | - | - |
| `B` *extends* `string` | - | Comments for param B |
| `C` | `boolean` | Comments for param C |

#### Constructors

##### new ClassWithTypeParameters()

```ts
new ClassWithTypeParameters<A, B, C>(): ClassWithTypeParameters<A, B, C>
```

###### Returns

[`ClassWithTypeParameters`](README.md#classwithtypeparametersa-b-c)\<`A`, `B`, `C`\>

***

### DerivedClassA

Comments for DerivedClassA

#### Extends

- [`AbstractClass`](README.md#abstractclass)

#### Constructors

##### new DerivedClassA()

```ts
new DerivedClassA(): DerivedClassA
```

###### Returns

[`DerivedClassA`](README.md#derivedclassa)

###### Inherited from

[`AbstractClass`](README.md#abstractclass).[`constructor`](README.md#constructors)

#### Properties

| Property | Type | Default value | Description | Overrides |
| :------ | :------ | :------ | :------ | :------ |
| `abstractProp` | `string` | `'abstractProp'` | Comments for abstractProp | [`AbstractClass`](README.md#abstractclass).`abstractProp` |
| `derivedProp` | `string` | `undefined` | - | - |

#### Methods

##### abstractMethod()

```ts
abstractMethod(): string
```

Comments for abstractMethod

###### Returns

`string`

###### Overrides

[`AbstractClass`](README.md#abstractclass).[`abstractMethod`](README.md#abstractmethod)

###### Source

[classes.ts:1](http://source-url)

##### derivedMethod()

```ts
derivedMethod(): string
```

###### Returns

`string`

###### Source

[classes.ts:1](http://source-url)

***

### DerivedClassB

Comments for DerivedClassB

#### Extends

- [`AbstractClass`](README.md#abstractclass)

#### Constructors

##### new DerivedClassB()

```ts
new DerivedClassB(): DerivedClassB
```

###### Returns

[`DerivedClassB`](README.md#derivedclassb)

###### Inherited from

[`AbstractClass`](README.md#abstractclass).[`constructor`](README.md#constructors)

#### Properties

| Property | Type | Default value | Description | Overrides |
| :------ | :------ | :------ | :------ | :------ |
| `abstractProp` | `string` | `'abstractProp'` | Comments for abstractProp | [`AbstractClass`](README.md#abstractclass).`abstractProp` |

#### Methods

##### abstractMethod()

```ts
abstractMethod(): string
```

Comments for abstractMethod

###### Returns

`string`

###### Overrides

[`AbstractClass`](README.md#abstractclass).[`abstractMethod`](README.md#abstractmethod)

###### Source

[classes.ts:1](http://source-url)

***

### DisposableClass

#### Implements

- `Disposable`

#### Constructors

##### new DisposableClass()

```ts
new DisposableClass(): DisposableClass
```

###### Returns

[`DisposableClass`](README.md#disposableclass)

#### Methods

##### \[dispose\]()

```ts
dispose: void
```

###### Returns

`void`

###### Implementation of

`Disposable.[dispose]`

###### Source

[classes.ts:1](http://source-url)

***

### GrandChildClassA

#### Extends

- [`ChildClassA`](README.md#childclassa)

#### Constructors

##### new GrandChildClassA()

```ts
new GrandChildClassA(): GrandChildClassA
```

###### Returns

[`GrandChildClassA`](README.md#grandchildclassa)

###### Inherited from

[`ChildClassA`](README.md#childclassa).[`constructor`](README.md#constructors-4)

***

### GrandChildClassB

#### Extends

- [`ChildClassA`](README.md#childclassa)

#### Constructors

##### new GrandChildClassB()

```ts
new GrandChildClassB(): GrandChildClassB
```

###### Returns

[`GrandChildClassB`](README.md#grandchildclassb)

###### Inherited from

[`ChildClassA`](README.md#childclassa).[`constructor`](README.md#constructors-4)

## Interfaces

### BasicInterface

Comments for BasicInterface

#### Extended by

- [`ExtendedInterface`](README.md#extendedinterface)

#### Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| ~~`deprecatedProp`~~ | `string` | **Deprecated** This prop is deprecated **See** Comments for some tag |
| `functionProp` | (`s`: `string`) => `boolean` | Comments for functionProper |
| `optionalProp?` | `string` | Comments for optional prop |
| `prop` | `string` | Comments for prop |
| `propReturningObjectDeclaration` | `object` | Comments for propReturningObjectDeclaration |
| `propReturningObjectDeclaration.a` | `boolean` | - |
| `propReturningObjectDeclaration.b` | `string` | - |
| `propReturningObjectDeclarations` | `object` & `object` | Comments for propReturningObjectDeclarations |
| `propReturningSignatureDeclaration?` | () => `string` \| `number` \| `boolean` | Comments for propReturningSignatureDeclaration |
| `propReturningSignatureDeclarations` | () => `any` & (`paramsA`: `true` \| `any`[], `paramsB`?: `any`) => `any` & (`paramsC`: `any`) => `any` | Comments for propReturningSignatureDeclarations |
| `propWithFunction` | (`options`: `object`) => `boolean` | Comments for propWithFunction |
| `propWithProps` | `object` | Comments for propWithProps |
| `propWithProps.callbacks?` | `Partial`\<[`CallbacksOptions`](README.md#callbacksoptionsp-a)\<[`DisposableClass`](README.md#disposableclass), [`ClassWithModifiers`](README.md#classwithmodifiers)\>\> | Comments for callbacks |
| `propWithProps.nestedPropA` | `string` | Comments for nestedPropA |
| `propWithProps.nestedPropB` | `boolean` | Comments for nestedPropB |
| `propWithProps.nestedPropC` | `object` | Comments for nestedPropC |
| `propWithProps.nestedPropC.nestedPropCA` | `string` | Comments for nestedPropCA |
| `propWithProps.nestedPropD` | () => `boolean` | Comments for nestedPropD |

***

### CustomEventInterface\<T\>

#### Type Parameters

| Type Parameter |
| :------ |
| `T` |

#### Properties

| Property | Type |
| :------ | :------ |
| `detail` | `string` |
| `target` | `T` |

***

### ExtendedInterface

Comments for ExtendedInterface

#### Extends

- [`BasicInterface`](README.md#basicinterface)

#### Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| ~~`deprecatedProp`~~ | `string` | **Deprecated** This prop is deprecated **See** Comments for some tag | [`BasicInterface`](README.md#basicinterface).`deprecatedProp` |
| `extendedProp` | `string` | - | - |
| `functionProp` | (`s`: `string`) => `boolean` | Comments for functionProper | [`BasicInterface`](README.md#basicinterface).`functionProp` |
| `optionalProp?` | `string` | Comments for optional prop | [`BasicInterface`](README.md#basicinterface).`optionalProp` |
| `prop` | `string` | Comments for prop | [`BasicInterface`](README.md#basicinterface).`prop` |
| `propReturningObjectDeclaration` | `object` | Comments for propReturningObjectDeclaration | [`BasicInterface`](README.md#basicinterface).`propReturningObjectDeclaration` |
| `propReturningObjectDeclaration.a` | `boolean` | - | - |
| `propReturningObjectDeclaration.b` | `string` | - | - |
| `propReturningObjectDeclarations` | `object` & `object` | Comments for propReturningObjectDeclarations | [`BasicInterface`](README.md#basicinterface).`propReturningObjectDeclarations` |
| `propReturningSignatureDeclaration?` | () => `string` \| `number` \| `boolean` | Comments for propReturningSignatureDeclaration | [`BasicInterface`](README.md#basicinterface).`propReturningSignatureDeclaration` |
| `propReturningSignatureDeclarations` | () => `any` & (`paramsA`: `true` \| `any`[], `paramsB`?: `any`) => `any` & (`paramsC`: `any`) => `any` | Comments for propReturningSignatureDeclarations | [`BasicInterface`](README.md#basicinterface).`propReturningSignatureDeclarations` |
| `propWithFunction` | (`options`: `object`) => `boolean` | Comments for propWithFunction | [`BasicInterface`](README.md#basicinterface).`propWithFunction` |
| `propWithProps` | `object` | Comments for propWithProps | [`BasicInterface`](README.md#basicinterface).`propWithProps` |
| `propWithProps.callbacks?` | `Partial`\<[`CallbacksOptions`](README.md#callbacksoptionsp-a)\<[`DisposableClass`](README.md#disposableclass), [`ClassWithModifiers`](README.md#classwithmodifiers)\>\> | Comments for callbacks | - |
| `propWithProps.nestedPropA` | `string` | Comments for nestedPropA | - |
| `propWithProps.nestedPropB` | `boolean` | Comments for nestedPropB | - |
| `propWithProps.nestedPropC` | `object` | Comments for nestedPropC | - |
| `propWithProps.nestedPropC.nestedPropCA` | `string` | Comments for nestedPropCA | - |
| `propWithProps.nestedPropD` | () => `boolean` | Comments for nestedPropD | - |

***

### IndexableInterface

Comments for IndexableInterface

#### Indexable

 \[`s`: `string`\]: `string`

#### Properties

| Property | Type |
| :------ | :------ |
| `prop` | `string` |

***

### InterfaceWithComments\<A, B, C, D\>

Comments for interface
over two lines

And some more comments

#### Type Parameters

| Type Parameter | Description |
| :------ | :------ |
| `A` | This is a parameter. |
| `B` | Comments for a parameter. This sentence is on a soft new line. |
| `C` | This is a parameter. Documentation with a double line |
| `D` | <p>These are comments with paras</p> <p>These are comments with paras</p> Other comments Comments with <p>paras</p> <p>These are comments with paras</p> |

#### Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| ~~`propertyWithComments`~~ | `string` | Some text. - list item - list item **Deprecated** This is a deprecated property **See** https://example.com |

***

### InterfaceWithEventProperties

#### Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `someProp?` | `boolean` | Description for prop someProp |

#### Events

| Event | Type | Description |
| :------ | :------ | :------ |
| `anotherEvent` | `MouseEvent` | - |
| ~~`someEvent?`~~ | (`eventParam`: [`CustomEventInterface`](README.md#customeventinterfacet)\<`MouseEvent`\>) => `void` | Description for event someEvent **Deprecated** Deprectaed comments |

***

### InterfaceWithFlags

Comments for InterfaceWithFlags

#### Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `expermintalProp?` | `string` | **`Experimental`** |
| `internalProp` | `string` | **`Internal`** Comments for internalProp |

***

### InterfaceWithTypeParameters\<A\>

Comments for InterfaceWithTypeParameters

#### Type Parameters

| Type Parameter |
| :------ |
| `A` |

#### Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `prop` | `A` | Comments for prop |

***

### MultipleIndexableInterface

#### Indexable

 \[`key`: `string`\]: `string`

 \[`index`: `number`\]: `string`

#### Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `prop` | `string` | Prop |

## Type Aliases

### \_\_TypeDeclarationWithSpecialCharacters\_\<T, U\>

```ts
type __TypeDeclarationWithSpecialCharacters_<T, U>: object;
```

Comments for object with special characters

#### Type Parameters

| Type Parameter |
| :------ |
| `T` |
| `U` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_` | `"_"` |
| `_foo_` | `"_foo_"` |
| `_prop_with_underscore_` | `"_prop_with_underscore_"` |
| `_x` | (`_param`: `T`) => `U` |
| `?` | `T` \| `U` |
| `{prop-with-brackets}` | `"{prop-with-brackets}"` |
| `*` | `"*"` |
| `**foo**` | `"**foo**"` |
| `*foo*` | `"*foo*"` |
| \ | "\\" |
| \a | "\\a" |
| \n | "\\n" |
| \` | "\`" |
| \`prop\`with\`backticks\` | "\`prop\`with\`backticks\`" |
| `<` | `"<"` |
| `<foo>` | `"<foo>"` |
| `>` | `">"` |
| \| | "\|" |
| \|prop\|with\|pipes\| | "\|prop\|with\|pipes\|" |
| `~` | `"~"` |

#### Source

[types.ts:1](http://source-url)

***

### ArrayOfStuff

```ts
type ArrayOfStuff: object[];
```

#### Source

[types.ts:1](http://source-url)

***

### ArrayType

```ts
type ArrayType: string[];
```

Comments for ArrayType

#### Source

[types.ts:1](http://source-url)

***

### ConditionalType\<T\>

```ts
type ConditionalType<T>: T extends string ? "string" : T extends number ? "number" : T extends boolean ? "boolean" : T extends undefined ? "undefined" : "object";
```

Comments for ConditionalType

#### Type Parameters

| Type Parameter |
| :------ |
| `T` |

#### Source

[types.ts:1](http://source-url)

***

### ExternalReferenceType

```ts
type ExternalReferenceType: ClassWithTypeParameters<"x", "y">;
```

Comments for ExternalReferenceType

#### Source

[types.ts:1](http://source-url)

***

### FunctionType()

```ts
type FunctionType: (name: string, value: unknown) => void;
```

Comments for FunctionType

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `unknown` |

#### Returns

`void`

#### Source

[types.ts:1](http://source-url)

***

### IndexAccessType

```ts
type IndexAccessType: ArrayOfStuff[number];
```

Comments for IndexAccessType

#### Source

[types.ts:1](http://source-url)

***

### IntersectionType

```ts
type IntersectionType: TupleType & ArrayType & object;
```

Comments for IntersectionType

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bar` | `number` |

#### Source

[types.ts:1](http://source-url)

***

### LiteralType

```ts
type LiteralType: object;
```

Comments for LiteralType

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `someFunctionWithArrow` | () => `string` | Comments for someFunctionWithArrow |
| `x`? | `string` | comment for x |
| `y` | `object` | comment for y |
| `y.x` | `string` | comment for y.x |
| `y.y`? | `boolean` \| `string` | comment for y.y |
| `y.z` | (`x`: `string`) => `string` | comment for y.z |
| `z` | (`x`: `string`) => `string` | - |
| `get accessorA` | [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\> | Comments for accessorA getter |
| `set accessorA` | `void` | Comments for accessorA setter |
| `get accessorB` | `string` | - |
| `set accessorB` | `void` | - |
| `someFunction()` | [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\> | Comments for someFunction |

#### Source

[types.ts:1](http://source-url)

***

### PartialMappedType\<T\>

```ts
type PartialMappedType<T>: { [P in keyof T]?: T[P] };
```

Comments for PartialMappedType

#### Type Parameters

| Type Parameter |
| :------ |
| `T` |

#### Source

[types.ts:1](http://source-url)

***

### PrimitiveType

```ts
type PrimitiveType: boolean;
```

Comments for PrimitiveType

#### Source

[types.ts:1](http://source-url)

***

### PromiseTypeWithObject

```ts
type PromiseTypeWithObject: Promise<object>;
```

Comments for promise type returning object

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `1` | comments for x |

#### Source

[types.ts:1](http://source-url)

***

### PromiseTypeWithSymbol

```ts
type PromiseTypeWithSymbol: Promise<IndexAccessType>;
```

Comments for promise type returning symbol

#### Source

[types.ts:1](http://source-url)

***

### QueryType

```ts
type QueryType: typeof someQuery;
```

Comments for query type

#### Source

[types.ts:1](http://source-url)

***

### ReadonlyMappedType\<T\>

```ts
type ReadonlyMappedType<T>: { readonly [P in keyof T]: T[P] };
```

Comments for ReadonlyMapedType

#### Type Parameters

| Type Parameter |
| :------ |
| `T` |

#### Source

[types.ts:1](http://source-url)

***

### StringLiteralType

```ts
type StringLiteralType: 
  | " "
  | "string"
  | "string|with|pipes"
  | "string`with`backticks"
  | "<foo>"
  | "*";
```

Comments for StringLiteralType

#### Source

[types.ts:1](http://source-url)

***

### Stuff

```ts
type Stuff: object;
```

#### Type declaration

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `string` |

#### Source

[functions.ts:1](http://source-url)

***

### TupleType

```ts
type TupleType: [string, number];
```

Comments for TupleType

#### Source

[types.ts:1](http://source-url)

***

### TypeWithExternalSymbolLinkMapping

```ts
type TypeWithExternalSymbolLinkMapping: Application;
```

Comments for TypeWithExternalSymbolLinkMapping

#### Source

[types.ts:1](http://source-url)

***

### TypeWithReturns

```ts
type TypeWithReturns: string;
```

Comments for TypeWithReturns

#### Returns

- return comments.

#### Source

[types.ts:1](http://source-url)

***

### TypeWithTypeParams\<T, R\>

```ts
type TypeWithTypeParams<T, R>: [T, R];
```

Comments for TypeWithTypeParams

#### Type Parameters

| Type Parameter |
| :------ |
| `T` |
| `R` |

#### Source

[types.ts:1](http://source-url)

***

### UnionType

```ts
type UnionType: string | boolean | {
  z: string;
};
```

Comments for UnionType

#### Source

[types.ts:1](http://source-url)

***

### UnionTypeWithTemplateStrings

```ts
type UnionTypeWithTemplateStrings: `v${number}` | `v${number}.${number}` | `v${number}.${number}.${number}`;
```

Union with template strings

#### Source

[types.ts:1](http://source-url)

***

### UsefulUnionType

```ts
type UsefulUnionType: string | boolean | {
  z: string;
};
```

Comments for useful UnionType

#### Type declaration

`string`

`boolean`

\{
  `z`: `string`;
 \}

| Name | Type | Description |
| :------ | :------ | :------ |
| `z` | `string` | Comments for z |

#### Source

[types.ts:1](http://source-url)

## Variables

### objectLiteralVariable

```ts
const objectLiteralVariable: object;
```

Comments for objectLiteralVariable

#### See

xyz.com

#### Type declaration

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `valueA` | `number` | 100 | Comments for valueA |
| `valueB` | `boolean` | true | - |
| `valueX` | `object` | - | Comments for valueX |
| `valueX.valueA` | `number`[] | - | Comment for valueX.valueA |
| `valueX.valueY` | (`z`: `string`) => `object` | - | - |
| `valueX.valueZ` | `string` | 'foo' | - |
| `valueY` | (`unionParam`: `"a"` \| `"b"`, `_undercoreParam_`: `string`) => `string` | - | - |

#### Source

[variables.ts:1](http://source-url)

***

### objectWithSymbol

```ts
const objectWithSymbol: object;
```

Comments variable with symbol

#### Type declaration

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `[sym]` | `string` | 'value' | Comments for symbol |

#### Source

[variables.ts:1](http://source-url)

***

### someQuery

```ts
const someQuery: 1 = 1;
```

#### Source

[types.ts:1](http://source-url)

***

### stringVariable

```ts
const stringVariable: "stringConstWithDefaultValue" = 'stringConstWithDefaultValue';
```

A simple string variable

#### Source

[variables.ts:1](http://source-url)

***

### templateVariableString

```ts
const templateVariableString: "\nThis is a template string\n/* with a comment */\nAnd a <tag></tag>\n";
```

A template variable string

#### Source

[variables.ts:1](http://source-url)

***

### typeOperatorVariable

```ts
const typeOperatorVariable: unique symbol;
```

Comments for typeOperatorVariable

#### Source

[variables.ts:1](http://source-url)

## Functions

### basicFunction()

```ts
function basicFunction(someParam: number): number
```

This is a function that is assigned to a variable.

#### See

http://abc.com

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `someParam` | `number` | This is some numeric parameter. |

#### Returns

`number`

#### Source

[functions.ts:1](http://source-url)

***

### basicFunctionWithReturns()

```ts
function basicFunctionWithReturns(): number
```

This is a function that is assigned to a variable.

#### Returns

`number`

This is a return value

#### Source

[functions.ts:1](http://source-url)

***

### curriedFunction()

Comments for main curriedFunction

#### Call Signature

```ts
function curriedFunction(searchElement: unknown): <Value>(iterable: Iterable<Value, any, any>) => boolean
```

Comments for current function 1

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `searchElement` | `unknown` |

##### Returns

`Function`

###### Type Parameters

| Type Parameter |
| :------ |
| `Value` |

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`\<`Value`, `any`, `any`\> | Comments for iterable arg |

###### Returns

`boolean`

##### Source

[functions.ts:1](http://source-url)

#### Call Signature

```ts
function curriedFunction<Value>(searchElement: unknown, iterable: Iterable<Value, any, any>): string
```

##### Type Parameters

| Type Parameter |
| :------ |
| `Value` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `searchElement` | `unknown` |
| `iterable` | `Iterable`\<`Value`, `any`, `any`\> |

##### Returns

`string`

##### Source

[functions.ts:1](http://source-url)

***

### functionReturningAFunction()

```ts
function functionReturningAFunction(): <T>(x: string) => boolean
```

Comments for function

#### Returns

`Function`

##### Type Parameters

| Type Parameter |
| :------ |
| `T` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `x` | `string` |

##### Returns

`boolean`

#### Source

[functions.ts:1](http://source-url)

***

### functionReturningAnObject()

```ts
function functionReturningAnObject(): object
```

Comments for function

#### Returns

`object`

Return comments

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | 1 |
| `y` | `number` | 2 |

#### Source

[functions.ts:1](http://source-url)

***

### functionReturningAPromise()

```ts
function functionReturningAPromise(): Promise<object>
```

Comments for function

#### Returns

[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Return comments

| Name | Type |
| :------ | :------ |
| `prop` | `string` |

#### Source

[functions.ts:1](http://source-url)

***

### functionReturningAString()

```ts
function functionReturningAString(): string
```

Comments for function

#### Returns

`string`

Return comments

#### Source

[functions.ts:1](http://source-url)

***

### functionReturningAUnionType()

```ts
function functionReturningAUnionType(): string | boolean | "string1" | "string2"
```

Comments for function

#### Returns

`string` \| `boolean` \| `"string1"` \| `"string2"`

Return comments

#### Source

[functions.ts:1](http://source-url)

***

### functionWithArrayOfOptionalStuff()

```ts
function functionWithArrayOfOptionalStuff(a: [Stuff?]): void
```

Comments for array of stuff?

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `a` | [[`Stuff`](README.md#stuff)?] |

#### Returns

`void`

#### Source

[functions.ts:1](http://source-url)

***

### functionWithArrayOfStuff()

```ts
function functionWithArrayOfStuff(a: [Stuff]): void
```

Comments for array of stuff

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `a` | [[`Stuff`](README.md#stuff)] |

#### Returns

`void`

#### Source

[functions.ts:1](http://source-url)

***

### functionWithComplexParams()

```ts
function functionWithComplexParams(paramA: (a: string) => true, paramB: object): boolean
```

Function with function parmas

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `paramA` | (`a`: `string`) => `true` |
| `paramB` | \{ `x`: `1`; \} |
| `paramB.x` | `1` |

#### Returns

`boolean`

#### Source

[functions.ts:1](http://source-url)

***

### functionWithDefaultParameters()

```ts
function functionWithDefaultParameters(
   valueA: string, 
   valueB: number, 
   valueC: number, 
   valueD: boolean, 
   valueE: boolean, 
   valueF: string): string
```

This is a function with a parameter that has a default value.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `valueA` | `string` | `'defaultValue'` | A parameter with a default string value. |
| `valueB` | `number` | `100` | A parameter with a default numeric value. |
| `valueC` | `number` | `Number.NaN` | A parameter with a default NaN value. |
| `valueD` | `boolean` | `true` | A parameter with a default boolean value. |
| `valueE` | `boolean` | `true` | A parameter with a default null value. |
| `valueF` | `string` | `'<foo>'` | - |

#### Returns

`string`

#### Source

[functions.ts:1](http://source-url)

***

### functionWithMultipleSignatures()

Main function comment.

#### Call Signature

```ts
function functionWithMultipleSignatures(value: string): string
```

This is the first signature of a function with multiple signatures.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The name value. |

##### Returns

`string`

##### Source

[functions.ts:1](http://source-url)

#### Call Signature

```ts
function functionWithMultipleSignatures(value: object): string
```

This is the second signature of a function with multiple signatures.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | \{ `name`: `string`; \} | An object containing the name value. |
| `value.name` | `string` | A value of the object. |

##### Returns

`string`

##### Source

[functions.ts:1](http://source-url)

***

### functionWithNamedParams()

```ts
function functionWithNamedParams(__namedParameters: object, anotherParam: string): void
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `__namedParameters` | \{ `bar`: `number`; `foo`: `number`; \} | various options |
| `__namedParameters.bar`? | `number` | - |
| `__namedParameters.foo`? | `number` | - |
| `anotherParam` | `string` | Another param comment |

#### Returns

`void`

#### Source

[functions.ts:1](http://source-url)

***

### functionWithNestedParameters()

```ts
function functionWithNestedParameters(
   params: object, 
   context: any, 
   somethingElse?: string): boolean
```

Some nested params.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | \{ `name`: `string`; `nestedObj`: `object`; `parent`: `number`; \} | The parameters passed to the method. |
| `params.name` | `string` | The name of the new group. |
| `params.nestedObj` | \{ `name`: `string`; `obj`: `object`; `value`: `number`; \} | A nested object. |
| `params.nestedObj.name`? | `string` | - |
| `params.nestedObj.obj`? | \{ `name`: () => `void`; \} | - |
| `params.nestedObj.obj.name`? | () => `void` | - |
| `params.nestedObj.value`? | `number` | - |
| `params.parent`? | `number` | - |
| `context`? | `any` | The context of the method call. |
| `somethingElse`? | `string` | - |

#### Returns

`boolean`

#### Source

[functions.ts:1](http://source-url)

***

### functionWithOptionalParameters()

```ts
function functionWithOptionalParameters(
   firstParamWithDefault: boolean, 
   requiredParam: string, 
   optionalParam?: string, 
   paramWithDefault?: number): void
```

This is a function with a parameters.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `firstParamWithDefault` | `boolean` | `true` | - |
| `requiredParam` | `string` | `undefined` | A normal parameter. |
| `optionalParam`? | `string` | `undefined` | An optional parameter. |
| `paramWithDefault`? | `number` | `0` | - |

#### Returns

`void`

#### Source

[functions.ts:1](http://source-url)

***

### functionWithRestParams()

```ts
function functionWithRestParams(param: string, ...restParams: string[]): boolean
```

Function with reset parmas

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `param` | `string` |
| ...`restParams` | `string`[] |

#### Returns

`boolean`

#### Source

[functions.ts:1](http://source-url)

***

### functionWithTypeParameters()

```ts
function functionWithTypeParameters<T, Item>(): boolean
```

Function with type parameters

#### Type Parameters

| Type Parameter | Default type | Description |
| :------ | :------ | :------ |
| `T` | - | Comments for T |
| `Item` | `string` \| `boolean` | - |

#### Returns

`boolean`

#### Source

[functions.ts:1](http://source-url)

***

### functionWithUnionParams()

```ts
function functionWithUnionParams(
   primitiveUnions: string | number, 
   objectUnions: object, 
   mixedUnions: string | {
  a: string;
  b: string;
 }, 
   noUnions: string): undefined
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `primitiveUnions` | `string` \| `number` | Comments for primitiveUnions |
| `objectUnions` | \{ `a`: `string`; `b`: `1`; \} | Comments for objectUnions |
| `objectUnions.a` | `string` | Comments for a |
| `objectUnions.b` | `1` | - |
| `mixedUnions` | `string` \| \{ `a`: `string`; `b`: `string`; \} | - |
| `noUnions` | `string` | Comments for noUnions |

#### Returns

`undefined`

#### Source

[functions.ts:1](http://source-url)
