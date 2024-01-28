// Write a one-line expression to count the number of lower-case t characters in each of the following strings:

// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

/*
P:

Question is asking to create a one line express that will count only lower case t's within the strings given
*/

/*
E:

Input:
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

Output:
2
0

*/

/*
D:

Data structures needed:
  - Strings
*/

/*
A:

Will need to create a variable for regex
I will be using the match method to create the one line expression
console.log
*/

//C:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
let regex = /[t]/g;
console.log(statement1.match(regex).length);
// console.log(statement2.match(regex).length);

//doesnt work for the second statment since it is equal to 0

//solution

/*
statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;
*/

//Creating a for loop that will work the same way

function charOccurrence(string, checkLetter) {
  let count = 0 ;
  for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {
    if (string[stringIndex] === checkLetter) {
      count++;
    }
  }
  return count;
}

let result = charOccurrence(statement1, 't');
let result2 = charOccurrence(statement2, 't');
console.log(result)
console.log(result2)