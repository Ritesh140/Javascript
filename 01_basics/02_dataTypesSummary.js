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




 /* Return type of variables in JavaScript
 
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
  */

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
//   datatypes are based on memory allocation


Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory    // otiginal value not changed

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory    // in this original value is passed and can be changed

JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it. */

// Stack (Primitive)
let myName = "Ritesh"; // Declare a variable 'myName' and assign it the value "Ritesh"


let anotherName = myName; // Declare a variable 'anotherName' and assign it the value of 'myName', which is "Ritesh"

anotherName = "rks"; // Change the value of 'anotherName' to "rks"

console.log(myName); // Output the value of 'myName' to the console, which is still "Ritesh"
console.log(anotherName); // Output the value of 'anotherName' to the console, which is now "rks"


// Heap (Non-primitive)

let perrson = {
    email: "person@google.com", 
    upi: "person87@upi"

       // Define an object 'perrson' with properties  'email' and 'upi'
}

let anotherprson = perrson // Assign the object 'perrson' to 'anotherprson', both variables now reference the same object
anotherprson.email = "anperson@gmail.com" // Modify the 'email' property of the object referenced by 'anotherprson'

console.log(perrson.email); // Output the 'email' property of the 'perrson' object, which is now "anperson@gmail.com"
console.log(anotherprson.email); // Output the 'email' property of the 'anotherprson' object, which is also "anperson@gmail.com"


// another heap example

let person = {
    name: "James",
    age: 23,
    isMale: true,
};
console.log(person);


let newPerson = person;
newPerson.isMale = false;
console.log(person);

/*
Stack and heap are two areas in memory where data is stored. The stack is used for static memory allocation, while the heap is used for dynamic memory allocation.

Static memory allocation means that the size and location of the memory is fixed at compile time, while dynamic memory allocation means that the size and location of the memory can change at runtime.

In JavaScript, primitive values (such as numbers, strings, booleans, etc.) are stored in the stack, while objects (such as arrays, functions, etc.) are stored in the heap.

Primitive values are immutable and have a fixed size, so they can be easily stored and accessed in the stack. Objects are mutable and have a variable size, so they need to be stored and accessed in the heap, which is more flexible but also slower. */