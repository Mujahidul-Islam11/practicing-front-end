const id = "7";
// padding
const fullDigit = id.padStart(6, "0"); //make a six digit number, if there is less
//number then six digit then add zero before the main digit.
 // console.log(fullDigit);Output:- 000007

const studentNumber = 1;
const studentNumberString = studentNumber.toString(); // convert the number into a string

// console.log(studentNumberString.padStart(4, "0"))

const orderOne = 1;
const firstOrder = orderOne.toString().padStart(4, "0");

const secondOrder = firstOrder.substring(3);
console.log(parseInt(secondOrder) + 1)
