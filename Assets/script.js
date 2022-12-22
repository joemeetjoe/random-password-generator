// saving all the different types of characters into seperate arrays
var symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var greetings = ['symbols', 'upperCase', 'lowerCase', 'numbers'];

// creating the generatePassword function to be called by the starter code
function generatePassword () {
  // saving local variables within the generate password function to be accessed by the different if qand for loops
  var typesOfSymbols = [];
  var newPassword = "";

  // prompting the user to input how many characters they would like in their password
  var howMany = prompt("How many characters would you like?");
  console.log(howMany);

  // if the user puts less than 8 characters, the function stops and returns this message
  if (howMany < 8){
    return "not enough characters";
  }

  //for the amount of inecies in the array greetings, put up a confirmation screen asking the user yes or no questions
  // and put the corresponding array response into its own array called typesOfSymbols
  for (var i = 0; i< greetings.length; i++){
    if(confirm("Would you like " + greetings[i] + "? " + "Click okay for yes and cancel for no.") == true){
        typesOfSymbols.push(greetings[i]);
        console.log(typesOfSymbols);
    }
  }
 

  // for the amount of times the user put "how many," minus the amount of length inside of types of symbols
  //  (because the user might choose different answers ranging from 1 to 4), add a random array value from
  // typesOfSymbols to types of symbols until it equals the amount of characters the user input.
  for (var i=typesOfSymbols.length; i<howMany; i ++){
    typesOfSymbols.push(typesOfSymbols[Math.floor(Math.random()*typesOfSymbols.length)]);
    console.log(typesOfSymbols); //['symbol', 'uppercase', 'lowercase', 'number', etc]
  }

/*while iterating through the typesOfSymbols array
      check if the text in the index of the array is either symbol, upperCase, lowerCase, or numbers
      then into that newPassword string, concat() the new value from the choices array that is randomized. */
  for (var i=0; i<typesOfSymbols.length; i ++){
  
    newPassword.concat(typesOfSymbols[Math.floor(Math.random()*typesOfSymbols.length)]);
    
    joesArray.typesOfSymbols[i]
    console.log(newPassword);
  }

  
  // return;
}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button, executes write password function
generateBtn.addEventListener("click", writePassword);
