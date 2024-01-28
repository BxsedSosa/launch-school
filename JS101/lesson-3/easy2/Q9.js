// Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

// let title = "Flintstone Family Members";

/*
P:

Question is asking taken the given variable with a string center as if there was a 40 charcter wide table
*/

/*
E:

Input:
title = "Flintstone Family Members";

Output = '       let title = "Flintstone Family Members       ';

*/

/*
D:

data needed:
  -strings

*/

/*
A:

create variable for the spacing 
  subtract 40 charcter wide to the string length
  divide by 2

use padStart(spacing, ' ');
console.log(spaceString)
*/

//C:

let title = 'Flintstone Family Members';

let spacing = Math.floor((40 - title.length) / 2);
spaceTitle = title.padStart(spacing + title.length);

console.log(spaceTitle);


//Creating for loop without padStart method

function padding(string, paddingNumber, paddingInsert) {
  let padding = [];
  for (let paddingNumIndex = 0; paddingNumIndex < paddingNumber; paddingNumIndex++) {
    padding[paddingNumIndex] = paddingInsert
  }
  return padding.join('').concat('', string)
}

let result = padding(title, spacing, ' ');
console.log(result)