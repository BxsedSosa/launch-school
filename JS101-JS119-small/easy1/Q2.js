/*

Odd Numbers

Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

*/

/*
P:

Question is asking to log all odd numbers from 1 - 99
*/

/*
E:

  input:
    100
*/

/*
D:

  data needed:
    number
*/

/*
A:

  create a function called logOdd
    create a for loop if index < number given increment index
      if index modulo of 2 equals to 1
        console.log number 
*/

//C:

function logOdd(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

logOdd(99);