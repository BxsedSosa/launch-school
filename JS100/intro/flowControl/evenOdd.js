let rlSync = require('readline-sync');

function evenOdd() {
  let num = rlSync.question('Enter number: \n');

  if (Number(num)) {
    if (num % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  } else {
    return 'please enter a number'
  }  
  }

let result = evenOdd();
console.log(result)