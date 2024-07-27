function myname() {
   console.log("Ritesh");
   console.log("Singh");
}

myname()

function addTwoNum(number1, number2){
    console.log(number1+number2);
}

addTwoNum(4,9)


//

function addTwoNumber(num1,num2){
    console.log(num1+num2)
}

const resultS = addTwoNumber(2,7)
console.log("Result: ", resultS);

function addTwoNumb(number1, number2){
    let reslt = number1+number2
    return reslt   
    // return number1+number2;
}

const result = addTwoNumb(5,7)
console.log("Result: ", result);




function userLogInCheck(username){
    return `${username} just logged in`
}

console.log(userLogInCheck("Ritesh")); // Output: "Ritesh just logged in"
console.log(userLogInCheck(""));       // Output: " just logged in"
console.log(userLogInCheck());         // Output: "undefined just logged in"



function logInUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} You are welcome`
}

console.log(logInUserMessage("Ritesh")); // Output: "Ritesh You are welcome"
console.log(logInUserMessage(""));       // Output: " You are welcome"
console.log(logInUserMessage());         // Output: "Please enter a username"
                                        // Output: undefined

function userLoggInCheck(username = "Anonymous") {
    if (!username) {
        username = "Anonymous";
    }
    return `${username} just logged in`;
}

console.log(userLoggInCheck("Ritesh")); // Output: "Ritesh just logged in"
console.log(userLoggInCheck(""));       // Output: "Anonymous just logged in"
console.log(userLoggInCheck());         // Output: "Anonymous just logged in"



////

/*The rest parameter ...num captures all arguments passed to calculateCartPrice into an array num.

The rest parameter (...) syntax allows a function to accept an indefinite number of arguments as an array. It collects all remaining arguments into a single array parameter.

*/
// Function that takes any number of arguments and returns them as an array
function calculateCartPrice(...num) {
    return num;
}

// Calling the function with multiple arguments
console.log(calculateCartPrice(200, 400, 500, 900, 1000));

// Output: [200, 400, 500, 900, 1000]



// Function that takes two specific arguments and then any number of additional arguments, returning the additional arguments as an array
function calculateCartPric(val1, val2, ...num) {
    return num;
}

// Calling the function with multiple arguments
console.log(calculateCartPric(200, 400, 500, 900, 1000)); 
// Output: [500, 900, 1000]




////

const book = {
     bookname: "JavaScript",
     price : 499
}

function handleobject (anyobject){
     console.log(`Book name is ${anyobject.bookname} and it's price is ${anyobject. price}.`)
}

handleobject(book)

////

function handleObjct(anobject){
   console.log(`Username is ${anobject.usrname} and he is from ${anobject.place}.`)
}

handleObjct({
    usrname: "Ritesh",
    place: "Kanpur"
})


// Handle array

const myArr = [56,86,64,57,81]

function returnSecondValue(getArr){
    return getArr[1]
}

console.log(returnSecondValue(myArr))

//
function returnThirdValue(getarrr){
    return getarrr[2]
}

console.log(returnThirdValue([200, 288, 383, 484, 498]))