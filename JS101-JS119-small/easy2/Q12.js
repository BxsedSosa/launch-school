/*


Always Return Negative

Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

Examples:

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

*/

/*
P:

  Create a function that takes 1 parameter of a number and make that number output as negative. If the number is already negative then just return it
*/

/*
E:

  Input:  
    5
    -3
    0

  Output:
    -5
    -3
    -0
*/

/*
D:

  data needed:
    numbers 
*/

/*
A:

  Create a function called alwaysNegative takes 1 parameter
    parameter is called number

    if number is less than 0
      return the number

    else
      return number times negative 1
*/

//C:

function alwaysNegative(number) {
  return number < 0 ? number : number * -1;
}

console.log(alwaysNegative(5));
console.log(alwaysNegative(-3));
console.log(alwaysNegative(0));