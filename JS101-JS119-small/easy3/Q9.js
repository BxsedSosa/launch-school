/*

Clean up the words

Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

Example:

cleanUp("---what's my +*& line?");    // " what s my line "

*/

/*
P:

  Program is asking to create a function that will take a string and output the string back excluding all the special characters in the string.
*/

/*
E:
  Input:                                Output:
  cleanUp("---what's my +*& line?");    // " what s my line "

*/

/*
D:

  data needed:
    string
*/

/*
A:

  create a function called cleanUp which will take 1 parameter called str

    Create a constant called regexp equal to /[A-Z]/gi 
    we will use the string match method to to pull the letters from the string saving it to a variable called matches

    and we will console log the matches variable and use the array join method to put the words back together

*/

//C:

function cleanUp(str) {
  const regexp = /[A-Z ]/gi;
  let matches = str.match(regexp)
  console.log(matches)
  console.log(matches.join(''))
}

cleanUp("---what's my +*& line?")

/*
function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (idx === 0 || lastChar(cleanText) !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function lastChar(text) {
  return text[text.length - 1];
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

A shorter solution:

function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}

Discussion

The solution makes use of a for loop to build a cleanText string. At every iteration, the objective is to check if the current character is a letter (either uppercase or lowercase). If the character is not a letter or a space (' '), the program appends a space; if the character is a letter, the program appends that letter.

The tricky part is when there are consecutive non-letter characters. The specification shows that there are no consecutive space characters, even if there are consecutive non-letter characters. To handle this, the solution uses a condition to check whether the last character in the cleanText variable is a space. If the character is a space, it means that there is already a space at the previous index position, so appending another space would result in having consecutive space characters.

We also need to add a space character if we're working on the first character in the string and it is not alphabetic. That explains the idx === 0 condition.

Shorter solution explanation:

Ah, the expressiveness of regular expressions. They can really help with messy text manipulation. They aren't always the wisest choice for understandable code, but they can save a lot of effort in some cases. This is one such case where the regular expression may be the best choice.

This method is quite simple: using the String.prototype.replace() call, it simply replaces all non-alphabetic characters in text with a space, then by chaining another replace() method call we delete all of the duplicate spaces.

If you are unfamiliar with regular expressions, the expression /[^a-z]/gi is a regular expression that matches any character that is not an uppercase or lowercase letter. The /i part of this expression is what makes this expression case insensitive and /g part changes all the characters not just first one. replace() replaces all characters in text that match the regular expression in the 1st argument with the value in the 2nd argument. 
*/