let rlSync = require('readline-sync');

function factorial() {
  let num = rlSync.question('Enter a number: \n');
  let sum = 1;

  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}

let result = factorial();
console.log(result)