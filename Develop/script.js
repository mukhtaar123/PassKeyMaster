// Assignment code here
var upperLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialChars = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var numbers = [0,1,2,3,4,5,6,7,8,9];

// Generate password function
function generatePassword() {
  var resultPassword = '';
  var lengthPassword = prompt("What should be the length of your password?");
  
  if (lengthPassword < 8) {
    alert("Password must be at least 8 characters.");
    return generatePassword();
  } else if (lengthPassword > 128) {
    alert("Password must be less than 128 characters.");
    return '';
  } else {
    var specialCheck = confirm("Do you want to include special characters?");
    var numCheck = confirm("Do you want to include numeric characters?");
    var lowerCheck = confirm("Do you want to include lowercase characters?");
    var upperCheck = confirm("Do you want to include uppercase characters?");

    if (!specialCheck && !numCheck && !lowerCheck && !upperCheck) {
      alert("Your password must contain at least one special, numeric, lowercase, or uppercase character");
      return '';
    }

    var charSet = [];
    if (specialCheck) {
      charSet = charSet.concat(specialChars);
    }
    if (numCheck) {
      charSet = charSet.concat(numbers);
    }
    if (lowerCheck) {
      charSet = charSet.concat(lowerLetters);
    }
    if (upperCheck) {
      charSet = charSet.concat(upperLetters);
    }

    for (let i = 0; i < lengthPassword; i++) {
      var randomIndex = Math.floor(Math.random() * charSet.length);
      resultPassword += charSet[randomIndex];
    }

    return resultPassword;
  }
}

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
