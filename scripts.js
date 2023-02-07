const choices = ["rock", "paper", "scissors"];
let compScore = 0;
let playerScore = 0;
let compPic = document.getElementById("compPic");
let playerPic = document.getElementById("playerPic");

const pscore = document.getElementById("pscore");
const cscore = document.getElementById("cscore");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
let resultsHeader = document.querySelector("#resultsHeader");
let results = document.createElement("p");
resultsHeader.appendChild(results);
let winner = document.createElement("p");
results.appendChild(winner);
pscore.innerHTML = "Player Score: " + playerScore ;
cscore.innerHTML = "Computer Score: " + compScore;

rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}



function playRound(user, comp){
    user = this.innerText.toLowerCase();
    comp = getComputerChoice();
    // results.textContent = `User choice: ${user}, Computer choice: ${comp}`;
    switch(true) {
        case user === "rock" && comp === "scissors":
            playerScore++;
            winner.textContent = "You win! Rock beats scissors!";
            break;
        case user === "rock" && comp === "paper":
            compScore++;
            winner.textContent = "You lose! Paper beats rock!"; 
            break;
        case user === "paper" && comp === "scissors":
            compScore++;
            winner.textContent = "You lose! Scissors beats paper!";
            break;
        case user === "paper" && comp === "rock":
            playerScore++;
            winner.textContent = "You win! Paper beats rock!";
            break;
        case user === "scissors" && comp === "paper":
            playerScore++;
            winner.textContent = "You win! Scissors beats paper!";
            break;
        case user === "scissors" && comp === "rock":
            compScore++;
            winner.textContent = "You lose! Rock beats scissors!";
            break;
        case user === comp:
            winner.textContent = "Tie game! Both picked " + user + "!";
            break;
    }
    setTimeout(showPics(user, comp), 10);
    pscore.innerHTML = "Player Score: " + playerScore;
    cscore.innerHTML = "Computer Score: " + compScore;
    setTimeout(endGame, 0);
}


function endGame(){
    if(playerScore == 5 || compScore == 5){
        alert("Game Over!");
        if(playerScore > compScore){
            alert("You win!");
        } else {
            alert("You lose!");
        }
        reset();
    }

}

function showPics(user, comp){
    if(user == "rock"){
        playerPic.setAttribute("src", "rock.jpeg");
    }
    if(user == "paper"){
        playerPic.setAttribute("src", "paper.jpeg");
    }
    if(user == "scissors"){
        playerPic.setAttribute("src", "scissors.webp");
    }
    if(comp == "rock"){
        compPic.setAttribute("src", "rock.jpeg");
    }
    if(comp == "paper"){
        compPic.setAttribute("src", "paper.jpeg");
    }
    if(comp == "scissors"){
        compPic.setAttribute("src", "scissors.webp");
    }
}

function reset(){
    playerScore = 0;
    compScore = 0;
    pscore.innerHTML = "Player Score: " + playerScore ;
    cscore.innerHTML = "Computer Score: " + compScore;
}


// function playGame(){
//     playerScore = 0;
//     compScore = 0;
//     for(let i = 1; i <= 5; i++){
//         playRound(getPlayerChoice(), getComputerChoice());
//     }
//     if(playerScore > compScore){
//         alert(`You win! Score: ${playerScore} to ${compScore}`);
//     } else if(compScore > playerScore){
//         alert(`You lose! Score: ${compScore} to ${playerScore}`);
//     } else {
//         alert("It was a tie!");
//     }
//}


// function getPlayerChoice(){
    //     let playerChoice = prompt("Please choose one: rock, paper, or scissors.").toLowerCase();
    //     while(playerChoice != "rock" && playerChoice != "scissors" && playerChoice != "paper"){
    //         alert("You did not enter a valid option!");
    //         playerChoice = prompt("Please choose one of the following options: rock, paper, or scissors.").toLowerCase();
    //     } 
    //     return playerChoice;
    // }