const mbl = {
    brand: "Samsung",
    price: 23000,
    color: "Black",
    camera: "12mp"
}

// for(const prop in mbl){
//     console.log(prop)
// console.log(mbl[prop])
// }

// const keys = Object.keys(mbl); returns the keys into an array
// const keys = Object.values(mbl); returns the values into an array
const keys = Object.values(mbl);
// console.log(keys)

// for(const key of keys){
//     console.log(key)
// }

const pen = {brand: 'econo', price:10, color: 'black'};
const pencil = new Object();
const rubber = Object.create({})