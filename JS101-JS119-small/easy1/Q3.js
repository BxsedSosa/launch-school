/*

Even Numbers

Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

*/

/*
P:

  Problem is asking to console log all even numbers between 1 - 99
*/

/*
E:

  Input:
    99
*/

/*
D:

  Data needed:
    Number
*/

/*
A:

  create a function called logOdd
    create a for loop if index < number given increment index
      if index modulo of 2 equals to 0
        console.log number 
*/

//C:

function logOdd(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

logOdd(99);