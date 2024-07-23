const score = 400;
console.log(score);  // Outputs the primitive number value 400

const balance = new Number(400);    // it is used to make type number
console.log(balance);  // Outputs an object of type Number with the value 400, created using the Number constructor

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));  // Outputs '400.00', formats the number to two decimal places



const anotherNumber = 456.8837;

console.log(anotherNumber.toPrecision(4));  // Outputs '456.9', formats the number to 4 significant digits
console.log(anotherNumber.toPrecision(5));  // Outputs '456.88', formats the number to 5 significant digits



const hundreds = 1000000;
console.log(hundreds.toLocaleString());  
// Outputs '1,000,000', formats the number with default locale (e.g., en-US)
console.log(hundreds.toLocaleString('en-IN')); 
 // Outputs '10,00,000', formats the number according to the Indian numbering system


 // +++++++++++++ Maths +++++++++++++++++++++++++++++


 console.log(Math);
 console.log(Math.abs(-7));
 console.log(Math.round(5.6));
 console.log(Math.round(5.4));
 console.log(Math.ceil(5.4));
 console.log(Math.floor(5.9));
 console.log(Math.min(5,3,5,2,7,8));
 console.log(Math.max(2,5,1,7,4,9,8));
 console.log(Math.sqrt(25));
 console.log(Math.log10(100));



 console.log(Math.random());  
 // Outputs a random number between 0 (inclusive) and 1 (exclusive)

 console.log(Math.random() * 10);    //number may start form 0 if it is 0.048 like
  // Outputs a random number between 0 (inclusive) and 10 (exclusive)
 
 console.log((Math.random() * 10) + 1);   //thats why we use +1 to remove 0  chance
   // Outputs a random number between 1 (inclusive) and 11 (exclusive)
 

   const min = 10
   const max = 20
   
   console.log((Math.random() * (max - min + 1)) + min);  
// Outputs a random floating-point number between 10 (inclusive) and 21 (exclusive)
   
   console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
    // Outputs a random integer between 10 (inclusive) and 20 (inclusive)
    

