/**
 * Let’s take a look at a simple class-based example:
 */
export class Greeter {
  /**
   * A private property
   */
    private greeting: string;

    /**
     * Document a constructor
     * @param message Message passed in
     */
    constructor(message: string) {
        this.greeting = message;
    }

    /**
     * A public method
     */
    public greet() {
        return 'Hello, ' + this.greeting;
    }
}

/**
 * A new instance of our class
 * ```
 * const greeter = new Greeter('world');
 * ```
 */
export const greeter = new Greeter('world');
