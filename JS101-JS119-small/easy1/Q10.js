/*

Multiples of 3 and 5

Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

Examples:

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

*/

/*
P:

  question is asking number given add all the numbers together that are multiples of 3 or 5
*/

/*
E:

  Input:             Output:
  multisum(3);       // 3
  multisum(5);       // 8
  multisum(10);      // 33
  multisum(1000);    // 234168
*/

/*
D:

  Data needed:
    numbers

*/

/*
A:

  create function called multisum
    1 parameter called number

  create a variable total equal to 0
  
  create a for loop which iterates over the number
    if number % 3 equal to 0 or number % 5 equa to 0
      then add the index to total

    return total

*/

//C:

function multisum(number) {
  let total = 0;

  for (let i = 1; i < number; i++) {
    if (number % 3 === 0 || number % 5 === 0) {
      total += i;
      console.log(i);
    }
  }
  return total;
}
debugger;
console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168