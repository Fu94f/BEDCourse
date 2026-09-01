//Make 3 variables about yourself:  
//firstName (string)  
//favoriteNumber (number)  
//likesCoding (boolean)  
//Print them in a full sentence using template literals:  
//console.log(`Hi, my name is ${firstName}, my favorite number is ${favoriteNumber}, and it is ${likesCoding} that I like coding.`);  
//Run the script in Node.js and take a screenshot of the output.  
//(Optional) Push the file to GitHub.  

//console.log("Hello World!");


const firstName = "Fulvia";
const favoriteNumber = 8 ;
const likesCoding = true ;

console.log(`Hi, my name is ${firstName}, my favorite number is ${favoriteNumber}, and it is ${likesCoding} that I like coding.`);

//Add two more variables:  
//birthYear (number)  
//currentYear (number)  
//Calculate your age using subtraction.  
//Print another sentence with your age:  

const birthYear = 1994;
const currentYear = 2026;

let myAge = currentYear - birthYear;

console.log(`Hi, my name is ${firstName} and I am ${myAge} years old.`);

// Make an array of your 3 foods.  
//Make an object called “student” that contains:  
//Your name  
//Favourite number  
//likesCoding  
//the array of foods  
//Print the whole object and also one of the properties.  

let favoriteFoods = ["pizza", "pasta", "fries"];

const student = {
    firstName: "Fulvia",
    favoriteNumber : 8,
    likesCoding : true,
    foods : ["pizza", "pasta", "fries"]
};

console.log(student);
console.log(student.firstName);
console.log(student.favoriteNumber);
console.log(student.likesCoding);
console.log(student.foods);
console.log(student.foods[2]);
console.log(`Hi, my name is ${student.firstName}, my favorite number is ${student.favoriteNumber}, my favorite food is ${student.foods[0]} and it is ${likesCoding} that I like coding.`);