// Link generate button to ID attribute: generate
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
  let characters = prompt("Password length (minimum 8 - maximum 128)");
  let lowers = confirm("Toggle to use lower case letters: abcdefghijklmnopqrstuvwxyz");
  let uppers = confirm("Toggle to use upper case letters: ABCDEFGHIJKLMNOPQRSTUVWXYZ");
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
  console.log(lowers);
  if(lowers === true) {
    let lowerTrue = "abcdefghijklmnopqrstuvwxyz";
    passwordOptions += lowerTrue;
  }
  console.log(uppers);
  if(uppers === true) {
    let upperTrue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    passwordOptions += upperTrue;
  }
  console.log(numbers);
  if(numbers === true) {
    let numbersTrue = "01234567890";
    passwordOptions += numbersTrue;
  }
  console.log(symbols);
  if(symbols === true) {
    let symbolsTrue = "`~!@#$%^&*()-_=+[{]}\|;:',<.>/?";
    passwordOptions += symbolsTrue;
  }
  // Logs all the password options
  console.log(passwordOptions);

// Now I want to generate a password with uppers, lowers, numbers and symbols
// I can use the variables I have declared to set a function loop through all available user password rules
// Remember this from Line 9: passwordText.value = password;
// Changed from global to local scope to give access to cahracters variable
for (var i = 0; i <= characters; i++) {
  let passwordGenerate = Math.floor(Math.random() * passwordOptions.length);
  password += passwordOptions.substring(passwordGenerate, passwordGenerate + 1);
  } 
  console.log(password);
  document.getElementById("password").value = password;
}



// Call generatePassword() function
generatePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);