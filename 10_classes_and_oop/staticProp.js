class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // Static method
    static createId() {
        return `123`;
    }
}

const ritesh = new User("ritesh");
// Static method is not called on instance
// console.log(ritesh.createId()); // This would cause an error

class Teacher extends User {
    constructor(username, email) {
        super(username); // Call parent class (User) constructor
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
// Attempt to call static method on an instance
// console.log(iphone.createId());  // This will throw an error

// Correct way to call the static method
console.log(Teacher.createId()); // Outputs: 123
