



let myHeros = ["Thor", "Spiderman"]

let heroPower = {
    Thor: "Hammer",
    Spiderman: "Sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.ritesh = function(){
    console.log(`ritesh is present in all object`);
}

Array.prototype.heyRitesh = function(){
    console.log(`ritesh say hello`);
}


myHeros.ritesh()
heroPower.ritesh()
myHeros.heyRitesh()
//heroPower.heyRitesh()

/*
there is an issue when trying to call the heyRitesh method on heroPower. Here's a breakdown of what is happening and why:

Issues:
Prototype Chain Issue with heyRitesh:

You added the heyRitesh method to the Array.prototype. This means that only arrays will have access to this method.
However, you are trying to call heroPower.heyRitesh(), but heroPower is not an array, it's an object. Therefore, it will not have access to Array.prototype.heyRitesh.


No issue with ritesh method:

ritesh method was added to Object.prototype. Since both arrays and objects are instances of Object, they inherit this method. Therefore, calling ritesh() on both myHeros and heroPower works fine.
 */



// inheritance

const User = {
   name : "ritesh",
   email : "rks@example.com"
}

const Teacher = {
   makeVideo : true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__ : TeachingSupport    // Inheriting from TeachingSupport
}


// Setting User as the prototype of Teacher
Teacher.__proto__ = User

// Modern syntax for setting prototype (equivalent to __proto__)
Object.setPrototypeOf(TeachingSupport, Teacher)


let anUser = "rks   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`)
}

anUser.trueLength()
"ritesh".trueLength()
"singh".trueLength()