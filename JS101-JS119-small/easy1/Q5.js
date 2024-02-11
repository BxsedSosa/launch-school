/*

How big is the room?

Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

Example:

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

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