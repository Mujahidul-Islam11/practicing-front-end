var user1 = 'd';
var user1 = 'f'; // can be reassigned and also can be redeclare
console.log(user1) // Output: f

let user2 = "akash";
// let user2 = 'khalash'; SyntaxError: Identifier 'user2' has already been declared
user2 = 'batash'; // can reassigned a value but can't be declared again with the same name
// console.log(user2) //Output: batash

const user3 = "ata moida";
//user3 = "bilai";  TypeError: Assignment to constant variable.
//console.log(user3)  can't be reassigned a value and also can't be declared again