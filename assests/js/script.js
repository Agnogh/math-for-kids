


/* This should change to color of the button when user selects it... but it doesn/t work for some damn reason*/ 

/*
function user_selected_number() {
    const colorButton = document.getElementById("btn_1");
    colorButton.style.backgroundColor = "lightblue";
    colorButton.style.color = "red";
}



changeColour.addEventListener("mousedown", user_selected_number);
    function user_selected_number() {
        const colorButton = document.getElementById("btn_1");
        colorButton.style.backgroundColor = "lightblue";
        colorButton.style.color = "red";
    }
*/

/* this was a wild attempt but it doesnt work */

/*
function user_selected_number(myEvent) {
    const clickedButton = myEvent.target;

    /* To have buttons reseted 
    for(let i= 1; i <= 9; i++) {
        const button = document.getElementById(`btn_${i}`);
    /* this should reset background colour     
        button.style.backgroundColor = "";
    /*  and this should resent colur of the text 
        button.style.color = "";
    }

    /* This should change the style of the button
    clickedButton.style.backgroundColor = "green";
    clickedButton.style.color = "red";

    /* this should get the number from whatever user selects 
    const selectedNumber = clickedButton.textContent;

    /* this part should update the selected "number box" 
    const selectedNumberBox = document.querySelector("#selectedNumberBox p");
    selectedNumberBox.textContent = `Value you have semlected is ${selectedNumber} `;
}
*/


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







/* or we do it like this- this actually works */
/*
const btn_any = document.getElementById("btn_$");
btn_any.addEventListener("click", user_selected_number);

function user_selected_number() {
    alert(`You selected your number ${selectedNumber}`)   
}


/* rule for alert when user selects number */
    const numberButtons = document.querySelectorAll("#buttons button");     // defining constant 'numberButtons' and assigning value from elements (inside element with KeyID 'buttons')
    numberButtons.forEach((button) => {     // Loop through each button in 'numberButtons' and for each 'button' run this block
    button.addEventListener("click", function (event) {     // attach 'click' event lsitener to 'button' when 'clicked', run callback function which recieves 'event' object
        const selectedNumber = event.target.textContent;       // defining constant variable 'selectNumber' and assigning text content of clicked buton 
        alert(`You selected number ${selectedNumber}`);     // calling 'alert' with text and variable containing user selected 'selectedNumber'
    });
});

/* creatig function for randomly generated number */
function randomlyGeneratedNumber() {        // defining function "randomlyGeneratedNumber"
    const randomNumber = Math.floor(Math.random() * 9) + 1; // gives 1–9 based on math.random multiples by 9, floor removes decimal, and +1
    alert(`Your random number is ${randomNumber}`);     // triggers the alert showing text + randomNumber variable defined earlier
}


/* this should get us the radnom number betwee 1 and 9 and then */
const randomNumberButton = document.getElementById("random_number_button");
const randomLabel = document.getElementById("random_number_label");
const minimumValueOfRandomNumber = 1;
const maximumValueOfRandomNumber = 9;
let randomNumber;

randomNumberButton.onClick = function() {
    randomNumber = Math.floor(Math.random() * maximumValueOfRandomNumber) + minimumValueOfRandomNumber;
    randomLabel.textContent = randomNumber;
    console.log(randomLabel);
}



/*
randomNuOBJECT_NAMEmber.addEventListener("click", function(p) {
    if (userSelectedNumber === randomEntry) {
        document.getElementById("display_results_box").textContent = `Congrats, your number ${userSelectedNumber} and drawn number ${randomSelectedNumber} are matching! `
        win = ++win
    } else {
        document.getElementById("display_results_box").textContent = `Your number was ${userSelectedNumber} and drawn number is ${randomSelectedNumber}! Better luck next time. `
        lose = ++lose 
    }
})


let win = 0;
let lose = 0;

*/


