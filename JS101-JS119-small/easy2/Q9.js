/*


How Old is Teddy?

Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

Example Output:

Teddy is 69 years old!

*/

/*
P:

  Create a function that will randomly give you a number each time its ran picking a number between 20 to 120 (inclusive)
*/

/*
E:

  Input:
    run code

  Output:
    Teddy is <random age> years old!
*/

/*
D:

  data needed:
    numbers
    strings
*/

/*
A:

  Create function called randAge
    create a variable called age equal to
      the helper function randomNumInclusive
        with arguments of 20 and 120

    print out
      Teddy is <age> years old!
    

  Create helper function called randomNumInclusive which will take 2 parameters
    parameter 1 = min
    parameter 2 = max
    create const minCeiled equal to Math.ceil(min)
    create maxFloor = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeil + 1) + minCeil)
*/

//C:

function randAge() {
  let age = randomNumInclusive(20, 120);
  console.log(`Teddy is ${age} years old!`);
}

function randomNumInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

randAge();