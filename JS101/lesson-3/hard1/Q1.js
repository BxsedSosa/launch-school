/*

Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return
  {
    prop1: "hi there";
  }
}

console.log(first());
console.log(second());

Try to answer without running the code or looking at the solution.

*/

/*
P:

Problem above is asking what will the 2 console logs return back when ran
*/

/*
E:

Input:
  console.log(first());
  console.log(second());
*/

/*
D:

Data needed:
  2 functions
*/

/*
A:

I think that the function will log:

{prop1: 'hi there',}
undefined

I think this because in the first function the object is held in the same line as the return so it will return to the console the object shown

But in the second function since the return is on a line with itself it will only return undefined because there isnt anything else to return
*/


/*

Answer:

These functions do not return the same thing. The function first() returns the expected value of { prop1: "hi there" }, but second() returns undefined without throwing any errors.

The reason for this odd behavior is that semicolons, in JavaScript, are technically optional. However, when you omit them, the JavaScript engine inserts them where it thinks you need them. In second, JavaScript inserts a semicolon after the word return, so the function returns undefined. No errors are thrown since the rest of the code is valid, even though it never gets executed.

Some developers rely on this behavior and write JavaScript code without semicolons. However, most developers consider it poor practice since you're relying on the engine to make decisions for you, and those decisions may not be what you intended.

*/