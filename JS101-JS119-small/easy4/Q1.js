/*

Searching 101

Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

Examples:

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.

/*

/*
P:

  Create a program that will ask the user for 6 numbers. the first 6 numbers given will be put into an array. while the last number the user enters will check if the given number is in the array of numbers they previously gave for the first 5 numbers
*/

/*
E:

  Input:
    25
    15
    20
    17
    23
    17
  
  Output:
    The number 17 appears in 25,15,29,17,23
*/

/*
D:

  Data needed:
    numbers
    strings
    arrays
*/

/*
A:
  Create constant called READLINE equal to require and inside the paratheses 'readline-sync'

  Create function called search no parameters needed
    Create a variable called numArray with a empty array
    Create a variable called num1 equal to readline question which will ask Enter the 1st number: \n 
    Create a variable called num2 equal to readline question which will ask Enter the 2nd number: \n
    Create a variable called num3 equal to readline question which will ask Enter the 3rd number: \n
    Create a variable called num4 equal to readline question which will ask Enter the 4th number: \n
    Create a variable called num5 equal to readline question which will ask Enter the 5th number: \n
    Create a variable called num6 equal to readline question which will ask Enter the last number: \n

    Then we will use the array push method to send all the num variables 1 - 5 to the numArray varaibile

    We will create a if statement that will check if num6 value is also in the numArray using the include method
      if true then it will output the console
        The number <num6> appears in <numArray>
      else
        The number <num6> does not appears in <numArray>

*/

//C:

const READLINE = require('readline-sync');

function search() {
  let numArray = [];

  let num1 = READLINE.question('Enter the 1st number: \n');
  let num2 = READLINE.question('Enter the 2nd number: \n');
  let num3 = READLINE.question('Enter the 3rd number: \n');
  let num4 = READLINE.question('Enter the 4th number: \n');
  let num5 = READLINE.question('Enter the 5th number: \n');
  let num6 = READLINE.question('Enter the last number: \n');

  numArray.push(num1, num2, num3, num4, num5);

  if (numArray.includes(num6)) {
    console.log(`The number ${num6} appears in ${numArray.join(',')}`);
  } else {
    console.log(`The number ${num6} does not appears in ${numArray.join(',')}`);
  }
}

search();