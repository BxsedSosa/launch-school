// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

let arr = advice.split(' ');

let newArr = arr.map((word) => {
  if (word === 'important') {
    return word = 'urgent'
  } else {
    return word
  }
})

console.log(newArr.join(' '))
//=> Few things in life are as urgent as house training your pet dinosaur.


//Solution 1

advice.replace('important', 'urgent');
// => Few things in life are as urgent as house training your pet dinosaur.
//Note that if the string contains two or more occurrences of important, this code only replaces the first. Can you figure out how to replace all occurrences?