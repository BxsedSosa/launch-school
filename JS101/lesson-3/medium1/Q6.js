// What do you think the following code will output?

// let nanArray = [NaN];

// console.log(nanArray[0] === NaN);

// Bonus:

// How can you reliably test if a value is NaN?

/*
P:

problem is asking what the following code will ouput below and bonus on how can you test reliably for the value of NaN
*/

/*
E:

Input:
let nanArray = [NaN];

console.log(nanArray[0] === NaN);
*/

/*
D:

Data needed:
  Array

*/

/*
A:

I believe that the output of the question will be:

False

Bonus:

to check if the nanArray variable is equal to NaN

You would use:

console.log(isNan(nanArray[0]))
*/

/*

Answer:
The output is false. NaN -- not a number -- is a special numeric value that indicates that an operation that was intended to return a number failed. JavaScript doesn't let you use == and === to determine whether a value is NaN.

Bonus Answer:

To test whether the value is NaN, we use the Number.isNaN() method:

console.log(Number.isNaN(nanArray[0])); // true
*/