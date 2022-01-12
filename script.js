//define function that will randomly return ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
    //initialise result
    let result;

    //random number between 0 and 1
    let randNum = Math.random();
    
    //define conditions for returning ‘Rock’, ‘Paper’ or ‘Scissors’
    if (randNum >= 0.666) {
        return result = 'Rock';
    } else if (randNum < 0.333) {
        return result = 'Paper';
    } else {
        return result = 'Scissors';
    }
}

// Function to refresh page
function refreshPage() {
    window.location.reload(true);
}

//define function that takes the player's choice and compares it to the computer
function playRound(event) {
    //ask for player input
    //playerSelection = prompt('Rock, Paper or Scissors? Make a choice :)').toLowerCase();
    //playerSelection = playSelect().toLowerCase;
    //const playerSelection = () => {
    if (event.target.id == 'rock' ||
    event.target.id == 'scissors' || 
    event.target.id == 'paper') {
        const selection = event.srcElement.id  //get the id of the click target
        //console.log(selection);
        //ask for player input
        playerSelection = selection
    } 

    // get the computer's choice
    computerSelection = computerPlay().toLowerCase(); 
    
    // select result div to append logs at a later stage
    const results = document.querySelector('.results');
    // initialize div to log the rounds
    const result = document.createElement('div');
    // add log class to message 
    result.classList.add('log');

    // initialize playerScore and computerScore
    const playerScore = document.querySelector('.playerScore')
    const computerScore = document.querySelector('.computerScore')
    
    if (playerScore.textContent < 5 && computerScore.textContent < 5) {
        //declare a winner
        if (playerSelection === computerSelection) {
            message = `${playerSelection} vs. ${computerSelection} ---> It's a tie :|`;
            //console.log(message);
            // append results div with current result
            result.textContent = message
            results.appendChild(result);
            //return message;
        } else if (playerSelection == 'rock' && computerSelection == 'scissors' || 
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'paper') {
            message = `${playerSelection} vs. ${computerSelection} ---> You won this round :)`;
            //console.log(message);
            // append results div with current result
            result.textContent = message
            results.appendChild(result);
            // change playerScore
            playerScore.textContent = parseInt(playerScore.textContent) + 1
            //return message;
            if (playerScore.textContent == 5) {
                // Creating a button to refresh page
                const btn = document.createElement('button');
                btn.classList.add('reset');
                btn.textContent = 'Play again!';
                btn.setAttribute('id', 'pinkbox');
                btn.style.backgroundColor = 'pink';
                btn.style.border = '1px solid black';
                btn.style.margin = '10px 0 0 0';
                results.appendChild(btn);
                // remove event listener to ignore additional clicks
                window.removeEventListener('click', playRound);
                //results.insertAdjacentElement('beforebegin', btn);
                btn.addEventListener('click', refreshPage);
            }
        } else {
            message = `${playerSelection} vs. ${computerSelection} ---> You lost this round :(`;
            //console.log(message);
            // append results div with current result
            result.textContent = message
            results.appendChild(result);
            // change computerScore
            computerScore.textContent = parseInt(computerScore.textContent) + 1
            //return message;
            if (computerScore.textContent == 5) {
                // Creating a button to refresh page
                const btn = document.createElement('button');
                btn.classList.add('reset');
                btn.textContent = 'Play again!';
                btn.setAttribute('id', 'pinkbox');
                btn.style.backgroundColor = 'pink';
                btn.style.border = '1px solid black';
                btn.style.margin = '10px 0 0 0';
                results.appendChild(btn);
                // remove event listener to ignore additional clicks
                window.removeEventListener('click', playRound);
                //results.insertAdjacentElement('beforebegin', btn);
                // refresh page bbutton at the end of the game
                btn.addEventListener('click', refreshPage);
            }
        }
    }
}

// click event listener to play the game
window.addEventListener('click', playRound)