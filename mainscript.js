/* start game into player section function */
function startGame() {
    const start = document.querySelector(".start-button")
    const playerPage = document.querySelector(".player-selection-page")
    const startPage = document.querySelector(".start-page")

    start.addEventListener('click', function() {
        playerPage.style.display = 'block';
        startPage.style.display = "none"
    })
}

/* allows user to click X and O without both choosing the same symbol */
function XandOPlayerDeclaration() {
    const player1X = document.querySelector(".player1-X-button")
    const player1O = document.querySelector(".player1-O-button")
    const player2X = document.querySelector(".player2-X-button")
    const player2O = document.querySelector(".player2-O-button")

    player1X.addEventListener('click', function() {
        player1X.classList.add("selected");
        player2O.classList.add("selected");
        player2X.disabled = true;
        player1O.disabled = true;
    })

    player1O.addEventListener('click', function() {
        player1O.classList.add("selected");
        player2X.classList.add("selected");
        player2O.disabled = true;
        player1X.disabled = true;
    })

    player2X.addEventListener('click', function() {
        player2X.classList.add("selected");
        player1O.classList.add("selected");
        player1X.disabled = true;
        player2O.disabled = true;
    })

    player2O.addEventListener('click', function() {
        player2O.classList.add("selected");
        player1X.classList.add("selected");
        player1O.disabled = true;
        player2X.disabled = true;
    })
}

/* start game into player section function and update player details on game page */
function playerToGame() {
    const submitButton = document.querySelector(".submit")
    const playerPage = document.querySelector(".player-selection-page")
    const gamePage = document.querySelector(".game-section")
    const player1Details = document.querySelector(".Player-input1")
    const player2Details = document.querySelector(".Player-input2")
    const player1 = document.querySelector(".player1")
    const player2 = document.querySelector(".player2")
    const player1XButton = document.querySelector(".player1-X-button")
    const player1OButton = document.querySelector(".player1-O-button")
    const player2XButton = document.querySelector(".player2-X-button")
    const player2OButton = document.querySelector(".player2-O-button")
    const player1sign = document.querySelector(".player1sign")
    const player2sign = document.querySelector(".player2sign")
    const player1score = document.querySelector(".player1score")
    const player2score = document.querySelector(".player2score")
    let value = 0


    submitButton.addEventListener('click', function() {
        gamePage.style.display = 'block';
        playerPage.style.display = "none";

        if (player1Details.value == "") {
            player1.textContent = "Player 1"
        } else {
            player1.textContent = `Player 1: ${player1Details.value}`
        }
    
        if (player2Details.value == "") {
            player2.textContent = "Player 2"
        } else {
            player2.textContent = `Player 1: ${player2Details.value}`
        }
    

        if (player1XButton.classList.contains("selected")) {
            player1sign.textContent = `Player 1 Sign: ${player1XButton.textContent}`;
        } else if (player1OButton.classList.contains("selected")) {
            player1sign.textContent = `Player 1 Sign: ${player1OButton.textContent}`;
        }

        if (player2XButton.classList.contains("selected")) {
            player2sign.textContent = `Player 2 Sign: ${player2XButton.textContent}`;
        } else if (player2OButton.classList.contains("selected")) {
            player2sign.textContent = `Player 2 Sign: ${player2OButton.textContent}`;
        }

        player1score.textContent = `Player 1 Score: ${value}`
        player2score.textContent = `Player 2 Score: ${value}`

    })

}

function Game() {
    /* player 1 starts always with whatever sign
    then player 2 goes and alternate*/
}

function CheckWin() {
    /* if there are three X's in a row, horizontal or diagonal:
player with x wins
reset

if there are three 0's in a row, horizontal or diagonal:
player with 0 wins
reset

if no 3 in a row, its a draw
reset 

this section also needs to liaise with the html "winner-draw-section" section 
and a pop up of the winner comes on*/
}


startGame()
XandOPlayerDeclaration()
playerToGame()