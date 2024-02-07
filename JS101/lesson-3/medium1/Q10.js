// Consider these two simple functions:

// function foo(param = "no") {
//   return "yes";
// }

// function bar(param = "no") {
//   return param === "no" ? "yes" : "no";
// }

// What will the following function invocation return?

// bar(foo());

/*
P:

Question is asking what will the function return
*/

/*
E:

Input:

bar(foo());
*/

/*
D:

data needed:
  functions
*/

/*
A:

I think the function will return 'no'

because foo will return 'yes'and then will be input into the bar parameter then put through the tenary which is not equal to 'no' which returns 'no'
*/


/*
"no";

This is because the value returned from the foo function will always be "yes" , and "yes" === "no" will be false.
*/