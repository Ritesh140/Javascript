// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

/////

const salary = 5000;

switch (true) {
    case (salary < 3000):
        console.log("Salary is less than 3000");
        break;
    case (salary >= 3000 && salary < 5000):
        console.log("Salary is between 3000 and 4999");
        break;
    case (salary >= 5000 && salary < 7000):
        console.log("Salary is between 5000 and 6999");
        break;
    case (salary >= 7000):
        console.log("Salary is 7000 or more");
        break;
    default:
        console.log("Invalid salary");
}

////

const educationLevel = "Bachelor";

switch (educationLevel) {
    case "High School":
        console.log("Education level is High School");
        break;
    case "Associate":
        console.log("Education level is Associate Degree");
        break;
    case "Bachelor":
        console.log("Education level is Bachelor's Degree");
        break;
    case "Master":
        console.log("Education level is Master's Degree");
        break;
    case "Doctorate":
        console.log("Education level is Doctorate Degree");
        break;
    default:
        console.log("Unknown education level");
}
