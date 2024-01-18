let arr= ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));

function oddLengths(arr) {
    return arr.filter (function (char) {
      return char.length % 2 === 1
    }).map(function (char) {
      return char.length;
    })
}