function getComputerChoice() {
    let random = (Math.floor(Math.random()*3));
    if (random < 1){random = "rock";}
    else if (random < 2) {random = "paper";}
    else{random = "scissors";}
    console.log("Computer choice:"+" "+random)
    return random;
  }
  
  function getHumanChoice(){
      let pick;
      do{
          pick = prompt("Write: \"rock\", \"paper\" or \"scissors\"");
          if(pick!=null){pick = pick.toLowerCase();}
      }
      while(pick!="rock"&&pick!="paper"&&pick!="scissors");
      console.log("Human choice:"+" "+pick);
      return pick;
  }
  
  function playRound(computer,human){
      console.log("round:" + " " + round);
      if (computer == human){
          console.log("draw game");
          console.log("computer score:"+computerScore +" "+ "human score:"+humanScore);
  }
      else if (computer == "rock" && human == "scissors" ||
               computer == "paper" && human == "rock" ||
               computer == "scissors" && human == "paper"){
          computerScore = computerScore + 1;
          console.log("computer wins");
          console.log("computer score:"+computerScore +" "+ "human score:"+humanScore);
  }
      else {
          humanScore = humanScore + 1;
          console.log("human wins");
          console.log("computer score:"+computerScore +" "+ "human score:"+humanScore);
      }
      round = round + 1;
  }
  
  let humanScore = 0;
  let computerScore = 0;
  let round = 1;
  
  
  do{
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(computerSelection,humanSelection);
  }
  while(round<=5);
  
  if(round == 6 && humanScore>computerScore){
    console.log("You are the campion (reload the page fo play again)");
  
   }else if(round == 6 && humanScore<computerScore){
    console.log("You lost (reload the page fo play again)");
      
   } else{
    console.log("Draw game (reload the page fo play again)");
  }
  
  