const user = {
    username : "ritesh",
    city: "kanpur",

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the Website`);
       // console.log(this);
    }
}

user.welcomeMessage()
user.username = "rks"
user.welcomeMessage()

console.log(this);


////

function random(){
    let username = "ritesh"
    console.log(this.username);
}

random()

//
const random2 = function () {
    let username = "ritesh"
    console.log(this.username);
}

random2()

//
const random3 = () => {
    let username = "ritesh"
    console.log(this.username);
}

random3()

/*
// arrow // 
 ( ) => {

} 
 */

const addTwo = (num1, num2) => {
      return num1+num2
}

console.log(addTwo(4,5));
//

const add2 = (num1,num2) => num1+num2

console.log(add2(5,7));

//

const addTwoNum = (num1, num2) => (num1+num2)

console.log(addTwoNum(2,4));

//

const hello = () => ({username: "ritesh"})

console.log(hello());



/* 
const user = {
    username: "ritesh",
    city: "kanpur",

    welcomeMessage: function() {
        // `this` refers to the `user` object
        console.log(`${this.username}, welcome to the Website`);
        // Uncommenting the below line will log the entire `user` object
        // console.log(this);
    }
}

// Calling the welcomeMessage method on the `user` object
user.welcomeMessage(); // Outputs: "ritesh, welcome to the Website"

// Changing the username property of the `user` object
user.username = "rks";

// Calling the welcomeMessage method again with the updated username
user.welcomeMessage(); // Outputs: "rks, welcome to the Website"

// In the global context, `this` refers to the global object (window in browsers)
console.log(this); // Outputs: global object (or window object in browsers)

////

function random() {
    let username = "ritesh";
    // In a standalone function, `this` refers to the global object (window in browsers, global in Node.js)
    console.log(this.username);
}

random(); // Outputs: undefined (since `this` refers to the global object, which doesn't have a `username` property)

//

const random2 = function () {
    let username = "ritesh";
    // In a standalone function expression, `this` refers to the global object
    console.log(this.username);
}

random2(); // Outputs: undefined (same reason as above)

//

const random3 = () => {
    let username = "ritesh";
    // In an arrow function, `this` retains the value of the enclosing lexical context's `this`
    console.log(this.username);
}

random3(); // Outputs: undefined (since `this` in this context refers to the global object, and the global object doesn't have a `username` property)




////// arrow//////


// Arrow function with a block body and explicit return statement
const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(4, 5)); // Outputs: 9

// Arrow function with an implicit return (no need for curly braces or return keyword)
const add2 = (num1, num2) => num1 + num2;

console.log(add2(5, 7)); // Outputs: 12

// Arrow function with parentheses around the implicit return value (optional but can help with clarity)
const addTwoNum = (num1, num2) => (num1 + num2);

console.log(addTwoNum(2, 4)); // Outputs: 6

// Arrow function returning an object literal (wrapped in parentheses to avoid confusion with the function body)
const hello = () => ({ username: "ritesh" });

console.log(hello()); // Outputs: { username: "ritesh" }

*/