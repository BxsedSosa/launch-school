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