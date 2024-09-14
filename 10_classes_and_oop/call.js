
function setUserName(username){
      this.username = username
}

function createUser(username, email, password){
     setUserName.call(this, username),

    this.email = email,
    this.password = password
}

const deatils = new createUser("ritesh", "rks@example.com", "123")

console.log(deatils)



/*
setUserName.call(this, username):

The call() method allows you to invoke the setUserName function, setting the this context to the newly created createUser object.
This way, username gets assigned to the username property of the createUser object.
 */


/*
The call() method in JavaScript is a built-in function that allows you to invoke a function and explicitly set the value of this inside that function. In other words, call() lets you control the context in which a function is executed.

Syntax:

code 
      functionName.call(thisArg, arg1, arg2, ...);


functionName: The function you want to call.
thisArg: The value of this to be used inside the function.
arg1, arg2, ...: Any arguments you want to pass to the function.
 */