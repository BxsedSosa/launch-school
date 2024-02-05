// Alan wrote the following function, which was intended to return all of the factors of number:

// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);
//   return factors;
// }

// Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. How can he make this work without using a do/while loop? Note that we're not looking to find the factors for 0 or negative numbers, but we want to handle it gracefully instead of raising an exception or going into an infinite loop.

// Bonus: What is the purpose of number % divisor === 0 in that code?

//The number % divisor === 0 is checking if the number used is divisable number

/*
P:

Problem is asking to check the code and make it so that negative or 0 if ever inputed dont raise exception or go infinite loop
also not using do while loop.

*/

/*
E:

input:
  any number > 0

output:
  array of factors fo that number
*/

/*
D:

Data needed:
  numbers
  arrays
*/

/*
A:

Create function
  -takes 1 parameter of number

Create Variables
  -divisor equal to number
  -factors with a empty array

Create for loop
  - iterating over the divisor
    - if number > 0
      - if number % divisor is equal to 0
        -push (number / divisor
      - else if divisor !== 0
        return factors
*/

//C:

function factors(number) {
  let divisor = number;
  let factors = [];

  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
}
