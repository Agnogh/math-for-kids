

let userSelectedNumber = null; // will store clicked number
/* this is for win and lose count */
let inGameWinCount = 0;
let inGameLoseCount = 0;

// >> boot when DOM is ready <<
document.addEventListener("DOMContentLoaded", function() {
    // >> DOM references <<
    const numberButtons = document.querySelectorAll("#buttons button");  // creating constant variable, looking inside all elements with IDs button
    const resultBox = document.getElementById("display_results_box");
    const randomNumberButton = document.getElementById("random_number_button");
    
    // >>  Section after 10 spins  <<
    // new (old) section that is hidden and shows after rounds are over
    const postRound = document.getElementById("post_round_pane_showing_links_and_restart");
    // fix of the reset button
    const resetButton = postRound?.querySelector("#reset_button");
    // leaderboard
    const leaderboardLink = postRound?.querySelector("#leaderboard_link");
    const counterLine = document.getElementById("counter_line");  // 
 
    // game modes
    const modeInputs = document.querySelectorAll('#modes input[name="game_mode"]');


    // >>  Starting UI State  <<
    /*  same button for but in new section (between comman button
    for roll and game stats) */
    if (postRound) postRound.hidden = true;  // do not show game stats
    if (resetButton) resetButton.disabled = true;  // set button to not-clickable
    if (leaderboardLink) leaderboardLink.hidden = true;  // do not show link to eladerboard by default
    if (counterLine) counterLine.textContent = '0/0 • 0.0%';

    // >>  Game State  <<
/* adding game state (normal default)*/
const state = {
    mode: 'normal',  // normal is selscted by default but can be 'easy' and 'easiest'
    rolls: 0,  // num. spins/rolls
    wins: 0,  // number hits/wins/success guess
    selected: null,  // nothing is selected for lucky number
    modeLocked: false  // once 1st roll happnes, mode cannot be changed
};

/* Mapping/list of available modes */
const mode_types = { 'normal': 'normal', 'easy': 'easy', 'easiest': 'easiest' };
const locked_mode_types = { 'normal': 'normal', 'easy': 'easy', 'easiest': 'easiest' };

// number for 'chances' per game mode 
const randomNumbersByMode = { normal: 1, easy: 2, easiest: 3 };


    // >>  Helpers  <<
// helper for selected number area/box
    function updateResults(messageHtml) {
        if (resultBox) resultBox.innerHTML = messageHtml;
    }

    // Helper ofr enable / disable + highlight the lucky button
    function updateLuckyButtonState() {
        const button_refresh_start = document.getElementById("random_number_button");
        if (!button_refresh_start) return;

        const ready_for_new_game =  //
            state.selected !== null &&  // selected number
            state.mode !== null &&  // mode needs to be selected / set
            state.rolls < 11;  // increased to 11 for user alert (game is still 10 spins))

        button_refresh_start.disabled = !ready_for_new_game;  // button disabled is equal to not "ready_for_new_game"
        button_refresh_start.classList.toggle("is-active", ready_for_new_game);
    }

    // returns 'ranNumPulled' random numbers 1..9 (no dupes)
    function getRandomNumberPulls(ranNumPulled) {
        const pulls = [];
        while (pulls.length < ranNumPulled) {
            const n = Math.floor(Math.random() * 9) + 1;
            if (!pulls.includes(n)) pulls.push(n);
        }
        return pulls;
    }

    // >>  Mode Selection  <<
// auto set state to active (radio is checked)
    function setActiveGameMode(newGameMode) {
        state.mode = newGameMode; // 'normal' | 'easy' | 'easiest'
        modeInputs.forEach(input => {
            input.checked = (input.value === locked_mode_types[newGameMode]);
        });
        updateLuckyButtonState();
    }

// this is when 1st roll happens to block chagne + revert radio btn
    modeInputs.forEach(input => {
    input.addEventListener('change', () => {
        if (state.rolls > 0) {
        // Locked- revert UI back to the current mode
        const currentRadioValue = locked_mode_types[state.mode];
        modeInputs.forEach(radioBTN => { 
            radioBTN.checked = (radioBTN.value === currentRadioValue);
        });
        // tell the user inline alert)
        resultBox.textContent = 'Mode is locked after first roll.';
        return;
        }

    // switch between game modes
        const mapped = mode_types[input.value]; // 'normal' | 'easy' | 'easiest'
        setActiveGameMode(mapped);
    });
});

    // Start mode when loaded 
    setActiveGameMode(state.mode);

    // >>  User selected number  << 
    numberButtons.forEach(button => {     // for each eleemnt inside 'numberButtons' run
        button.addEventListener("click", function () {  // add event listener to button when "clicked" call / run callback function
        //  this will allow click, but prevent change in UI
            if (state.rolls >= 10) {
                alert("Game is over. Please start a new game anf then select you lucky number.");
                return;  // do not change colors or selection
            }
            // This should reset all buttons
            numberButtons.forEach(btn => {
                btn.style.backgroundColor = "";     // resets color style for background to defoult 
                btn.style.color = "";       // resets to default colour of the button
            });
        // this is for marking the selected button
            button.style.backgroundColor = "green";     // using properties backgroundColor to change when selected
            button.style.color = "red";     // using properties color to change the style fo button to red
    
        // storing picked number as number (numeric)
            userSelectedNumber = Number(button.textContent);
            state.selected = Number(button.dataset.value);

        // Show alert for selected number by user
            alert(`You selected number ${userSelectedNumber}. Lady Luck will be with you !`);
            
            updateLuckyButtonState();
        });
    });


    // >>  Game Logic - "I feel lucky"  <<
    // rule for randomly created number with 'I feel lucky number' button clicked
    randomNumberButton.addEventListener("click", function () {
    // limit to 10 rolls
        if (state.rolls >= 10) {
            resultBox.textContent = `Game over, 10 rolls used up. Final score after 10 rounds: ${inGameWinCount}/10.`;
            randomNumberButton.disabled = true;  
            randomNumberButton.classList.remove('is-active');  // gray out visualy only
            return;  // still no incerase rolls as gameplay is still 10 rolls
        }
    // adding heads up when user doesn't follow game instructions
        if (userSelectedNumber === null) {  // if user didn't make selection
            resultBox.textContent = "Pick number first";  // populate textbox with explanations
            return;  // then stop
        }
    // Generate random number from 1 to 9
        const ranNumPulled = randomNumbersByMode[state.mode] || 1;  // number of randoms for this level of game
        const pulls = getRandomNumberPulls(ranNumPulled);  // [2, 5] in easy or [1, 3, 7] is easiest
        const hit = pulls.includes(userSelectedNumber);  // for 'hit'

    // lock mode after first roll by incrementing rolls
        state.rolls += 1;
    // call out function - updates state of the button based on number of spins 
        updateLuckyButtonState();
    // new if statement for selected vs random number
        if (hit) {
            inGameWinCount++;
            resultBox.textContent = (ranNumPulled === 1)
            ? `🎉 Congrats! Your number ${userSelectedNumber} matches Lotto number ${pulls[0]}.`  // for 1 number
            : `🎉 Hit! Your ${userSelectedNumber} matched one of the draws [${pulls.join(', ')}].`;  // for multiple numbers
        } else {
            inGameLoseCount++;
            resultBox.textContent = (ranNumPulled === 1)
            ? `😔 No match. Your picked ${userSelectedNumber} vs ${pulls[0]}.`  // for 1 random number
            : `😔 No match. Your picked ${userSelectedNumber} vs draws [${pulls.join(', ')}].`;  // for few random numbers
        }

        const totalGamesPlayed = inGameWinCount + inGameLoseCount;  // new constant variable that is assigned sum of both win and loses
        const luckFactorIndicator = ((inGameWinCount / totalGamesPlayed) * 100).toFixed(1);  // new constant that is assigned calculated value so percentage of win is shown/displayed
                
        if (counterLine) {
            counterLine.textContent = `Luck index: ${inGameWinCount}/${totalGamesPlayed} • ${luckFactorIndicator}%`;
            }   

        // Update selectedNumberBox with full message and addon now ratio of wins and loses
        // Fixing the clickable button
        const message = (ranNumPulled === 1)
            ? `Selected number ${userSelectedNumber} VS Random number ${pulls[0]}%`
            : `Selected number ${userSelectedNumber} VS Random numbers [${pulls.join(', ')}].`;

        updateResults(message);

        if (state.rolls === 10) {
        // freeze UI until 10 rounds are up
            // if (randomNumberButton) randomNumberButton.disabled = true; need to drop this as we do not want it disabled
            if (resetButton) resetButton.disabled = false;
            if (leaderboardLink) leaderboardLink.hidden = false;
            // for revealing previously hidden button when above 10 rolls are met
            if (postRound) postRound.hidden = false;

            updateLuckyButtonState();

            resultBox.textContent += ` Final score after 10 rounds: ${inGameWinCount}/10.`;

        const entry = {
            wins: inGameWinCount,  // number of wins in game
            rolls: 10,  // rolls need to be 10 (rule is 10 rounds)
            mode: state.mode,  // mode needs to be set (normal, easy, easiest)
            date: new Date().toISOString()  // record for finished game
        };
        const localStorageGame = 'guessGame.scores';  // storing game score
        const list = JSON.parse(localStorage.getItem(localStorageGame) || '[]');  // read saved scor
        list.push(entry);
        localStorage.setItem(localStorageGame, JSON.stringify(list));  // JSON.stringfy from local save back to string 
        }
    });

    // >>  Reset listener <<  
    if (resetButton) {
        resetButton.addEventListener("click", () => {
            console.log('[reset] clicked');  // added to see if this is even operational
            resultBox.textContent = '🔄 Reset clicked – starting a new game...';  // alert('Reset clicked')
        // setting rules `normal` game mode, no wins or any rolls, nothing selected
            state.mode = "normal";
            state.rolls = 0;
            state.wins = 0;
            state.selected = null;

            inGameWinCount = 0;
            inGameLoseCount = 0;
            userSelectedNumber = null;

            numberButtons.forEach(btn => {
                btn.style.backgroundColor = "";  // revert to original
                btn.style.color = "";  // revert to default colour
            });
        
        // reset text and round counter
            resultBox.textContent = "New game started — pick number and select `I feel lucky`!";
            if (counterLine) counterLine.textContent = "0/0 • 0.0%";

            randomNumberButton.disabled = false;
            resetButton.disabled = true;
            if (leaderboardLink) leaderboardLink.hidden = true;
        // and now hide it again
            if (postRound) postRound.hidden = true; 

            setActiveGameMode("normal");
            updateLuckyButtonState();        
        });
    }
});
