const maths = require("./maths");
const add = maths.add;
const subtract = maths.subtract;

// const {add, subtract} = require("./maths"); does the same as line 1-> 3

const cowsay = require("cowsay"); // doesn't use a ./ as it's in node modules


console.log(add(12, 7));