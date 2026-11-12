function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    return choice[getRandomInt(3)];
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            updateText("TIE! Rock don't beat up their own kind");
            updateScore();
        }
        else if(computerChoice === "paper"){
            updateText("You LOSE! Paper beats rock");
            computerScore += 1;
            updateScore();
        }
        else if(computerChoice === "scissors"){
            updateText("You WIN! Rock beats scissors");
            humanScore += 1;
            updateScore();
        }
    }
    else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            updateText("You WIN! Paper beats rock");
            humanScore += 1;
            updateScore();
        }
        else if(computerChoice === "paper"){
            updateText("TIE! Paper don't beat up their own kind");
            updateScore();
        }
        else if(computerChoice === "scissors"){
            updateText("You LOSE! Scissors beat paper");
            computerScore += 1;
            updateScore();
        }
    }
    else if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
            updateText("You LOSE! Rock beats scissors");
            computerScore += 1;
            updateScore();
        }
        else if(computerChoice === "paper"){
            updateText("You WIN! Scissors beat paper");
            humanScore += 1;
            updateScore();
        }
        else if(computerChoice === "scissors"){
            updateText("TIE! Scissors don't beat up their own kind");
            updateScore();
        }
    }
}

function updateText(text){
    const para = document.getElementById("round/o");
    para.textContent = text;
}

function updateScore(){
    const scorePara = document.getElementById("score");
    scorePara.innerHTML = `&emsp; &nbsp; YOU &nbsp; : &nbsp; COMPUTER <br>
                                    ${humanScore} &emsp; &emsp; &emsp; &nbsp; ${computerScore}`
}

const choice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const rbtn = document.getElementById("rock");
const pbtn = document.getElementById("paper");
const sbtn = document.getElementById("scissors");

rbtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
pbtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
sbtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));