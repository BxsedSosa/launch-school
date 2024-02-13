/*


The End Is Near But Not Here

Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.

Examples:

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

*/

/*
P:

  given a string, return the second to last word in the string
*/

/*
E:

  input:
    "last word"
    "Launch School is great!"

  output:
    true
    true
*/

/*
D:

  Data needed:
    string
*/

/*
A:

  create function called penultimate
    which will take 1 parameter
      called string
  
    create a variable called stringArray
      using the split method to break the string apart to an array

    and then it will return stringArray variable of index -2

  then compare it to the second to last word manually
*/

//C:

function penultimate(string) {
  let stringArray = string.split(' ');
  return stringArray[stringArray.length - 2];
}

console.log(penultimate("last word") === "last");
console.log(penultimate("Launch School is great!") === "is");