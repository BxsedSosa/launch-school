//Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

//PEDAC

/*
P:

The question at hand is asking us of the given array mutate the array to remoe index 2
*/

/*
E:

INPUT -
Array given = [1, 2, 3, 4, 5]

OUTPUT - 
questions output = [1, 2, 4, 5]
*/

/*
D:

The data structures needed for this is an Array.
*/

/*
A:

  1. Create a function which takes 2 parameters
    parameter 1 = array of numbers
    parameter 2 = index that you would like to delete from array

  2. Use the map function to iterate over the array which will take the array and push to a new array.

  3. it will skip over the index that was provided by the function argument

  4.then the function will return the new array 
*/

//C:

function delIndex(numbers, deleteIndex) {
  let newArray = numbers.map((number, index) => {
    if (index !== deleteIndex) {
      return number;
    }
  });
  newArray = newArray.filter((number) => {
    if (number !== undefined) {
      return number;
    }
  })
  return newArray;
}

let array = [1, 2, 3, 4, 5];
let deleteIndex = 2;
let result = delIndex(array, deleteIndex);

console.log(result);

//This way will be using methods to shorten down the problem the hint given in the question

function deleteIndex2(numbers, deleteIndex) {
  numbers.splice(deleteIndex, 1);
  return numbers;
}

let result2 = deleteIndex2(array, deleteIndex);
console.log(result2)