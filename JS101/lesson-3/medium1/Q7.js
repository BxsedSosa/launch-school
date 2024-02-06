// What is the output of the following code?

// let answer = 42;

// function messWithIt(someNumber) {
//   return (someNumber += 8);
// }

// let newAnswer = messWithIt(answer);

// console.log(answer - 8);

/*
P:

The question is asking what will output for the following code
*/

/*
E:

Input:
  let answer = 42;
  let newAnswer = messWithIt(answer);
  console.log(answer - 8);
*/

/*
D:

Data needed:
  Numbers
*/

/*
A:

From my understanding of the code is that though the variable 42 is uesd in line 7. In line 9 we are console logging (answer - 8) which will still use the value 42 because variables are immutable

the output will be:

34
*/

// Answer: 34