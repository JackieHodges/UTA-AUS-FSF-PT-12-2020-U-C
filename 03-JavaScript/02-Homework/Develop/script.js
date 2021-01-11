// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt user about password length
var passwordLength = prompt("How many characters do you want in your password?");
if (passwordLength < 8){
  alert("Your password must be at least 8 characters. Try again.");
}
else if (passwordLength > 128){
  alert("Your password must be less than 128 characters. Try again.");
}
else {
  console.log(passwordLength);
}

// Prompt user for lower case 
var lowerCase = confirm("Would you like to include lower case letters?");
console.log(lowerCase);
if (lowerCase == true){
  // include lower case
}
else {
  // leave
}

// Prompt user for upper case
var upperCase = confirm("Would you like to include upper case letters?");
if (upperCase == true){
  // include upper case
}
else{
  // leave
}

// Prompt user for numeric
var numeric = confirm("Would you like to include numerics?");
if (numeric == true){
  // include numeric
}
else {
  // leave
}

// Prompt for special characters
var specialCharacters = confirm("Would you like to include special characters?");
if (specialCharacters == true){
  // include special characters
}
else {
  // leave
}
