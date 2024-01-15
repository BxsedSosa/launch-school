let arr = [3,1,5,9,2,6,4,7];
let indexOfFive = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 5) {
    indexOfFive = i;
    break;
  }
}

console.log(indexOfFive)