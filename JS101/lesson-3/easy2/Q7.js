//Consider the following object:

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

//Create an array from this object that contains only two elements: Barney's name and Barney's number:

// [ 'Barney', 2 ]

/*
P:
Question is asking to use the flintstones object to create an array with the key 'Barney' and the value of 2

*/

/*
E:

Input: 
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

Output:
[ 'Barney', 2 ]

*/

/*
D:

Data structures:
  - Array
  - Objects

*/

/*
A:

create variable called newArray with a empty array
create variable called keys using the Object.key method
create variable called values using the Object.values method

then we will use the .push method on both keys and values on the index of 2 and push to the newArray

*/

//C:

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let newArray = [];
let keys = Object.keys(flintstones);
let values = Object.values(flintstones);
newArray.push(keys[2]);
newArray.push(values[2]);
console.log(newArray)

//after looking at hint i will use Object.entries()

let objArray = Object.entries(flintstones);
let result = objArray.filter(arr => arr[0] === 'Barney').shift()

console.log(result)