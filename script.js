// fetching the generator button
const buttonGenerator = document.querySelector("#btn-gen");
console.log(buttonGenerator);


// Fetching the elements to display the passwords
let displayOne = document.querySelector("#pass-1"); 
console.log(displayOne);
let displayTwo = document.querySelector("#pass-2"); 
console.log(displayTwo);
let displayThree = document.querySelector("#pass-3");
console.log(displayThree);
let displayFour = document.querySelector("#pass-4"); 
console.log(displayFour);

// A string to hold the characters
let characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()?{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Generating the random password
function passwordGenerator(passlength) {
    let password = "";
    
    for (let i = 0; i < passlength; i++) {
        let randomCharacter = Math.floor(Math.random() * characters.length);
        password += characters[randomCharacter];
    }
    return password;
}
// console.log(passwordGenerator(valueEntered));
// console.log(passwordGenerator(valueEntered));
// console.log(passwordGenerator(valueEntered));
// console.log(passwordGenerator(valueEntered));


function displayPasswords() {
    // Getting the value the user has entered through the input
    const inputValue = document.getElementById("inputValue");
    // Getting the value entered by the user and storing it.
    let valueEntered = inputValue.value;
    // console.log(valueEntered);

    if (valueEntered < 0) {
        alert("Password length must be greater than zero");
} else if (valueEntered > 14) {
        alert("Password length is too long");
} else {
    displayOne.textContent = passwordGenerator(valueEntered);
    displayTwo.textContent = passwordGenerator(valueEntered);
    displayThree.textContent = passwordGenerator(valueEntered);
    displayFour.textContent = passwordGenerator(valueEntered);
} 

}