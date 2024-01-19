let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(sourceObj, keys) {
  let destinationObj = {};

  if (keys) {
    keys.forEach(function(key) {
      destinationObj[key] = sourceObj[key];
    });

    return destinationObj;
  } else {
    return Object.assign(destinationObj, sourceObj)
  }
}

let newObj = copyObj(objToCopy, ['bar'])

let newObj2 = copyObj(objToCopy, ['foo', 'qux']);
console.log(newObj2)
