class Person {
  // Class properties
  private name: string;
  private age: number;

  // Constructor to initialize the properties
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method to get the person's name
  public getName(): string {
    return this.name;
  }

  // Method to set the person's name
  public setName(name: string): void {
    this.name = name;
  }

  // Method to get the person's age
  public getAge(): number {
    return this.age;
  }

  // Method to set the person's age
  public setAge(age: number): void {
    if (age > 0) {
      this.age = age;
    } else {
      console.log('Age must be a positive number.');
    }
  }

  // Method to greet
  public greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
