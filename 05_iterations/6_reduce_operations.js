// Define an array of numbers
const myNums = [1, 2, 3];

// Use reduce to calculate the total sum of the array elements
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

// Log the total sum to the console
console.log(myTotal); // Output: 6

// Define an array of objects representing items in a shopping cart
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

// Use reduce to calculate the total price of all items in the shopping cart
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

// Log the total price to the console
console.log(priceToPay); // Output: 22996
