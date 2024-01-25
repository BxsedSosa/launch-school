Q1)
Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

Bonus:

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

expectation:

the code wont raise a error i will just skip over the indexs that it didn't fill and the ones that were skipped are empty elements that hold no values

bonus i believe will give undefined for that index now since it is being initialized.

ans: 
It doesn't raise an error. The JavaScript engine will treat array slots 3 through 5 as empty slots.

Bonus Answer:

numbers[4] will output undefined, but the slot is empty -- it doesn't have a value, not even undefined, in spite of what the line returns. This distinction is important: if you use map(), for instance, the new array will also have empty slots in the corresponding positions. On the other hand, slots with a value of undefined will be remapped based on the return value of the callback

Q2)
How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

expectation:

2 options from what i currently know which is using the includes() method to the string or using a for loop to interate through the string checking if there is a '!'.

ans: 

str1.endsWith("!"); // true
str2.endsWith("!"); // false

Q3) 
Determine whether the following object of people and their age contains an entry for 'Spot'

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

expectation:

so i dont really understand the question here. But for what i think its asking if the object contains and entry for spot. I would say no or false

ans: 

ages.hasOwnProperty("Spot");

thoughts:

i did see this was in the notes just wasnt sure how to apply to what the question was really asking for

Q4)
Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

expectation:

let firstLetter = musterDescription[0].toUpperCase();
let afterFirstLetter = musterDescription.slice(1).toLowerCase;
console.log(firstLetter + afterFirstLetter);

ans:
munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

Q5)
What will the following code output?

console.log(false == '0');
console.log(false === '0');

expectation:

true
false

ans: 

true
false

Q6)
We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

Add entries for Marilyn and Spot to the object:

let additionalAges = { Marilyn: 22, Spot: 237 };

expectation:

Object.assign(ages, additionalAges);

ans:

Object.assign(ages, additionalAges);

Q7)
Determine whether the name Dino appears in the strings below -- check each string separately:

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

expectation:

console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));

ans:

str1.includes('Dino'); // false
str2.includes('Dino'); // true

8)
How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

expectation:

flintstones.push('Dino');

ans: 

flintstones.push("Dino");
flintstones; // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino' ]

Q9)
In the previous problem, our first answer added 'Dino' to the array like this:

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");

expectation:

flintstones.push('Dino', 'Hoppy');

ans:

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Hoppy");   // we can pass multiple arguments to push
flintstones; // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino', 'Hoppy' ]

Q10)
Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

expectation:

let index = advice.indexOf('house');
let newAdvice = advice.slice(0, index);

ans:

advice.slice(0, advice.indexOf('house'));
// => 'Few things in life are as important as '