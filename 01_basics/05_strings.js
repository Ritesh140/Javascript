const name = "Ritesh"
const repoCount = 5

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ritesh-rks-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);


// Extract a substring from 'gameName' starting at index 0 and ending at index 4 (exclusive). 
// This will return the first four characters of 'gameName'.

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
 
// Attempt to extract a substring from 'gameName' starting from the 8th character from the end (-8) to the 4th character (exclusive). 
// However, since the ending index (4) is less than the starting index (-8), this will return an empty string.


const newStringOne = "   Ritesh    "
 // Declare a string variable 'newStringOne' with leading and trailing spaces
console.log(newStringOne); // Output the original string with spaces to the console
console.log(newStringOne.trim()); // Output the string after removing leading and trailing spaces using the 'trim' method


const url = "https://ritesh.com/ritesh%20singh"; // Declare a string variable 'url' with a URL containing '%20' which represents a space

console.log(url.replace('%20', '-')); 
// Replace '%20' with '-' in the 'url' string and output the result to the console
// The output will be: "https://ritesh.com/ritesh-singh"

console.log(url.includes('sundar')); 
// Check if the substring 'sundar' is present in the 'url' string and output the result to the console
// The output will be: false (since 'sundar' is not in the URL)

console.log(gameName.split('-')); 
// Split the 'gameName' string into an array of substrings using '-' as the delimiter and output the result to the console
// This line will work as expected only if 'gameName' is defined and contains the character '-'


// https://www.geeksforgeeks.org/javascript-string-methods/