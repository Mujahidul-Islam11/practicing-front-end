let score =  true;

const valueOfScore = Number(score);
// console.log(valueOfScore) output: 0 - if score is null/ output: NaN - if score is undefined/ output: 1 - if score is true/ output: 0 - if score is false
// console.log(typeof valueOfScore); output: number

/**
 * "33" => 33
 * "33abc" => NaN
 * true => 1
 * false => 0
 * null => 0
 * undefined => NaN
 */


let isLoggedIn = null;

const booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);


/**
 * ------- isLoggedInValue => console.log(output) --------
 * 1 => true
 * 0 => false
 * "" => false
 * "Dinar" => true
 * undefined => false
 * null => false
 */


// ----------------- Operations -------------------
console.log(1 + 2)
console.log("1"+ 2)
console.log(1 + 2 + "3") // Operations are executed from left to right side
// 1 + 2 are numbers so javascript sum it to 3 and now we have 3 + "3", now the result is 33, 
// because if we sum number and string value with each other, javascript converts it to string. 
// So, the output is "33";