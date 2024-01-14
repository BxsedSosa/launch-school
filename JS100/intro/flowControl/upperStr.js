let rlSync = require('readline-sync');

function upStr() {
  let str = rlSync.question('Enter a string: \n');

  if (str.length >= 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

let result = upStr();
console.log(result)