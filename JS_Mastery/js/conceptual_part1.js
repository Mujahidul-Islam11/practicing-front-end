var user1 = 'd';
var user1 = 'f'; // can be reassigned and also can be redeclare
//console.log(user1)  Output: f

let user2 = "akash";
// let user2 = 'khalash'; SyntaxError: Identifier 'user2' has already been declared
user2 = 'batash'; // can reassigned a value but can't be declared again with the same name
// console.log(user2) //Output: batash

const user3 = "ata moida";
//user3 = "bilai";  TypeError: Assignment to constant variable.
//console.log(user3)  can't be reassigned a value and also can't be declared again



// Primitive datatypes
// string : "Texts"
// numbers : 3000
// boolean : true/false
// Null 
// undefined

/** Why they are called the primitive datatypes?  ans:- Because they are the primary or primitive
 * data's of JavaScript.
 * Note:- Non-Primitive datatypes will be made by primitive datatypes, because they are main 
 * primary datatypes.
*/

// Non-Primitive datatypes / Reference datatypes
// function
// object
// array

// They are called non-primitive because they hold the reference of value
let phone = "Hello world";

const phoneCall = phone.substring(0,5);
console.log(phoneCall)