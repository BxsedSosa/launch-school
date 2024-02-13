/*


Exclusive Or

The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one, but not both, of two conditions to be truthy: the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

Examples:

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true

*/

/*
P:

  Create a function called 'xor' that takes 2 parameters and we are checking that only 1 of the given arguments are considered true. if so return true. else if both arguments are true then return false. We are only looking for 1 of the arguments to be true NOT both
*/

/*
E:

  Input:
    5, 0
    false, true
    1, 1
    true, true

  Output:
    true
    true
    true
    true
*/

/*
D:

  data needed:
    2 arguments that are truthy values
*/

/*
A:

  create function called xor
    2 parameters
      parameter 1 is value1
      parameter 2 is value2

    if value1 and value2
      are equal to one another
      return false

    else 
      return true
*/

//C:

function xor(value1, value2) {
  return value1 === value2 ? false : true
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true