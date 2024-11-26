# Variable: objectLiteralVariable

```ts
const objectLiteralVariable: {
  valueA: number;
  valueB: boolean;
  valueX: {
     valueA: number[];
     valueY: (z: string) => {
        a: string;
        b: string;
        c: {
           a: number;
           b: number;
          };
       };
     valueZ: string;
    };
  valueY: (unionParam: "a" | "b", _undercoreParam_: string) => string;
};
```

Comments for objectLiteralVariable

## See

xyz.com

## Type declaration

### valueA

```ts
valueA: number = 100;
```

Comments for valueA

### valueB

```ts
valueB: boolean = true;
```

### valueX

```ts
{
  valueA: number[];
  valueY: (z: string) => {
     a: string;
     b: string;
     c: {
        a: number;
        b: number;
       };
    };
  valueZ: string;
}
```

Comments for valueX

### valueY()

```ts
(unionParam: "a" | "b", _undercoreParam_: string) => string
```
