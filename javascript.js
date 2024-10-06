let playerPoints = 0;
let computerPoints = 0;
let roundCounter = 1;
let computerChoice;
let playerChoice;

const round = document.querySelector("#round");
const dialogue = document.querySelector("#dialogue");
const scorePlayerOne = document.querySelector("#scorePlayerOne");
const computerScore = document.querySelector("#computerScore");
const buttons = document.querySelector("#buttons");

function getComputerChoice() {
  computerChoice = (Math.floor(Math.random()*3));
  if (computerChoice < 1){computerChoice = "rock";}
  else if (computerChoice < 2) {computerChoice = "paper";}
  else{computerChoice = "scissors";}
}

buttons.addEventListener("click",()=>{
  if(event.target.id=="rockButton"&&playerPoints<5&&computerPoints<5){
    playerChoice = "rock";
    getComputerChoice();
    playRound(computerChoice, playerChoice);
  }
  else if(event.target.id=="paperButton"&&playerPoints<5&&computerPoints<5){
    playerChoice = "paper";
    getComputerChoice();
    playRound(computerChoice, playerChoice);
  }
  else if(event.target.id=="scissorsButton"&&playerPoints<5&&computerPoints<5){
    playerChoice = "scissors";
    getComputerChoice();
    playRound(computerChoice, playerChoice);
  }
 
});
  
  function playRound(computer,human){
      if (computer == human){
        dialogue.textContent = "It's a draw!";
      }
      else if (computer == "rock" && human == "scissors" ||
               computer == "paper" && human == "rock" ||
               computer == "scissors" && human == "paper"){
          computerPoints = computerPoints + 1;
          dialogue.textContent = "Computer wins!";
      }
      else {
          playerPoints = playerPoints + 1;
          dialogue.textContent = "Player 1 wins!";
      }
      roundCounter = roundCounter + 1;
      round.textContent = "Round: "+roundCounter;
      scorePlayerOne.textContent = playerPoints;
      computerScore.textContent = computerPoints;
      console.log(roundCounter);
      if(playerPoints>4){
         dialogue.innerHTML = `<p>You are the champion!</p> 
         <p>Refresh the page to play again</p>`;
         const p = document.querySelectorAll("p");
         p[0].style.margin = 0;
         p[1].style.margin = 0;
      }
      if(computerPoints>4){
         dialogue.innerHTML = `<p>You are death!</p> 
         <p>Refresh the page to play again</p>`;
         const p = document.querySelectorAll("p");
         p[0].style.margin = 0;
         p[1].style.margin = 0;
      }
  }