
const redButton = document.getElementsByClassName("btn_1");

redButton.AddEventListener("mousedown", clickedTheButton);
    function clickedTheButton(e) {
    e.currentTarget.style.backgroundColor = "#e84610";
    }

/* 
function user_selected_number() {
    let user_number = 
    
}

function compare_values_between_user_selection_and_random_number() {
    if (user_selected_number) === radnom_created_number();
    win++
}
    */