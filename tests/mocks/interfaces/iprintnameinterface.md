[typedoc-plugin-markdown](../index.md) > [IPrintNameInterface](../interfaces/iprintnameinterface.md)



# Interface: IPrintNameInterface


This is a interface inheriting from two other interfaces.

## Hierarchy


 [INameInterface](inameinterface.md)




 [IPrintInterface](iprintinterface.md)

**↳ IPrintNameInterface**







## Implemented by

* [SubClassA](../classes/subclassa.md)


## Properties

| Name  | Type                
| ------ | ------------------- 
| name | string
## Methods
<a id="getname"></a>

###  getName

► **getName**(): string



*Inherited from [INameInterface](inameinterface.md).[getName](inameinterface.md#getname)*

*Defined in [classes.ts:18](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L18)*

This is a interface function of INameInterface.

It should be inherited by all subinterfaces.





**Returns:** string





___

<a id="print"></a>

###  print

► **print**(value: *string*): void



*Inherited from [IPrintInterface](iprintinterface.md).[print](iprintinterface.md#print)*

*Defined in [classes.ts:30](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L30)*

This is a interface function of IPrintInterface

It should be inherited by all subinterfaces.



**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| value  | string | - | - |





**Returns:** void





___

<a id="printname"></a>

###  printName

► **printName**(): void



*Defined in [classes.ts:40](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/tests/src/classes.ts#L40)*

This is a interface function of IPrintNameInterface




**Returns:** void





___



