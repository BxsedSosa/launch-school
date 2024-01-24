What will the following code log to the console and why? Don't run it until you have tried to answer.

Q1)
let color = "yellow";
let colors = ["red", "green", "blue"];

function updateColors(colors) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);

expectation:

we are pushing (mutating) the array colors:
["red", "green", "blue", "yellow"]

Q2)
let color = "yellow";
let colors = ["red", "green", "blue"];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);

expectation:

since the updateColors is expecting 2 parameters nothing will changeon the colors array. I think the function will give a error since there is a missing argument in the called function.

ans:

This logs the array ['red', 'green', 'blue', undefined].

The code in this example is almost identical to the code example in Exercise 1, with one key difference: the updateColors function defines a second parameter color. As with Exercise 1, the colors function parameter blocks access to the global colors variable. In the case though, the color function parameter also blocks access to the color global variable.

When we invoke the function, however, we only pass in one argument, the variable colors which references the array ['red', 'green', 'blue']. As before, we call the push method on this array, but rather than pass in the color global variable (which points to the string 'yellow') we instead pass in the color parameter. Since we didn't pass in an argument for color when invoking the function, this parameter has a value of undefined.

The array is still modified, as in Exercise 1, so when we log the colors global variable on line 9 we again see the modified value, but the last element is undefined instead of 'yellow'.


Q3)

let color1 = "purple";
let color2 = "pink";
let colors = ["red", "green", "blue"];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors, color1);
updateColors(colors, color2);
console.log(colors);

expectation:

the updateColors gets called twice so it get mutated 2 times with the push of color1 and 2 so the end result of the console.log will give:

["red", "green", "blue", "purple", "pink"]

ans: 

This logs the array ['red', 'green', 'blue', 'purple', 'pink'].

As with Exercise 2, our updateColors function defines two parameters. In this example though, we pass in two arguments when invoking the function. We also invoke the function twice.

We again have a global variable, colors, initialized to an array containing three strings, 'red', 'green', and 'blue'. Here we also have the global variables color1 and color2 initialized to the strings 'purple' and 'pink' respectively.

On the first invocation of updateColors we pass in the colors variable as the first argument and color1 as the second argument. Within the scope of the function, the colors parameter references the same array to which the global colors variable on line 3 points, and the color parameter points to the string value 'purple'. The function mutates the array which colors references, appending the string 'purple'.

Since the global colors variable references the same array as the one we mutated within the function, if we were to log colors at this point (i.e. on line 10) we would see output the mutated array ['red', 'green', 'blue', 'purple']. Instead, however, we invoke the function for a second time. We again pass in the global colors variable as the first argument (remember that the array it references has been mutated, so at this point it has a value of ['red', 'green', 'blue', 'purple']), and as the second argument we pass in color2.

As with the first invocation, the colors parameter again references the same array to which the global colors variable points. The color parameter on this occasion has a value of 'pink', and this value is appended to the array.

Q4)

let color1 = "purple";
let color2 = "pink";
let colors = ["red", "green", "blue"];

function updateColors(colors, color) {
  colors.push(color);
  return colors;
}

let newColors = updateColors(colors, color1);
updateColors(newColors, color2);
console.log(colors);

expectation:

in line 10 a new variable is set to hold a return value of the colors array which will add puruple to the array

then in line 10 the updateColors gets newColors as a argument but the return would in the function wouldnt do anything since theres nothing to save it to.

my assumption is that since the array is still getting mutated from the push method the array will console log:

["red", "green", "blue", "purple", "pink"]

ans: 

As with Exercise 3, this again logs the array ['red', 'green', 'blue', 'purple', 'pink']. There's a difference here in that we return the value of the colors parameter when we invoke the function, and also declare and assign another global variable newColors to that return value. The underlying principles at work are the same, however.

When updateColors is first invoked, we pass in the global colors variable. colors references an array, which at this point has a value of ['red', 'green', 'blue']. We also pass in color1 which has a value of 'purple'. When the function is invoked on line 10, the color parameter is initialized to 'purple' and is appended to the array referenced by the colors parameter. At this point the array referenced by both the colors parameter and the global colors variable has a value of ['red', 'green', 'blue', 'purple']. We then return the value of the colors parameter.

On line 10, we declare and initialize the variable newColors to the return value of the function. Since, within the scope of the function, the colors parameter was assigned to a reference value, the value that the function returns (and hence the value to which newColors is assigned) is a reference to the array. So at this point, the global variables colors and newColors both reference the same array.

On line 11 we again invoke updateColors, passing in newColors as the first argument. We could have also passed in colors, since both variables reference the same array. For the second argument, we pass in color2, which has a value of 'pink'. Just as in Exercise 3, this value is appended to the array referenced by both colors and newColors.

Q5)

let color = "purple";
let colors = ["red", "green", "blue"];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop();
  return colors;
}

let newColors = removeColor(colors);
addColor(colors, color);
console.log(newColors);

expectation:

line 14 the removeColor pops the 'blue' from the colors array
then in line 15 we are adding in 'purple' the colors array which currently holds ['red','green'] after push it console.logs:

['red', 'green', 'purple']

ans: 

This logs the array ['red', 'green', 'blue'].

In some ways this is similar to Exercise 4 except that here we have two functions, both of which mutate the array passed in.

We declare and initialize the global variable color to the string 'purple' on line 1. On line 2, we declare and initialize the global variable colors to an array containing three strings, 'red', 'green', and 'blue'.

We declare two functions:

    addColor which defines two parameters colors and color. It calls push on colors passing in color as an argument and then returns colors.
    removeColor which defines one parameter colors. It calls pop on colors and then returns colors. (Note that the colors object is mutated.)

On line 14 we invoke removeColor, passing in the global colors variable as an argument. At this point the colors parameter within the scope of the function and the global colors variable both point to the same array ['red', 'green', 'blue']. We then mutate that array by calling the Array method pop on it. This removes the last element of the array, so the array which the colors parameter and the global colors variable both reference now has a value of ['red', 'green']. The function returns a reference to this array, and it is this reference to which newColors is assigned.

A key aspect of this function though, is what happens on line 10. Here we assign color to the return value of colors.pop(). The pop method returns the element that it removes, so in this case that return value is the string 'blue'. What is color though? Since we haven't defined a color parameter, nor declared a new variable of that name within the scope of the function, we need to look outside of the function scope. The color referenced on line 10 is the global color variable that we declared on line 1. Line 10 is therefore a reassignment of this variable.

At this point, once we've invoked removeColor, the global color variable has a value of 'blue' and the global colors and newColors variables both point to the same array which has a value of ['red', 'green'].

We then invoke addColor on line 15, passing in the colors and color global variables. Within the scope of the function the colors parameter points to the same array as the global colors variable and the color parameter has the value of 'blue'. We then append the value of color to the array and return a reference to the colors array (though we don't do anything with the return value).

At this point the array to which the global colors and newColors variables both point has a value of ['red', 'green', 'blue'], and so this is what is output when newColors is logged on line 16.

Q6)

function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return (word += "!!!");
}

let word = "hello";
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);

expectation:

since capitalize doesnt have any parameters the function will look outisde the function for word and ignore the arguments on line 10 the return will be:

'Hello'

and with exclaim function same thing the word varable is used from outside of the function so the return will be:

'hello!!!'

the console longs will be:

'hello'
'Hello'
'hello!!!'

ans:

hello!!!
Hello
hello!!!

Here we have two functions, capitalize and exclaim. Neither function define any parameters, but both return a value.

On line 9, we declare and initialize the global variable word to the string 'hello'.

On line 10, we declare and initialize the global variable capitalizedWord to the return value of invoking capitalize. Within the body of the function a few things happen:

    We reference the first letter of word, which is 'h', using bracket notation and call the String method toUpperCase on it. This returns a new string 'H'.
    We call the String method slice on word, passing in the index 1 as an argument. This returns a new string 'ello'.
    We concatenate these two new strings using the + operator to form the new string 'Hello'.
    We then return this string 'Hello', and so capitalizedWord is assigned to this value.

Note that although we passed in word as an argument to the function invocation, we don't use that argument within the function and the word referenced on line 2 is the global variable word. Since this variable is assigned to a primitive, however, nothing we do on line 2 changes it in any way.

On line 11, we invoke the exclaim function, passing in the capitalizedWord variable. As with the capitalize function invocation we don't use the argument within the function. Within the function, word references the global word variable that was declared on line 9. We reassign this variable to a value with is the initial value of word ('hello') concatenated using the + operator with the string '!!!' to produce a new string 'hello!!!'. As well as reassigning word to this new string, we also return it, assigning exclaimedWord to this value.

After our function invocations therefore, word and exclaimedWord have a value of 'hello!!!' and capitalizedWord has a value of 'Hello'. It is these values we see when we log the three variables on lines 13-15.

Q7) 
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) {
  return (word += "!!!");
}

let word = "hello";
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);

expectation:

since the functions now have parameters the outcome will look like this:
'hello'
'Hello'
'Hello!!!'