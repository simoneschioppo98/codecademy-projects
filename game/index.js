// funzione per input dellútente
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    }else{
      console.log('ma che caaaazzo fai');
    }
  }


// funzione per línput delcomputer
  function getComputerChoice (){
    const randomNumber=Math.floor(Math.random()*3);
    if(randomNumber === 1){
     return 'rock';
    }else if(randomNumber === 2){
      return 'scissors';
    }else {
      return 'paper';
    }
  }


//funzione che determina il vincitore tra utente e computer 
   function determineWinner(userChoice , computerChoice){
      if(userChoice === computerChoice){
        return 'tie!';
      }
      if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
          return 'pc won! :( ';
        }else{
          return 'you won baby!';
        }
      }
      if(userChoice === 'paper'){
        if (computerChoice === 'scissor'){
          return 'pc won! :( ';
        }else{ return 'you won baby!';
        }
      }
      if (userChoice === 'scissors'){
        if (computerChoice === 'rock'){
          return 'pc won! :( ';
        }else{
          return 'you won baby!';
        }
      }
   }
  
  
  
  
  // funzione di ritorno che unisce le precedenti funzioni
  function playGame (){
   const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('you threw:' + userChoice);
  console.log('The coputer threw : ' + computerChoice);
  console.log(determineWinner(userChoice , computerChoice));
  };
  
  playGame();
