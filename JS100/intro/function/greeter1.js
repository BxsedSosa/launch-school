let rlSync = require('readline-sync');

function greet() {
  let firstName = rlSync.question('What is your first name?\n');
  let lastName = rlSync.question('What is your last name?\n')
  return `Hello, ${firstName} ${lastName}!`
}

let result = greet()
console.log(result)