
const redButton = document.getElementsByClassName("btn_1");

redButton.AddEventListener("mousedown", clickedTheButton);
    function clickedTheButton(e) {
    e.currentTarget.style.backgroundColor = "#e84610";
    }




/* 
            <button class="btn_1" onclick="user_selected_number()">1</button>
*/
const btn_1 = document.getElementsByClassName("btn_1");
btn_1.AddEventListener("click", function(e) {
    const name = prompt("What is your name?");

    document.body.innerHTML = "<h1>Welcome, " + name + "</h1>";
});

/* 
function user_selected_number() {
    let user_number = 
    
}

function compare_values_between_user_selection_and_random_number() {
    if (user_selected_number) === radnom_created_number();
    win++
}
    */