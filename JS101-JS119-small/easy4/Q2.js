/*

Palindromic Strings (Part 1)

Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

Examples:

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

/*

/*
P:

  Create a program that will take parameter of a string. Given the string check if the string is a palindrome. Also the condition of it being case sensitive.
*/

/*
E:
  isPalindrome('madam');               // true
  isPalindrome('Madam');               // false (case matters)
  isPalindrome("madam i'm adam");      // false (all characters matter)
  isPalindrome('356653');              // true
*/

/*
D:

  Data needed:
    String
    Array
*/

/*
A:

  Create a function called palindrome with 1 parameter
    parameter will be called str

    we will use the string split method, reverse method, and join method then save it to a varable called strReverse

    then we will use a tenary to compare if it is the same string forward and backward returing true or false
*/

//C:

function palindrome(str) {
  let strReverse = str.split('').reverse().join('');
  return str === strReverse ? true : false;
}

console.log(palindrome('madam'));               // true
console.log(palindrome('Madam'));               // false (case matters)
console.log(palindrome("madam i'm adam"));      // false (all characters matter)
console.log(palindrome('356653'));              // true