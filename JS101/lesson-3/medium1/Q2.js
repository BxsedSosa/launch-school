// Starting with the string:

// let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:

// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

/*
P:

Problem is asking to take the string given, and flip the letters that are uppercase to lower and vice versa for the lowercase
*/

/*
E:

Input:
  "The Munsters are creepy and spooky."

Output:
  `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

*/

/*
D:

Data needed:
  String
  array

*/

/*
A:
  create array called stringArray

  split string into an array with 'split'

  Create a for loop that iterates over the array length
    -Create a if statement that checks if the index its on is a upper case letter
      When True then turn the letter to a lowercase 

    -Create a else if statement that checks if the index its on is a lower case letter
      When True then turn the letter to a uppercase 

*/

//C:
function reverseCapitazlize(string) {
  let stringArray = string.split('');
  
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === stringArray[i].toUpperCase()) {
      stringArray[i] = stringArray[i].toLowerCase();
    } else if (stringArray[i] === stringArray[i].toLowerCase()) {
      stringArray[i] = stringArray[i].toUpperCase();
    }
  }
  return stringArray.join(''); 
}

let result = reverseCapitazlize("The Munsters are creepy and spooky.");

console.log(result);