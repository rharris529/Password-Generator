// Assignment code here
var chars = "0123456789abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = window.prompt("How many characters would you like your password to have?");
  console.log(passwordLength); 

  if (passwordLength < 8) {
    window.alert("Your password must contain at least 8 characters. Try again.");
    return;
  };

  if (passwordLength < 128) {
    window.alert("Your password cannot contain more than 128 characters. Try again.");
    return;
  }
  
  var confirmNum = window.confirm("Please confirm if you would like your password to contain numeric characters.");
  console.log(confirmNum);

  var confirmLower = window.confirm("Please confirm if you would like your password to include lowercase letters.");
  console.log(confirmLower);

  var confirmUpper = window.confirm("Please confirm if you would like your password to include uppercase letters.");
  console.log(confirmUpper);

  var confirmSpecial = window.confirm("Please confirm if you would like your password to include special characters.");
  console.log(confirmSpecial);

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

    

}

generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
