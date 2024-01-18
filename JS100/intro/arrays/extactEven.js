let myArr = [
  [1,3,6,11],
  [4,2,4],
  [9,17,16,0],
];

// for (let i = 0; i < myArr.length; i++) {
//   for (let j = 0; j < myArr[i].length; j++) {
//     if (myArr[i][j] % 2 === 0) {
//       console.log(myArr[i][j]);
//     }
//   }
// }

myArr.forEach(function(nestedArrayy) {
  nestedArrayy.forEach(function(value) {
    if (value % 2 === 0) {
      console.log(value);
    }
  })
})