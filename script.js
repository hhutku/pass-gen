// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passW;
  var str;

  function generatePassword() {


    var isCharacterNumberOk = true;
    var numOfCharacter;
    var counter = 0;

    var isNan;
    while (isCharacterNumberOk) {
      numOfCharacter = prompt("How many characters would you like your password contain?");


      if (parseInt(numOfCharacter) < 8 || parseInt(numOfCharacter) > 128) {
        alert("Choose character number between 8 and 128")
      } else {isCharacterNumberOk = false;}
      
      isNan=isNaN(numOfCharacter);
      counter++
      if (counter == 3) {
        alert("You didn't enter any number.You are quitting pass-gen.")
        isCharacterNumberOk = false;
        isNan=false;
      }
      if (isNan) {
        alert("Please enter a number between 8 and 128"); isCharacterNumberOk = true
      }
       
      
    }


    if (numOfCharacter == null) {
      alert("You didn't choose any options.You are quitting pass-gen.")
    }

    var typeOfCharacters = [];
    var count = 0;
    var isGenerate;
    while (!( isSpecial || isNumeric || isUppercase || isLowercase || isGenerate || (numOfCharacter == null) || (isNaN(numOfCharacter)))) {
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
    var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var specialCharacters = ['!', '@', '#', '$', '%'];


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

    if((isNaN(numOfCharacter))){numOfCharacter=""};

    passW = new Array(numOfCharacter);
    var lengthOfTypeOfCharacter = typeOfCharacters.length;

    var characterChosen = [];
    for (i = 0; i < numOfCharacter; i++) {

      characterChosen = typeOfCharacters[i % lengthOfTypeOfCharacter];

      var num = Math.floor(Math.random() * characterChosen.length);

      passW[i] = characterChosen[num];

    }

  }



  str = passW.join("");
  passwordText.value = str;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



