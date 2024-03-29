/*

Given the following similar sets of code, what will each code snippet print?

A)

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

B)

function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

C)

function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

*/

/*
P:

Question above is asking what the 3 above code snippets will each run individually
*/

/*
E:

Input:
  3 sets of code snippets
*/

/*
D:

*/

/*
A:

  A)
    'one is: two'
    'two is: three'
    'three is: two'

  B)
    'one is one'
    'two is two'
    'three is three'

  C)
    'one is: two'
    'two is: three'
    'three is: one'
  
*/