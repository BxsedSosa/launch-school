What will the following code log to the console and why? Don't run it until you have tried to answer.

Q1)
let myWord = 'Hello';
let myOtherWord = myWord;

console.log(myWord);
console.log(myOtherWord);

ans:
'Hello'
'Hello'

Q2)
let myWord = 'Hello';
let myOtherWord = myWord;
myWord = 'Goodbye';

console.log(myWord);
console.log(myOtherWord);

ans:
'Goodbye'
'Hello'

Q3)
let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords);
console.log(myOtherWords);

ans:
['Hi', 'Goodbye']
['Hi', 'Goodbye']

Q4)
let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];

console.log(myWords);
console.log(myOtherWords);

ans:
['Hi', 'Bye']
['Hello', 'Goodbye']


Q5)
let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWords[0] = 'Hi';

console.log(myWords);
console.log(myWord);

ans:
['Hi', 'Goodbye']
['Hi']

6)
let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords);
console.log(myWord);

ans:
['Hi', 'Goodbye']
'Hello'