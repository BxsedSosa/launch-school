// Alyssa was asked to write an implementation of a rolling buffer. You can add and remove elements from a rolling buffer. However, once the buffer becomes full, any new elements will displace the oldest elements in the buffer.

// She wrote two implementations of the code for adding elements to the buffer. In presenting the code to her team leader, she said "Take your pick. Do you prefer push() or concat() for modifying the buffer?".

// Is there a difference between these implementations, other than the method she used to add an element to the buffer? You may assume that newElement will always be a primitive value.

// function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
//   buffer.push(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
//   buffer = buffer.concat(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

/*
P:

The questions here is asking givin the code. is there a difference of implementation of the functions and how they work?
*/

/*
E:

  NA

*/

/*
D:

*/

/*
A:

  The difference of the 2 functions

  in the first one it uses .push() method which is a mutating method.

  in the second one it uses the .concat() method which creates a new array and you have to save it to a new variable

*/

/*
Answer:

Yes, there is a difference. While both functions have the same return value, the first implementation mutates the argument represented by buffer. That is, the caller will see that the array is different when the function returns. The rollingBuffer2 implementation doesn't mutate the argument specified by the value of buffer.

*/