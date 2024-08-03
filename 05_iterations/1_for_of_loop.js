// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

// Using a for...of loop to iterate over an array and log each number
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!";

// Using a for...of loop to iterate over a string and log each character
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Creating a new Map and setting key-value pairs
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India"); // This will overwrite the previous 'IN' entry

console.log(map);

// Using a for...of loop to iterate over a Map and log each key-value pair
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// Creating an object with key-value pairs
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

// The following code is commented out because for...of cannot be used directly on objects
// Objects are not iterable with for...of, you need to use Object.entries() to convert the object to an iterable format
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// Correct way to iterate over an object's key-value pairs
for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ':-', value);
}
