// Create a new empty object using the Object constructor
// const tinderUser = new Object();


// Create a new empty object using object literal syntax
const tinderUser = {};

// Assign properties to the tinderUser object
tinderUser.id = "123abc"; // Set the id property to "123abc"
tinderUser.name = "David"; // Set the name property to "David"
tinderUser.isLoggedIn = false; // Set the isLoggedIn property to false

// Log the tinderUser object to the console
console.log(tinderUser);



// Create a regularUser object with nested properties
const regularUser = {
    email: "rks@gmail.com",
    fullName : {
        userFullName :{
            firstName : "Ritesh",
            lastName : "Singh"
        }
    }
}

// 
// Log the nested property of  regularUser object to the console

//console.log(regularUser)
//console.log(regularUser.email)
console.log(regularUser.fullName)
//console.log(regularUser.fullName.userFullName)
//console.log(regularUser.fullName.userFullName.firstName)




// Create three objects with key-value pairs
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};

// Attempting to create obj4 using object shorthand notation 
// const obj4 = {obj1, obj2};
// console.log(obj4);
// Output: { obj1: { 1: 'a', 2: 'b' }, obj2: { 3: 'a', 4: 'b' } }
// This creates an object with obj1 and obj2 as properties instead of merging them

// Create obj4 by merging obj1 and obj2 using Object.assign

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

// Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// Create obj5 by merging obj1, obj2, and obj3 using the spread operator
const obj5 = {...obj1, ...obj2, ...obj3};
console.log(obj5);
// Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

/*
 // Object.assign():

Object.assign(target, ...sources) copies the properties of the source objects (obj1 and obj2) into the target object ({}). This method creates a new object by combining the properties of obj1 and obj2.
The resulting obj4 contains the merged properties of obj1 and obj2.


// Spread Operator:

The spread operator ... expands the properties of each object into a new object.
const obj5 = {...obj1, ...obj2, ...obj3}; creates a new object by merging obj1, obj2, and obj3.
The resulting obj5 contains the merged properties of obj1, obj2, and obj3.


Both methods achieve the same goal of merging objects but with slightly different syntax. The spread operator is often preferred for its simplicity and readability. */



// Create an array of user objects
const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
];

// Access the email property of the third user (index 2)
console.log(users[2].email); // Output: "s@gmail.com"




// Log the entire tinderUser object to the console
console.log(tinderUser);

// Log the keys of the tinderUser object to the console
console.log(Object.keys(tinderUser));


// Log the values of the tinderUser object to the console
console.log(Object.values(tinderUser));


// Log the entries of the tinderUser object to the console
console.log(Object.entries(tinderUser));


// Check if the tinderUser object has the property 'isLoggedIn'
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

console.log(tinderUser.hasOwnProperty('xyz'));
