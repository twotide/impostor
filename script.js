var players;
var impostorId;

var normalWord;
var impostorWord;

var round;

function start()
{
    const wordText = document.getElementById("wordText");
    
    impostorWord = document.getElementById("input1").value;
    normalWord = document.getElementById("input2").value;

    players = parseInt(document.getElementById("playerInput").value);
    impostorId = Math.floor(Math.random() * (players - 1));

    round = 0;

    document.getElementById("input1").value = "hidden";
    document.getElementById("input2").value = "hidden";
}

function nextWord() 
{
    if (round === impostorId)
    {
        wordText.textContent = (impostorWord + " (player " + (round + 1) + "/" + players + ")");
    }
    else
    {
        wordText.textContent = (normalWord + " (player " + (round + 1) + "/" + players + ")");
    }

    if (round >= players) wordText.textContent = "all words are done"; 
    else round++;
}

function hideWord()
{
    wordText.textContent = "(word is hidden)";
}