// Dates

let myDate = new Date()
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

//let myCreatedDate = new Date(2024, 0, 25)
 let myCreatedDate = new Date(2024, 0, 25, 9, 43, 57)
// let myCreatedDate = new Date("2024-01-14")
//let myCreatedDate = new Date("01-14-2024")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp); 
//Outputs the current timestamp in milliseconds since January 1, 1970, 00:00:00 UTC

console.log(myCreatedDate.getTime()); 
// Outputs the number of milliseconds since January 1, 1970, 00:00:00 UTC for the myCreatedDate object

console.log(Math.floor(Date.now() / 1000)); 
 // Outputs the current time in seconds since January 1, 1970, 00:00:00 UTC

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());  // it give 1 month less as it starts from 0
console.log(newDate.getMonth() + 1);  // that's why we add 1 to find current month
console.log(newDate.getDay());




// Outputs the current day of the week as a number (0-6) and the current time in a readable string format
console.log(`${newDate.getDay()} and the time ${newDate.toLocaleTimeString()}`); 

// Outputs the full name of the current day of the week
let dayOfWeek = newDate.toLocaleString('default', {
    weekday: "long"
});

console.log(dayOfWeek);  // Example output: "Tuesday"

