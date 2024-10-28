// This is the best explanation for async in JS! 
// https://medium.com/@lydiahallie/javascript-visualized-promises-async-await-a3f1aad8a943

// What does async do? Well it basically just take the return value of a function and resolves it as a promise.
// What does await do? Well it pauses the execution of the parent function after executing the first awaited call.

// Callbacks
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}
function sayGoodbye() {
    console.log("Goodbye!");
}
greet("Alice", sayGoodbye); // logs "Hello, Alice! /n Goodbye!"

// Promises
const promise = new Promise((resolve, reject) => {
    // async task
    if (success) resolve(result);
    else reject(error);
});

// Async/Await
async function doSomethingAsync() {
    try {
        const result = await someAsyncTask();
    } catch (error) {
        console.error(error);
    }
}

// A/A with multiple Promises
async function handleMultiplePromises() {
    try {
        const [data1, data2] = await Promise.all([
            fetchDataAsync1(),
            fetchDataAsync2()
        ]);
        console.log("Data1:", data1);
        console.log("Data2:", data2);
    } catch (error) {
        console.log("Error:", error);
    }
}
handleMultiplePromises();

// Ex usage
function performComplexOperation() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;

        if (success) {
            resolve("Operation succeeded!");
        } else {
            reject("Operation failed!");
        }
    });
}

performComplexOperation()
    .then(result => console.log(result))
    .catch(error => console.error(error));


// Top-Level Await (ES2022):
// - Can use `await` at the top level of a module.
const response = await fetch('https://api.example.com/data');
const data = await response.json();
console.log(data);

