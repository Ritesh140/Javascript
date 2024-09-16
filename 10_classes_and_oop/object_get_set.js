const User = {
   _email : "rks@example.com",
   _password : "abc",

   get email(){
      return this._email.toUpperCase()
   },

   set email(value){
    this._email = value
   },

   get password(){
     return `${this._password}rks`
   },

   set password(value){
    this._password = value
   }

}

const ritesh = Object.create(User)

console.log(ritesh.email);
console.log(ritesh.password);