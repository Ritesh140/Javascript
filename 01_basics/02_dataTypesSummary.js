//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100   // it is Number data Types
const scoreValue = 100.3   // it is also Number data Types

const isLoggedIn = false  // it is Boolean data Types
const outsideTemp = null  // it is null data Types
let userEmail;               // undefined data types

const id = Symbol('123')
const anotherId = Symbol('123')

/*          the values of id and anotherId differ  ,     reason given below

Unique Identity: Each call to Symbol('123') generates a new and unique symbol. Even though they share the same description ('123'), they are different instances of Symbol.

Description: The description ('123') is just a label for debugging purposes. It does not affect the uniqueness of the symbols.

Therefore, even though both id and anotherId are created with the same description, they are unique and different from each other. You can verify this by comparing them: */

console.log(id === anotherId);   // it will give false

// This will output false because id and anotherId are different symbols.

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];            // Array
let myObj = {                   //   { }  it is object
    name: "ritesh",
    age: 24,
}

// Functions
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);   // it is used to find types of data types

// https://262.ecma-international.org/5.1/#sec-11.4.3