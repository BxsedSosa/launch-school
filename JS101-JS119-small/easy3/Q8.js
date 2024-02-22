/*

Grade Book

Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

    90 <= score <= 100: 'A'
    80 <= score < 90: 'B'
    70 <= score < 80: 'C'
    60 <= score < 70: 'D'
    0 <= score < 60: 'F'

Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

Examples:

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

*/

/*
P:

    Create a function that will take 3 parameters of numbers. take the 3 numbers and get the 'mean' average between them. then put the mean through a grading scale and return the grade according to what the scale is.
*/

/*
E:

    Input:                   Output:
    getGrade(95, 90, 93);    // "A"
    getGrade(50, 50, 95);    // "D"

*/

/*
D:

    Data needed:
        Numbers
*/

/*
A:

    Create a function called getGrade with 3 parameters
        Parameter 1 = grade1 
        Parameter 2 = grade2
        Parameter 3 = grade3

        create a constant called MEAN
            which will add all 3 of the parameters together and divide the sum by 3

        Taking the MEAN into a scale for grading
            Create a switch statement that will take the MEAN and determine what grade to return
                in case 1 if MEAN is greater than equal to 90
                    return 'A'
                in case 2 MEAN is greater than equal to 80
                    return 'B'
                in case 3 MEAN is greater than equal to 70
                    return 'C'
                in case 4 MEAN is greater than equal to 60
                    reutnr 'D'
                in default case
                    return 'F'
*/

//C:

function getGrade(grade1, grade2, grade3) {
    const MEAN = Math.floor((grade1 + grade2 + grade3) / 3);
    console.log(MEAN);

    switch(true) {
        case MEAN >= 90:
            return 'A';
        case MEAN >= 80:
            return 'B';
        case MEAN >= 70:
            return 'C';
        case MEAN >= 60:
            return 'D';
        default:
            return 'F';
    }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
