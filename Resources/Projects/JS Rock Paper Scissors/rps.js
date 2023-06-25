let userId = document.getElementById('userinput');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    return 'Error! Invalid selection!';
  }
}

const getComputerChoice = () =>{
  const randomNumber = Math.floor(Math.random()* 3);
  switch(randomNumber){
  case 0:
    return 'rock';
    break;
  case 1:
    return 'paper';
    break;
  case 2:
    return 'scissors';
    break;
}}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice===computerChoice){
    return 'We Tied!';
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Me!';
    } else{
      return 'You!';
    }
  }
  if(userChoice=== 'paper'){
    if(computerChoice === 'scissors'){
      return 'Me!';
    } else{
      return 'You!';
    }
  }
  if(userChoice==='scissors'){
    if(computerChoice==='rock'){
      return 'Me!';
    } else {
      return 'Me!';
    }
  }
  if(userChoice==='bomb'){
    return 'Boom! You win!!'
  } else {
    return 'Me, Because you did not pick a valid input!'
  }
}

const playGame = () => {
  //uses the value of the user input to run this function
  const userChoice = getUserChoice(userId.value);
  const computerChoice = getComputerChoice();
  //console.log('You picked ' + userChoice);
  //console.log('Computer picked ' + computerChoice);
  //shows the winner
  return('User picked ' + userChoice + '. I picked ' + computerChoice + ' The Winner is... ' + determineWinner(userChoice, computerChoice));
};
//Sets the button to battle and winner to be the winner
let battle = document.getElementById('push');
let winner = document.getElementById('winner');

//sets an event listener - when button is clicked shows user input, computer choice and who won
battle.onclick = function() {
  winner.innerHTML = playGame();
}
//Changing the getUserChoice in the last selection as that is the user input. That is what plays the game.