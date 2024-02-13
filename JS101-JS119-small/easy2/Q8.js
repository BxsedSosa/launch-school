/*


Odd Lists

Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

Examples:

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

*/

/*
P:

  Create a function that will take 1 parameter of an array. With the array console log all the indexes that are odd numbers and the values they carry
*/

/*
E:

  Input:
    [2, 3, 4, 5, 6]
    [1, 2, 3, 4, 5, 6]
    ['abc', 'def']
    [123]
    []

  Output:
    [2, 4, 6]
    [1, 3, 5]
    ['abc']
    [123]
    []
*/

/*
D:

  data needed:
    arrays
    strings
    numbers
*/

/*
A:

  Create a function called oddities takes 1 parameter
    parameter 1 will be called arr

    create a empty array variablle called newArr
  
    create a for loop which iterates over the array
      index will be set to 0
      setting the index over the array less then the arr length
      index will increment by 2 each loop around
      and push the arr index value its on to the newArr

    Once the loop is completed then console log the newArry
*/

//C:

function oddities(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

function evenities(arr) {
  let newArr = [];

  for (let i = 1; i < arr.length; i +=2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(evenities([2, 3, 4, 5, 6]));
console.log(evenities([1, 2, 3, 4, 5, 6]));
console.log(evenities(["abc", "def"]));
console.log(evenities([123]));
console.log(evenities([])); 