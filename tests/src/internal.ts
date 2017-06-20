import * as basicTypes from './basic-types';
import * as classes from './classes';
import * as enums from './enums';
import * as functions from './functions';
import * as interfaces from './interfaces';
import * as privateMembers from './private-members';

export class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}

const greeter = new Greeter('world');
