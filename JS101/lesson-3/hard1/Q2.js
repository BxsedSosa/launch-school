/*

What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

Try to answer without running the code or looking at the solution.

*/

/*
P:

Problem above is asking what happens when we console log the object variable
*/

/*
E:

input:
console.log(object);
*/

/*
D:

data needed:
  object
*/

/*
A:

I think that since the .push() method is a mutating method and its currently pushing a number value of 2 to numArray the console log of object will return:

{first: [1, 2]}
*/
