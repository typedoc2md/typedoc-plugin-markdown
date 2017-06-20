export namespace interfaces {

    interface SquareConfig {
        color?: string;
        width?: number;

    }

    type SearchFunc = (source: string, subString: string) => boolean;

    let mySearch: SearchFunc;
    mySearch = function (src: string, sub: string): boolean {
        let result = src.search(sub);
        return result > -1;
    }

    interface StringArray {
        [index: number]: string;
    }

    interface ClockInterface {
        currentTime: Date;
        setTime(d: Date);
    }

    interface ClockConstructor {
        new (hour: number, minute: number): ClockInterface;
    }
    interface ClockInterface {
        tick();
    }

    function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
        return new ctor(hour, minute);
    }

    interface Shape {
        color: string;
    }

    interface Square extends Shape {
        sideLength: number;
    }

    const square = {} as Square;

}
