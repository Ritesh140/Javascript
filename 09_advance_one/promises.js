const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
         console.log("Async task is complete")
         resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Ritesh", email : "ritesh@exapmle.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username : "Ritesh Singh", password:"123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})
                              //here we use arrow function on place of function()
promiseFour.then((user) => {    
        console.log(user);
        return user.username;
}).then((username) => {
   console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "javascript", password:"123"})
        } else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function cosnumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error){
        console.log(error);
    }
}

cosnumePromiseFive();

/*      // Async function to fetch all users

async function getAllUsers() {
    try {const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
    } catch(error){
        console.log("E:",error)
    }
}

getAllUsers()

*/


// Fetching users using the Promise-based approach .   
/* isme await nhi krna   kyuki first .then() ke end hone ke badd hi next .then() 
  start hoga*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


/*
Explanation:
Async/Await Version:

This version uses async/await syntax, which allows you to write asynchronous code that looks and behaves like synchronous code.
The try/catch block is used to handle any potential errors that might occur during the fetch operation.


Promise-based Version:

This version uses Promises directly with .then() and .catch() for handling the asynchronous fetch operation.
It also logs the users or any potential errors in a similar manner as the async/await version.
 */


/*
Promise.all is a method that takes an array of promises and returns a single promise. This returned promise resolves when all of the promises in the array have resolved, or it rejects if any of the promises reject. It's useful when you want to run multiple asynchronous operations in parallel and wait for all of them to complete.

// Function to fetch users and posts simultaneously using Promise.all

function fetchUsersAndPosts() {
    // Define two fetch requests: one for users and one for posts
    const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
    const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
    
    // Use Promise.all to wait for both promises to resolve
    Promise.all([usersPromise, postsPromise])
        .then((results) => {
            // Destructure the results array into users and posts
            const [users, posts] = results;
            
            // Log the users and posts data to the console
            console.log("Users:", users);
            console.log("Posts:", posts);
        })
        .catch((error) => {
            // Handle any errors that occur in either of the fetch requests
            console.log("Error:", error);
        });
}

// Call the function to fetch and log users and posts
fetchUsersAndPosts();

*/