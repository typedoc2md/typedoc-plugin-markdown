# typedoc-stubs

Module comments

## Enumerations

### BasicEnum

Comments for enum

#### Enumeration Members

##### MemberA

> **MemberA**: `0`

Comments for MemberA

###### Source

[enums.ts:1](http://source-url)

##### MemberB

> **MemberB**: `1`

Comments for MemberB

###### Source

[enums.ts:1](http://source-url)

***

### EnumWithValues

Comments for enum

#### Enumeration Members

##### MemberA

> **MemberA**: `"UP"`

###### Source

[enums.ts:1](http://source-url)

##### MemberB

> **MemberB**: `"DOWN"`

###### Source

[enums.ts:1](http://source-url)

## Classes

### `abstract` AbstractClass

#### Extended by

- [`DerivedClassA`](globals.md#derivedclassa)
- [`DerivedClassB`](globals.md#derivedclassb)

#### Constructors

##### new AbstractClass()

> **new AbstractClass**(): [`AbstractClass`](globals.md#abstractclass)

###### Returns

[`AbstractClass`](globals.md#abstractclass)

#### Properties

##### abstractProp

> `abstract` **abstractProp**: `string`

Comments for abstractProp

###### Source

[classes.ts:1](http://source-url)

#### Methods

##### abstractMethod()

> `abstract` **abstractMethod**(): `string`

Comments for abstractMethod

###### Returns

`string`

###### Source

[classes.ts:1](http://source-url)

***

### BaseClass

#### Extended by

- [`ChildClassA`](globals.md#childclassa)
- [`ChildClassB`](globals.md#childclassb)

#### Constructors

##### new BaseClass()

> **new BaseClass**(): [`BaseClass`](globals.md#baseclass)

###### Returns

[`BaseClass`](globals.md#baseclass)

***

### BasicClass

Comments for BasicClass

#### Constructors

##### new BasicClass()

> **new BasicClass**(): [`BasicClass`](globals.md#basicclass)

###### Returns

[`BasicClass`](globals.md#basicclass)

#### Properties

##### prop

> **prop**: `string`

Comments for prop

###### Source

[classes.ts:1](http://source-url)

#### Methods

##### method()

> **method**(): `string`

Comments for method

###### Returns

`string`

###### Source

[classes.ts:1](http://source-url)

***

### CallbacksOptions\<P, A\>

#### Type Parameters

##### P

Default type [`DisposableClass`](globals.md#disposableclass)

##### A

Default type [`ClassWithModifiers`](globals.md#classwithmodifiers)

#### Constructors

##### new CallbacksOptions()

> **new CallbacksOptions**\<`P`, `A`\>(): [`CallbacksOptions`](globals.md#callbacksoptionsp-a)\<`P`, `A`\>

###### Returns

[`CallbacksOptions`](globals.md#callbacksoptionsp-a)\<`P`, `A`\>

***

### ChildClassA

#### Extends

- [`BaseClass`](globals.md#baseclass)

#### Extended by

- [`GrandChildClassA`](globals.md#grandchildclassa)
- [`GrandChildClassB`](globals.md#grandchildclassb)

#### Constructors

##### new ChildClassA()

> **new ChildClassA**(): [`ChildClassA`](globals.md#childclassa)

###### Returns

[`ChildClassA`](globals.md#childclassa)

###### Inherited from

[`BaseClass`](globals.md#baseclass).[`constructor`](globals.md#constructors-1)

***

### ChildClassB

#### Extends

- [`BaseClass`](globals.md#baseclass)

#### Constructors

##### new ChildClassB()

> **new ChildClassB**(): [`ChildClassB`](globals.md#childclassb)

###### Returns

[`ChildClassB`](globals.md#childclassb)

###### Inherited from

[`BaseClass`](globals.md#baseclass).[`constructor`](globals.md#constructors-1)

***

### ClassWithAccessorKeywords

#### Constructors

##### new ClassWithAccessorKeywords()

> **new ClassWithAccessorKeywords**(): [`ClassWithAccessorKeywords`](globals.md#classwithaccessorkeywords)

###### Returns

[`ClassWithAccessorKeywords`](globals.md#classwithaccessorkeywords)

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

> **new ClassWithAccessors**(): [`ClassWithAccessors`](globals.md#classwithaccessors)

###### Returns

[`ClassWithAccessors`](globals.md#classwithaccessors)

#### Properties

##### privateProp

> `private` **privateProp**: `string`

###### Source

[classes.ts:1](http://source-url)

#### Accessors

##### accessor

###### Get Signature

> **get** **accessor**(): `string`

Comments for getter

###### Returns

`string`

###### Set Signature

> **set** **accessor**(`value`): `void`

Comments for setter

###### Parameters

###### value

`string`

Param comments

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

##### noGetter

###### Set Signature

> **set** **noGetter**(`x`): `void`

###### Parameters

###### x

`string`

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

##### noSetter

###### Get Signature

> **get** **noSetter**(): `string`

###### Returns

`string`

###### Source

[classes.ts:1](http://source-url)

***

### ClassWithComplexProps

Comments for ClassWithComplexProps

#### Constructors

##### new ClassWithComplexProps()

> **new ClassWithComplexProps**(): [`ClassWithComplexProps`](globals.md#classwithcomplexprops)

###### Returns

[`ClassWithComplexProps`](globals.md#classwithcomplexprops)

#### Properties

##### objecLiteralProp

> **objecLiteralProp**: `object`

###### someFunction()

> **someFunction**: (`a`) => `string`

Comments for someFunction

###### Parameters

###### a

`string`

###### Returns

`string`

###### someProp

> **someProp**: `string` = `'someProp'`

Comments for someProp

###### Source

[classes.ts:1](http://source-url)

***

### ClassWithConstructorOverloads

Comments for ClassWithConstructorOverloads

#### Constructors

##### new ClassWithConstructorOverloads()

> **new ClassWithConstructorOverloads**(`x`, `y`): [`ClassWithConstructorOverloads`](globals.md#classwithconstructoroverloads)

###### Parameters

###### x

`number`

Comments for x number

###### y

`string`

###### Returns

[`ClassWithConstructorOverloads`](globals.md#classwithconstructoroverloads)

###### Source

[classes.ts:1](http://source-url)

##### new ClassWithConstructorOverloads()

> **new ClassWithConstructorOverloads**(`x`): [`ClassWithConstructorOverloads`](globals.md#classwithconstructoroverloads)

###### Parameters

###### x

`string`

Comments for x string

###### Returns

[`ClassWithConstructorOverloads`](globals.md#classwithconstructoroverloads)

###### Source

[classes.ts:1](http://source-url)

##### new ClassWithConstructorOverloads()

> **new ClassWithConstructorOverloads**(`s`): [`ClassWithConstructorOverloads`](globals.md#classwithconstructoroverloads)

###### Parameters

###### s

`string`

###### Returns

[`ClassWithConstructorOverloads`](globals.md#classwithconstructoroverloads)

###### Source

[classes.ts:1](http://source-url)

***

### ClassWithFlags

Comment for ClassWithFlags

#### Constructors

##### new ClassWithFlags()

> **new ClassWithFlags**(): [`ClassWithFlags`](globals.md#classwithflags)

###### Returns

[`ClassWithFlags`](globals.md#classwithflags)

#### Properties

##### expermintalProp

> **expermintalProp**: `string`

**`Experimental`**

###### Source

[classes.ts:1](http://source-url)

##### internalProp

> `private` **internalProp**: `string`

**`Internal`**

###### Source

[classes.ts:1](http://source-url)

#### Methods

##### expermintalMethod()

> **expermintalMethod**(): `void`

**`Experimental`**

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

##### internalMethod()

> `protected` **internalMethod**(): `void`

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

> **new ClassWithModifiers**(): [`ClassWithModifiers`](globals.md#classwithmodifiers)

###### Returns

[`ClassWithModifiers`](globals.md#classwithmodifiers)

#### Properties

##### privateProp

> `private` **privateProp**: `string`

Comments for privateProp

###### Source

[classes.ts:1](http://source-url)

##### protectedProp

> `protected` **protectedProp**: `string`

Comments for protectedProp

###### Source

[classes.ts:1](http://source-url)

##### publicPropWithDefault

> **publicPropWithDefault**: `string` = `'propWithDefault'`

Comments for propWithDefault

###### Source

[classes.ts:1](http://source-url)

##### readonlyProp

> `readonly` **readonlyProp**: `string`

Comments for abstractProperty

###### Source

[classes.ts:1](http://source-url)

##### staticProp

> `static` **staticProp**: `string`

Comments for staticProp

###### Source

[classes.ts:1](http://source-url)

#### Methods

##### privateMethod()

> `private` **privateMethod**(): `void`

Comment for privateMethod

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

##### publicMethod()

> **publicMethod**(): `void`

Comment for publicMethod

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

##### staticMethod()

> `static` **staticMethod**(): `void`

Comment for staticMethod

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

***

### ClassWithoutPropCategories

#### Constructors

##### new ClassWithoutPropCategories()

> **new ClassWithoutPropCategories**(`opts`): [`ClassWithoutPropCategories`](globals.md#classwithoutpropcategories)

###### Parameters

###### opts

###### opts.a

`string`

###### opts.b

`string`

###### Returns

[`ClassWithoutPropCategories`](globals.md#classwithoutpropcategories)

###### Source

[classes.ts:1](http://source-url)

#### Properties

##### prop1

> **prop1**: `string`

###### Source

[classes.ts:1](http://source-url)

##### prop2

> **prop2**: `string`

###### Source

[classes.ts:1](http://source-url)

#### Methods

##### method1()

> **method1**(): `void`

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

##### method2()

> **method2**(): `void`

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

***

### ClassWithPropCategories

#### Constructors

##### new ClassWithPropCategories()

> **new ClassWithPropCategories**(`opts`): [`ClassWithPropCategories`](globals.md#classwithpropcategories)

###### Parameters

###### opts

###### opts.a

`string`

###### opts.b

`string`

###### Returns

[`ClassWithPropCategories`](globals.md#classwithpropcategories)

###### Source

[classes.ts:1](http://source-url)

#### CatA

##### prop1

> **prop1**: `string`

###### Source

[classes.ts:1](http://source-url)

#### CatB

##### prop2

> **prop2**: `string`

###### Source

[classes.ts:1](http://source-url)

#### Other

##### method1()

> **method1**(): `void`

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

##### method2()

> **method2**(): `void`

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

***

### ClassWithSimpleProps

Comments for ClassWithSimpleProps

#### Constructors

##### new ClassWithSimpleProps()

> **new ClassWithSimpleProps**(): [`ClassWithSimpleProps`](globals.md#classwithsimpleprops)

###### Returns

[`ClassWithSimpleProps`](globals.md#classwithsimpleprops)

#### Properties

##### propA

> **propA**: `string` = `'propAValue'`

Comments for propA

###### Source

[classes.ts:1](http://source-url)

##### propB

> **propB**: `string` = `'propBValue'`

Comments for propB

###### Default Value

```ts
'propBDefaultValue'
```

###### Source

[classes.ts:1](http://source-url)

##### propC

> **propC**: `string`

Comments for propB
on two lines

###### Default Value

```ts
'propCDefaultValue'
```

###### Source

[classes.ts:1](http://source-url)

##### propD

> **propD**: `string`

Comments for propE

###### Source

[classes.ts:1](http://source-url)

***

### ClassWithSymbols

#### Constructors

##### new ClassWithSymbols()

> **new ClassWithSymbols**(): [`ClassWithSymbols`](globals.md#classwithsymbols)

###### Returns

[`ClassWithSymbols`](globals.md#classwithsymbols)

#### Properties

##### \[symbolConst\]()?

> `static` `optional` **\[symbolConst\]**: () => `void`

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

#### Methods

##### \[dispose\]()

> **\[dispose\]**(): `void`

###### Returns

`void`

###### Source

[classes.ts:1](http://source-url)

***

### ClassWithTypeParameters\<A, B, C\>

Comments for ClassWithTypeParameters

#### Type Parameters

##### A

\-

##### B

*extends*: `string`

Comments for param B

##### C

Default type `boolean`

Comments for param C

#### Constructors

##### new ClassWithTypeParameters()

> **new ClassWithTypeParameters**\<`A`, `B`, `C`\>(): [`ClassWithTypeParameters`](globals.md#classwithtypeparametersa-b-c)\<`A`, `B`, `C`\>

###### Returns

[`ClassWithTypeParameters`](globals.md#classwithtypeparametersa-b-c)\<`A`, `B`, `C`\>

***

### DerivedClassA

Comments for DerivedClassA

#### Extends

- [`AbstractClass`](globals.md#abstractclass)

#### Constructors

##### new DerivedClassA()

> **new DerivedClassA**(): [`DerivedClassA`](globals.md#derivedclassa)

###### Returns

[`DerivedClassA`](globals.md#derivedclassa)

###### Inherited from

[`AbstractClass`](globals.md#abstractclass).[`constructor`](globals.md#constructors)

#### Properties

##### abstractProp

> **abstractProp**: `string` = `'abstractProp'`

Comments for abstractProp

###### Overrides

[`AbstractClass`](globals.md#abstractclass).[`abstractProp`](globals.md#abstractprop)

###### Source

[classes.ts:1](http://source-url)

##### derivedProp

> **derivedProp**: `string`

###### Source

[classes.ts:1](http://source-url)

#### Methods

##### abstractMethod()

> **abstractMethod**(): `string`

Comments for abstractMethod

###### Returns

`string`

###### Overrides

[`AbstractClass`](globals.md#abstractclass).[`abstractMethod`](globals.md#abstractmethod)

###### Source

[classes.ts:1](http://source-url)

##### derivedMethod()

> **derivedMethod**(): `string`

###### Returns

`string`

###### Source

[classes.ts:1](http://source-url)

***

### DerivedClassB

Comments for DerivedClassB

#### Extends

- [`AbstractClass`](globals.md#abstractclass)

#### Constructors

##### new DerivedClassB()

> **new DerivedClassB**(): [`DerivedClassB`](globals.md#derivedclassb)

###### Returns

[`DerivedClassB`](globals.md#derivedclassb)

###### Inherited from

[`AbstractClass`](globals.md#abstractclass).[`constructor`](globals.md#constructors)

#### Properties

##### abstractProp

> **abstractProp**: `string` = `'abstractProp'`

Comments for abstractProp

###### Overrides

[`AbstractClass`](globals.md#abstractclass).[`abstractProp`](globals.md#abstractprop)

###### Source

[classes.ts:1](http://source-url)

#### Methods

##### abstractMethod()

> **abstractMethod**(): `string`

Comments for abstractMethod

###### Returns

`string`

###### Overrides

[`AbstractClass`](globals.md#abstractclass).[`abstractMethod`](globals.md#abstractmethod)

###### Source

[classes.ts:1](http://source-url)

***

### DisposableClass

#### Implements

- `Disposable`

#### Constructors

##### new DisposableClass()

> **new DisposableClass**(): [`DisposableClass`](globals.md#disposableclass)

###### Returns

[`DisposableClass`](globals.md#disposableclass)

#### Methods

##### \[dispose\]()

> **\[dispose\]**(): `void`

###### Returns

`void`

###### Implementation of

`Disposable.[dispose]`

###### Source

[classes.ts:1](http://source-url)

***

### GrandChildClassA

#### Extends

- [`ChildClassA`](globals.md#childclassa)

#### Constructors

##### new GrandChildClassA()

> **new GrandChildClassA**(): [`GrandChildClassA`](globals.md#grandchildclassa)

###### Returns

[`GrandChildClassA`](globals.md#grandchildclassa)

###### Inherited from

[`ChildClassA`](globals.md#childclassa).[`constructor`](globals.md#constructors-4)

***

### GrandChildClassB

#### Extends

- [`ChildClassA`](globals.md#childclassa)

#### Constructors

##### new GrandChildClassB()

> **new GrandChildClassB**(): [`GrandChildClassB`](globals.md#grandchildclassb)

###### Returns

[`GrandChildClassB`](globals.md#grandchildclassb)

###### Inherited from

[`ChildClassA`](globals.md#childclassa).[`constructor`](globals.md#constructors-4)

## Interfaces

### BasicInterface

Comments for BasicInterface

#### Extended by

- [`ExtendedInterface`](globals.md#extendedinterface)

#### Properties

##### ~~deprecatedProp~~

> **deprecatedProp**: `string`

###### Deprecated

This prop is deprecated

###### See

Comments for some tag

###### Source

[interfaces.ts:1](http://source-url)

##### functionProp()

> **functionProp**: (`s`) => `boolean`

Comments for functionProper

###### Parameters

###### s

`string`

Comment for param s

###### Returns

`boolean`

###### Source

[interfaces.ts:1](http://source-url)

##### optionalProp?

> `optional` **optionalProp**: `string`

Comments for optional prop

###### Source

[interfaces.ts:1](http://source-url)

##### prop

> **prop**: `string`

Comments for prop

###### Source

[interfaces.ts:1](http://source-url)

##### propReturningObjectDeclaration

> **propReturningObjectDeclaration**: `object`

Comments for propReturningObjectDeclaration

###### a

> **a**: `boolean`

###### b

> **b**: `string`

###### Source

[interfaces.ts:1](http://source-url)

##### propReturningObjectDeclarations

> **propReturningObjectDeclarations**: `object` & `object`

Comments for propReturningObjectDeclarations

###### Type declaration

###### a

> **a**: `boolean`

###### b

> **b**: `string`

###### Type declaration

###### c

> **c**: `boolean`

###### d

> **d**: `string`

###### Source

[interfaces.ts:1](http://source-url)

##### propReturningSignatureDeclaration()?

> `optional` **propReturningSignatureDeclaration**: () => `string` \| `number` \| `boolean`

Comments for propReturningSignatureDeclaration

###### Returns

`string` \| `number` \| `boolean`

###### Source

[interfaces.ts:1](http://source-url)

##### propReturningSignatureDeclarations

> **propReturningSignatureDeclarations**: () => `any` & (`paramsA`, `paramsB`?) => `any` & (`paramsC`) => `any`

Comments for propReturningSignatureDeclarations

###### Source

[interfaces.ts:1](http://source-url)

##### propWithFunction()

> **propWithFunction**: (`options`) => `boolean`

Comments for propWithFunction

###### Parameters

###### options

###### options.a

`boolean`

###### options.b

`string`

###### Returns

`boolean`

###### Source

[interfaces.ts:1](http://source-url)

##### propWithProps

> **propWithProps**: `object`

Comments for propWithProps

###### callbacks?

> `optional` **callbacks**: `Partial`\<[`CallbacksOptions`](globals.md#callbacksoptionsp-a)\<[`DisposableClass`](globals.md#disposableclass), [`ClassWithModifiers`](globals.md#classwithmodifiers)\>\>

Comments for callbacks

###### nestedPropA

> **nestedPropA**: `string`

Comments for nestedPropA

###### nestedPropB

> **nestedPropB**: `boolean`

Comments for nestedPropB

###### nestedPropC

> **nestedPropC**: `object`

Comments for nestedPropC

###### nestedPropC.nestedPropCA

> **nestedPropCA**: `string`

Comments for nestedPropCA

###### nestedPropD()

> **nestedPropD**: () => `boolean`

Comments for nestedPropD

###### Returns

`boolean`

###### Source

[interfaces.ts:1](http://source-url)

***

### CustomEventInterface\<T\>

#### Type Parameters

##### T

\-

#### Properties

##### detail

> **detail**: `string`

###### Source

[interfaces.ts:1](http://source-url)

##### target

> **target**: `T`

###### Source

[interfaces.ts:1](http://source-url)

***

### ExtendedInterface

Comments for ExtendedInterface

#### Extends

- [`BasicInterface`](globals.md#basicinterface)

#### Properties

##### ~~deprecatedProp~~

> **deprecatedProp**: `string`

###### Deprecated

This prop is deprecated

###### See

Comments for some tag

###### Inherited from

[`BasicInterface`](globals.md#basicinterface).[`deprecatedProp`](globals.md#deprecatedprop)

###### Source

[interfaces.ts:1](http://source-url)

##### extendedProp

> **extendedProp**: `string`

###### Source

[interfaces.ts:1](http://source-url)

##### functionProp()

> **functionProp**: (`s`) => `boolean`

Comments for functionProper

###### Parameters

###### s

`string`

Comment for param s

###### Returns

`boolean`

###### Inherited from

[`BasicInterface`](globals.md#basicinterface).[`functionProp`](globals.md#functionprop)

###### Source

[interfaces.ts:1](http://source-url)

##### optionalProp?

> `optional` **optionalProp**: `string`

Comments for optional prop

###### Inherited from

[`BasicInterface`](globals.md#basicinterface).[`optionalProp`](globals.md#optionalprop)

###### Source

[interfaces.ts:1](http://source-url)

##### prop

> **prop**: `string`

Comments for prop

###### Inherited from

[`BasicInterface`](globals.md#basicinterface).[`prop`](globals.md#prop-1)

###### Source

[interfaces.ts:1](http://source-url)

##### propReturningObjectDeclaration

> **propReturningObjectDeclaration**: `object`

Comments for propReturningObjectDeclaration

###### a

> **a**: `boolean`

###### b

> **b**: `string`

###### Inherited from

[`BasicInterface`](globals.md#basicinterface).[`propReturningObjectDeclaration`](globals.md#propreturningobjectdeclaration)

###### Source

[interfaces.ts:1](http://source-url)

##### propReturningObjectDeclarations

> **propReturningObjectDeclarations**: `object` & `object`

Comments for propReturningObjectDeclarations

###### Type declaration

###### a

> **a**: `boolean`

###### b

> **b**: `string`

###### Type declaration

###### c

> **c**: `boolean`

###### d

> **d**: `string`

###### Inherited from

[`BasicInterface`](globals.md#basicinterface).[`propReturningObjectDeclarations`](globals.md#propreturningobjectdeclarations)

###### Source

[interfaces.ts:1](http://source-url)

##### propReturningSignatureDeclaration()?

> `optional` **propReturningSignatureDeclaration**: () => `string` \| `number` \| `boolean`

Comments for propReturningSignatureDeclaration

###### Returns

`string` \| `number` \| `boolean`

###### Inherited from

[`BasicInterface`](globals.md#basicinterface).[`propReturningSignatureDeclaration`](globals.md#propreturningsignaturedeclaration)

###### Source

[interfaces.ts:1](http://source-url)

##### propReturningSignatureDeclarations

> **propReturningSignatureDeclarations**: () => `any` & (`paramsA`, `paramsB`?) => `any` & (`paramsC`) => `any`

Comments for propReturningSignatureDeclarations

###### Inherited from

[`BasicInterface`](globals.md#basicinterface).[`propReturningSignatureDeclarations`](globals.md#propreturningsignaturedeclarations)

###### Source

[interfaces.ts:1](http://source-url)

##### propWithFunction()

> **propWithFunction**: (`options`) => `boolean`

Comments for propWithFunction

###### Parameters

###### options

###### options.a

`boolean`

###### options.b

`string`

###### Returns

`boolean`

###### Inherited from

[`BasicInterface`](globals.md#basicinterface).[`propWithFunction`](globals.md#propwithfunction)

###### Source

[interfaces.ts:1](http://source-url)

##### propWithProps

> **propWithProps**: `object`

Comments for propWithProps

###### callbacks?

> `optional` **callbacks**: `Partial`\<[`CallbacksOptions`](globals.md#callbacksoptionsp-a)\<[`DisposableClass`](globals.md#disposableclass), [`ClassWithModifiers`](globals.md#classwithmodifiers)\>\>

Comments for callbacks

###### nestedPropA

> **nestedPropA**: `string`

Comments for nestedPropA

###### nestedPropB

> **nestedPropB**: `boolean`

Comments for nestedPropB

###### nestedPropC

> **nestedPropC**: `object`

Comments for nestedPropC

###### nestedPropC.nestedPropCA

> **nestedPropCA**: `string`

Comments for nestedPropCA

###### nestedPropD()

> **nestedPropD**: () => `boolean`

Comments for nestedPropD

###### Returns

`boolean`

###### Inherited from

[`BasicInterface`](globals.md#basicinterface).[`propWithProps`](globals.md#propwithprops)

###### Source

[interfaces.ts:1](http://source-url)

***

### IndexableInterface

Comments for IndexableInterface

#### Indexable

 \[`s`: `string`\]: `string`

#### Properties

##### prop

> **prop**: `string`

###### Source

[interfaces.ts:1](http://source-url)

***

### InterfaceWithComments\<A, B, C, D\>

Comments for interface
over two lines

And some more comments

#### Type Parameters

##### A

This is a parameter.

##### B

Comments for a parameter.
This sentence is on a soft new line.

##### C

This is a parameter.

 Documentation with a double line

##### D

<p>These are comments with paras</p>
<p>These are comments with paras</p>
Other comments
Comments with <p>paras</p>

<p>These are comments with paras</p>

#### Properties

##### ~~propertyWithComments~~

> **propertyWithComments**: `string`

Some text.

- list item
- list item

###### Deprecated

This is a deprecated property

###### See

https://example.com

###### Source

[interfaces.ts:1](http://source-url)

***

### InterfaceWithEventProperties

#### Properties

##### someProp?

> `optional` **someProp**: `boolean`

Description for prop someProp

###### Source

[interfaces.ts:1](http://source-url)

#### Events

##### anotherEvent

> **anotherEvent**: `MouseEvent`

###### Source

[interfaces.ts:1](http://source-url)

##### ~~someEvent()?~~

> `optional` **someEvent**: (`eventParam`) => `void`

Description for event someEvent

###### Deprecated

Deprectaed comments

###### Parameters

###### eventParam

[`CustomEventInterface`](globals.md#customeventinterfacet)\<`MouseEvent`\>

Comments for param eventParam

###### Returns

`void`

###### Source

[interfaces.ts:1](http://source-url)

***

### InterfaceWithFlags

Comments for InterfaceWithFlags

#### Properties

##### expermintalProp?

> `optional` **expermintalProp**: `string`

**`Experimental`**

###### Source

[interfaces.ts:1](http://source-url)

##### internalProp

> **internalProp**: `string`

**`Internal`**

Comments for internalProp

###### Source

[interfaces.ts:1](http://source-url)

***

### InterfaceWithTypeParameters\<A\>

Comments for InterfaceWithTypeParameters

#### Type Parameters

##### A

\-

#### Properties

##### prop

> **prop**: `A`

Comments for prop

###### Source

[interfaces.ts:1](http://source-url)

***

### MultipleIndexableInterface

#### Indexable

 \[`key`: `string`\]: `string`

 \[`index`: `number`\]: `string`

#### Properties

##### prop

> **prop**: `string`

Prop

###### Source

[interfaces.ts:1](http://source-url)

## Type Aliases

### \_\_TypeDeclarationWithSpecialCharacters\_\<T, U\>

> **\_\_TypeDeclarationWithSpecialCharacters\_**\<`T`, `U`\>: `object`

Comments for object with special characters

#### Type Parameters

##### T

\-

##### U

\-

#### Type declaration

##### \_

> **\_**: `"_"`

##### \_foo\_

> **\_foo\_**: `"_foo_"`

##### \_prop\_with\_underscore\_

> **\_prop\_with\_underscore\_**: `"_prop_with_underscore_"`

##### \_x()

> **\_x**: (`_param`) => `U`

###### Parameters

###### \_param

`T`

###### Returns

`U`

##### ?

> **?**: `T` \| `U`

##### \{prop-with-brackets\}

> **\{prop-with-brackets\}**: `"{prop-with-brackets}"`

##### \*

> **\***: `"*"`

##### \*\*foo\*\*

> **\*\*foo\*\***: `"**foo**"`

##### \*foo\*

> **\*foo\***: `"*foo*"`

##### \

> \: "\\"

##### \a

> \a: "\\a"

##### \n

> \n: "\\n"

##### \`

> \`: "\`"

##### \`prop\`with\`backticks\`

> \`prop\`with\`backticks\`: "\`prop\`with\`backticks\`"

##### \<

> **\<**: `"<"`

##### \<foo\>

> **\<foo\>**: `"<foo>"`

##### \>

> **\>**: `">"`

##### \|

> **\|**: "\|"

##### \|prop\|with\|pipes\|

> **\|prop\|with\|pipes\|**: "\|prop\|with\|pipes\|"

##### ~

> **~**: `"~"`

#### Source

[types.ts:1](http://source-url)

***

### ArrayOfStuff

> **ArrayOfStuff**: `object`[]

#### Source

[types.ts:1](http://source-url)

***

### ArrayType

> **ArrayType**: `string`[]

Comments for ArrayType

#### Source

[types.ts:1](http://source-url)

***

### ConditionalType\<T\>

> **ConditionalType**\<`T`\>: `T` *extends* `string` ? `"string"` : `T` *extends* `number` ? `"number"` : `T` *extends* `boolean` ? `"boolean"` : `T` *extends* `undefined` ? `"undefined"` : `"object"`

Comments for ConditionalType

#### Type Parameters

##### T

\-

#### Source

[types.ts:1](http://source-url)

***

### ExternalReferenceType

> **ExternalReferenceType**: [`ClassWithTypeParameters`](globals.md#classwithtypeparametersa-b-c)\<`"x"`, `"y"`\>

Comments for ExternalReferenceType

#### Source

[types.ts:1](http://source-url)

***

### FunctionType()

> **FunctionType**: (`name`, `value`) => `void`

Comments for FunctionType

#### Parameters

##### name

`string`

##### value

`unknown`

#### Returns

`void`

#### Source

[types.ts:1](http://source-url)

***

### IndexAccessType

> **IndexAccessType**: [`ArrayOfStuff`](globals.md#arrayofstuff)\[`number`\]

Comments for IndexAccessType

#### Source

[types.ts:1](http://source-url)

***

### IntersectionType

> **IntersectionType**: [`TupleType`](globals.md#tupletype) & [`ArrayType`](globals.md#arraytype) & `object`

Comments for IntersectionType

#### Type declaration

##### bar

> **bar**: `number`

#### Source

[types.ts:1](http://source-url)

***

### LiteralType

> **LiteralType**: `object`

Comments for LiteralType

#### Type declaration

##### someFunctionWithArrow()

> **someFunctionWithArrow**: () => `string`

Comments for someFunctionWithArrow

###### Returns

`string`

##### x?

> `optional` **x**: `string`

comment for x

##### y

> **y**: `object`

comment for y

###### y.x

> **x**: `string`

comment for y.x

###### y.y?

> `optional` **y**: `boolean` \| `string`

comment for y.y

###### y.z()

> **z**: (`x`) => `string`

comment for y.z

###### Parameters

###### x

`string`

###### Returns

`string`

##### z()

> **z**: (`x`) => `string`

###### Parameters

###### x

`string`

###### Returns

`string`

##### accessorA

###### Get Signature

> **get** **accessorA**(): [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Comments for accessorA getter

###### Returns

[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

###### Set Signature

> **set** **accessorA**(`x`): `void`

Comments for accessorA setter

###### Parameters

###### x

[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

###### Returns

`void`

##### accessorB

###### Get Signature

> **get** **accessorB**(): `string`

###### Returns

`string`

###### Set Signature

> **set** **accessorB**(`x`): `void`

###### Parameters

###### x

`string`

###### Returns

`void`

##### someFunction()

Comments for someFunction

###### Parameters

###### param

`string`

###### Returns

[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>

#### Source

[types.ts:1](http://source-url)

***

### PartialMappedType\<T\>

> **PartialMappedType**\<`T`\>: `{ [P in keyof T]?: T[P] }`

Comments for PartialMappedType

#### Type Parameters

##### T

\-

#### Source

[types.ts:1](http://source-url)

***

### PrimitiveType

> **PrimitiveType**: `boolean`

Comments for PrimitiveType

#### Source

[types.ts:1](http://source-url)

***

### PromiseTypeWithObject

> **PromiseTypeWithObject**: [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Comments for promise type returning object

#### Type declaration

##### x

> **x**: `1`

comments for x

#### Source

[types.ts:1](http://source-url)

***

### PromiseTypeWithSymbol

> **PromiseTypeWithSymbol**: [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`IndexAccessType`](globals.md#indexaccesstype)\>

Comments for promise type returning symbol

#### Source

[types.ts:1](http://source-url)

***

### QueryType

> **QueryType**: *typeof* [`someQuery`](globals.md#somequery)

Comments for query type

#### Source

[types.ts:1](http://source-url)

***

### ReadonlyMappedType\<T\>

> **ReadonlyMappedType**\<`T`\>: `{ readonly [P in keyof T]: T[P] }`

Comments for ReadonlyMapedType

#### Type Parameters

##### T

\-

#### Source

[types.ts:1](http://source-url)

***

### StringLiteralType

> **StringLiteralType**: `" "` \| `"string"` \| "string\|with\|pipes" \| "string\`with\`backticks" \| `"<foo>"` \| `"*"`

Comments for StringLiteralType

#### Source

[types.ts:1](http://source-url)

***

### Stuff

> **Stuff**: `object`

#### Type declaration

##### a

> **a**: `string`

##### b

> **b**: `string`

#### Source

[functions.ts:1](http://source-url)

***

### TupleType

> **TupleType**: [`string`, `number`]

Comments for TupleType

#### Source

[types.ts:1](http://source-url)

***

### TypeWithExternalSymbolLinkMapping

> **TypeWithExternalSymbolLinkMapping**: [`Application`](https://typedoc.org/api/classes/Application.html)

Comments for TypeWithExternalSymbolLinkMapping

#### Source

[types.ts:1](http://source-url)

***

### TypeWithReturns

> **TypeWithReturns**: `string`

Comments for TypeWithReturns

#### Returns

- return comments.

#### Source

[types.ts:1](http://source-url)

***

### TypeWithTypeParams\<T, R\>

> **TypeWithTypeParams**\<`T`, `R`\>: [`T`, `R`]

Comments for TypeWithTypeParams

#### Type Parameters

##### T

\-

##### R

\-

#### Source

[types.ts:1](http://source-url)

***

### UnionType

> **UnionType**: `string` \| `boolean` \| \{`z`: `string`; \}

Comments for UnionType

#### Source

[types.ts:1](http://source-url)

***

### UnionTypeWithTemplateStrings

> **UnionTypeWithTemplateStrings**: \`v$\{number\}\` \| \`v$\{number\}.$\{number\}\` \| \`v$\{number\}.$\{number\}.$\{number\}\`

Union with template strings

#### Source

[types.ts:1](http://source-url)

***

### UsefulUnionType

> **UsefulUnionType**: `string` \| `boolean` \| \{`z`: `string`; \}

Comments for useful UnionType

#### Type declaration

`string`

`boolean`

\{`z`: `string`; \}

##### z

> **z**: `string`

Comments for z

#### Source

[types.ts:1](http://source-url)

## Variables

### objectLiteralVariable

> `const` **objectLiteralVariable**: `object`

Comments for objectLiteralVariable

#### See

xyz.com

#### Type declaration

##### valueA

> **valueA**: `number` = `100`

Comments for valueA

##### valueB

> **valueB**: `boolean` = `true`

##### valueX

> **valueX**: `object`

Comments for valueX

###### valueX.valueA

> **valueA**: `number`[]

Comment for valueX.valueA

###### valueX.valueY()

> **valueY**: (`z`) => `object`

###### Parameters

###### z

`string`

###### Returns

`object`

###### a

> **a**: `string` = `'test'`

###### b

> **b**: `string` = `z`

###### c

> **c**: `object`

###### c.a

> **a**: `number` = `1`

###### c.b

> **b**: `number` = `2`

###### valueX.valueZ

> **valueZ**: `string` = `'foo'`

##### valueY()

> **valueY**: (`unionParam`, `_undercoreParam_`) => `string`

###### Parameters

###### unionParam

`"a"` | `"b"`

###### \_undercoreParam\_

`string`

###### Returns

`string`

#### Source

[variables.ts:1](http://source-url)

***

### objectWithSymbol

> `const` **objectWithSymbol**: `object`

Comments variable with symbol

#### Type declaration

##### \[sym\]

> **\[sym\]**: `string` = `'value'`

Comments for symbol

#### Source

[variables.ts:1](http://source-url)

***

### someQuery

> `const` **someQuery**: `1` = `1`

#### Source

[types.ts:1](http://source-url)

***

### stringVariable

> `const` **stringVariable**: `"stringConstWithDefaultValue"` = `'stringConstWithDefaultValue'`

A simple string variable

#### Source

[variables.ts:1](http://source-url)

***

### templateVariableString

> `const` **templateVariableString**: "\nThis is a template string\n/\* with a comment \*/\nAnd a \<tag\>\</tag\>\n"

A template variable string

#### Source

[variables.ts:1](http://source-url)

***

### typeOperatorVariable

> `const` **typeOperatorVariable**: unique `symbol`

Comments for typeOperatorVariable

#### Source

[variables.ts:1](http://source-url)

## Functions

### basicFunction()

> **basicFunction**(`someParam`): `number`

This is a function that is assigned to a variable.

#### See

http://abc.com

#### Parameters

##### someParam

`number`

This is some numeric parameter.

#### Returns

`number`

#### Source

[functions.ts:1](http://source-url)

***

### basicFunctionWithReturns()

> **basicFunctionWithReturns**(): `number`

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

> **curriedFunction**(`searchElement`): \<`Value`\>(`iterable`) => `boolean`

Comments for current function 1

##### Parameters

###### searchElement

`unknown`

##### Returns

`Function`

###### Type Parameters

###### Value

\-

###### Parameters

###### iterable

`Iterable`\<`Value`, `any`, `any`\>

Comments for iterable arg

###### Returns

`boolean`

##### Source

[functions.ts:1](http://source-url)

#### Call Signature

> **curriedFunction**\<`Value`\>(`searchElement`, `iterable`): `string`

##### Type Parameters

###### Value

\-

##### Parameters

###### searchElement

`unknown`

###### iterable

`Iterable`\<`Value`, `any`, `any`\>

##### Returns

`string`

##### Source

[functions.ts:1](http://source-url)

***

### functionReturningAFunction()

> **functionReturningAFunction**(): \<`T`\>(`x`) => `boolean`

Comments for function

#### Returns

`Function`

##### Type Parameters

###### T

\-

##### Parameters

###### x

`string`

##### Returns

`boolean`

#### Source

[functions.ts:1](http://source-url)

***

### functionReturningAnObject()

> **functionReturningAnObject**(): `object`

Comments for function

#### Returns

`object`

Return comments

##### x

> **x**: `number` = `1`

##### y

> **y**: `number` = `2`

#### Source

[functions.ts:1](http://source-url)

***

### functionReturningAPromise()

> **functionReturningAPromise**(): [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Comments for function

#### Returns

[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`object`\>

Return comments

##### prop

> **prop**: `string`

#### Source

[functions.ts:1](http://source-url)

***

### functionReturningAString()

> **functionReturningAString**(): `string`

Comments for function

#### Returns

`string`

Return comments

#### Source

[functions.ts:1](http://source-url)

***

### functionReturningAUnionType()

> **functionReturningAUnionType**(): `string` \| `boolean` \| `"string1"` \| `"string2"`

Comments for function

#### Returns

`string` \| `boolean` \| `"string1"` \| `"string2"`

Return comments

#### Source

[functions.ts:1](http://source-url)

***

### functionWithArrayOfOptionalStuff()

> **functionWithArrayOfOptionalStuff**(`a`): `void`

Comments for array of stuff?

#### Parameters

##### a

[[`Stuff`](globals.md#stuff)?]

#### Returns

`void`

#### Source

[functions.ts:1](http://source-url)

***

### functionWithArrayOfStuff()

> **functionWithArrayOfStuff**(`a`): `void`

Comments for array of stuff

#### Parameters

##### a

[[`Stuff`](globals.md#stuff)]

#### Returns

`void`

#### Source

[functions.ts:1](http://source-url)

***

### functionWithComplexParams()

> **functionWithComplexParams**(`paramA`, `paramB`): `boolean`

Function with function parmas

#### Parameters

##### paramA

(`a`) => `true`

##### paramB

###### paramB.x

`1`

#### Returns

`boolean`

#### Source

[functions.ts:1](http://source-url)

***

### functionWithDefaultParameters()

> **functionWithDefaultParameters**(`valueA`, `valueB`, `valueC`, `valueD`, `valueE`, `valueF`): `string`

This is a function with a parameter that has a default value.

#### Parameters

##### valueA

`string` = `'defaultValue'`

A parameter with a default string value.

##### valueB

`number` = `100`

A parameter with a default numeric value.

##### valueC

`number` = `Number.NaN`

A parameter with a default NaN value.

##### valueD

`boolean` = `true`

A parameter with a default boolean value.

##### valueE

`boolean` = `true`

A parameter with a default null value.

##### valueF

`string` = `'<foo>'`

#### Returns

`string`

#### Source

[functions.ts:1](http://source-url)

***

### functionWithMultipleSignatures()

Main function comment.

#### Call Signature

> **functionWithMultipleSignatures**(`value`): `string`

This is the first signature of a function with multiple signatures.

##### Parameters

###### value

`string`

The name value.

##### Returns

`string`

##### Source

[functions.ts:1](http://source-url)

#### Call Signature

> **functionWithMultipleSignatures**(`value`): `string`

This is the second signature of a function with multiple signatures.

##### Parameters

###### value

An object containing the name value.

###### value.name

`string`

A value of the object.

##### Returns

`string`

##### Source

[functions.ts:1](http://source-url)

***

### functionWithNamedParams()

> **functionWithNamedParams**(`__namedParameters`, `anotherParam`): `void`

#### Parameters

##### \_\_namedParameters

various options

###### __namedParameters.bar

`number` = `43`

###### __namedParameters.foo

`number` = `42`

##### anotherParam

`string`

Another param comment

#### Returns

`void`

#### Source

[functions.ts:1](http://source-url)

***

### functionWithNestedParameters()

> **functionWithNestedParameters**(`params`, `context`, `somethingElse`?): `boolean`

Some nested params.

#### Parameters

##### params

The parameters passed to the method.

###### params.name

`string`

The name of the new group.

###### params.nestedObj

`object`

A nested object.

###### params.nestedObj.name

`string`

###### params.nestedObj.obj

`object`

###### params.nestedObj.obj.name

() => `void`

###### params.nestedObj.value

`number`

###### params.parent

`number`

##### context

`any`

The context of the method call.

##### somethingElse?

`string`

#### Returns

`boolean`

#### Source

[functions.ts:1](http://source-url)

***

### functionWithOptionalParameters()

> **functionWithOptionalParameters**(`firstParamWithDefault`, `requiredParam`, `optionalParam`?, `paramWithDefault`?): `void`

This is a function with a parameters.

#### Parameters

##### firstParamWithDefault

`boolean` = `true`

##### requiredParam

`string`

A normal parameter.

##### optionalParam?

`string`

An optional parameter.

##### paramWithDefault?

`number` = `0`

#### Returns

`void`

#### Source

[functions.ts:1](http://source-url)

***

### functionWithRestParams()

> **functionWithRestParams**(`param`, ...`restParams`): `boolean`

Function with reset parmas

#### Parameters

##### param

`string`

##### restParams

...`string`[]

#### Returns

`boolean`

#### Source

[functions.ts:1](http://source-url)

***

### functionWithTypeParameters()

> **functionWithTypeParameters**\<`T`, `Item`\>(): `boolean`

Function with type parameters

#### Type Parameters

##### T

Comments for T

##### Item

Default type `string` \| `boolean`

#### Returns

`boolean`

#### Source

[functions.ts:1](http://source-url)

***

### functionWithUnionParams()

> **functionWithUnionParams**(`primitiveUnions`, `objectUnions`, `mixedUnions`, `noUnions`): `undefined`

#### Parameters

##### primitiveUnions

`string` | `number`

##### objectUnions

Comments for objectUnions

###### objectUnions.a

`string`

Comments for a

###### objectUnions.b

`1`

##### mixedUnions

`string`

\{`a`: `string`;`b`: `string`; \}

###### mixedUnions.a

`string` = `''`

a comments

###### mixedUnions.b

`string` = `''`

b comments

##### noUnions

`string`

Comments for noUnions

#### Returns

`undefined`

#### Source

[functions.ts:1](http://source-url)
