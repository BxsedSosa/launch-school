// Starting with the string:
// show two different ways to put the expected "Four score and " in front of it.

let famousWords = "seven years ago...";
let fourScore = 'Four score and ';

console.log(fourScore + famousWords)
console.log(fourScore.concat('',famousWords))

/*
Solution

"Four score and " + famousWords;

or

"Four score and ".concat(famousWords);
*/
