function sumOfNum (nums){
    let sum = 0;
    for(const num of nums){
        sum = sum + num;
    }
    return sum
}

console.log('sum of numbers',sumOfNum([3,4,5,6]))
