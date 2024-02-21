/*

Double Doubles

A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

Examples:

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

*/

/*
P:

  Create a function with 1 parameter which will take a number as a input. The condition i can read from the question is that if the number given split the length in half and compare the two together if they are identical. if they are identical print out the number given. if not equal to each other then we will multiple the entire number by 2 then print it out
*/

/*
E:

  Input:                Output:
    twice(37);          // 74
    twice(44);          // 44
    twice(334433);      // 668866
    twice(444);         // 888
    twice(107);         // 214
    twice(103103);      // 103103
    twice(3333);        // 3333
    twice(7676);        // 7676
*/

/*
D:

  Data needed:
    number
*/

/*
A:

  Create a function called twice and takes 1 parameter
    parameter name will be called num

    create a variable called numString equal to num using the toString method
    create a variable called numArray equal to num using the split method splitting string by empty string

    using a for loop we will iterate over the length of the num parameter
      if the index is not euqal to (index + (num.length/2))
        return num times 2  
*/

//C:

function twice(num) {
  let numString = num.toString();
  let numArray = numString.split('');
  let numLength = numArray.length;

  for (let i = 0; i < numLength/2; i++) {
    let mirror = i + Math.floor(numLength / 2);
    if (numArray[i] !== numArray[mirror]) {
      return num * 2;
    }
  }
  return num
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676


//My approach was different from what the solution was i thought of going to for loop way which would iterate through both sides of the number which didnt work out on 1 use case

/*
Solution

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}

Discussion

The challenging part of this problem is determining how to compare the left-side numbers with the right-side numbers. The trick is to compare them as strings instead of as numbers.

Given this, the solution does the following via the isDoubleNumber function:

    Gets the left-side and right-side substrings by calculating the middle index of stringNumber.
    Returns the result of comparing the left and right substrings.
        If the length of stringNumber is odd, it is not a double number.
        If the length of stringNumber is even, there is a chance that it is a double number.

*/