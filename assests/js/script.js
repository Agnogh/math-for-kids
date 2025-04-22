


/* This should change to color of the button when user selects it*/ 

/*
function user_selected_number() {
    const colorButton = document.getElementById("btn_1");
    colorButton.style.backgroundColor = "lightblue";
    colorButton.style.color = "red";
}



changeColour.AddEventListener("mousedown", user_selected_number);
    function user_selected_number() {
        const colorButton = document.getElementById("btn_1");
        colorButton.style.backgroundColor = "lightblue";
        colorButton.style.color = "red";
    }
*/

function user_selected_number(event) {
    const clickedButton = event.target;

    /* This should change the style of the button*/
    clickedButton.style.backgroundColor = "green";
    clickedButton.style.color = "red";

    /* this should get the number from whatever user selects */
    const selectedNumber = clickedButton.textContent;

    /* this part should update the selected "number box" */
    const selectedNumberBox = document.querySelector("#selectedNumberBox p");
    selectedNumberBox.textContent = `Value you have semlected is ${selectedNumber} `;
}

document.addEventListener("DomContentLoaded", function() {
    for (let i = 1; i <=9; i++) {
        const button = document.getElementById(`btn_${i}`);
        button.addEventListener("click", user_selected_number);
    }
});


/* or we do it like this */

const btn_1 = document.getElementById("btn_1")
btn_1.AddEventListener("click", user_selected_number)

function user_selected_number() {
    alert("hello there")
}

const randomNumber = document.getElementById("random_number_button")
randomNumber.AddEventListener("click", function(p) {
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


/* This is for random number generator */
const randomNumberButton = document.getElementById("random_number_button");

