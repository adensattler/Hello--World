// Expressions vs Statements
// ------------------------------------------------------------------------
// Expression: A piece of code that resolves to a value! ***functions can be expressions***
// Statement: Instruction or action (think if, looping, etc)


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import 





// Template literals (Template strings)
// ------------------------------------------------------------------------
// ex: 
`string text ${expression} string text`



// map, filter, reduce methods
// Used for transforming arrays.
// - map() example:
array.map(x => x * 2);
array.map()

// - filter() example:
array.filter(x => x > 10);

// - reduce() example:
array.reduce((acc, val) => acc + val, 0);




// Ternary Operator
// ------------------------------------------------------------------------
condition ? expr1 : expr2;
// If condition is true, expr1 is executed; otherwise, expr2 is executed.




// Nullish Coalescing (??)
// ------------------------------------------------------------------------
// - Useful for providing default values when dealing with null or undefined.
/* Syntax */ let res = expr1 ?? expr2; // Returns expr1 if it is not null or undefined, otherwise returns expr2.




// Optional Chaining (?.)
// ------------------------------------------------------------------------
// - Accesses properties or calls methods safely, without throwing an error if the object or method does not exist.
/* Syntax */ obj?.property || obj?.method?.()
/* Ex: */ let street = user?.address?.street;  // Returns undefined if any part is null/undefined




// Functions
// ------------------------------------------------------------------------
// Declaration
function multiply(x, y) {
    return x * y;
} // No need for semicolon here

// Expression; the function is anonymous but assigned to a variable
const multiply = function (x, y) {
    return x * y;
};

// Expression; the function has its own name
const multiply = function funcName(x, y) {
    return x * y;
};

// Arrow functions
const multiply = (x, y) => x * y;

// Arrow Functions Expanded
() => expression;

param => expression;

(param) => 5;

(param1, paramN) => expression;

() => {
    statements
}

param => {
    statements
}

(param1, paramN) => {
    statements
}

// Default Params
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5));
// Expected output: 5





// IIFE
(function () {
    // …
})();

(() => {
    // …
})();

(async () => {
    // …
})();





// Looping
// -------
// 1. for loop
// Used for counter-based iterations.
for (let i = 0; i < 5; i++) {
    // code to be executed
}

// 2. while loop
// Repeats while the condition is true.
while (condition) {
    // code to be executed
}

// 3. do...while loop
// Executes the code block at least once.
do {
    // code to be executed
} while (condition);

// 4. for...of loop
// Iterates over iterable objects (arrays, strings, etc.).
for (let value of iterable) {
    // code to be executed
}

// 5. for...in loop
// Iterates over the keys of an object (or indexes of an array).
for (let key in object) {
    // code to be executed
}

// 6. forEach method
// Executes a function for each element in an array.
array.forEach((value, index) => {
    // code to be executed
});





// 8. break / continue
// - break exits the loop.
// - continue skips to the next iteration.
for (let i = 0; i < 5; i++) {
    if (i === 3) continue;
    // code to be executed
}




/*
THIS
----
What is 'this'?
Akeyword that references another value (usually obj) that represents the CURRENT EXECUTION CONTEXT

TDLR;
"This" refers to whatever's on the left side of the dot. Except when it doesn't...
                    OR
This is a reference to the object that is executing the current running function. 



Example: someObject.someMethod
In this example, someMethod has "this" inside it. Since someObject is on the left side of the dot (someObject (dot) someMethod) "this" will refer to someObject.


Key Concepts:
Global Scope: this refers to the global object.
Object Methods: this refers to the object calling the method.
Constructor Functions: this refers to the newly created object.
Arrow Functions: this is inherited from the surrounding context (lexical scoping).
Event Handlers: this refers to the DOM element receiving the event.
Explicit Binding: Use call, apply, or bind to manually set this.




https://www.reddit.com/r/learnjavascript/comments/zoxb19/cannot_understand_this_keyword/

*/











// ==========================
// ES Modules (ESM) Syntax
// ==========================
// IMPORTING
// -------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import 
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { default as alias } from "module-name";
import { export1, export2 } from "module-name";
import { export1, export2 as alias2, /* … */ } from "module-name";
import { "string name" as alias } from "module-name";
import defaultExport, { export1, /* … */ } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";


// EXPORTING
// -------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export 
export function greet1() {  // Export directly
    return 'Hello!';
}

export { age, country };    // Exporting in a single statement

// Default Export
// Export a single value (function, object, etc.)
const person = { name: 'John', age: 30 };
export default person;





// ==========================
// CommonJS Syntax
// ==========================
// IMPORTING
// -------------
const person = require('./person');             // Importing default export
const { name, greet4 } = require('./module');    // Destructuring named exports

// EXPORTING
// Export multiple variables or functions using module.exports
const name2 = 'John';
const greet3 = () => 'Hello!';
module.exports = { name, greet3 }; // Exports an object

// Default Export in CommonJS
module.exports = person; // Exports a single value


