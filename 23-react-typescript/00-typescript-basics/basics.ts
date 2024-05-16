//primitive types : number, string, booleaan, null & undefined
//complex types: arrays, objects
//function types, parameters

//primitives

let age: number;

age = 23;

let userName: string;

userName = "Shashi";

let isStudent: boolean;

isStudent = false;

//complex types
//-arrays
let hobbies: string[];

hobbies = ["eat", "code", "sleep"];

//or

let habits: string[] = ["eat", "code", "sleep"];

//--objects

//for using the same structure at multiple places we use type keyword
type Person = {
  name: string;
  age: number;
};

let user: Person;

user = {
  name: "shashi",
  age: 23,
};

//if we want array of objects such as array of users

// let employeesList: {
//   name: string;
//   id: number;
// }[];
//or

let employeesList: Person[];

employeesList: [
  {
    name: "shashi",
    id: 23,
  },
  {
    name: "jagadeesh",
    id: 27,
  },
];

//union types- allow to define more than one type

let course: string | number = "react course";

course = 1221;

//functions & types

function addition(a: number, b: number) {
  return a + b;
}

function printOutput(value: any){
    console.log(value)
}

//Generics function - it helps ts to know whther it is of which type..

function insertAtBeginning<T>(array : T[], value : T){
    const newArray = [value, [...array]]
    return newArray
}
//hover on the function to know it is of which type
// <t> - this is the generic 
//you can try before removing it and after removing it
const demoArray = [1,2,3]
const updatedArray = insertAtBeginning(demoArray, -1) // [-1, 1, 2, 3]

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')
