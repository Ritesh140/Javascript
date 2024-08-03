const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
};

// Using a for...in loop to iterate over the keys of an object and log each key and its corresponding value
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

// Using a for...in loop to iterate over the indices of an array and log each element
for (const key in programming) {
    console.log(programming[key]);
}

// The following code is commented out because for...in cannot be used directly on Map objects
// Maps are not enumerable in the same way as plain objects
// You should use for...of with Map objects to get the keys and values
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// This will not work because for...in is for enumerable properties, not for Map objects
// for (const key in map) {
//     console.log(key);
// }

// Correct way to iterate over a Map object using for...of
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India"); // This will overwrite the previous 'IN' entry

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
