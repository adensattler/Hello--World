// JavaScript Objects and Key Features

// Access
// dot notation
myObject.property; // 'Value!'

// bracket notation
myObject["obnoxious property"]; // [Function]


// 1. Object Literal Creation
let person = {
    name: 'John',
    age: 30,
    greet: function () {
        console.log('Hello');
    }
};

// Shorthand for methods
let personWithMethodShorthand = {
    name: 'John',
    greet() {
        console.log('Hello');
    }
};




// 2. Object Property Shorthand
let name = 'Alice';
let personWithShorthand = {
    name,
    age: 25
};  // Equivalent to { name: name, age: 25 }




// 3. Destructuring Objects
let { name: personName, age } = person;
console.log(personName, age);  // Outputs: John 30

// Renaming during destructuring
let { name: fullName, age: personAge } = person;
console.log(fullName);  // Outputs: John




// 4. Array Destructuring
let [first, second] = [10, 20];
console.log(first, second);  // Outputs: 10 20

// Skipping elements in array destructuring
let [, secondElement, thirdElement] = [10, 20, 30];
console.log(secondElement, thirdElement);  // Outputs: 20 30




// 5. Rest Operator in Destructuring
let { name: restName, ...restProperties } = person;
console.log(restProperties);  // Outputs: { age: 30, greet: function() {...} }




// 6. Spread Operator (`...`)
// Copy objects
let copiedPerson = { ...person }; // shallow copy
// Merge objects
let fullPerson = { ...person, city: 'New York' };

// Copy arrays
let arr = [1, 2, 3];
let copiedArr = [...arr];
// Merge arrays
let mergedArr = [...arr, 4, 5];
console.log(mergedArr);  // Outputs: [1, 2, 3, 4, 5]




// 7. Object Methods
// Get object keys
console.log(Object.keys(person));  // Outputs: ['name', 'age', 'greet']

// Get object values
console.log(Object.values(person));  // Outputs: ['John', 30, function() {...}]

// Get object entries (key-value pairs)
console.log(Object.entries(person));  // Outputs: [['name', 'John'], ['age', 30], ['greet', function() {...}]]




// Object Constructors
// If you have a specific type of object that you want to duplicate, you can create them using an obj constructor!
function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead

    this.info = function () {
        let readStatus = this.read ? 'read' : 'not read yet'
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}.`
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());  // Output: "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"


/*
// Prototypes

// What is a prototype?
    1. All objects in JavaScript have a prototype
    2. The prototype is another object
    3. …that the original object inherits from, and has access to all of its prototype’s methods and properties

    Basically like a parent class

    https://javascript.info/prototype-inheritance


*/

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
    console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function () {
    console.log(`My marker is '${this.marker}'`);
};

Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'


