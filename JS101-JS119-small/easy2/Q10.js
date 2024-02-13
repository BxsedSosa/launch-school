/*


When Will I Retire?

Build a program that logs when the user will retire and how many more years the user has to work until retirement.

Example:

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

*/

/*
P:

  Create a function that ask 2 questions whats yuor current age and when would you like to retire. With those you will print out what the current years is and will tell you what year you will retire. Then will print out have many more years you have left to go
*/

/*
E:

  Input:
    30
    70

  Output:
    It's 2017. You will retire in 2057.
    You have only 40 years of work to go!

*/

/*
D:

  data needed:
    numbers
    string
*/

/*
A:

  Create const readline equal to 
    require('readline-sync')
  Create a function called retirement
    Create const equal to the currentYear 2024
    print
      What is your age?
    Create a variable called userAge
      which holds questions for user to answer
    print
      At what age would you like to retire?
    Create a  variable called userRetireAge
      which holds questions for user to answer

    Create const equal to ageDifference. userRetireAge subtracted by userAge to get the age difference

    then print
      It's <currentYear>. You will retire in <currentYear + ageDifference>.
    print
      You have only <ageDifference> years of work to go!

*/

//C:

const READLINE = require('readline-sync');

function retirement() {
  const CURRENTYEAR = 2024;

  console.log('What is your age?:');
  let userAge = Number(READLINE.question());
  console.log('At what age would you like to retire?');
  let userRetireAge = Number(READLINE.question());
  
  const AGEDIFF = userRetireAge - userAge;

  console.log(`It's ${CURRENTYEAR}. You will retire in ${CURRENTYEAR + AGEDIFF}.`);
  console.log(`You have only ${AGEDIFF} years of work to go!`);
}

retirement();