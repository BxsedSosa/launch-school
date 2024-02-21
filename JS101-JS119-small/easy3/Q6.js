/*

Madlibs

Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

Example:

Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.

*/

/*
P:

  Create a function that will output a madlib story which will ask user to enter in 4 different questions given. Given those user answers we will insert them into the story and print it out so we can see
*/

/*
E:

  Input:
    dog
    walk
    bule
    quickly

  Output:
    Do you walk your blue dog quickly? That's hilarious!
    The blue dog walks quickly over the lazy dog.
    The dog quickly walks up blue Joe's turtle.
*/

/*
D:

  Data needed:
    Strings
*/

/*
A:
  Create a constant called READLINE
    contains require('readline-sync')
    
  Create a function called madlib

    Create variable called userNoun
      equal to question 'Enter a noun: \n' 
    Create variable called userVerb
      equal to question 'Enter a verb: \n'
    Create variable called userAdjective
      equal to question 'Enter an adjective: \n'
    Create a variable called userAdverb
      equal to question 'Enter an adverb: \n'

    then we will console log with back ticks
Do you ${userVerb} your ${userAdjective} ${userNoun} ${userAdverb}? That's hilarious!
The ${userAdjective} ${userNoun} ${userVerb} ${userAdverb} over the lazy ${userNoun}.
The ${userNoun} ${userAdverb} ${userVerb} up ${userAdjective} Joe's turtle.

*/

//C:

const READLINE = require('readline-sync');

function madlib() {
  let userNoun = READLINE.question('Enter a noun: \n');
  let userVerb = READLINE.question('Enter a verb: \n');
  let userAdjective = READLINE.question('Enter an adjective: \n');
  let userAdverb = READLINE.question('Enter an adverb: \n');

  console.log(`Do you ${userVerb} your ${userAdjective} ${userNoun} ${userAdverb}? That's hilarious!`);
  console.log(`The ${userAdjective} ${userNoun} ${userVerb} ${userAdverb} over the lazy ${userNoun}.`);
  console.log(`The ${userNoun} ${userAdverb} ${userVerb} up ${userAdjective} Joe's turtle.`);
}

madlib();