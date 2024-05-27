
// callback 

// const randomFunc = (fn) =>{
//   return fn(3);
// }

// randomFunc((number)=>{
//   console.log(number) // 3
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
  // console.log(mentor25) // [
  //   { name: 'ravi', age: 28, isDeveloper: true },
  //   { name: 'ravi', age: 26, isDeveloper: true }
  // ]
  
  // const mentor25 = mentorList.find(mentor => {
  //   if(mentor.age === 25)
  //   return mentor
  // })
  // find er kaj specific ekti single data khuje dea
  // console.log(mentor25) // { name: 'ravi', age: 28, isDeveloper: true }
  
  
  // forEach & map = same 
  // note:- forEach can't return anything from inside but map can
  
  // const eachInstructor = names.forEach(name => {
  //   return name;
  // });
  
  // // console.log(eachInstructor); // undefined
  // const eachInstructor2 = names.map(name => {
  //   return name;
  // });
  
  // console.log(eachInstructor2); // [ 'mir', 'mezba', 'rakib' ]

  // note :- we use map when we need to create a new array, and we use forEach 
  // when we need to do any operations on the elements of an existing array

  const arr = [1, 2, 3, 4, 5];

  const newValue = arr.reduce((previousValue, currentValue)=>{
    return previousValue + currentValue;
  })
  console.log(newValue);

  /**
   * The process of reduce function
   * 1. [1, 2, 3, 4, 5];
   * 2. [3, 3, 4, 5];
   * 3. [6, 4, 5];
   * 4. [10, 5];
   * 5. [15];
   */