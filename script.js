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
    while (isCharacterNumberOk) {
      numOfCharacter = prompt("How many characters would you like your password contain?");
      // if(numOfCharacter==null){break;}
      if (parseInt(numOfCharacter) < 8 || parseInt(numOfCharacter) > 128) {
        alert("Choose character number between 8 and 128")
      } else  isCharacterNumberOk = false;
    }

    var typeOfCharacters = [];

    var isSpecial = confirm("Click ok to confirm including 'special' characters");
    var isNumeric = confirm("Click ok to confirm including 'numeric' characters ");
    var isUppercase = confirm("Click ok to confirm including 'UPPERCASE' characters ");
    var isLowercasev = confirm("Click ok to confirm including 'lowercase' characters ");


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
    if (isLowercasev) {
      typeOfCharacters.push(lowerCaseCharacters);
    }

    // alert(typeOfCharacters);

     passW = new Array(numOfCharacter);
    var lengthOfTypeOfCharacter = typeOfCharacters.length;

    var characterChosen = [];
    for (i = 0; i < numOfCharacter; i++) {

      characterChosen = typeOfCharacters[i % lengthOfTypeOfCharacter];

      //  alert("chosen" + characterChosen);


      var num = Math.floor(Math.random() * characterChosen.length);

      passW[i] = characterChosen[num];

    }
    
  }
   


   str=passW.join("");
passwordText.value =str;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



