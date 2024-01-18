let myArr = [1,3,6,11,4,2,4,9,17,16,0];

let result = myArr.map(arr => {
  return arr % 2 === 0 ? 'even' : 'odd';
})

console.log(result);