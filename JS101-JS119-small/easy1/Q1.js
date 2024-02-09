/*
Isn't it Odd?

Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

Examples:

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
*/

/*
P:

  Question is asking to make a function that checks if the number given is odd
*/

/*
E:

  input:
    console.log(isOdd(2)); // => false
    console.log(isOdd(5)); // => true
    console.log(isOdd(-17)); // => true
    console.log(isOdd(-8)); // => false
    console.log(isOdd(0)); // => false
    console.log(isOdd(7)); // => true
*/

/*
D:

data needed:
  numbers
*/

/*
A:

  Create function called isOdd
    using a tenery operation
    using '% 2' to see if it returns 1
    if equal to 1 return true else return false
*/

//C:

function isOdd(number) {

  return number % 2 ? true : false;
}

console.log(isOdd(2));
console.log(isOdd(5));
console.log(isOdd(-17));
console.log(isOdd(-8));
console.log(isOdd(0));
console.log(isOdd(7));