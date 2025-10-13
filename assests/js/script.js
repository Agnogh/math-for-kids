

let userSelectedNumber = null; // will store clicked number
let randomNumber = null;       // will store random number

/* this is for win and lose count */
let inGameWinCount = 0;
let inGameLoseCount = 0;

document.addEventListener("DOMContentLoaded", function() {
    const numberButtons = document.querySelectorAll("#buttons button");     // creating constant variable, looking inside all elements with IDs button
    const selectedNumberBox = document.querySelector("#selectedNumberBox p");       // constant checking all elements with keyID "selectedBumberBox"
    const resultBox = document.getElementById("display_results_box");
    const randomNumberButton = document.getElementById("random_number_button");

/* adding game state (for normal for now)*/
state = { mode: 'normal', rolls: 0, wins: 0, selected: null, modeLocked: false }

/* game modes */
const modeInputs = document.querySelectorAll('#modes input[name="game_mode"]');

/*  */
const mode_types = { 'normal': 'normal', 'easy': 'easy', 'easiest': 'easiest' };
const locked_mode_types = { 'normal': 'normal', 'easy': 'easy', 'easiest': 'easiest' };

// auto set state to active (radio is checked)
function setActiveGameMode(newGameMode) {
  state.mode = newGameMode; // 'normal' | 'easy' | 'easiest'
    modeInputs.forEach(input => {
    input.checked = (input.value === locked_mode_types[newGameMode]);
  });
}

// this is when 1st roll happens to block chagne + revert radio btn
modeInputs.forEach(input => {
  input.addEventListener('change', () => {
    if (state.rolls > 0) {
      // Locked- revert UI back to the current mode
      const currentRadioValue = locked_mode_types[state.mode];
      modeInputs.forEach(radioBTN => { radioBTN.checked = (radioBTN.value === currentRadioValue); });
      // tell the user inline alert)
      resultBox.textContent = 'Mode is lockd after first roll.';
      return;
    }

    // ok to switch
    const mapped = mode_types[input.value]; // 'normal' | 'easy' | 'easiest'
    setActiveGameMode(mapped);
  });
});

    // Start mode when loaded 
    setActiveGameMode(state.mode);

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
            alert(`You selected number ${userSelectedNumber}. Lady Luck will be with you !`);

        });
    });



    // rule for randomly created number with 'I feel lucky number' button clicked
    randomNumberButton.addEventListener("click", function () {
    // Generate random number from 1 to 9
        const randomNumber = Math.floor(Math.random() * 9) + 1;

        const resultBox = document.getElementById("display_results_box");

    // Check if user added numer and randomly selected number match and also adds + 1 to eithe win or lose count
        if (userSelectedNumber == randomNumber) {   // if user selected number is equal to random number execute following 
            resultBox.textContent = `🎉 Congrats! Your lucky number ${userSelectedNumber} matches Lotto number ${randomNumber}.`;    // call out constant with text content containing default text + variables holding variables for user and random number
            inGameWinCount++;
        } else {        // othervise execute following line of code
            resultBox.textContent = `😔 Lady Luck looked away. Your picked ${userSelectedNumber} is not matching ${randomNumber}. Try your luck again!`;    // calls constant with default text + variables for 'user selected number' & 'random number'
            inGameLoseCount++;
        }

        const totalGamesPlayed = inGameWinCount + inGameLoseCount;      // new constant variable that is assigned sum of both win and loses
        const luckFactorIndicator = ((inGameWinCount / totalGamesPlayed) * 100 ).toFixed(1);     // new constant that is assigned calculated value so percentage of win is shown/displayed

        // Update selectedNumberBox with full message and addon now ratio of wins and loses
        selectedNumberBox.innerHTML = `Selected number ${userSelectedNumber} VS Random number ${randomNumber}. <br> Your Luck index: ${luckFactorIndicator}%`;
    });
});
