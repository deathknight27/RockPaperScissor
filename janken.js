const pointH = document.getElementById('human');
const pointC = document.getElementById('comp');
const win = document.getElementById('winner');
const array = ['paper', 'rock', 'scissor']; 
let playerChoice;
let playerScore = 0;
let compScore = 0;
function randomChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  }
   
  function playGame(playerChoice){
    const compChoice = randomChoice(array);
    if (playerChoice === 'rock' && compChoice === 'paper'){
        compScore++;
        pointC.textContent = `Comp: ${compScore}`;
        win.textContent = 'You lost!';
    }
    else if(playerChoice === 'rock' && compChoice === 'scissor'){
        playerScore++;
        pointH.textContent = `Player: ${playerScore}`;
      win.textContent = 'You won!';
    }
    else if(playerChoice === 'paper' && compChoice === 'rock'){
        playerScore++;
        pointH.textContent = `Player: ${playerScore}`;
        win.textContent = 'You won!';
    }
    else if(playerChoice === 'paper' && compChoice === 'scissor'){
        compScore++;
        pointC.textContent = `Comp: ${compScore}`;
        win.textContent = 'You lost!';
    }
    else if (playerChoice === 'scissor' && compChoice === 'paper'){
        playerScore++;
        pointH.textContent = `Player: ${playerScore}`;
      win.textContent = 'You won!';
    }
    else if (playerChoice === 'scissor' && compChoice === 'rock'){
        compScore++;
        pointC.textContent = `Comp: ${compScore}`;
        win.textContent = 'You lost!';
    }
    else {
        return win.textContent = 'Its a tie'
    }
    return gameOver();
  }


 function gameOver(){
    if(playerScore === 5 || compScore === 5){
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn3').disabled = true;
       if (playerScore > compScore){
        alert('Game over! You won!');
       }
       else{
        alert('Game over! You lost!');
       }
    }
 }

 function reload(){
    window.location.reload();
 }

  
  