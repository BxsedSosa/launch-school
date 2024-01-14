let rlSync = require('readline-sync');

function numberRange() {
  let num = rlSync.question('Enter a number: \n');

  if ( num >= 0 && num <= 50) {
    return `${num} is between 0 and 50`;
  } else if (num >= 51 && num <= 100) {
    return `${num} is between 51 and 100`;
  } else if (num > 100) {
    return `${num} is greater than 100`;
  } else {
    return `${num} is less than 0`;
  }
}

let result = numberRange();
console.log(result)