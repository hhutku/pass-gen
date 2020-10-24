// Selecting button for generating and Assignment Code 
var generateBtn = document.querySelector("#generate");

// function for writing password
function writePassword() {

  var password = generatePassword();
  //selecting text area and assigning 
  var passwordText = document.querySelector("#password");
  //declaring variables for password and for joining the characters 
  var passW;
  var passString;

  // function for the properties of  generating password
  function generatePassword() {

    // declaring boolean value for while loop to choose the number of characters for Password
    var isCharacterNumberOk = true;
    var numOfCharacter = 0;
    // checking the option of the characters except numbers
    var isNan;
    while (isCharacterNumberOk) {
      numOfCharacter = prompt("How many characters would you like your password contain?");

      if (parseInt(numOfCharacter) < 8 || parseInt(numOfCharacter) > 128) {
        alert("Choose character number between 8 and 128")
      } else { isCharacterNumberOk = false; }

      isNan = isNaN(numOfCharacter);

      if (isNan) {
        alert("Please enter a number between 8 and 128"); isCharacterNumberOk = true;
      }
      // checking the option of cancelling
      if (numOfCharacter == null) {
        alert("You didn't choose any options.You are quitting pass-gen.")
      }

    }

    // declaring an empty container for each type of characters
    var typeOfCharacters = [];
    // looping 2 times for giving chance to choose the options
    var count = 0;
    // going out of the generator if loops finished
    var isGenerate;
    // chosing type of character and skipping the while loop avoiding the options checking if numOfCharacters is null  
    while (!(isSpecial || isNumeric || isUppercase || isLowercase || isGenerate || (numOfCharacter == null))) {
      alert("Please choose an option to generate password.")

      var isSpecial = confirm("Click ok to confirm including 'special' characters");
      var isNumeric = confirm("Click ok to confirm including 'numeric' characters ");
      var isUppercase = confirm("Click ok to confirm including 'UPPERCASE' characters ");
      var isLowercase = confirm("Click ok to confirm including 'lowercase' characters ");
      count++;
      if (count == 2) {
        isGenerate = true;
        alert("You didn't choose any options.You are quitting pass-gen.")
      }

    }
    // arrays of character options
    var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'Y', 'X', 'Z'];
    var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'x', 'z'];
    var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var specialCharacters = ['!', '@', '#', '$', '%', '&', '*'];

    // pushing selected characters in container
    if (isSpecial) {
      typeOfCharacters.push(specialCharacters);
    }
    if (isNumeric) {
      typeOfCharacters.push(numericCharacters);
    }
    if (isUppercase) {
      typeOfCharacters.push(upperCaseCharacters);
    }
    if (isLowercase) {
      typeOfCharacters.push(lowerCaseCharacters);
    }

    // declaring an array for password length with number Of Characters of the Password

    passW = new Array(numOfCharacter);
    var lengthOfTypeOfCharacter = typeOfCharacters.length;
    // declaring chosen character array
    var characterChosen = [];
    //selecting characters one by one from each set of array  
    for (i = 0; i < numOfCharacter; i++) {

      characterChosen = typeOfCharacters[i % lengthOfTypeOfCharacter];
      // selecting an element randomly from chosen sets
      var num = Math.floor(Math.random() * characterChosen.length);
      // assigning elements of password array from chosen set
      passW[i] = characterChosen[num];

    }

  }

  // joining elements of characters and assigning display them
  passString = passW.join("");
  passwordText.value = passString;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



