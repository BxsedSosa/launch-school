/*

Bannerizer

Write a function that will take a short line of text, and write it to the console log within a box.

Examples:

logInBox('To boldly go where no one has gone before.');

will log on the console:

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

You may assume that the output will always fit in your browser window.

*/

/*
P:

  Need to create a function in which will take a string and insert the string within a bordered box and print out 
*/

/*
E:

  Input:
  'To boldly go where no one has gone before.'

  Output:
    +--------------------------------------------+
    |                                            |
    | To boldly go where no one has gone before. |
    |                                            |
    +--------------------------------------------+
*/

/*
D:

  data needed:
    string
*/

/*
A:

  Create a function called logInBox which takes one parameter called str

  create a variable called strLength equal to str.length

  then console log with back ticks +--+ and in the middle of that we will use the ${} and insert '-' repeat method of the strLength

  console log with back ticks |  | and in the middle of that we will use the ${}and inser ' ' repeat method of the strLength

  console log with back ticks |  | and in the middle of that we will insert the parameter str

  console log with back ticks |  | and in the middle of that we will use the ${}and inser ' ' repeat method of the strLength

  then console log with back ticks +--+ and in the middle of that we will use the ${} and insert '-' repeat method of the strLength
*/

//C:

function logInBox(str) {
  let strLength = str.length;

  console.log(`+-${'-'.repeat(strLength)}-+`);
  console.log(`| ${' '.repeat(strLength)} |`);
  console.log(`| ${str} |`);
  console.log(`| ${' '.repeat(strLength)} |`);
  console.log(`+-${'-'.repeat(strLength)}-+`);
  
}

logInBox('To boldly go where no one has gone before.');