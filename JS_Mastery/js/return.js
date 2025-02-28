function sumOfNum (nums){
    let even = [];
    for(const num of nums){
        if(num%2 === 0){
            even.push(num);
        }
    }
    return even
}

console.log('sum of numbers',sumOfNum([3,4,5,6]))
