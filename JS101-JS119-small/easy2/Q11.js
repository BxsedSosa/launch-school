/*


Get Middle Character

Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

Examples:

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

*/

/*
P:

  Create a function that takes 1 parameter called string. using the split method we will break the entire string into an array. if the array length is even then you will have to return the 2 indexs in the middle of the array. if its odd then you will only have to return the index exactly in the middle
*/

/*
E:

  Input:
    'I Love JavaScript'
    'Launch School'
    'Launch'
    'Launchschool'
    'x'

  Output:
    'a'
    ' '
    'un'
    'hs'
    'x'

*/

/*
D:

  data needed:
    strings
*/

/*
A:

  Create a function called middle which takes 1 parameter
    parameter called string

    create a variable called newArr equal to a empty array
    create a variable called stringArr equal to
      making the string into an array with the split method
    create a variable called middleIndex which will take stringArr length divided by 2
    
    if stringArr length modulo is equal to 1 then you will use the push method to add the middle index to newArr.
      using stringArr[middleIndex - 1] in the parethesis
      
    else
      use the push method to add 2 elements in the middle of stringArr
        using stringArr[middleIndex - 1]
        and again stringArr[middleIndex -2] in the parethesis

    then return the newArr using join method by '' of no space
*/

//C:

function centerOf(string) {
  let newArr = [];
  let stringArr = string.split('');
  let stringLen = stringArr.length;
  let middleIndex = Math.floor(stringLen / 2);

  if (stringLen % 2 === 1) {
    newArr.push(stringArr[middleIndex]);
  } else if (stringLen % 2 === 0) {
    newArr.push(stringArr[middleIndex - 1]);
    newArr.push(stringArr[middleIndex]);
  }
  return newArr.join('')
}

debugger;
console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('launch'));
console.log(centerOf('Launchschool'));
console.log(centerOf('x'));