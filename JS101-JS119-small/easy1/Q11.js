/*

UTF-16 String Value

Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

Examples:

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

*/

/*
P:

  Question is asking to given a string return the UTF-16 value back
*/

/*
E:
  Input:                            Output:
  utf16Value('Four score');         // 984
  utf16Value('Launch School');      // 1251
  utf16Value('a');                  // 97
  utf16Value('');                   // 0

  const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
  utf16Value(OMEGA);                  // 937
  utf16Value(OMEGA + OMEGA + OMEGA);  // 2811
*/

/*
D:

  data needed:
    string
*/

/*
A:

  Create a function called utf16Value
    1 parameter called string

  create variable called stringLength
    equal to string.length

  create variable utfTotal
    equal to 0

  create a for loop iterating the string of the length of stringLength
    takes the utfTotal equal to string.charCodeAt(index) + utfTotal
  
  return utfTotal

*/

//C:

function utf16Value(string) {
  let stringLength = string.length;
  let utfTotal = 0;

  for (let i = 0; i < stringLength; i++) {
    utfTotal += string.charCodeAt(i);
  }
  return utfTotal;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811