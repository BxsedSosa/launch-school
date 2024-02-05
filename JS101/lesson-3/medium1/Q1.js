// Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

// For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:

// The Flintstones Rock!
//  The Flintstones Rock!
  // The Flintstones Rock!
  //  The Flintstones Rock!
    // ...

/*
P:

The question is asking to create a program that outputs 'Flintstones Rock!' But adding a space every time it prints it out again

*/

/*
E:

Input: 
  'The Flintstones Rock!'

Output:
  The Flintstones Rock!
   The Flintstones Rock!
    The Flintstones Rock!
     The Flintstones Rock!
      ...
*/

/*
D:

Data structures needed:

  String - 
  'The Flintstones Rock!'
*/

/*
A:

  Create a for loop
    -adding a '' for each index iteration
    -console.log each iteration

*/

//C:

function repeatString(string, occurances) {
  
  for (let i = 0; i < occurances; i++) {
    string = `${' '.repeat(i)}${string}`;
    console.log(string)
  }
}

repeatString('The Flintstones Rock!', 5);