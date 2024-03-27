function generatePassword(
  length,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "*&@$!+_-";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowerCase ? lowerCaseChars : "";
  allowedChars += includeUpperCase ? upperCaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";
  if (length <= 0) {
    console.log("password length must be 1 at least");
  }
  if(allowedChars.length === 0){
    console.log("at least one set of character needs to be selected")
  }
  
  for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    console.log(randomIndex)
    password += allowedChars[randomIndex]
  }
  return password;
}

const passwordLength = 12;
const includeUpperCase = true;
const includeLowerCase = true;
const includeNumbers = true;
const includeSymbols = true;

const pass = generatePassword(
  passwordLength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated Password:- ${pass}`);
