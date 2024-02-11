/*

How big is the room?

Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

Example:

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

*/

/*
P:

Question is asking to create a program that ask for the length and the width of a room then returns square meters and sqft
*/

/*
E:

  input:
    user input of lenth
    user input of width

  output:
    sq meters and in parentheses sqft
*/

/*
D:

  data needed:
    Numbers
*/

/*
A:

  Create a const readline
    equal to require('readline-sync')

  Create function called sqMeters

  create a variable called userLength
    which will have a method of readline.questions()
      inside the parentheses will have 'Enter the length of the room: \n'

  create a variable called userWidth
    which will have a method of readline.questions()
      inside the parentheses will have 'Enter the width of the room: \n'

  create variable result
    which is going to multiple userLength * userWidth

  then console.log 
    `The area of the room is ${result} square meters (${result * 10.7639} square feet)
  
*/

//C:

const readline = require('readline-sync');

function sqMeters() {
  const sqMeters_To_Sqfeet = 10.7639
  let userLength = Number(readline.question('Enter the length of the room: \n'));
  let userWidth = Number(readline.question('Enter the width of the room: \n'));
  let result = userLength * userWidth;
  console.log(`The area of the room is ${result} square meters (${result * sqMeters_To_Sqfeet} sqaure feet)`);
}

sqMeters();