const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)
 // Adds the entire dc_heros array as a single element to the end of the marvel_heros array

console.log(marvel_heros);
//console.log(marvel_heros[3][1]);   // Accesses the second element of the nested dc_heros array



//concat= Combines the marvel_heros array with the dc_heros array into a new array
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// Combines the marvel_heros array with the dc_heros array into a new array using the spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

//Both methods achieve the same result, but the spread operator can be more concise and flexible, especially when working with other JavaScript features.





const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

/*   flat()
The flat() method is used to create a new array with all sub-array elements concatenated into it recursively up to the specified depth. When you use Infinity as the depth argument, it flattens the array completely, regardless of how deeply nested it is.

it's result shows that all nested arrays have been merged into one single array, removing all levels of nesting.*/


// Check if "Ritesh" is an array
console.log(Array.isArray("Ritesh"));  // Outputs: false
// Explanation: "Ritesh" is a string, not an array.

console.log(Array.from("Ritesh"));  // Outputs: ['R', 'i', 't', 'e', 's', 'h']
// Explanation: Converts the string "Ritesh" into an array of its characters.

console.log(Array.from({name: "ritesh"}));  // Outputs: []
// Explanation: {name: "ritesh"} is not an iterable object or array-like. Array.from() expects an array-like or iterable object.
// Since the object does not have a length property or indexed properties, it results in an empty array.


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
