/*

Right Triangles

Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

Examples:

triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

*/

/*
P:

    Create a function that takes a number to create a right triangle with '*'. it will start with 1 star at the top and increment 1 more star each line. Also it will add padding of spaces to make the right triangle line up to the right.
*/

/*
E:

    Input:
        5
        9
    
    Output:
            *
           **
          ***
         ****
        *****

            *
           **
          ***
         ****
        *****
       ******
      *******
     ********
    *********
*/

/*
D:

    Data needed:
        number
        string
*/

/*
A:

    Create a function called triangle with 1 parameter
        call the 1 parameter num

    create a for loop and iterate through the number given
        console log with back ticks and padStart with empty spaces taking the index subtracted to the num given in the function

        and padEnd with the current index using the *

*/

//C:

function triangle(num) {
    for (let i = 1; i <= num; i++) {
        starLen = '*'.repeat(i)
        spaceLen = ' '.repeat(num - i)
        console.log(`${spaceLen} ${starLen}`);
    }
}

triangle(5);
triangle(9);