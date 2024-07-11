// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);  // it will give negative value

// Some Basic Math Opeartions
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " ritesh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); // "12"
// The number 2 is turned into a string and joined with "1", making "12".
// in technical langug // The number 2 is coerced into a string and concatenated with "1".

console.log(1 + "2"); // "12"
// The number 1 is turned into a string and joined with "2", making "12".
// The number 1 is coerced into a string and concatenated with "2".

console.log("1" + 2 + 2); // "122"
// The number 2 is turned into a string and joined with "1", making "12". 
// Then another 2 is added to "12", making "122".

console.log(1 + 2 + "2"); // "32"
// 1 + 2 is done first, which makes 3. 
// Then 3 is turned into a string and joined with "2", making "32".

console.log((3 + 4) * 5 % 3); // 2
// 3 + 4 is done first, making 7.
// Then 7 * 5 is done, making 35.
//Finally,35 % 3 is done, which means the remainder of 35 divided by 3, which is 2.

console.log(true); // true
// This prints the boolean value true.

console.log(+true); // 1
// The unary plus operator (+) converts true to the number 1.

// console.log(true+); // SyntaxError
// This causes a syntax error because there's no value after the plus operator.

console.log(+""); // 0
// The unary plus operator (+) converts an empty string ("") to the number 0.


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100;
// This creates a variable called gameCounter and sets its value to 100.

++gameCounter;
// This increases the value of gameCounter by 1, making it 101. 
// The ++ before the variable is the pre-increment operator, which means the variable is incremented before it is used.

gameCounter++;
// This increases the value of gameCounter by 1 again, making it 102.
// The ++ after the variable is the post-increment operator, which means the variable is incremented after it is used.

console.log(gameCounter); // 102
// This prints the current value of gameCounter, which is 102.

// 
/*   Pre-Increment (++variable)
In pre-increment, the variable's value is incremented first, and then the updated value is used in the expression. */

let x = 5;
let y = ++x;

console.log(x); // 6
// x is incremented by 1 first, so x becomes 6.

console.log(y); // 6
// y is assigned the value of x after incrementing, so y is 6.

/* Post-Increment (variable++)
In post-increment, the variable's value is used in the expression first, and then it is incremented. */

let a = 5;
let b = a++;

console.log(a); // 6
// a is incremented by 1 after its value is used, so a becomes 6.

console.log(b); // 5
// b is assigned the value of a before incrementing, so b is 5.

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion