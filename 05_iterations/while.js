
let index = 0
 while (index <= 10) {
     console.log(`Value of index is ${index}`);
     index = index + 2
 }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

//////


// Example: Summing Numbers

//for Loop

let sumFor = 0;
for (let i = 1; i <= 10; i++) {
    sumFor += i;
}
console.log(`Sum using for loop: ${sumFor}`);


// while Loop

let sumWhile = 0;
let j = 1;
while (j <= 10) {
    sumWhile += j;
    j++;
}
console.log(`Sum using while loop: ${sumWhile}`);


// do...while Loop

let sumDoWhile = 0;
let k = 1;
do {
    sumDoWhile += k;
    k++;
} while (k <= 10);
console.log(`Sum using do...while loop: ${sumDoWhile}`);


////

// Example: Printing Array Elements


// for Loop

const arrayFor = ['apple', 'banana', 'cherry'];

for (let i = 0; i < arrayFor.length; i++) {
    console.log(`Element at index ${i} is ${arrayFor[i]}`);
}



// while Loop

const arrayWhile = ['apple', 'banana', 'cherry'];
let l = 0;

while (l < arrayWhile.length) {
    console.log(`Element at index ${l} is ${arrayWhile[l]}`);
    l++;
}


// do...while Loop

const arrayDoWhile = ['apple', 'banana', 'cherry'];
let m = 0;

do {
    console.log(`Element at index ${m} is ${arrayDoWhile[m]}`);
    m++;
} while (m < arrayDoWhile.length);


//
// Example: Finding the First Even Number
// for Loop

const numbersFor = [1, 3, 7, 8, 10];

for (let i = 0; i < numbersFor.length; i++) {
    if (numbersFor[i] % 2 === 0) {
        console.log(`First even number is ${numbersFor[i]}`);
        break;
    }
}


//while Loop

const numbersWhile = [1, 3, 7, 8, 10];
let n = 0;

while (n < numbersWhile.length) {
    if (numbersWhile[n] % 2 === 0) {
        console.log(`First even number is ${numbersWhile[n]}`);
        break;
    }
    n++;
}


// do...while Loop

const numbersDoWhile = [1, 3, 7, 8, 10];
let x = 0;

do {
    if (numbersDoWhile[x] % 2 === 0) {
        console.log(`First even number is ${numbersDoWhile[x]}`);
        break;
    }
    x++;
} while (x < numbersDoWhile.length);