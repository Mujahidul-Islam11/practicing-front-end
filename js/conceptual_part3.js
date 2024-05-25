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

// const mentor ={
//   name: "ravi",
//   age: 24,
//   isDeveloper: true
// }

// const keys = Object.keys(mentor);
// console.log(keys)
// for(let i = 0; i < keys.length; i++){
//   console.log(mentor[keys[i]]);
// }

// how to access object values
/**
 * 1. mentor.name, mentor.age, mentor.isDeveloper
 * 2. mentor["name"], mentor["age"], mentor["isDeveloper"]
 */
// for(let key in mentor){
//   console.log(mentor[key])
// }


// callback 

// const randomFunc = (fn) =>{
//   return fn(3);
// }

// randomFunc((number)=>{
//   console.log(number)
// })

const mentorList = [
  {
    name: "ravi",
    age: 25,
    isDeveloper: true
  },
  {
    name: "ravi",
    age: 28,
    isDeveloper: true
  },
  {
    name: "ravi",
    age: 26,
    isDeveloper: true
  }
]

// const mentor25 = mentorList.filter(mentor => {
//   if(mentor.age > 25)
//   return mentor
// })
// filter er kaj jegula jegula match kore ogula dea
// console.log(mentor25)

// const mentor25 = mentorList.find(mentor => {
//   if(mentor.age === 25)
//   return mentor
// })
// find er kaj specific ekti single data khuje dea
// console.log(mentor25)