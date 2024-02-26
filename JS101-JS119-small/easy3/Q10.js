/*

What Century is That?

Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

Examples:

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

*/

/*
P:

  Create function that takes a number which will be a year given and will return which centry it is. it will also add to the end of the number 'st' 'nd' 'rd' 'th' to the appropiate number
*/

/*
E:
  Input:                Output:
  century(2000);        // "20th"
  century(2001);        // "21st"
  century(1965);        // "20th"
  century(256);         // "3rd"
  century(5);           // "1st"
  century(10103);       // "102nd"
  century(1052);        // "11th"
  century(1127);        // "12th"
  century(11201);       // "113th"
*/

/*
D:

  Data needed:
    numbers
*/

/*
A:

  Create a function called century which will have 1 parameter
    parameter will be called year

    Create a variable called result which will hold the algo for getting the number of the centry
      it will start by taking the year subract that by 1
      then divide that by 100
      then add back 1 
      also will use the math floor method to make sure its a whole number
      
    create a variable called lastNum which will take the result variable and turn the number to a string and only use the last index of result

    Create a if statement that will take the lastNum and compare
      if lastNum is equal to 1
        return backtick <result>st
      else if lastNum is equal to 2
        return backtick <result>nd
      else if lastNum is equal to 3
        return backtick <result>rd
      else
        return back tick <result>th
*/
/*
Logic:
every 99 years is 1 century

1st cen 1-100
2nd cen 101-200
3rd cen 201-300
4th cen 301-400
5th cen 401-500




*/
//C:

function century(year) {
  let result = String(Math.floor((((year - 1) / 100) + 1)));

  let lastNum = result.substring(result.length - 1);
  let lastTwo = result.substring(result.length - 2);
  
  if (lastTwo === '11' || lastTwo === '12' || lastTwo === '13') {
    return `${result}th`;
  } else if (lastNum === '1') {
    return `${result}st`
  } else if (lastNum === '2') {
    return `${result}nd`;
  } else if (lastNum === '3') {
    return `${result}rd`;
  } else {
    return `${result}th`;
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"