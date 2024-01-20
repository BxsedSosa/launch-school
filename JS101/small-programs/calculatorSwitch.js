// Ask the user for the first num
// Ask the user for the second num
// Ask user for opertaion to perform
// Perform the operation on the 2 numbers
// print result

let readline = require('readline-sync');

console.log('Welcome to Calculator!');

function calc() {
  let num1 = Number(readline.question('What would you like the first number to be?: \n'));
  let num2 = Number(readline.question('What would you like the second number to be?: \n'));
  let op = readline.question('What would you like the operator to be?: \n');

  switch (op) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      console.log('Invalid operator!');
  }
}

let result = calc();
console.log(result);