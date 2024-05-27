const products = [
  {
    name: "mango",
    price: 20,
  },
  {
    name: "banana",
    price: 20,
  },
  {
    name: "pineapple",
    price: 20,
  },
];

const numbers = [1, 3, 5, 6];

// let sum = 0;
// products.forEach(product => {
//     sum+= product.price;
// });

// console.log(sum)

// Easy way with reduce method

// const total = numbers.reduce((previousValue, currentValue) => {
//   return previousValue + currentValue;
// });
// reduce holds the previousValue and the currentValue of data
// console.log(total);

const higherOrderFunc = (callback) =>{
console.log("This is a higher order function because it holds an function as parameter");
callback();
}

higherOrderFunc(()=>{
  console.log("This is a call back function")
})
