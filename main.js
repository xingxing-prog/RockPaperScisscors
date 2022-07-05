
 
const rock = document.querySelector("#btnRock");
const paper = document.querySelector("#btnPaper");
const scissors = document.querySelector("#btnScissors");

const computer = document.querySelector("#computer");
const player = document.querySelector("#player");
const result = document.querySelector('#result');

const countNumber = document.querySelector("#count");
const computerSign = document.querySelector("#computerSign");
const playerSign = document.querySelector("#playerSign");

const playerCount = document.querySelector("#playerCount");
const computerCount = document.querySelector("#computerCount");
const overlay = document.querySelector("#overlay");
const reStart = document.querySelector("#restart");

rock.addEventListener("click",()=>afterClick("Rock"))
 
paper.addEventListener("click", ()=>afterClick("Paper"));
       
scissors.addEventListener("click", ()=>afterClick("Scissors"));

reStart.addEventListener("click", ()=>RestartGame());

overlay.style.display="none";
   
var count = 0;
var playerWin = 0;
var computerWin = 0;
const final = document.querySelector("#final");

function afterClick(playerSelection){
    if(isGameOver()){
       final.textContent=whoWins();
       endGame();
        
    }
    const computerSelection = computerPlay();
    playerSign.src ="./images/"+playerSelection +".jpg";
    computerSign.src ="./images/"+computerSelection+".jpg";
    /*player.textContent=playerSelection;*/
    playRound(playerSelection, computerSelection);
}

function computerPlay(){
    var selections =["Rock", "Paper", "Scissors"];
    const number = Math.floor(Math.random()*3);
    return selections[number];

}

function isGameOver(){
    if (count >= 5 && (playerWin === 3 || computerWin === 3)){
        return true;
    }
    return false;
}

function RestartGame(){
     rock.disabled = false;
     paper.disabled = false;
     scissors.disabled = false;
     overlay.style.display="none";
     count = 0;
     playerCount.textContent="";
     computerCount.textContent="";
     result.textContent = "";
     playerWin =0;
     computerWin = 0;

}

function whoWins(){
    return (playerWin > computerWin)? "Congratulation! You win.":"Unfortunate, You lost!";
}

function endGame(){
    rock.disabled = true;
    paper.disabled=true;
    scissors.disabled = true;
    overlay.style.display = "flex";
    
}



function playRound(playerSelection, computerSelection){
    
    /*computer.textContent=("computer choose: " + computerSelection);*/
    count +=1;
    if (playerSelection === computerSelection){
        result.textContent=("It's a tie.");
  
    }

    else if (playerSelection === "Rock" && computerSelection === "Paper"){
        result.textContent=("You lost! Paper beats Rock");
        computerWin += 1;
    }

    else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        result.textContent=("You win! Rock beats Scissors.");
        playerWin += 1;
        
    }

    else if (playerSelection === "Paper" && computerSelection ==="Rock"){
        result.textContent=("You win! Paper beats Rock.");
        playerWin += 1;
        
    }
     
    else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        result.textContent=("You lost! Scissors beats Paper");
        computerWin += 1;
    }

    else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        result.textContent=("You lost! Rock beats Scissors");
        computerWin += 1;
    }
    
    else if(playerSelection ==="Scissors" && computerSelection==="Paper"){
        result.textContent=("You win! Scissors beat Paper");
        playerWin += 1;

    }

    playerCount.textContent =playerWin;
    computerCount.textContent = computerWin;
    countNumber.textContent =("PlayerWin: " + playerWin +", ComputerWin: " + computerWin);
}

