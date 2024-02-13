/*


Welcome Stranger

Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

Example:

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

*/

/*
P:

  Question is asking to create a function that takes 2 parameters.
  first parameter is a name broken up in a array and second parameter is a object with 2 keys 

  it wants us to take the 2 parameters and print out a sentence using all the elements and keys given 
*/

/*
E:

  Input:
    ["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }

  Output:
    logs Hello, John Q Doe! Nice to have a Master Plumber around.
*/

/*
D:

  Data needed:
    Array
    Object
    Strings
*/

/*
A:

  Create function called greetings
    has 2 parameters:
      Parameter 1 = array
      Parameter 2 = object

  Create a variable called joinedArray
    using the .join method with a space to seperate the name

  console log
    hello, <name>! Nice to have <title> <occupatoin> around.
*/

//C:

function greetings(name, jobTitle) {
  let joinedName = name.join(' ');

  console.log(`Hello, ${joinedName}! Nice to have a ${jobTitle.title} ${jobTitle.occupation} around.`);
}

greetings(['John', 'Q', 'Doe'], {title: 'Master', occupation: 'Plumber'});