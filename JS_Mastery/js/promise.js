const fetchData = new Promise((resolve, reject)=>{
    setTimeout(() => {
       const data = "Welcome brother!";
       const error = true;
       if(!error){
        resolve(data)
       }
       else{
        reject("GoodBye tata bye bye")
       }
    }, 2000);
})

// fetchData.then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })


async function getData(){
try{
    const data = await fetchData;
    console.log(data)
}
catch(error){
    console.log(error)
}
}

getData();