/*

Sum or Product of Consecutive Integers

Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Examples:

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
*/

/*
P:

Question is asking to create a program that takes a integer greater than 0 and when its greater then 0 chose 's' for sum or 'p' for product of the number given

then print weather they chose sum or product
*/

/*
E:

  input:
    number > 0
    string of 's' or 'p'

  output:
    sum of all integers between 1 and number
    or
    product of all integers between 1 and number
*/

/*
D:

  data needed:
    number
    string

*/

/*
A:

  create const readline
    equal to require('readline-sync')

  create function called sumOrProduct

  asking question variable equal to userInteger
    'please enter an integer greater than 0: '
    
    while
    if userInteger is not greater than 0
      'please enter an integer greater than 0: '
      
      ask question variable equal to userAnswer
        Enter "s" to compute the sum, or "p" to compute the product. p

        while
        if userAnswer does not equal to s or p
          Enter "s" to compute the sum, or "p" to compute the product. p

        create variable called total
        
          Make this a helper function which will take parameter of the userAnswer

          if s is returned from user
          create a for loop 
          which iterates over the number given and adds all of the numbers between 1 and the userInteger
          save to total

          if p is returned from user
          create a for loop
          which iterates over the number given and multiples all of the numbers between 1 and the userInteger
          save to total

        console log
          the (product/sum) of the integers between 1 and userInteger is total 
        ]
*/

//C:

const readline = require('readline-sync');

function sumOrProduct() {
  let userInteger = Number(readline.question('Please enter an integer greater than 0: \n'));

  while (!userInteger > 0 || userInteger < 0) {
    userInteger = Number(readline.question('Please enter an integer greater than 0: \n'));
  }

  let userAnswer = String(readline.question('Enter "s" to compute the sum, or "p" to compute the product: \n'));

  while (!['s','p'].includes(userAnswer)) {
    userAnswer = String(readline.question('Enter "s" to compute the sum, or "p" to compute the product: \n'));
  }

  if (userAnswer === 's') {
    let sumResult = sum(userInteger);
    console.log();
    console.log(`The sum of the integers between 1 and ${userInteger} is ${sumResult}`);
  } else if (userAnswer === 'p') {
    let productResult = product(userInteger);
    console.log();
    console.log(`The product of the integers between 1 and ${userInteger} is ${productResult}`);
  }


}

function sum(userInteger) {
  let total = 0;
  for (let i = 1; i <= userInteger; i++) {
    total += i;
  }
  return total;
}

function product(userInteger) {
  let total = 1;
  for (let i = 1; i <= userInteger; i++) {
    total *= i;
  }
  return total;
}
sumOrProduct();