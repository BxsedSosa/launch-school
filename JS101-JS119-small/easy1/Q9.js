/*

Leap Years (Part 2)

This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to determine leap years both before and after 1752.

Examples:

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true

*/

/*
P:

  Question is asking to take the previous question but add a new stipulation to it. IF the year is before 1752 then any number divisible by 4 is a considered a leap year. After 1752 will still be the same question as before
*/

/*
E:

  Input:                 Output:
  isLeapYear(2016);      // true
  isLeapYear(2015);      // false
  isLeapYear(2100);      // false
  isLeapYear(2400);      // true
  isLeapYear(240000);    // true
  isLeapYear(240001);    // false
  isLeapYear(2000);      // true
  isLeapYear(1900);      // false
  isLeapYear(1752);      // true
  isLeapYear(1700);      // true
  isLeapYear(1);         // false
  isLeapYear(100);       // true
  isLeapYear(400);       // true

*/

/*
D:

  data needed:
    numbers
*/

/*
A:

  Create a function that takes a number as the parameter

  check with if statement if year is before 1752
    if before 1752 then if number modulo of 4 is equal to 0
    then return true

  if after 1752 
    if number % 4 equal to 0 
    if number % 100 NOT equal to 0
      return true
    else if number % 400 equal to 0
      return true
  return false
*/

//C:

function isLeapYear(number) {
  if (number < 1752) {
    if (number % 4 === 0) {
      return true;
    }
    return false;
  } else {
    if (number % 4 === 0) {
      if (number % 100 !== 0) {
        return true;
      } else if (number % 400 === 0) {
        return true;
      }
    }
    return false;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true