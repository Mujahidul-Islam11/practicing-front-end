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

console.log(booleanIsLoggedIn);


/**
 * ------- isLoggedInValue => console.log(output) --------
 * 1 => true
 * 0 => false
 * "" => false
 * "Dinar" => true
 * undefined => false
 * null => false
 */