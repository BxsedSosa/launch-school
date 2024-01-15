function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNum(1,6);
  tries += 1;
} while (result <= 2)

console.log(`It took ${tries} tries to get a number greater than 2`)