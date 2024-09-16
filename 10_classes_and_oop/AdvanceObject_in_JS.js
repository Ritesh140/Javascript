console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);


const book = {
    name : 'Data Structures',
    price : 499,
    isAvailable: true,

    orderBook : function(){
        console.log("Book nhi mili")
    }
}

// Get the property descriptor for the 'name' property of the book object
console.log(Object.getOwnPropertyDescriptor(book, "name"));


// Modify the 'name' property descriptor to make it non-enumerable
Object.defineProperty(book, 'name', {
    enumerable: false,    // This will exclude the 'name' property from enumeration
                                                            
});

// Get the updated property descriptor for 'name' after making it non-enumerable

console.log(Object.getOwnPropertyDescriptor(book, "name"));


// Iterate over the book object using Object.entries(), but 'name' won't appear since it's non-enumerable
for (let [key, value] of Object.entries(book)) {
    if (typeof value !== 'function') {
        // Only log properties that are not functions (exclude 'orderBook' method)
        console.log(`${key} : ${value}`);
    }
}
/*
Output:
price : 499
isAvailable : true
// 'name' is missing because it's now non-enumerable
*/