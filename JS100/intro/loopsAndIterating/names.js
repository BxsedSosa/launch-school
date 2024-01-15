let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
// let i = 0;

// while (i < names.length) {
//   let upperCaseNames = names[i].toUpperCase();
//   upperNames.push(upperCaseNames);
//   i += 1;
// }


// console.log(upperNames)

// for (let i = 0; i < names.length; i++) {
//   if (names[i] === 'Naveed') {
//     continue;
//   }
//   let upperCaseNames = names[i].toUpperCase();
//   upperNames.push(upperCaseNames);
// }

// console.log(upperNames)


for (let i = 0; i < names.length; i++) {
  if (names[i] !== 'Naveed') {
  let upperCaseNames = names[i].toUpperCase();
  upperNames.push(upperCaseNames);
  }
}

console.log(upperNames)