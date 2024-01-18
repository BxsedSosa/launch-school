let things = [1,'a','1',3,NaN,3.1415,-4,null,false];
let integers = findInt(things);
console.log(integers)

function findInt(arr) {
  return arr.filter(function(ele){
    return Number.isInteger(ele)
  })
}
