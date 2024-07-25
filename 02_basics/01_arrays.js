// array

const myArr = [0, 1, 2, 3 , 4,5]
const someName = ["Ritesh", "Kapil", "Rachit", "Mrityunjay"]
//console.log(myArr);
console.log(myArr[2]);  // output is 2nd index number.

const myArr2 = new Array(4, 6, 7 , 6,7)  // another method to declare array

// some array method

// myArr.push(6)
myArr.push(7)
myArr.pop(7)
// console.log(myArr);

myArr.unshift(8) // Adds the number 8 to the beginning of the array 
myArr.shift()    // Removes the first element of the array, which is 8,
//console.log(myArr);

console.log(myArr.includes(9));   // it will give boolean output
console.log(myArr.indexOf(4));




const newArr = myArr.join(); // Joins all elements of the array into a string, with each element separated by a comma

console.log(myArr);  // Outputs the original array: [0, 1, 2, 3, 4, 5]
console.log(newArr);  // Outputs the string: "0,1,2,3,4,5"

// slice, splice


console.log("A", myArr);

const myna1 = myArr.slice(1,3)

console.log(myna1);
console.log("B", myArr);

const myna2 = myArr.splice(1,3)

console.log(myna2);
console.log("C", myArr);


/**
 slice()
Purpose: Creates a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where both start and end represent index positions.
Does Not Modify: The original array.
Syntax: array.slice(start, end)     // array.slice(2,4)
Example:


const arr = [0, 1, 2, 3, 4, 5];

const slicedArr = arr.slice(2, 4);  // Creates a new array with elements from index 2 up to, but not including, index 4

console.log(arr);       // Outputs the original array: [0, 1, 2, 3, 4, 5]
console.log(slicedArr); // Outputs the sliced array: [2, 3]



splice()
Purpose: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
Does Modify: The original array.
Syntax: array.splice(start, deleteCount, item1, item2, ...)
start: The index at which to start changing the array.
deleteCount: The number of elements to remove.
item1, item2, ...: Items to add to the array.
Example:


const arr = [0, 1, 2, 3, 4, 5];

arr.splice(2, 2, 'a', 'b');  // Starts at index 2, removes 2 elements, and adds 'a' and 'b'

console.log(arr);  // Outputs the modified array: [0, 1, 'a', 'b', 4, 5]

Summary
slice(): Creates a new array with a subset of the original array elements, without modifying the original array.
splice(): Modifies the original array by removing or replacing elements and/or adding new elements.
 */