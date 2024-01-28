// How would you check whether the objects assigned to variables numbers and table below are arrays?

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

/*
P:

Question is asking if you can check if the variables used below are arrays
*/

/*
E:

Input:
let numbers = [1, 2, 3, 4];
let table = { field1: 1, field2: 2, field3: 3, field4: 4 };

Output:
true
false

*/

/*
D:

Data structures:
  - Array
  - Objects

*/

/*
A:

I will need to use the Array.isarray method to check if the variables contain an array giving a boolean value in return

*/

//C:

let numbers = [1, 2, 3, 4];
let table = { field1: 1, field2: 2, field3: 3, field4: 4 };

function arrayCheck(arr) {
  return Array.isArray(arr);
}

let result1 = arrayCheck(numbers);
console.log(result1);

let result2 = arrayCheck(table);
console.log(result2);