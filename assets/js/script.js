// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate password

// Secure password function
function generatePassword() {
  let characters = prompt("Character length (minimum 8 - maximum 128");
  let lowerCase = confirm("Toggle to use lower case letters: abcdefghijklmnopqrstuvwxyz");
  let upperCase = confirm("Toggle to use upper case letters: ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  let numbers = confirm("Toggle to use numbers, such as: 1234567890");
  let symbols = confirm("Toggle to use symbols, such as: !@#$%^&*()_+");
  let passwordOptions = "";
  let password = "";

  // Check if security prompts are confirmed and write conditional statements
  console.log(characters);
  if(isNaN (parseInt(characters))) {
    alert("Choose a number from 8-128.");
      return;
  } 
  if(parseInt(characters) < 8 || parseInt(characters) > 128) {
    alert("Your password is not the correct length. Please, choose a number from 8-128.");
    return;
  }
  console.log(lowerCase);
  if(lowerCase === true) {
    let upperCase
  }
  console.log(upperCase);
  console.log(numbers);
  console.log(symbols);
}

// Call generatePassword() function
generatePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);