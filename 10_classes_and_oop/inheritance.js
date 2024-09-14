// Parent class: user

class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username}`);
    }
}

// Child class: anotherUser


class anotherUser extends user{
    constructor(username,email,password){
        super(username),

        this.email = email,
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`)
    }
}

const deatils = new anotherUser("rks", "rks@example.com", "123")

deatils.logMe();
deatils.addCourse();

const data = new user("ritesh")

data.logMe();
 // data.addCourse();  // This line will throw an error because addCourse() is not defined in user class
 //it is trying to call data.addCourse(), but data is an instance of user, which does not have the addCourse() method.

 console.log(deatils === data)
 console.log(deatils === anotherUser)
 console.log(deatils instanceof anotherUser)
 console.log(deatils instanceof user)



 /*
 deatils is an instance of the anotherUser class.
 data is an instance of the user class.
 */
/*
false  // deatils and data are different objects
false  // deatils is an instance, not the class constructor itself
true   // deatils is an instance of anotherUser
true   // deatils is also an instance of user (due to inheritance)

*/