/*

Short Long Short

Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

Examples:

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

*/

/*
P:

  Question takes 2 strings and then compares each other on the length of each other which ever is the shorter one is added to the front and end of the string and inbetween you put in the longer string
*/

/*
E:
  
  input:
  string 1 (shorter)
  string 2

  output:
  string 1 + string 2 + string 1

*/

/*
D:

  data needed:
    strings

*/

/*
A:

  Create a function that takes 2 parameters 
    parameter 1 = string1
    parameter 2 = string2

  if string1 length is longer than string 2

  console.log(string2 + string1 + string2)

  else 

  console.log(string1 + string2 + string1)

*/

//C:

function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    console.log(string2 + string1 + string2);
  } else {
    console.log(string1 + string2 + string1);
  }
}

shortLongShort('abc', 'defgh');
shortLongShort('abcde', 'fgh');
shortLongShort('', 'xyz');