Q1) What will the following code log to the console and why? Don't run it until you have tried to answer.

let myWord = 'Hello';
myWord.concat(' there.');

console.log(myWord); 

ans:
'Hello'

Q2)

let myWord = 'Hello';
myWord.repeat(3);
console.log(myWord);
myWord.replace('H', 'J');
console.log(myWord);
myWord.toUpperCase();
console.log(myWord);

ans: 
'Hello'
'Hello'
'Hello'

Q3)
let myWords = ['Hello'];
myWords.push('Goodbye');

console.log(myWords);

ans:
['Hello', 'Goodbye']

Q4)
let myWords = ['Hello'];
myWords.concat(['Goodbye']);

console.log(myWords);

ans:
['Hello']

Q5)
let myWords = ['Hello'];
myWords[0].toUpperCase();

console.log(myWords);

ans:
['Hello']

Q6)
let myWords = ['Hello'];
myWords[0] = myWords[0].toUpperCase();

console.log(myWords);

ans:
['HELLO']