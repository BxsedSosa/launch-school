/*

Tip Calculator

Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

Example:

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00

*/

/*
P:

  Question is asking to create a bill calulator which takes the bill amount and the percent you want to tip
*/

/*
E:

  input:
    bill amount
    tip percent

  output:
    tip amount
    total amount
*/

/*
D:

  data needed:
    numbers
*/

/*
A:

  Create a const readline
  equal to require('readline-sync')

  Create a function call billCalculator

  Create a variable called billAmount
    it will take user input of what the bill amount was

  Create a variable called tip
    It will take user input of what the tip percent they want to give
  
  Create a variable called tipPercent
    which will convert the whole number of tip to a percentage 

  Create variable called tipAmount
    which will calculate billAmount * tipPercent

  Create variable called totalAmount
    which will calculate the tipAmount plus the billAmount

  console log tipAmount
  console log totalAmount
*/

//C:

const readline = require('readline-sync');

function billCalculator() {
  let billAmount = parseFloat(readline.question('What is the bill?: \n'));
  let tip = parseFloat(readline.question('What is the tip percentage?: \n'));
  let tipPercent = tip / 100;
  let tipAmount = billAmount * tipPercent;
  let totalAmount = tipAmount + billAmount;

  console.log()
  console.log(`The tip is $${tipAmount.toFixed(2)}`);
  console.log(`The total is $${totalAmount.toFixed(2)}`);
}

billCalculator();