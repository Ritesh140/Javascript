// Immediately Invoked Function Expressions (IIFE)

/*
Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.

They are often used to create a new scope and avoid polluting the global scope. 

Syntax:

(function (){ 
// Function Logic Here. 
})();


(function () {
  // …
})();

(() => {
  // …
})();

(async () => {
  // …
})();

*/

(function random(){                                             // named IIFE
     console.log(`DB Connected`) ;
})();

( () => {
    console.log(`DB Conected`);
})();

((name) => {
    console.log(`welcome ${name}`);
})("ritesh");

// Standard IIFE using a function expression
(function() {
    let username = "ritesh";
    console.log(`${username}, welcome to the Website`);
})();

// IIFE with parameters
(function(num1, num2) {
    console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
})(4, 5);

// IIFE using an arrow function
(() => {
    let username = "rks";
    console.log(`${username}, welcome to the Website`);
})();

// IIFE returning a value
let result = (function(num1, num2) {
    return num1 + num2;
})(6, 7);

console.log(`The result is: ${result}`);

// IIFE returning an object
let user = (function() {
    return {
        username: "ritesh",
        city: "kanpur"
    };
})();

console.log(user); // Outputs: { username: "ritesh", city: "kanpur" }
