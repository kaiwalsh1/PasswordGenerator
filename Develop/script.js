// Assignment Code
var generateBtn = document.querySelector("#generate");

var tagName = prompt('How many characters do you want the password to contain?');
var nextTag = confirm('Click OK to confirm including lowercase characters.');
var nextTag = confirm('Click OK to confirm including uppercase characters.')
var nextTag = confirm('Click OK to confirm using numeric characters.');
var nextTag = confirm('Click OK to confirm using special characters.');


// function for button to generate password 
function generatePassword() {
  console.log('Hey! You clicked the button');

// Prompt user with password criteria
const prompter = function() {

}
//    Password length 8 < 128
//    lowercase, uppercase, special characters
// Validate input
// Generate password with criteria
// Display password on page 


return "Generated pw will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);