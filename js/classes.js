// JavaScript Classes Cheatsheet

// 1. Basic Class Declaration
class Animal {
    constructor(type, sound) {
      this.type = type;
      this.sound = sound;
    }
    
    // Class Method
    speak() {
      return `${this.type} says ${this.sound}`;
    }
  }
  
  // Example Usage
  const dog = new Animal('Dog', 'Woof');
  console.log(dog.speak());  // Output: "Dog says Woof"
  
  // 2. Class Expressions (Anonymous)
  const Person = class {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    introduce() {
      return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
  };
  
  // Example Usage
  const john = new Person('John', 30);
  console.log(john.introduce());  // Output: "Hi, I'm John and I'm 30 years old."
  
  // 3. Inheritance (Subclassing)
  class Vehicle {
    constructor(type, speed) {
      this.type = type;
      this.speed = speed;
    }
    
    move() {
      return `${this.type} moves at ${this.speed} km/h.`;
    }
  }
  
  class Car extends Vehicle {
    constructor(brand, speed) {
      super('Car', speed);  // Call the parent constructor
      this.brand = brand;
    }
    
    describe() {
      return `${this.brand} car moves at ${this.speed} km/h.`;
    }
  }
  
  // Example Usage
  const myCar = new Car('Toyota', 120);
  console.log(myCar.move());     // Output: "Car moves at 120 km/h."
  console.log(myCar.describe()); // Output: "Toyota car moves at 120 km/h."
  
  // 4. Static Methods
  class MathUtility {
    static square(number) {
      return number * number;
    }
    
    static cube(number) {
      return number * number * number;
    }
  }
  
  // Example Usage
  console.log(MathUtility.square(4));  // Output: 16
  console.log(MathUtility.cube(3));    // Output: 27
  
  // 5. Getters and Setters
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    
    // Getter
    get area() {
      return this.width * this.height;
    }
    
    // Setter
    set dimensions([width, height]) {
      this.width = width;
      this.height = height;
    }
  }
  
  // Example Usage
  const rect = new Rectangle(10, 5);
  console.log(rect.area);  // Output: 50
  
  rect.dimensions = [7, 3];
  console.log(rect.area);  // Output: 21
  
  // 6. Private Fields and Methods (ES2022+)
  class BankAccount {
    #balance = 0;  // Private field
    
    deposit(amount) {
      this.#balance += amount;
      return `Deposited $${amount}, new balance is $${this.#balance}`;
    }
    
    #deductFees() {  // Private method
      this.#balance -= 5;
    }
    
    withdraw(amount) {
      if (amount <= this.#balance) {
        this.#balance -= amount;
        this.#deductFees();
        return `Withdrew $${amount}, new balance is $${this.#balance}`;
      } else {
        return "Insufficient funds.";
      }
    }
  }
  
  // Example Usage
  const account = new BankAccount();
  console.log(account.deposit(100));  // Output: "Deposited $100, new balance is $100"
  console.log(account.withdraw(30));  // Output: "Withdrew $30, new balance is $65"
  
  // 7. Class Inheritance and Method Overriding
  class Bird {
    fly() {
      return "Flies in the sky!";
    }
  }
  
  class Penguin extends Bird {
    fly() {
      return "Penguins can't fly!";
    }
  }
  
  // Example Usage
  const penguin = new Penguin();
  console.log(penguin.fly());  // Output: "Penguins can't fly!"
  