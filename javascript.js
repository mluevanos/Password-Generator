// Define the arrays for special character, numbers, small letters and big letters
var specChar = ["[", "]", "\", "/", "^", \"$", "|", "?", "*", "+", "(", ")"];
var passNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];  

var pwArr = [];

// create event listener to start rolling out the function when users click gen pass
var generatePass = document.getElementById("generate").addEventListener("click", generate);
function generate() {
    console.log("you have generated nothing")
} 

// create prompts for pw criteria & collecting their response in variable:
var pwLength = prompt ("Please choose a password length from 8 - 128");
    pwLength <= 128 && pwLength >= 8; 

// ensures input is a number 8-128 & gives validLength a number
var validLength = pwLength <= 128 && pwLength >= 8

// if statement that triggers all the prompts through the function below
if (validLength) {
    allPrompts();
}; 

// Function was created to prompt all questions. If yes, we created a giant new Array under [pwrArr]
    function allPrompts() {
        var charPrompt = confirm ("Do you want to use special characters?");
        var numPrompt = confirm ("Do you want to use number?");
        var lcPrompt = confirm ("Do you want to use lowercase letters?");
        var clPrompt = confirm ("Do you want to use capital letters?");
        if (charPrompt) {
            pwArr.push(specChar);
        }
        if (numPrompt) {
            pwArr.push(passNumbers);
        }
        if (lcPrompt) {
            pwArr.push(smallLetters);
        }
        if (clPrompt) {
            pwArr.push(capLetters);
        }
        }
        
// Can I now Create a loop to run through pwArr? Console Log is showing: (4) [Array(9), Array(10), Array(26), Array(26)]
// Would this work or do I need to take all elements out of the array to create 1 Array?
for (var i = 0; i <= (pwLength + 1); i++) {
    ;
}

