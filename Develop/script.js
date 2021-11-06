// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var upperCaseArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var numericArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialArray = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];
var passwordArray = [];
// if (nextTag) {
//   var secondTagName = 


// function for button to generate password 
function generatePassword() {
  // Prompt user with password criteria
  var characters = prompt('How many characters do you want the password to contain?');
    if(characters < 8 || characters > 128) {
      alert('Character length must be between 8 and 128 characters');
      return;
    };
  var lowercase = confirm('Click OK to confirm including lowercase characters.');
  var uppercase = confirm('Click OK to confirm including uppercase characters.');
  var numeric = confirm('Click OK to confirm using numeric characters.');
  var special = confirm('Click OK to confirm using special characters.');

    
  };

//    Password length 8 < 128
//    lowercase, uppercase, special characters
// Validate input
// Generate password with criteria
// Display password on page 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);