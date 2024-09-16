class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}ritesh`
    }

    set password(value){
        this._password = value
    }
}

const ritesh = new User("rks@example.com", "abc")

console.log(ritesh.email);

console.log(ritesh.password);

/*
In this code, a class User is defined with getter and setter methods for email and password properties. This allows controlled access to and modification of these properties, with specific behaviors for getting and setting the values.

Detailed Breakdown:

Class Constructor:

The User class constructor takes two arguments: email and password.
Inside the constructor, these arguments are assigned to the class's internal properties: _email and _password.


Getter and Setter for email:

Getter: When the email property is accessed (e.g., ritesh.email), the getter returns the _email value converted to uppercase.
Setter: When the email property is set (e.g., ritesh.email = "new_email@example.com"), the setter updates the internal _email property with the new value.

Getter and Setter for password:

Getter: When the password property is accessed (e.g., ritesh.password), the getter returns the _password value with the string "ritesh" appended to it.
Setter: When the password property is set (e.g., ritesh.password = "new_password"), the setter updates the internal _password property with the new value.



Summary 

Constructor: Initializes the email and password properties by using their respective setters.

Getters:
The get email method returns the email in uppercase.
The get password method appends the string 'ritesh' to the password.

Setters:
The set email and set password methods store values in the private variables _email and _password.

Output: When accessing ritesh.email, the email is displayed in uppercase; when accessing ritesh.password, the password has 'ritesh' appended to it.
*/