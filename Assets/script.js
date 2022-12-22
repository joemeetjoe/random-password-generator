// saving all the different types of characters into seperate arrays
var symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var greetings = ['symbols', 'upperCase', 'lowerCase', 'numbers'];


function generatePassword () {  // creating the generatePassword function to be called by the starter code
  var typesOfSymbols = [];      // saving local variables within the generate password function to be accessed by the different if qand for loops
  var newPassword = "";
  
  var howMany = prompt("How many characters would you like?"); // prompting the user to input how many characters they would like in their password
  
  if (howMany < 8){                                            // if the user puts less than 8 characters, the function stops and returns this message
    return "not enough characters.";
  }

  if (howMany > 128){
    return "too many characters.";                             // if the user puts in more than 128 characters, the function stops and returns this message
  }

  //for the amount of inecies in the array greetings, put up a confirmation screen asking the user yes or no questions
  // and put the corresponding array response into its own array called typesOfSymbols
for (var i = 0; i< greetings.length; i++){                                                                    
    if(confirm("Would you like " + greetings[i] + "? " + "Click okay for yes and cancel for no.") == true){     
        typesOfSymbols.push(greetings[i]);
    }
  }
 
  // for the amount of times the user put "how many," minus the amount of length inside of types of symbols
  //  (because the user might choose different answers ranging from 1 to 4), add a random array value from
  // typesOfSymbols to types of symbols until it equals the amount of characters the user input.
  for (var i=typesOfSymbols.length; i<howMany; i ++){
    typesOfSymbols.push(typesOfSymbols[Math.floor(Math.random()*typesOfSymbols.length)]);
  }

  /*while iterating through the typesOfSymbols array
  check if the text in the index of the array is either symbol, upperCase, lowerCase, or numbers
  then into that newPassword string, concat() the new value from the choices array that is randomized. */
  for (var i=0; i<typesOfSymbols.length; i ++){
    if (typesOfSymbols[i] == "symbols"){
      newPassword += symbols[Math.floor(Math.random()*symbols.length)];
      
    } else if (typesOfSymbols[i] == "upperCase"){
      newPassword += upperCase[Math.floor(Math.random()*upperCase.length)];
      
    } else if (typesOfSymbols[i] == "lowerCase"){
      newPassword += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    
    } else if (typesOfSymbols[i] == "numbers"){
      newPassword += numbers[Math.floor(Math.random()*numbers.length)];
    }
  }

  function getRandomInt(n) {          //function get a random number from whatever value is assigned to n.
    return Math.floor(Math.random() * n);
  }
  function shuffle(s) {              // function that shuffles the newPassword because I dont want the first 4 choices to always be the same.
    var arr = s.split('');           // Convert String to array
    var n = arr.length;              // assigning the length of the array to the variable n
    
    for(var i=0 ; i<n-1 ; i++) {     // for the length of the array minus 1, 
      var j = getRandomInt(n);       // Get random of [0, n-1]
      
      var temp = arr[i];             // 
      arr[i] = arr[j];
      arr[j] = temp;
    }
    
    s = arr.join('');                // Convert Array to string
    return s;                        // Return shuffled string
  }
  
  return shuffle(newPassword); 
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

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}

