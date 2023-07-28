var score = 0;

function uptadeScore()
{
    score = score + 1;
    document.getElementById("score").innerHTML = "pontuação: " + = ;
}

function saveScore()
{
    localStorage.setItem("score", score);
}

function nextPage()
{
    window.location = "activity_2.html";
}

