
let userSelectedNumber = null; // will store clicked number
let randomNumber = null;       // will store random number

let inGameWinCount = 0;
let inGameLoseCount = 0;

document.addEventListener("DOMContentLoaded", function() {
    const numberButtons = document.querySelectorAll("#buttons button");     // creating constant variable, looking inside all elements with IDs button
    const selectedNumberBox = document.querySelector("#selectedNumberBox p");
    const resultBox = document.getElementById("display_results_box");
    const randomNumberButton = document.getElementById("random_number_button");

    /* rule for user selecting number */ 
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
    
            userSelectedNumber = button.textContent;

        // Show alert for selčected number by user
            alert(`You selected number ${userSelectedNumber}`);

        // Update text box (will be replaced when random number is picked)
            selectedNumberBox.textContent = `You selected number ${userSelectedNumber}`;
        });
    });


    // rule for randomly created number with 'I feel lucky number' button clicked
    randomNumberButton.addEventListener("click", function () {
    // Generate random number from 1 to 9
        randomNumber = Math.floor(Math.random() * 9) + 1;


    // Update selectedNumberBox with full message
        selectedNumberBox.textContent = `You selected number ${userSelectedNumber}. Randomly selected number is ${randomNumber}.`;

    // Check if user added numer and randomly selected number match
        if (userSelectedNumber == randomNumber) {   // if user selected number is equal to random number execute following 
            resultBox.textContent = `🎉 Congrats! You picked ${userSelectedNumber} and that matches random number ${randomNumber}.`;    // call out constant with text content containing default text + variables holding variables for user and random number
            inGameWinCount++;
        } else {        // othervise execute following line of code
            resultBox.textContent = `😔 Sorry! You picked ${userSelectedNumber}, but the random number was ${randomNumber}. Try again!`;    // calls constant with default text + variables for 'user selected number' & 'random number'
            inGameLoseCount++;
        }
    });
});




