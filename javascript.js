// Define the arrays for special character, numbers, small letters and big letters
var specChar = ["[", "]", "\\", "/", "^", "$", "|", "?", "*", "+", "(", ")"];
var passNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];  

var pwArr = [];
var finalPassword = [];
var finalArr = [];
var pwLength;

// create event listener to start rolling out the function when users click gen pass
var generatePass = document.getElementById("generate").addEventListener("click", generate);

function generate() {
allPrompts()

}

// Function was created to prompt all questions. If yes, we created a giant new Array under [pwrArr]
function allPrompts() {

    // create prompts for pw criteria & collecting their response in variable:
    pwLength = prompt ("Please choose a password length from 8 - 128");

    // ensures input is a number 8-128 & gives validLength a number
    var validLength = pwLength <= 128 && pwLength >= 8
    console.log(validLength);


    // if statement that triggers all the prompts through the function below
    if (validLength) {
        function generatePassword() {
            for (var i = 0; i < pwLength; i++) {
                var arrIndex = Math.floor(Math.random() * finalArr.length);
                var randomCharacter = finalArr[arrIndex];
                finalPassword.push(randomCharacter);            
    } else {
    alert("you didn't obey me");
    console.log(alert);
    }

    var charPrompt = confirm ("Do you want to use special characters?");
    var numPrompt = confirm ("Do you want to use number?");
    var lcPrompt = confirm ("Do you want to use lowercase letters?");
    var clPrompt = confirm ("Do you want to use capital letters?");
    if (charPrompt) {
        pwArr = pwArr.concat(specChar);
    }
    if (numPrompt) {
        pwArr = pwArr.concat(passNumbers);
    }
    if (lcPrompt) {
        pwArr = pwArr.concat(smallLetters);
    }
    if (clPrompt) {
        pwArr = pwArr.concat(capLetters);
    }
    finalArr.push(pwArr); // 1. turn the array with different kinds of elements into an array with "" (pwArr).
    return finalPassword.join(""); // 2. turn pwArr into final.Password.join("") to generate a pw 
}}

var x = finalPassword.join("");
document.getElementById("password").innerHTML = x; 

};