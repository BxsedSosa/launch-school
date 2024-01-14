let rlSync = require('readline-sync');

function multiply() {
  let num1 = rlSync.question('Number 1?: \n');
  let num2 = rlSync.question('Number 2?: \n');

  return num1 * num2
}

let result = multiply();
console.log(result)