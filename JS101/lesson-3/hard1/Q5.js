/*

Ben was tasked to write a simple JavaScript function to determine whether an input string is an IP address using 4 dot-separated numbers, e.g., 10.4.5.11. He is not familiar with regular expressions.

Alyssa supplied Ben with a function named isAnIpNumber. It determines whether a string is a numeric string between 0 and 255 as required for IP numbers and asked Ben to use it. Here's the code that Ben wrote:

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}

Alyssa reviewed Ben's code and said, "It's a good start, but you missed a few things. You're not returning a false condition, and you're not handling the case when the input string has more or less than 4 components, e.g., 4.5.5 or 1.2.3.4.5: both those values should be invalid."

Help Ben fix his code.

*/

/*
P:

  The problem above is asking to fix the code. Alyssa wants a conditional statement that handles if theres enough numbers for the input to be a ip address and the function does not return false 
*/

/*
E:

input:
  the function above
*/

/*
D:

data needed:
  the function
*/

/*
A:

  Copy the function
    after line 2 add a conditional check to see if the length of the array is greater than 3 AND less then 5

    and change line 6 of break to return false
*/

//C:

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  let dotWordsLength = dotSeparatedWords.length;
  if (dotWordsLength > 3 && dotSeparatedWords < 5) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

/*

Answer:
There are several ways to fix this code. We'll look at one possible solution to both parts of the problem.

To determine whether there are precisely 4 dot-separated "words" in the string, you can check the value of dotSeparatedWords.length after splitting the string.

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}

Great! The code now handles inputs that don't contain 4 dot-separated words, but the other error remains: it doesn't return false when encountering an invalid component such as 257 or abc. Ben used a break statement to break out of the while loop, but that causes control to fall through to the return true statement. You can fix this by using return false instead of break.

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}


*/