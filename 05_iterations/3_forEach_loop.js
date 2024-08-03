const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach to iterate over an array and log each value
coding.forEach(function (val) {
    console.log(val);
});

console.log("------");

// Using forEach with an arrow function to iterate over an array and log each value
coding.forEach((item) => {
    console.log(item);
});

console.log("------");

// Defining a function to log each item
function printMe(item) {
    console.log(item);
}

// Using forEach with a predefined function to log each value
coding.forEach(printMe);

console.log("------");

// Using forEach to log each item, its index, and the whole array
coding.forEach((item, index, arr) => {
    console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`);
});

console.log("------");

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];

// Using forEach to iterate over an array of objects and log a specific property
myCoding.forEach((item) => {
    console.log(item.languageName);
});

// Adding more details to the console log for clarity
myCoding.forEach((item) => {
    console.log(`Language Name: ${item.languageName}, File Extension: ${item.languageFileName}`);
});
