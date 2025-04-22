
const redButton = document.getElementsByClassName("btn_1");

redButton.AddEventListener("mousedown", clickedTheButton);
    function clickedTheButton(e) {
    e.currentTarget.style.backgroundColor = "red";
    }




/* 
            <button class="btn_1" onclick="user_selected_number()">1</button>
*/

/*
const btn_1 = document.getElementsByClassName("btn_1");
btn_1.AddEventListener("click", function(e) {
    const name = prompt("What is your name?");
    alert("test")
    document.body.innerHTML = "<h1>Welcome, " + name + "</h1>";
});
*/


/* or we do it like this */
const btn_1 = document.getElementById("btn_1")
btn_1.AddEventListener("click", testingTheFunction)

function testingTheFunction() {
    alert("hello there")
}

const randomNumber = document.getElementById("random_number_button")
randomNumber.AddEventListener("click", function(p) {
    if (user_entry === randomEntry) {
        print (`Congrats! You selected ${user_entry} that matches ${randomEntry}`)
        ++win
    } else {
        print (`You selected ${user_entry}, while number drawn was ${randomEntry}`)
        ++lose
    }
})


let win = 0;
let lose = 0;


/* 
function user_selected_number() {
    let user_number = 
    
}

function compare_values_between_user_selection_and_random_number() {
    if (user_selected_number) === radnom_created_number();
    win++
}
    */