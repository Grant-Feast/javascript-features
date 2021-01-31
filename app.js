// **********Default Params***************
// Default param......if a user doesn't pass in a number into the rollDie function a default of 6 is used.
// function rollDie(num = 6) {
//   return Math.floor(Math.random() * num) + 1;
// }

// *********Spread operator****************
// The spread operator is used when passing an itterable such as an array, which spreads the arguments so they can be read.
// const nums = [12, 3, 56, 42, 1, 32, 90, 6, 7];

// Math.max(...nums);

// **********Spread Operator with array literals

// Using the spread operator is the easiest way to print two seperate arrays together.
// const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// const weekendDays = ['Saturday', 'Sunday'];

// console.log(...workDays, ...weekendDays);

// **********Rest Params

// The rest parameter allows a function to accept an indefinate number of arguments.
// The first two names passed in will be given gold and silver
// From the 3rd name onwards the names will be listed in everyoneElse.
// const raceResults = (gold, silver, ...everyoneElse) => {
//   console.log(`Gold goes to ${gold}`);
//   console.log(`Silver goes to ${silver}`);
//   console.log(`And thanks to everyone else for taking part: ${everyoneElse}`);
// }

// ******Destructuring Arrays
// const names = ['Grant', 'Jade', 'Edie', 'Ryder', 'Peyton'];

// // class names are placed into array brackets and each name from the names array is placed with each of the classes.
// let [first, second, third, fourth, fith] = names;

// ******Destructuring Objects

const person = {
  firstname: 'Grant',
  lastname: 'Feast',
  age: 32,
  email: 'Grant@gmail.com'
}

// Destructuring objects are simmilar to destructuring arrays
// variables are asigned by placing the objects in curly braces, the object is then passed out through to the variable
// const {firstname, lastname, age, email} = person;

// New variables can be assigned by using a colon and then placing the new variable name you would like
const {firstname: name} = person;









