// synchronous
// explanation:- JavaScript is synchronous, it doesn't moves into the next code before rendering the
// first code
const funcOne = (callback)=>{
    console.log('task 1')
    callback();
}
const funcTwo = (callback)=>{
    setTimeout(() => {
        console.log('task 2, data loading')
    }, 6000);
    callback();
}
const funcThree = (callback)=>{
    console.log('task 3')
    callback()
}
const funcFour = (callback)=>{
    console.log('task 4')
    callback();
}
const funcFive = ()=>{
    console.log('task 5')
}

funcOne(function f1(){
    funcTwo(function f2(){
        funcThree(function f3(){
            funcFour(function f4(){
                funcFive();
            });
        });
    });
});

