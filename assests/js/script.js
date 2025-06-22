
let userSelectedNumber = null; // will store clicked number
let randomNumber = null;       // will store random number


document.addEventListener("DOMContentLoaded", function() {
    const numberButtons = document.querySelectorAll("#buttons button");     // creating constant variable, looking inside all elements with IDs button
    const selectedNumberBox = document.querySelector("#selectedNumberBox p");

    numberButtons.forEach((button) => {     // for each eleemnt inside 'numberButtons' run
        button.addEventListener("click", function () {      // add event listener to button when "clicked" call / run callback function
        // This should reset all buttons
            numberButtons.forEach((btn) => {
                btn.style.backgroundColor = "";     // resets color style for background to defoult 
                btn.style.color = "";       // resets to default colour of the button
            });
        // this is for marking the selected button
    button.style.backgroundColor = "green";     // using properties backgroundColor to change when selected
    button.style.color = "red";     // using properties color to change the style fo button to red
    
        // Message to the user what was selcted 
    const selectedNumber = button.textContent;
    selectedNumberBox.textContent = `You selected number ${selectedNumber}`;
        });
    });
});



/* rule for alert when user selects number */
    const numberButtons = document.querySelectorAll("#buttons button");     // defining constant 'numberButtons' and assigning value from elements (inside element with KeyID 'buttons')
    numberButtons.forEach((button) => {     // Loop through each button in 'numberButtons' and for each 'button' run this block
    button.addEventListener("click", function (event) {     // attach 'click' event lsitener to 'button' when 'clicked', run callback function which recieves 'event' object
        const selectedNumber = event.target.textContent;       // defining constant variable 'selectNumber' and assigning text content of clicked buton 
        userSelectedNumber = selectedNumber; // store globally
        alert(`You selected number ${selectedNumber}`);     // calling 'alert' with text and variable containing user selected 'selectedNumber'
    });
});

/* creatig function for randomly generated number */
function randomlyGeneratedNumber() {        // defining function "randomlyGeneratedNumber"
    const randomNumber = Math.floor(Math.random() * 9) + 1; // gives 1–9 based on math.random multiples by 9, floor removes decimal, and +1
    alert(`Your random number is ${randomNumber}`);     // triggers the alert showing text + randomNumber variable defined earlier
}



/* this should get us the radnom number betwee 1 and 9 and then compare it with random number */
const randomNumberButton = document.getElementById("random_number_button"); // defining constant and assign it DOm element with ID "random_number_button"
const randomLabel = document.getElementById("random_number_label"); // defining constant and assigning it a element with ID "random_number_label"
randomNumberButton.addEventListener("click", function () {      // adding event listener to 'click' to randomNumberButton and triggering callback function 
    randomNumber = Math.floor(Math.random() * 9) + 1;       // assagning variable "randomNumber" value of random number multiplz by 9 and then floor it by removing decimal points, then adding +1
    randomLabel.textContent = randomNumber;     // display generated number inside label with ID "random_number_label"

    console.log("User selected:", userSelectedNumber);      // prints out text + variable "userSelectedNumber" 
    console.log("Randomly selected:", randomNumber);        // prints out text + variable "randomNumber" 

    const resultBox = document.getElementById("display_results_box");       // defining constant and assigned it elements with ID 'display_results_box'
        if (userSelectedNumber == randomNumber) {       // if numbers match execture following
            resultBox.textContent = `🎉 Congrats! You picked ${userSelectedNumber} and that matches random number ${randomNumber}.`;        // callout constant with defoult text + random and user selected numbers as variables
        } else {        // if upper condition is not met, the exectue following
            resultBox.textContent = `😔 Sorry! You picked ${userSelectedNumber}, but the random number was ${randomNumber}. Try again!`;    // callout constatn that has default text + user selected number and random number 
        }
    });

/*
let win = 0;
let lose = 0;

*/


