/*


Squaring an Argument

Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).

Example:

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

*/

/*
P:

  The question is asking to use the previous questions function of multiply to create a square root function that will take 1 parameter of a number and return the square root value of that number
*/

/*
E:

  input:
    5
    -8

  Ouput:
    25
    64
*/

/*
D:

  data needed:
    number
*/

/*
A:

  Create function from previous question of multiply
    which will take 2 parameters
      Parameter 1 = number1
      parameter 2 = number2

    return number1 * number2

  Create function called square
    which will take 1 parameter
      parameter = num

    call multiply function
      giving 2 arguments of num for both parameters

    return then a comparison operation
      num * num
*/

//C:

function square(num) {
  return multiply(num, num);
}

function multiply(number1, number2) {
  return number1 * number2;
}

console.log(square(5) === 25);
console.log(square(-8) === 64);