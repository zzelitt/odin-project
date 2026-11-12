function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    return choice[getRandomInt(3)];
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            console.log("TIE! Rock don't beat up their own kind");
        }
        else if(computerChoice === "paper"){
            console.log("You LOSE! Paper beats rock");
            computerScore += 1;
        }
        else if(computerChoice === "scissors"){
            console.log("You WIN! Rock beats scissors");
            humanScore += 1;
        }
    }
    else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            console.log("You WIN! Paper beats rock");
            humanScore += 1;
        }
        else if(computerChoice === "paper"){
            console.log("TIE! Paper don't beat up their own kind");
        }
        else if(computerChoice === "scissors"){
            console.log("You LOSE! Scissors beat paper");
            computerScore += 1;
        }
    }
    else if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
            console.log("You LOSE! Rock beats scissors");
            computerScore += 1;
        }
        else if(computerChoice === "paper"){
            console.log("You WIN! Scissors beat paper");
            humanScore += 1;
        }
        else if(computerChoice === "scissors"){
            console.log("TIE! Scissors don't beat up their own kind");
        }
    }
}

function updateText(text){
    
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