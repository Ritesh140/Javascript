// all these comparisons will give true or false
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1); // true          //"2" means string
// "2" is changed to the number 2, so this becomes 2 > 1, which is true


console.log("02" > 1); // true
// "02" is changed to the number 2, so this becomes 2 > 1, which is true




console.log(null > 0);   // Outputs: false
// In JavaScript, null is considered to be loosely less than any number, including 0. So, null > 0 evaluates to false.

console.log(null == 0);  // Outputs: false
//The equality operator (==) in JavaScript compares null loosely with 0. However, null is only loosely equal to undefined, not to 0. Hence, null == 0 also evaluates to false.

console.log(null >= 0);  // Outputs: true
// The greater than or equal to operator (>=) performs type coercion. Null is loosely equal to 0 when using this operator, so null >= 0 evaluates to true.



console.log(undefined == 0);  // Outputs: false
// Undefined in JavaScript represents a variable that has not been assigned a value. When compared with 0, undefined is not loosely equal (==) to 0, so this comparison evaluates to false.

console.log(undefined > 0);   // Outputs: false
//  Comparisons involving undefined always evaluate to false because undefined does not convert to or from any other type except null using loose equality (==). Therefore, undefined > 0 evaluates to false.

console.log(undefined < 0);   // Outputs: false
// Similarly, undefined < 0 also evaluates to false due to the reasons mentioned above.




//    ===         strict equality operator

console.log("2" === 2);  // Outputs: false
//  The strict equality operator (===) in JavaScript compares both the value and the type of the operands. 
// Here, "2" is a string, and 2 is a number. Since they are of different types, "2" === 2 evaluates to false.

 
/**  Notes 
 
 The expressions "2" === 2 and "2" == 2 differ in how JavaScript handles equality comparison due to the type coercion rules:

Strict Equality (===):

. The strict equality operator === compares both the value and the type of its operands.
. "2" === 2 evaluates to false because "2" is a string and 2 is a number. They are of different types, so they are not considered strictly equal.


Loose Equality (==):

. The loose equality operator == performs type coercion before comparison. It attempts to convert the operands to the same type before making the comparison.
. "2" == 2 can evaluate to true due to type coercion. In this case, JavaScript will coerce the string "2" to a number before comparing, so "2" == 2 evaluates to true.

Here’s a breakdown of how "2" == 2 works:

JavaScript sees that one operand is a string ("2") and the other is a number (2).
It then converts the string "2" to a number (2) before performing the comparison.
Since both operands now have the same type and value (2 == 2), the comparison evaluates to true.
In summary, === checks strict equality, including type, while == checks loose equality, allowing for type coercion before comparison. Therefore, "2" === 2 evaluates to false because they are of different types, whereas "2" == 2 can evaluate to true due to type coercion converting the string to a number before comparison.
 
 */