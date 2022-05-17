// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Secure password function
function generatePassword() {
  let characters = prompt("Character length (minimum 8 - maximum 128");
  let lowerCase = confirm("Toggle to use lower case letters: abcdefghijklmnopqrstuvwxyz");
  let upperCase = confirm("Toggle to use upper case letters: ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  let numbers = confirm("Toggle to use numbers, such as: 1234567890");
  let symbols = confirm("Toggle to use symbols, such as: !@#$%^&*()_+");

  console.log(characters);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numbers);
  console.log(symbols);
}

