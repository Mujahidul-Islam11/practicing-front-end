// const arr = [1, 2, 3];
// [1][2][3][4][5][][][]

// const copiedArray = arr;

// arr.push(4);
// copiedArray.push(5)
// console.log(arr);
// console.log(copiedArray);
/**  array jehetu reference dhore rakhe sehetu amra jodi copiedArray ke change kori 
 * taile main array tai change hoi jabe
 * */

const arr = [1, 2, 3];
//[1][2][3][][][][][]

const copiedArray = [...arr];

arr.push(4);
copiedArray.push(5)
// console.log(arr);
// console.log(copiedArray);
/**  spread operator original array er ekta notun copy baniye otake copiedArray er moddhe set
 * kore, ey khetre amra jodi copiedArray change kori tobe original array er moddhe kono 
 * change asbe nah
 * */

// const myFunction = (num1, num2) =>{
//     const sum = num1 + num2;
//     return sum;
// }

// myFunction(1,2,3,4,5)
const myFunction = (...rest) =>{
    console.log(rest)
}

myFunction(1,2,3,4,5)