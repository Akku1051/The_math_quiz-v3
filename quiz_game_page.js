function addUser() {

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location = "quiz_game_page.html";


    player1_n = localStorage.getItem(player1_name)
    document.getElementById(player1_name).innerHTML = "<h4>" + player1_n + "</h4>"

    player2_n = localStorage.getItem(player2_name)
    document.getElementById(player2_name).innerHTML = "<h4>" + player2_n + "</h4>"
}

Send() 
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";

    input_box = "<br> Answer: <input type='text' id= 'input_check_box'> "; 

    check_button = "<br><br> <button class= 'btn btn-info' onclick= 'check()'>Check</button> ";

    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}