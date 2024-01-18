let arr = [3,5,7];
console.log(sumOfSquares(arr));

function sumOfSquares(arr) {

  return arr.reduce((sum, ar) => {
    return sum + ar * ar;
  }, 0);

}