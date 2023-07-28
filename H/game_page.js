player1Name = document.getElementById("player1NameInput").value;
player2Name = document.getElementById("player2NameInput").value;

player1Score = 0;
player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + ": ";
document.getElementById("player2Name").innerHTML = player2Name + ": ";

document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

document.getElementById("player1Question").innerHTML = "turno de pergunta - " + player1Name;
document.getElementById("player1Answer").innerHTML = "turno de resposta - " + player2Name;

function send() {
   get_word = document.getElementById("word").value;
   word = getWord.toLowerCase();
   console.log("word in LowerCase = " + word);

   charAt1 = word.charAt(1);
   console.log(charAt1);

   length_divide_2 = Math.floor(word.length/2);
   charAt2 = word.charAt(length_divide_2);
   console.log(charAt2);

   length_minus_1 = word.length - 1;
   charAt3 = word.charAt(lenght_minus_1);
   console.log(charAt3)
   
   remove_charAt1 = word.replace(charAt1, "_");
   remove_charAt2 = remove_charAt1.replace(charAt2, "_");
   remove_charAt3 = remove_charAt2.replace(charAt3, "_");
   console.log(remove_charAt3);

   question_word = "<h4 id='word_display'> P. "+remove_charAt3+ "</h4>";
   input_box = "<br> resposta: <input type ='text' id='input_check_box' >";
   check_button = "<br><br> <button class='btn btn-info' onclick='check()'>checar</button>";
   row = question_word + input_box + check_button ;
   document.getElementById("output".innerHTML = row,)
   document.getElementById("word").value = "";
}

questionTurn = "player1"; 
answerTurn = "player2";

function check()
{
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();
    console.log("resposta em caixa baixa - " + answer);
    if(answer == word)
    {
    if(answerTurn == "player1")
    {
        player1Score = player1Score + 1;
        document.getElementById("player1Score").innerHTML = player1Score;
    }
    else
    {
        player2Score = player1Score + 1;
        document.getElementById("player2Score").innerHTML = player2Score;
    }
    }
    if(questionTurn == "player1")
    {
        questionTurn = "player2"
        document.getElementById("playerQuestion").innerHTML = "turno de pergunta: " + player2Name ;
    } 
    else
    {
        questionTurn = "player1"
        document.getElementById("playerQuestion").innerHTML = "turno de pergunta: " + player1Name ;
    }

    if(answerTurn == "player1")
    {
        answerTurn = "player2"
        document.getElementById("playerAnswer").innerHTML = "turno de resposta: " + player2Name ;
    }
    else
    {
        answerTurn = "player1"
        document.getElementById("playerAnswer").innerHTML = "turno de resposta: " + player1Name ;
    }

    document.getElementById("output").innerHTML = "";
}