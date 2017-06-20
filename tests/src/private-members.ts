
const publicVar = 'public variable';

/**
 * Marked as private
 * @private
 */
const privateVar = 'marked private variable';

function publicFunction() {
  return 'public';
}

/**
 * Marked as private
 * @private
 */
function privateFunction() {
  return 'public';
}

export class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

export class Employee extends Person {

    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }

    private getPrivateDetails() {
      return 'private stuff';
    }
}
