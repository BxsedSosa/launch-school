/*
Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

This code will create a nested array that looks like this:

["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

Nesting data structures like we do here is commonplace in JavaScript and programming in general. We'll explore this in much greater depth in a future Lesson.

Create a new array that contains all of the above values, but in an un-nested format:

[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]
*/

/*
P:
Question is asking to make the current array given to us be a single array of string without having any other arrays nested within itself
*/

/*
E:

Input:
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

Output:
[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

*/

/*
D:

Data Structures needed:
  - Array
*/

/*
A:

  Will need the Array.prototpye.flat() method to make the array flatten out all the nested arrays
*/

//C:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
console.log(flintstones);
console.log('method:')
console.log(flintstones.flat());

//Creating for loop to break down the flat method

/*
A:
Create function called flatten
  this will need 1 parameter called array

Create a newArray variable with a empty array
Create variable to hold true for array.isarray()

will start a for loop over the array checking for any nested array inside.

  if index is equal to Array.isArray() then it will go into that array
    Starting a new for loop interating over that array
    for each element in the nested array it will push to the newArray

  else 
    each element in the non nested array will push to the new array

  Once completed through the loop the flintstones variable will now equal the newArray
*/

//C:

function flatten(arr) {
  let newArray = [];

  for (let arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
    let arrayCheck = Array.isArray(arr[arrayIndex]); 
    if (arrayCheck === true) {
      for (let nestedIndex = 0; nestedIndex < arr[arrayIndex].length; nestedIndex++) {
        newArray.push(arr[arrayIndex][nestedIndex]);
      }
    } else {
        newArray.push(arr[arrayIndex]);
    }
  }
  return newArray;
}

flintstones = flatten(flintstones);
console.log('Created function:')
console.log(flintstones);