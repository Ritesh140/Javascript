class User {
    constructor(username, email, password){
        this.username = username;
        this.email= email;
        this.password = password
    }

    encryptPassword(){
      return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const deatils = new User("ritesh" , "ritesh@example.com", "123")

console.log(deatils.encryptPassword());
console.log(deatils.changeUserName())


// behind the scene

function anUser(username, email, password){
    this.username = username;
    this.email= email;
    this.password = password
}

anUser.prototype.encryptPassword = function(){
    return `${this.password}abcd`
}

anUser.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const data = new anUser("rks", "rks@example.com", "12345")

console.log(data.encryptPassword());
console.log(data.changeUserName());