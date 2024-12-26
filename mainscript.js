/*plan for simple game of tic tac toe

start button which is an overlay on top
user clicks start button
another page which asks to enter name and assigns the sign X
and asks to enter name and assigns the sign )
once entered, e.g. Alice, Sign X and player2 is assigned O

game:
player X starts
then player 0

if there are three X's in a row, horizontal or diagonal:
player x wins
reset

if there are three 0's in a row, horizontal or diagonal:
player 0 wins
reset

if no 3 in a row, its a draw
reset
*/

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
        player2X.disabled = true;
        player1O.disabled = true;
    })

    player1O.addEventListener('click', function() {
        player1O.classList.add("selected");
        player2O.disabled = true;
        player1X.disabled = true;
    })

    player2X.addEventListener('click', function() {
        player2X.classList.add("selected");
        player1X.disabled = true;
        player2O.disabled = true;
    })

    player2O.addEventListener('click', function() {
        player2O.classList.add("selected");
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


/* create player factory function */
function createPlayer(name, sign) {
    return {
        name,
        sign,
        player_summary() {
            console.log(` Player: ${name}, Sign: ${sign}` );
        }
     }
}

/* Check winner function */
function checkWin() {
    const cell0 = document.querySelector(".cell0");
    const cell1 = document.querySelector(".cell1");
    const cell2 = document.querySelector(".cell2");
    const cell3 = document.querySelector(".cell3");
    const cell4 = document.querySelector(".cell4");
    const cell5 = document.querySelector(".cell5");
    const cell6 = document.querySelector(".cell6");
    const cell7 = document.querySelector(".cell7");
    const cell8 = document.querySelector(".cell8");


    /* first row check*/
    if (cell0.textContent && cell0.textContent === cell1.textContent && cell1.textContent === cell2.textContent) {
        return cell0.textContent;
    }

    /* second row check*/
    if (cell3.textContent && cell3.textContent === cell4.textContent && cell4.textContent === cell5.textContent) {
        return cell3.textContent;
    }

    /* third row check*/
    if (cell6.textContent && cell6.textContent === cell7.textContent && cell7.textContent === cell8.textContent) {
        return cell6.textContent;
    }

    /* first column check */
    if (cell0.textContent && cell0.textContent === cell3.textContent && cell3.textContent === cell6.textContent) {
        return cell0.textContent;
    }

    /* second column check */
    if (cell1.textContent && cell1.textContent === cell4.textContent && cell4.textContent === cell7.textContent) {
        return cell1.textContent;
    }

    /* third column check */
    if (cell2.textContent && cell2.textContent === cell5.textContent && cell5.textContent === cell8.textContent) {
        return cell2.textContent;
    }

    /* diagonal top-left to bottom-right */
    if (cell0.textContent && cell0.textContent === cell4.textContent && cell4.textContent === cell8.textContent) {
        return cell0.textContent;
    }

    /* diagonal top-right to bottom-left */
    if (cell2.textContent && cell2.textContent === cell4.textContent && cell4.textContent=== cell6.textContent) {
        return cell2.textContent;
    }

    if (cell0.textContent && cell1.textContent && cell2.textContent && cell3.textContent && cell4.textContent && cell5.textContent && cell6.textContent && cell7.textContent && cell8.textContent) {
        return "Draw";
    }

}

/* Game function */
function Game() {
    const cells = document.querySelectorAll(".cell"); 

    let Player1_name = prompt("Enter Player 1's name: ").toUpperCase();
    let Player1_sign = prompt("Enter Player 1's sign (X or O): ").toUpperCase();

    while (Player1_sign != "X" && Player1_sign != "O") {
        console.log("Player 1's sign needs to be X or O.")
        Player1_sign = prompt("Enter Player 1's sign (X or O): ").toUpperCase();
    }

    let Player2_name = prompt("Enter Player 2's name: ").toUpperCase();
    let Player2_sign = prompt("Enter Player 2's sign (X or O): ").toUpperCase();

    while (Player2_sign != "X" && Player2_sign != "O") {
        console.log("Player 2's sign needs to be X or O.")
        Player2_sign = prompt("Enter Player 2's sign (X or O): ").toUpperCase();
    } 

    while (Player1_sign === Player2_sign) {
        console.log("Player 2's sign cannot be the same as Player 1's sign. Pick again")
        Player2_sign = prompt("Enter Player 2's sign (X or O): ").toUpperCase();
    }

    const Player1 = createPlayer(Player1_name, Player1_sign);
    const Player2 = createPlayer(Player2_name, Player2_sign);

    Player1.player_summary();
    Player2.player_summary();

    let currentPlayer = Player1.sign; 

    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            if (cell.textContent === "") {
                cell.textContent = currentPlayer;

                let checkWinner = checkWin();

                if (checkWinner === Player1.sign) {
                    console.log(`${Player1_name} wins!`)
                } else if (checkWinner === Player2.sign) {
                    console.log(`${Player2_name} wins!`)
                } else if (checkWinner === "Draw") {
                    console.log("It'a draw"); 
                }

                if (currentPlayer === Player1.sign) {
                    currentPlayer = Player2.sign;
                } else {
                    currentPlayer = Player1.sign;
                }
            }
        });

    });
}

startGame()
XandOPlayerDeclaration()
playerToGame()