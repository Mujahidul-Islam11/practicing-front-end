// basics
var a = [1, 2, 3];
const newA = a.concat(a);
//console.log(newA);  [1,2,3,1,2,3]

function duplicateArr(arr) {
  return arr.concat(arr);
}

console.log(duplicateArr([2, 3, 4, 5]));
