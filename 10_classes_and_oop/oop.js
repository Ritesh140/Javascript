const user = {
    username: "Ritesh",
    logInCount : 8,
    isLoggedIn : true,
    
    getUserDetails : function(){
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


function User(username, logInCount, isLoggedIn){
     this.username = username;
     this.logInCount = logInCount;
     this.isLoggedIn = isLoggedIn;

     this.greeting = function(){
        console.log(`Welcome ${this.username}`)
     }

     return this;
}

const userOne = new User("Ritesh", 6, true)
const userTwo = new User("RKS", 4, false)
console.log(userOne.constructor)
console.log(userTwo)



/*
// Constructor function to create User objects
function User(username, logInCount, isLoggedIn) {

    // Assigning values to the object's properties

    this.username = username;           
    this.logInCount = logInCount;        
    this.isLoggedIn = isLoggedIn;        

    // Defining a method that will greet the user
    this.greeting = function() {
        console.log(`Welcome ${this.username}`); 
    }

    // Returning the object instance (optional in constructor functions, as 'this' is returned automatically)

    return this;   // optional as stated up;
}

// Creating instances of User
const userOne = new User("Ritesh", 6, true);  
const userTwo = new User("RKS", 4, false);   

// Logging the constructor property of userOne, which should point to the User function
console.log(userOne.constructor);  

// Logging userTwo object
console.log(userTwo);
 */

