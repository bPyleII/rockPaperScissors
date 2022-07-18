    const btn = document.querySelectorAll('button');
    //Use the nodelist event listener to find which button the user clicked
    btn.forEach((btn) => {
        btn.addEventListener('click',(e) => {
            //console.log(e.target.id);
            //playRound(e.target.id);
            WinCounter(roundWinner(playRound(e.target.id)));

        });
    });

    /*
    let testVar = 4;
    let testVarTwo = 3;

    const userWins = document.getElementById('userWins');
    userWins.textContent += `${testVar}`;

    const computerWins = document.getElementById('computerWins');
    computerWins.textContent += `${testVarTwo}`;
    */


    



    //Declare a function that makes the computer generate a choice between rock, scissors, or paper
    function computerPlay(){
        //create an array of strings for the computer to choose from
        const options = ['rockBtn', 'scissorsBtn', 'paperBtn'];
        //select an element at random fromt the array
        //use Math.random to generate a random number between 0 and 1
        //Multiply that number by the array length (3)
        //Use Math.floor to round that number down to the nearest integer that will match the element positioning in the array
        const choice = options[Math.floor(Math.random()*options.length)];
        //return the element selected fromt the array
        return choice;

    }

    //Create a function to play rock, paper, scissors against the computer
    function playRound(playerSelection){
        
        //store the value of playerSelection
        let playerChoice = playerSelection;
        //store the value of computerPlay
        let computerChoice = computerPlay();


        //variable to store a string stating the winner
        let winState;

        //if the player and the computer choose the same, then it is a tie
        //evaluating this first also elminates one of the checks for the subsequent else if statements
        // If it is already determined that the player and computer are not equivalent, then
        //there is no need to compare against the player's choice
        if (playerChoice === computerChoice){
            
            winState = 'It\'s a tie!';
        // if it is not a tie, identify the player choice with the following else if statements
        //Once the player choice is identify it can be compared to the two remaining computer options 
        // to determine who wins and store it in winState     
        }else if (playerChoice === 'rockBtn'){
            if(computerChoice === 'paperBtn'){
                winState = 'The computer has won!' // Paper beats rock
            } else {
                winState = 'You have won!'//' Rock beats scissors!!'
            }
        }else if (playerChoice === 'paperBtn'){
            if(computerChoice === 'scissorsBtn'){
                winState = 'The computer has won!'//' Scissors beats paper!!'
            } else {
                winState = 'You have won!'//' Paper beats rock!!'
            }
        }else if (playerChoice === 'scissorsBtn'){
            if(computerChoice === 'rockBtn'){
                winState = 'The computer has won!'//' Rock beats scissors!!'
            } else {
                winState = 'You have won!'//' Scissors beats paper!!'
            }
        }   
        console.log(computerChoice);
        console.log(winState);
        return winState;
        
        
    }


    //Declare a function that stores the value of the winner of the round. The argument passed comes from the return value of function playRound()
    function roundWinner (playRound){
        //the conditional tells what value to return based on who won the round, the user or the computer
        if (playRound === 'You have won!'){
            return 'user';
        } else if (playRound === 'The computer has won!') {
            
            return 'computer';
        } else{
            return 'It\'s a tie!' ;
        }

    }




   
    //Initialize the winCounter variables outside of the function so that the counter is not reset to zero everytime the function is called
    let computerWinCounter = 0;
    let userWinCounter = 0;

    //This function increments winCounter evertime the user wins a round.
    function WinCounter(roundWinner){
        if (roundWinner === 'user'){
            userWinCounter++;
            console.log('You won that round');
            //add 1 to the winCounter if the user has won
        } else {
            //if the user did not win, do nothing
            computerWinCounter++;
            console.log('not a win'); 
        }

        const userWins = document.getElementById('userWins');
        userWins.textContent = `User Wins: ${userWinCounter}`;
    
        
        const computerWins = document.getElementById('computerWins');
        computerWins.textContent = `Computer Wins: ${computerWinCounter}`;
        
        //the return value is a string telling the user how many rounds they have won so far
        return;
    }
    
    //Declare a function that that allows the user to play the computer 5 times and keeps score to report a winner
    function game(){
        //start at 0 and play a round until i is no longer less than 5. This will result in playing 5 total rounds. 0,1,2,3,4
        for (let i = 0; i < 5; i++){
            //calls the function playerWinCounter() which needs an argument passed from roundWinner() which needs an argument passed from playRound()
            console.log(WinCounter(roundWinner(playRound())));
        }
        //After the rounds are over, if the user's winCounter is 3 or more, then the user has won the game. Else the computer has won.
        if (winCounter >= 3){
            console.log(`You have defeated the computer!! You won ${winCounter} games!`)
        } else {console.log(`You have not defeated the computer :( You only won ${winCounter} game(s)!`);}

    }

   //game();

