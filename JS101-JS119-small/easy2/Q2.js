/*


Greeting a user

Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

Examples

What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?

*/

/*
P:

  Question is asking to create a program will ask for your name and it will outupt hello <name>
*/

/*
E:

  Input:
    name from user

  Output:
    Hello <name>
    HELLO <name with '!' uppercase all>. WHY ARE WE SCREAMING
*/

/*
D:

  data needed: 
    strings
*/

/*
A:
  Create const called readline
    require ('readline-sync')

  Create function called helloName
  
  Ask user for name saved to variable userName

  if the userName includes '!'
    console log
      HELLO <userName>. WHY ARE WE SCREAMING?

  else
    console log
      Hello <userName>.
*/

//C:

const readline = require('readline-sync');

function helloName() {
  let userName = readline.question('What is your name?: \n');

  if (userName.includes('!')) {
    console.log(`HELLO ${userName.toUpperCase()}. WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${userName}.`);
  }
}

helloName();