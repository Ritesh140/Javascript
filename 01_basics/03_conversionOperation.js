let score = 44

console.log(typeof score);
console.log(typeof (score));

let scor = "44"

console.log(typeof scor);        // now it will became string
console.log(typeof (scor));

let valueInNumber = Number(scor)    // Number should start with capital N
console.log(typeof valueInNumber);   // now string "44" will beacme number
console.log(valueInNumber);

let scr = "44rks"
let valueInNumbers = Number(scr)
console.log(typeof valueInNumbers);   // now it will say that it is number
console.log(valueInNumbers);         // but it will store NaN
/*NaN stands for "Not a Number" and is a value in JavaScript used to represent an undefined or unrepresentable value. NaN is the result of an operation that was supposed to return a number, but couldn't because of an error or undefined/empty value. */

let scors = null

console.log(typeof scors);        // it`s type will be object
console.log(typeof (scors));

let valueInNumbr = Number(scors)    // Number should start with capital N
console.log(typeof valueInNumbr);   // now object null will beacme number
console.log(valueInNumbr);          // it will be zero

let scrs = undefined

console.log(typeof scrs);        // it`s type will be undefined
console.log(typeof (scrs));

let valuInNumbr = Number(scrs)    // Number should start with capital N
console.log(typeof valuInNumbr);  //now it will say that it is number but but but
console.log(valuInNumbr);          // it will be NaN

let scorss = true

console.log(typeof scorss);        // it`s type will be boolean
console.log(typeof (scorss));

let valueeInNumbr = Number(scorss)    // Number should start with capital N
console.log(typeof valueeInNumbr);   // now boolean will beacme number
console.log(valueeInNumbr);          // it will be 1 for true and 0 for false

let scorrs = "ritesh"

console.log(typeof scorrs);        // it`s type will be string
console.log(typeof (scorrs));

let vallueInNumbr = Number(scorrs)    // Number should start with capital N
console.log(typeof vallueInNumbr);  //now it will say that it is number but but but
console.log(vallueInNumbr);          // it will be NaN

/*
 following will change like this if we convert them in number and try to print that number 
 "44" => 44
 "44rks" => NaN
 true => 1 , false => 0
 string => NaN
 null => 0
 unddefined => NaN

 */

 let isLoggedIn = 1;

 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);     // it will return true

 /*
 1 => true ,  0 => false 
 "" => false
 "ritesh" => true
 */

 let someNum = 45
 let stringNumber = String(someNum)
 console.log(typeof stringNumber)     // its type beacme string from number
 console.log(stringNumber);      // but value is number (45)