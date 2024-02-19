/*

ddaaiillyy ddoouubbllee

Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

Examples:

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

*/

/*
P:

  We are reciveing a string. which will have duplicate letters. We are only 'deleting' the consecutive duplicate characters.
*/

/*
E:

  Input:                                Output:
  crunch('ddaaiillyy ddoouubbllee');    // "daily double"
  crunch('4444abcabccba');              // "4abcabcba"
  crunch('ggggggggggggggg');            // "g"
  crunch('a');                          // "a"
  crunch('');                           // ""
*/

/*
D:

  Data needed:
    Strings
*/

/*
A:

  Create a function called crunch which will take 1 parameter
    the parameter is called str

  Create a variable called uniqueChar equal to a empty string
  Create a variable called newString equal to empty array

  if str is equal to a empty string return str

  create a for loop that will iterate over the length of the parameter 'str'
  if the 'str' current index doesnt match to the uniqueChar variable save str's current index to uniqueStr

  else push str's current index to newString

  then once its finished return the newString with join method
*/

//C:

function crunch (str) {
  let uniqueChar = '';
  let newString = [];

  if (str === '') {
    return str;
  } 

  for (let i = 0; i < str.length; i++){
    if (str[i] !== uniqueChar) {
      uniqueChar = str[i];
      newString.push(str[i]);
    }
  }
  return newString.join('');
}
debugger;
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''))                           // ""