// Define an array of coding languages
const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach to iterate over the coding array
const values = coding.forEach((item) => {
    // Logging each item to the console
    console.log(item);
    // The return value of forEach is always undefined, so this return statement has no effect
    return item;
});

// values will be undefined because forEach does not return anything
console.log(values); // Output: undefined

// Define an array of numbers
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to create a new array with numbers greater than 4
const newNums = myNums.filter((num) => {
    return num > 4;
});

// Alternative way to filter using forEach
const newNumsForEach = [];
myNums.forEach((num) => {
    if (num > 4) {
        newNumsForEach.push(num);
    }
});

// Logging the filtered arrays to the console
console.log(newNums); // Output: [5, 6, 7, 8, 9, 10]
console.log(newNumsForEach); // Output: [5, 6, 7, 8, 9, 10]

// Define an array of book objects
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filter books by genre 'History'
let userBooks = books.filter((bk) => bk.genre === 'History');
console.log(userBooks); // Output: Books with genre 'History'

// Filter books published after 1995 and with genre 'History'
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks); // Output: Books published after 1995 with genre 'History'
