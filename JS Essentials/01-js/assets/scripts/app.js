import { apiKey, abc } from "./util.js";
import * as util from "./util.js";
import { apiKey, abc as content } from "./util.js";
import * as variables from "./variables.js";
import * as operators from "./operators.js";
import * as functions from "./functions.js";

function combine(a, b, c) {
  return (a * b) / c;
}

const result = combine(8, 4, 2);
console.log(result)

function add(a, b) {
  return "The sum is:", +a + b;
}

console.log(add(6, 4));

(userName, message) => {
  return message + userName;
};

const greet = sh(shashi, hello);

console.log(greet);
