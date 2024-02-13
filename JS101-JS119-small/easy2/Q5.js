/*


Arithmetic Integer

Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

Example

==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23

The final output above shows how JavaScript displays numbers that are too large for its Number type. The number represents approximately 1.41 * 100,000,000,000,000,000,000,000 using what is called floating-point notation. If you want to see what the exact value is, you can use JavaScript's BigInt type by appending an n to both 23 and 17:

> 23n ** 17n    // 141050039560662968926103n

*/

/*
P:

  Create a program that will ask user for 2 numbers. once both numbers are recieved then program will print out mutiple operations:
  addition
  subtraction
  product
  quotient
  remainder
  power
*/

/*
E:

  input:
  23
  17

  output:
    23 + 17 = 40
    23 - 17 = 6
    23 * 17 = 391
    23 / 17 = 1
    23 % 17 = 6
    23 ** 17 = 1.4105003956066297e+23
*/

/*
D:

  data needed:
    numbers
*/

/*
A:
  create function called prompt
    which will have 1 parameter calld input
      and will console log
      with a '==>' in the beginning before the text given

  create const readline
    require('readline-sync')

  create a function called arithmeticInt
  
    using prompt
      ask user 'Enter the first number'

    Create variable userNum1
      which will ask user a question for the first number

    using prompt
      ask user 'Enter the second number'

    Create variable userNum2
      which will ask user a question for the second number
    
    print
      all operations below showing the operation and numbers used and total at the end
*/

//C:

const readline = require('readline-sync');

function arithmeticInt() {
  prompt('Enter the first number:');
  let userNum1 = Number(readline.question());

  prompt('Enter the second Number:');
  let userNum2 = Number(readline.question());

  prompt(`${userNum1} + ${userNum2} = ${userNum1 + userNum2}`);
  prompt(`${userNum1} - ${userNum2} = ${userNum1 - userNum2}`);
  prompt(`${userNum1} * ${userNum2} = ${userNum1 * userNum2}`);
  prompt(`${userNum1} / ${userNum2} = ${Math.floor(userNum1 / userNum2)}`);
  prompt(`${userNum1} % ${userNum2} = ${userNum1 % userNum2}`);
  prompt(`${userNum1} ** ${userNum2} = ${userNum1 ** userNum2}`);
}

function prompt(input) {
  console.log(`==> ${input}`);
}

arithmeticInt();