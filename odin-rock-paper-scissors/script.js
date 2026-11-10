const choice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    return choice[getRandomInt(3)];
}

function getHumanChoice(){
    let choice = prompt("Enter your choice (rock, paper, scissors): ").toLowerCase();

    if(choice != "rock" || choice != "paper" || choice != "scissors"){
        while(choice != "rock" && choice != "paper" && choice != "scissors"){
            choice = prompt("Enter your choice (rock, paper, scissors): ").toLowerCase();
        }
    }
    return choice;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            alert("TIE! Rock don't beat up their own kind");
        }
        else if(computerChoice === "paper"){
            alert("You LOSE! Paper beats rock");
            computerScore += 1;
        }
        else if(computerChoice === "scissors"){
            alert("You WIN! Rock beats scissors");
            humanScore += 1;
        }
    }
    else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            alert("You WIN! Paper beats rock");
            humanScore += 1;
        }
        else if(computerChoice === "paper"){
            alert("TIE! Paper don't beat up their own kind");
        }
        else if(computerChoice === "scissors"){
            alert("You LOSE! Scissors beat paper");
            computerScore += 1;
        }
    }
    else if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
            alert("You LOSE! Rock beats scissors");
            computerScore += 1;
        }
        else if(computerChoice === "paper"){
            alert("You WIN! Scissors beat paper");
            humanScore += 1;
        }
        else if(computerChoice === "scissors"){
            alert("TIE! Scissors don't beat up their own kind");
        }
    }
}

function playGame(){

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    if(humanScore > computerScore) console.log(`You WIN! With a score of ${humanScore} : ${computerScore}`);
    else if(humanScore < computerScore) console.log(`You LOSE! With a score of ${humanScore} : ${computerScore}`);
    else console.log(`Its a TIE! Score of ${humanScore} : ${computerScore}`);
}

playGame();