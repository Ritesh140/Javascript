// singleton
// Object.create

// object literals

// Define a unique symbol to be used as a key in the object
const mySum = Symbol("key1")

// Create an object literal with various properties
const JsUser = {
    name: "Ritesh", // String property
    "full name": "Ritesh Singh", // Property with space in key, so it's in quotes
    [mySum]: "myKey1", // Symbol property, using computed property syntax
    email: "ritesh@gmail.com", // String property
    location: "Kanpur", // String property
    isLoggedIn: false, // Boolean property
    lastLogInDays: ["Monday", "Friday"] // Array property
}

// Access and log the 'email' property using dot notation
console.log(JsUser.email); // Output: ritesh@gmail.com

// Access and log the 'email' property using bracket notation
console.log(JsUser["email"]); // Output: ritesh@gmail.com

// Access and log the 'full name' property using bracket notation
console.log(JsUser["full name"]); // Output: Ritesh Singh

// Access and log the property with the symbol key
console.log(JsUser[mySum]); // Output: myKey1

// Log the type of the property with the symbol key
console.log(typeof JsUser[mySum]); // Output: string




// Modify the email property
JsUser.email = "riteshsingh@gamil.com"

// Freeze the JsUser object to prevent further modifications
// Object.freeze(JsUser)

// Attempt to modify the email property after freezing the object
JsUser.email = "riteshrks@gamil.com"

// Log the JsUser object to the console
console.log(JsUser);

// Output will show that the email property has not been changed after freezing





// Add a greeting method to the JsUser object
JsUser.greeting = function() {
    console.log("Hello Js User");
}

// Correct the syntax for greetingt2 method
JsUser.greetingt2 = function() {
    console.log(`Hello Js User, ${this.name}`);
}

// Call the greeting method
JsUser.greeting(); // Output: Hello Js User

// Call the greetingt2 method
JsUser.greetingt2(); // Output: Hello Js User, Ritesh

// Ensure the console.log() calls are logging the result of the function calls correctly
console.log(JsUser.greeting()); // Output: Hello Js User followed by undefined
console.log(JsUser.greetingt2()); // Output: Hello Js User, Ritesh followed by undefined




/*
this keyword: In a method of an object, this refers to the object itself. Therefore, this.name accesses the name property of the object.
'${}' syntax:  This is the syntax for embedding an expression within a template literal. The expression inside the curly braces is evaluated and its result is included in the string.
Example with Explanation
Consider the following example:
*/

const user = {
    name: "Kapil",
    greeting: function() {
        console.log(`Hello, ${this.name}!`);
    }
};

user.greeting(); // Output: Hello, Kapil! 


// Here's another example to further illustrate the use of '${this.name}':

const car = {
    brand: "Toyota",
    model: "Corolla",
    getCarInfo: function() {
        return `This car is a ${this.brand} ${this.model}.`;
    }
};

console.log(car.getCarInfo()); // Output: This car is a Toyota Corolla.


// '${this.name}' within a template literal dynamically includes the value of the name property from the object that the method is called on