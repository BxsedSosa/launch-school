/*

Stringy Strings

Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

Examples:

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

*/

/*
P:

  Need to create a functiono in which takes a number as an input. With this number we will return a string of numbers which will alternate with 1 and 0 starting with the number 1
*/

/*
E:

  Input:         Output:
  stringy(6);    // "101010"
  stringy(9);    // "101010101"
  stringy(4);    // "1010"
  stringy(7);    // "1010101"

*/

/*
D:

  data needed:
    number
    string
*/

/*
A:

  Create a function called stringy with 1 parameter which will be called num

  create a variable with let called newString with a empty array

  create a for loop which will take the num and iterate through that increasing manner
  
  and will check if the number is odd with modulo and if it returns a 1 then it will push a 1 to newString

  else if not odd (even) it will push a 0 to newString

  return newString with join method and input a empty string in the parenthesis
*/

//C:

function stringy(num) {
  let newString = [];

  for (let i = 0; i < num; i++) {
    if (i % 2 === 1) {
      newString.push(0);
    } else {
      newString.push(1);
    }
  }
  return newString.join('');
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"