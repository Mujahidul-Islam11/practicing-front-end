// Promise is an object that represent a value that may be
// available now, later or never! it has three states - pending,
// fulfilled, rejected

// ------------------------ Basic Syntax --------------------

const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Task completed");
  }
  reject("Task failed!");
});

// myPromise
//   .then((result) => console.log(result)) // Task completed, if success true 
//   .catch((error) => console.error(error)); // Task failed, if success false


// ------------------------ Promise Chaining (Avoid Callback Hell) -----------------------

const fetchData = new Promise((resolve, reject)=>{
    setTimeout(() => resolve("Data Received"), 2000);
})

// fetchData.then(data => {
//     console.log(data);
//     return "Processing Data...";
// }).then(processed=>{
//     console.log(processed);
//     return "Data Ready!";
// }).then(finalData => {
//     console.log(finalData);
// }).catch(err=> console.error(err));


// ---------------------- Promise vs Callback Hell ----------------

// setTimeout(() => {
//     console.log("task 1 done");
//     setTimeout(() => {
//         console.log("task 2 done");
//         setTimeout(() => {
//             console.log("task 3 done");
//         }, 1000);
//     }, 1000);
// }, 1000);


function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}


// wait(1000)
// .then(()=>{
//     console.log("task 1 done");
//     return wait(1000);
// }).then(()=>{
//     console.log("task 2 done");
//     return wait(1000);
// }).then(()=>{
//     console.log("task 3 done")
// });


