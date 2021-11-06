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
  var counter = 0
    if(lowercase){
      var random = Math.floor(Math.random()*lowerCaseArray.length);
      passwordArray.push(lowerCaseArray[random]);
      console.log(passwordArray);
      counter++;
    };

    if(uppercase){
      var random = Math.floor(Math.random()*upperCaseArray.length);
      passwordArray.push(upperCaseArray[random]);
      console.log(passwordArray);
      counter++;
    }

  if(numeric){
    var random = Math.floor(Math.random()*numericArray.length);
    passwordArray.push(numericArray[random]);
    console.log(passwordArray);
    counter++;
  };

if(special){
  var random = Math.floor(Math.random()*specialArray.length);
  passwordArray.push(specialArray[random]);
  console.log(passwordArray);
  counter++;
}
var mainArray = lowerCaseArray.concat(upperCaseArray);
var mainArray2 = mainArray.concat(specialArray);
var mainArray3 = mainArray2.concat(numericArray);
console.log(mainArray3);

for(var i=0; i<characters - counter; i++){
  var random = Math.floor(Math.random()*mainArray3.length);
  passwordArray.push(mainArray3[random]);
}
console.log(passwordArray);
return passwordArray.join("");
};


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