export class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

export class Snake extends Animal {
    constructor(name: string) { super(name); }
    public move(distanceInMeters = 5) {
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}

export class Horse extends Animal {
    constructor(name: string) { super(name); }
    public move(distanceInMeters = 45) {
        console.log('Galloping...');
        super.move(distanceInMeters);
    }
}

export const sam = new Snake('Sammy the Python');
export const tom: Animal = new Horse('Tommy the Palomino');
