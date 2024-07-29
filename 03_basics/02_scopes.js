let a = 100
const b = 200
var c = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
}

console.log(a);
console.log(b);
console.log(c);


function one(){
    const username = "ritesh"

    function two(){
        const website = "ritesh.com"
        console.log(username);
    }
    two()
}
one()

if(true){
    const username = "ritesh"
    if(username === "ritesh"){
        const website = " ritesh.com"
        console.log(username + website);
    }
// console.log(website); 
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++



console.log(addOne(5));

function addOne(num){
    return num+1
}

// console.log(addTwo(7))   ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
   return num+2
}
console.log(addTwo(7))



/*
let a = 100;   // 'let' declares a global block-scoped variable 'a' with an initial value of 100
const b = 200; // 'const' declares a global block-scoped constant 'b' with an initial value of 200
var c = 300;   // 'var' declares a global function-scoped variable 'c' with an initial value of 300

if (true) {
    let a = 10;    // This 'let' declares a new local block-scoped variable 'a' within this block, shadowing the global 'a'
    const b = 20;  // This 'const' declares a new local block-scoped constant 'b' within this block, shadowing the global 'b'
    var c = 30;    // This 'var' redeclares and updates the global function-scoped variable 'c'
}

console.log(a); // Output: 100 - The global block-scoped variable 'a' is unaffected by the local 'a'
console.log(b); // Output: 200 - The global block-scoped constant 'b' is unaffected by the local 'b'
console.log(c); // Output: 30 - The global function-scoped variable 'c' is updated by the local 'c' inside the block
// The 'var' variable 'c' is updated by the inner block since 'var' is function-scoped



///////////////////////////

function one() {
    const username = "ritesh"; // 'const' declares a block-scoped constant 'username' within the function 'one'

    function two() {
        const website = "ritesh.com"; // 'const' declares a block-scoped constant 'website' within the function 'two'
        console.log(username); // Accesses 'username' from the outer function 'one' due to lexical scoping
    }

    // Calling the inner function 'two' to demonstrate lexical scoping
    two();
}

// Calling the outer function 'one' to ensure that 'two' is executed
one();



////////////////////


if (true) {
    const username = "ritesh"; // 'const' declares a block-scoped constant 'username' within the outer 'if' block

    if (username === "ritesh") {
        const website = "ritesh.com"; // 'const' declares a block-scoped constant 'website' within the inner 'if' block
        console.log(username + " " + website); // Accesses 'username' and 'website' within the inner 'if' block
    }

    // console.log(website); 
    // This line would cause an error because 'website' is not accessible outside the inner 'if' block
}

// console.log(username); 
// This line would cause an error because 'username' is not accessible outside the outer 'if' block


///////

console.log(addOne(5)); // This works because 'addOne' is a function declaration and is hoisted

function addOne(num) {
    return num + 1; // 'addOne' function returns the input number incremented by 1
}

// console.log(addTwo(7)); // Uncommenting this line would cause an error because 'addTwo' is a function expression and is not hoisted
ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2; // 'addTwo' function returns the input number incremented by 2
};

console.log(addTwo(7)); // This works because 'addTwo' is now defined and assigned as a function expression

*/