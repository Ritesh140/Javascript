// destructuring

// Create a course object with properties
const course = {
    courseName: "JavaScript",
    courseFee: "999",
    courseInstructor: "Hitesh"
};

// Log the courseInstructor property of the course object
console.log(course.courseInstructor); 
// Output: "Hitesh"

// Destructure the courseInstructor property from the course object
const { courseInstructor } = course;
console.log(courseInstructor); 
// Output: "Hitesh"

// Destructure the courseInstructor property and rename it to instructor
const { courseInstructor: instructor } = course;
console.log(instructor); 
// Output: "Hitesh"

/**
 Explanation of Destructuring

1 - Accessing Property Directly:

console.log(course.courseInstructor);
Outputs the courseInstructor property directly from the course object.
Output: "Hitesh"

2 - Basic Destructuring:

const { courseInstructor } = course;
Extracts the courseInstructor property from the course object and assigns it to a variable named courseInstructor.
Output: "Hitesh"


3 - Destructuring with Renaming:

const { courseInstructor: instructor } = course;
Extracts the courseInstructor property from the course object and assigns it to a variable named instructor.
Output: "Hitesh"
 */


// Example JSON object
const exampleObject = {
    name: "Hitesh",
    courseName: "JS in Hindi",
    price: "Free"
};

// Example array of objects
const exampleArray = [
    { id: 1, value: "a" },
    { id: 2, value: "b" },
    { id: 3, value: "c" }
];

console.log(exampleObject); 
// Output: { name: 'Hitesh', courseName: 'JS in Hindi', price: 'Free' }

console.log(exampleArray); 
// Output: [ { id: 1, value: 'a' }, { id: 2, value: 'b' }, { id: 3, value: 'c' } ]
