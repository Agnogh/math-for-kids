


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


function user_selected_number(myEvent) {
    const clickedButton = myEvent.target;

    /* To have buttons reseted */
    for(let i= 1; i <= 9; i++) {
        const button = document.getElementById(`btn_${i}`);
    /* this should reset background colour */    
        button.style.backgroundColor = "";
    /*  and this should resent colur of the text */
        button.style.color = "";
    }

    /* This should change the style of the button*/
    clickedButton.style.backgroundColor = "green";
    clickedButton.style.color = "red";

    /* this should get the number from whatever user selects */
    const selectedNumber = clickedButton.textContent;

    /* this part should update the selected "number box" */
    const selectedNumberBox = document.querySelector("#selectedNumberBox p");
    selectedNumberBox.textContent = `Value you have semlected is ${selectedNumber} `;
}

document.addEventListener("DOMContentLoaded", function() {
    for (let i = 1; i <=9; i++) {
        const button = document.getElementById(`btn_${i}`);
        button.addEventListener("click", user_selected_number);
    }
});





/* or we do it like this- this actually works */
const btn_any = document.getElementById("btn_$");
btn_any.addEventListener("click", user_selected_number);

function user_selected_number() {
    alert(`You selected your number`)   
}

/* and for some damn reason, this doesn/t work !! */

const randomNumberSelector = document.getElementById("random_number_button");
randomNumberSelector.addEventListener("click", randomlyGeneratedNumber);

function randomlyGeneratedNumber() {
    alert(`You random number`) 
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


