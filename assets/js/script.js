// Assignment code here
var chars = {
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q","r","s","t","u","v","w","x","y","z"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  specialChar: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
};

// Prompt to determine password char length
var passwordLength = function() {
  var confirmLength = window.prompt("How many characters would you like your password to have?");

  // "if" statement to restrict chars length to more than 7 but less than 128 chars
  if (confirmLength <= 7 || confirmLength >= 129) {
    window.alert("Your password must contain between 8 and 128 characters. Try again.");
    return passwordLength();
  }

  // "if" statemnt to restrict prompt input to only numerical values
  if (isNaN(confirmLength)) {
    window.alert("Please only enter numerical values.");
    return passwordLength();
  }

};

// Prompts to determine types of chars to include in the password
var charType = function() {
  var askType = {
    askLower: window.confirm("Please confirm if you would like your password to include lowercase letters."),
    askUpper: window.confirm("Please confirm if you would like your password to include uppercase letters."),
    askNumber: window.confirm("Please confirm if you would lke your password to include numerical values."),
    askSpecial: window.confirm("Please confirm if you would like your password to include special characters."),
  }

  // checks if user selects at least 1 character type
  if (askType.askLower === false && askType.askUpper === false && askType.askNumber && askType.askSpecial === false) {
    window.alert("Please select at least 1 character type. Try again.");
    return charType();
  }
  console.log(askType);

  var passwordHold = [];

  // When user confirms lower case, password will gain access to lowerCase array
  if (askType.askLower) {
    passwordHold = passwordHold.concat(chars.lowerCase);
  }

  // When user confirms upper case, password will gain access to upperCase array
  if (askType.askUpper) {
    passwordHold = passwordHold.concat(chars.upperCase);
  }

  // When user confirms numbers, password will gain access to numeric array
  if (askType.askNumber) {
    passwordHold = passwordHold.concat(chars.numeric);
  }

  // When user confirms special characters, password will gain access to specialChar array
  if (askType.askSpecial) {
    passwordHold = passwordHold.concat(chars.numeric);
  }

  return passwordHold;
};

var generatePassword = function() {
  var passValue = passwordLength();
  passValue = parseInt(passwordLength);
  console.log(passwordLength);

  var finalPass = charType();

  // password will be represented as string
  var randomize = "";

  for (i = 0; i < passValue; i++) {
    randomize = randomize + finalPass[Math.floor(Math.random() * passValue.length)];
    console.log(randomize);
  }
  return randomize;

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
