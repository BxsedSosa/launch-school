Work through the following exercises to help solidify the concepts we've covered in this assignment.

Q1)
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
}

let myWord = 'Hello';
changeMyWord(myWord);
console.log(myWord);

ans:
it will log 'Hello' from myWord as the argument. nothing else in the function
then one more 'Hello' at outside of the function

Q2)
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
myWord = changeMyWord(myWord);
console.log(myWord);

expectation:

the function call will console.log:
'Hello'
then outside of the function console.log:
'HELLO'

ans: 

This logs 'Hello' to console once, and 'HELLO' to console once.

This example is very similar to Example 1, with two key differences:

    The changeMyWord function returns the value of the word parameter.
    The myWord variable is reassigned to that returned value.

It's the combination of these two things that leads to the difference in output here compared to Example 1. Because we're effectively using pass-by-value here, the only way to impact the value of the myWord variable outside the scope of the function is by returning something from the function. Just returning a value is not sufficient on its own, however, we also have to do something with that value such as assigning it to a variable.


Q3)
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
let myOtherWord = changeMyWord(myWord);
console.log(myWord);
console.log(myOtherWord);

expectation: 

the function will console.log:
'Hello'
then in the function it will return a upper cased 'HELLO'
outside of the function console.log(myWord) is:
'Hello'
then console.log(myOtherWord):
'HELLO'

ans: 

This logs 'Hello' to console twice, and 'HELLO' to console once.

This is similar to Exercise 2. The key difference is that rather than reassigning myWord to the return value of the changeMyWord function invocation, we're declaring and initializing another variable myOtherWord to that return value. Therefore when we log myWord it still has its initial value of 'Hello', and only when we log myOtherWord do we see the value of 'HELLO' returned by the function.

This again demonstrates that nothing we do within the changeMyWord function will affect the value of the String primitive assigned to the myWord variable. We can use the value returned by the function, but only by assigning a variable to it, or reassigning an existing variable. It's important to draw a distinction between the process of assignment and reassignment of variables and the concept of mutability.


Q4)
function changeMyWords(words) {
  console.log(words);
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

expectation:

in the function the array will console log:
['Hello', 'Goodbye']
outside of the function will console log
['hi', 'Goodbye']
because line 3 index 0 gets mutated

ans: 

This will log ['Hello', 'Goodbye'] and then ['Hi', 'Goodbye'] to the console.

In this exercise, the myWords variable is initialized to an array containing two elements, the strings 'Hello' and 'Goodbye'. Because an array is a reference type rather than a primitive, when we pass myWords into the changeMyWords function invocation, this acts like pass-by-reference. The myWords variable and the words function parameter both point to the same array. When we initially log words on line 2 we see the same array elements from the array literal to which we initialized myWords. We then mutate the array on line 3 by assigning index 0 to the string 'Hi'. When we subsequently log myWords on line 8, we see the mutated array.

Q5)
function changeMyWords(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

expectation:

in the function we will console.log:
['Hello', 'Goodbye']
then outside of the function we will get console.log:
['Hello', 'Goodbye']

I believe on line 3 that since its being reassigned and not mutated nothing will change