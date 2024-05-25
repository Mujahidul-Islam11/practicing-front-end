// for loop

let sum = 0;
// sum = sum + 1, shorthand :- sum++
for (let i = 0; i <= 10; i++) {
  sum++;
}

// console.log(sum);

const names = ["mir", "mezba", "rakib"];


// for(let i = 0; i <names.length; i++){
//     console.log(names[i]);
// }
// for(let name of names){
//     console.log(name);
// }
// names.forEach(name => {
//     console.log(name);
// });

const mentor ={
  name: "ravi",
  age: 24,
  isDeveloper: true
}

const keys = Object.keys(mentor);
// console.log(keys)
for(let i = 0; i < keys.length; i++){
  console.log(mentor[keys[i]]);
}

// how to access object values
/**
 * 1. mentor.name, mentor.age, mentor.isDeveloper
 * 2. mentor["name"], mentor["age"], mentor["isDeveloper"]
 */
// for(let key in mentor){
//   console.log(mentor[key])
// }
