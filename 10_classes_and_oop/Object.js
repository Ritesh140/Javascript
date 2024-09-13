function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(username, price){
    this.username = username;
    this.price = price
}

createUser.prototype.increment = function(){
    this.price++;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`)
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 50)

console.log(chai)

chai.printMe();
chai.increment();
chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


/*
// Function to multiply a given number by 5
function multiplyBy5(num) {
    return num * 5;  // Returns the result of num multiplied by 5
}

// Adding a custom property 'power' to the multiplyBy5 function
multiplyBy5.power = 2;  // This adds a property to the function itself, which stores the value 2

// Calling the function with 5 as an argument
console.log(multiplyBy5(5));  // Outputs the result of 5 * 5 = 25

// Accessing the 'power' property of the multiplyBy5 function
console.log(multiplyBy5.power);  // Outputs the value of the 'power' property, which is 2

// Accessing the prototype of the multiplyBy5 function
console.log(multiplyBy5.prototype);  // Outputs the function's prototype object (by default, an empty object)

*/


/*   remove this to study
// Constructor function to create user objects
function createUser(username, price) {
    this.username = username;  // Assigns the username to the object
    this.price = price;        // Assigns the price to the object
}

// Adding an increment method to the prototype
createUser.prototype.increment = function() {
    this.price++;  // Increases the price by 1
}

// Adding a method to print the current price
createUser.prototype.printMe = function() {
    console.log(`Price is ${this.price}`);  // Outputs the current price of the object
}

// Creating a new object using the createUser constructor
const chai = new createUser("chai", 25);  // chai object with username "chai" and price 25

// Incorrect instantiation of createUser (missing the 'new' keyword)
const tea = createUser("tea", 50);  // This will not work as expected. It does not create an object, and will assign 'tea' and '50' to the global context.

// Printing the 'chai' object to see its structure
console.log(chai);  // Logs the 'chai' object with username and price properties

// Calling printMe method to display the current price
chai.printMe();  // Outputs: Price is 25

// Using the increment method to increase the price
chai.increment();  // Increases the price of chai by 1

// Printing the updated price after incrementing
chai.printMe();  // Outputs: Price is 26

*/