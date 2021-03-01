// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordText = document.querySelector("#password");
// string of characters that the password will pull from
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*()?{}[]-=+_*"



// Write password to the #password input
function writePassword(){
let createdPassword = "";
let passwordChar = "";
//increases by one for everytime a set of characters are confirmed from the prompts below
let confirmCount = "";

  // prompt to determine the length of the password (must be between 8 and 128 characters)
  var qLength = window.prompt("How many characters would you like the password to be? Pick a number between 8 and 128.");

    if(qLength < 8 || qLength > 128){
        alert("Password length mush be between 8 and 128 characters.");
        return writePassword();
    }

  // confirm if to include lower case letters
  var qLower = window.confirm("Would you like the password to include lower case letters?");

  // if yes, we put the string of lowerCase into the empty string of passwordChar
  // increase the confirm count by 1 and randomly selects a random character from the string of lower case
  // passes the random character into the createdPassword varible
  if(qLower){
    passwordChar += lowerCase;
    createdPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    confirmCount ++
    console.log(confirmCount)
    console.log(createdPassword)

  };

  // confirm if to include upper case letters
  var qUpper = window.confirm("Would you like the password to include upper case letters?");

   // if yes we add the string of upperCase into the string of passwordChar
   // increase the confirm count by 1 and randomly selects a random character from the string of lower case
   // passes the random character into the createdPassword varible
  if(qUpper){
    passwordChar += upperCase;
    createdPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
    confirmCount ++
    console.log(confirmCount)
    console.log(createdPassword)
  };

  // confirm if to include numbers
  var qNumber = window.confirm("Would you like the password to include numbers?");

  // if yes we add the string of number into the string of passwordChar
  // increase the confirm count by 1 and randomly selects a random character from the string of lower case
  // passes the random character into the createdPassword varible
  if(qNumber){
    passwordChar += number;
    createdPassword += number[Math.floor(Math.random() * number.length)];
    confirmCount ++
    console.log(confirmCount)
    console.log(createdPassword)
  };

  // confirm if to include symbols
  var qSymbol = window.confirm("Would you like the password to include symbols?");

  // if yes we add the string of symbol into the string of passwordChar
  // increase the confirm count by 1 and randomly selects a random character from the string of lower case
  // passes the random character into the createdPassword varible
  if(qSymbol){
    passwordChar += symbol;
    createdPassword += symbol[Math.floor(Math.random() * symbol.length)];
    confirmCount ++
    console.log(confirmCount)
    console.log(createdPassword)
  };

//   creating a password by randomly slecting characters from the string passwordChar which now has a string full of the data types we said yes to 
  for(var i = 0; i < qLength-confirmCount; i++) {
  // using confirmCount (varible with 1 random character from each string we confirmed)
  // we minus the confirmCount from the length the user requested for the password
     createdPassword += passwordChar[Math.floor(Math.random() * passwordChar.length)]
  }

  passwordText.innerHTML = createdPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
