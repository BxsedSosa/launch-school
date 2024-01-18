let arr= ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));

function oddLengths(arr) {

  return arr.reduce((acc, ar) => {
    let len = ar.length;
    if (len % 2 === 1) {
      acc.push(len)
    }
    return acc
  }, [])
}