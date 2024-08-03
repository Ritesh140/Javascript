// Define an array of numbers
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chain multiple map and filter operations
const newNums = myNumbers
                .map((num) => num * 10)    // Multiply each number by 10
                .map((num) => num + 1)     // Add 1 to each result
                .filter((num) => num >= 40); // Keep numbers greater than or equal to 40

// Log the resulting array to the console
console.log(newNums); // Output: [41, 51, 61, 71, 81, 91, 101]
