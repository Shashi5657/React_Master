// import { apiKey, abc } from "./util.js";
// import * as util from "./util.js";
// import { apiKey, abc as content } from "./util.js";
// import * as variables from "./variables.js";
// import * as operators from "./operators.js";
// import * as functions from "./functions.js";

// function combine(a, b, c) {
//   return (a * b) / c;
// }

// const result = combine(8, 4, 2);
// console.log(result);

// function add(a, b) {
//   return "The sum is:", +a + b;
// }

// console.log(add(6, 4));

// (userName, message) => {
//   return console.log(message + userName);
// };

//*********** Objects **********

// const student = {
//   name: "shashi",
//   id: 563,
// };

// console.log(student);

//*********** Arrays ***********
// const languages = ["html", "css", "js", "ReactJs"];
// console.log(languages);
// languages.push("java");
// console.log(languages);

// const index = languages.findIndex((item) => {
//   return item === "js";
// });

// console.log(index);

// const index1 = languages.map((item) => item + " !");
// console.log(index1);

// const index2 = languages.map((item) => ({ text: item }));
// console.log(index2);

// let numberArray = [1, 2, 3]

// const objective = numberArray.map((num)=> {
//     return ({val:num})
// })

// console.log(objective)

//******* JavaScript Destructuring *********

const names = ["arun", "rikky", "sritej"]

const [friend1, friend2, friend3] = ["arun", "rikky", "sritej"];

console.log(friend3);

const user = {
    name: "sathu",
    id:333
}

const {name:userName, id} = {
  name: "sathu",
  id: 333,
};
console.log(userName);
console.log(id)

//************ Spread Operator ***********8

const languages = ["html", "css", "js", "ReactJs"];
const newLanguages = ["nodejs"];
const mergedLanguages = [...languages, ...newLanguages];
console.log(mergedLanguages);

const student = {
  name: "shashi",
  id: 563,
};
const extendedStudent = {
  isStudent: true,
};
const mergedstudent = { ...student, ...extendedStudent };
console.log(mergedstudent);

//********** control structures ***********

const password = prompt();

if (password === "shashi") {
  console.log("hello Shashi");
} else if (password === "jagad") {
  console.log("hello jagad");
} else {
  console.log("who are you?");
}

const hobbies = ["eat", "sleep"]

for (const hobby of hobbies) {
    console.log(hobby)
}


//****** passing functions as values to another function ********

function user1() {
    console.log("this is user1")
}

function user2() {
    console.log("this is user2")
}

setTimeout(user1, 2000)
setTimeout(user2, 3000)
setTimeout(()=> { console.log("This is user3")},4000)

// ***** Defining functions inisde of a function ******

function init() {
    function greet() {
        console.log("helloooo")
    }

    greet()
}

init()