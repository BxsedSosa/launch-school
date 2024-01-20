// Ask the user for the first num
// Ask the user for the second num
// Ask user for opertaion to perform
// Perform the operation on the 2 numbers
// print result

const readline = require('readline-sync');

console.log('Welcome to Calculator! \n');

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log('What Operator would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operator = readline.question();

let output;
if(operator === '1') {
  output = Number(number1) + Number(number2);
} else if (operator === '2') {
  output = Number(number1) - Number(number2);
} else if (operator === '3') {
  output = Number(number1) * Number(number2);
} else if (operator === '4') {
  output = Number(number1) / Number(number2);
} else {
  console.log('Enter valid operator!')
}

console.log(`The result is ${output}`);