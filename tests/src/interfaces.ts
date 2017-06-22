export class Vector {
    constructor(public x: number,
                public y: number,
                public z: number) {
    }
    static times(k: number, v: Vector) { return new Vector(k * v.x, k * v.y, k * v.z); }
    static minus(v1: Vector, v2: Vector) { return new Vector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z); }
    static plus(v1: Vector, v2: Vector) { return new Vector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z); }
    static dot(v1: Vector, v2: Vector) { return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z; }
    static mag(v: Vector) { return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z); }
    static norm(v: Vector) {
        const mag = Vector.mag(v);
        const div = (mag === 0) ? Infinity : 1.0 / mag;
        return Vector.times(div, v);
    }
    static cross(v1: Vector, v2: Vector) {
        return new Vector(v1.y * v2.z - v1.z * v2.y,
            v1.z * v2.x - v1.x * v2.z,
            v1.x * v2.y - v1.y * v2.x);
    }
}

export class Color {
    constructor(public r: number,
                public g: number,
                public b: number) {
    }
    static scale(k: number, v: Color) { return new Color(k * v.r, k * v.g, k * v.b); }
    static plus(v1: Color, v2: Color) { return new Color(v1.r + v2.r, v1.g + v2.g, v1.b + v2.b); }
    static times(v1: Color, v2: Color) { return new Color(v1.r * v2.r, v1.g * v2.g, v1.b * v2.b); }
    static white = new Color(1.0, 1.0, 1.0);
    static grey = new Color(0.5, 0.5, 0.5);
    static black = new Color(0.0, 0.0, 0.0);
    static background = Color.black;
    static defaultColor = Color.black;
    static toDrawingColor(c: Color) {
        const legalize = (d) => d > 1 ? 1 : d;
        return {
            r: Math.floor(legalize(c.r) * 255),
            g: Math.floor(legalize(c.g) * 255),
            b: Math.floor(legalize(c.b) * 255),
        };
    }
}

export namespace interfaces {

    export interface Surface {
        diffuse: (pos: Vector) => Color;
        specular: (pos: Vector) => Color;
        reflect: (pos: Vector) => number;
        roughness: number;
    }

    export interface SquareConfig {
        color?: string;
        width?: number;

    }

    export  type SearchFunc = (source: string, subString: string) => boolean;

    export  let mySearch: SearchFunc;
    mySearch = function(src: string, sub: string): boolean {
        const result = src.search(sub);
        return result > -1;
    };

    export  interface StringArray {
        [index: number]: string;
    }

    export interface ClockInterface {
        currentTime: Date;
        setTime(d: Date);
    }

    export  interface ClockConstructor {
        new (hour: number, minute: number): ClockInterface;
    }
    export  interface ClockInterface {
        tick();
    }

    export  function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
        return new ctor(hour, minute);
    }

    export  interface Shape {
        color: string;
    }

    export interface Square extends Shape {
        sideLength: number;
    }

    export const square = {} as Square;

}
