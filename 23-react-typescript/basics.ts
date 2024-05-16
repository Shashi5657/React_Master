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

let user: {
  name: string;
  age: number;
};

user = {
  name: "shashi",
  age: 23,
};

//if we want array of objects such as array of users

let employeesList: {
  name: string;
  id: number;
}[];

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
