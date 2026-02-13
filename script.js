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

    players = document.getElementById("playerInput").value;
    impostorId = Math.floor(Math.random() * players);

    round = 0;
}

function nextWord() 
{
    if (round === impostorId)
    {
        wordText.textContent = impostorWord;
    }
    else
    {
        wordText.textContent = normalWord;
    }

    round++;
}

function hideWord()
{
    wordText.textContent = "(word is hidden)";
}