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
let P1Sign = ""
let P2Sign = ""

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
    const div = document.createElement("div")
    let value = 0

    submitButton.addEventListener('click', function() {
        if (player1XButton.classList.contains("selected") || player2XButton.classList.contains("selected") || player1OButton.classList.contains("selected") || player2OButton.classList.contains("selected")) {
            gamePage.style.display = 'block';
            playerPage.style.display = "none";
        } else {
            div.style.fontFamily = "'Dancing Script', cursive";
            div.style.fontWeight = "bold";
            div.style.fontSize = "20px";
            div.style.backgroundColor = "#2cd79bb3";
            div.style.borderRadius = "10px";
            div.style.marginTop = "10px";
            div.style.padding = "4px";
            div.textContent = "Choose a sign to play the Game.";
            document.getElementById("error-message").appendChild(div);
        }

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
            P1Sign = player1XButton.textContent;
            player1sign.textContent = `Player 1 Sign: ${player1XButton.textContent}`;
        } else if (player1OButton.classList.contains("selected")) {
            P1Sign = player1OButton.textContent;
            player1sign.textContent = `Player 1 Sign: ${player1OButton.textContent}`;
        }

        if (player2XButton.classList.contains("selected")) {
            P2Sign = player2XButton.textContent;
            player2sign.textContent = `Player 2 Sign: ${player2XButton.textContent}`;
        } else if (player2OButton.classList.contains("selected")) {
            P2Sign = player2OButton.textContent;
            player2sign.textContent = `Player 2 Sign: ${player2OButton.textContent}`;
        }

        GameAndCheckWin(P1Sign, P2Sign)
        
    })
}

function GameAndCheckWin(P1Sign, P2Sign) {
    const cells = document.querySelectorAll(".cell")
    let player1 = P1Sign
    let player2 = P2Sign
    let currentPlayer = player1

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function() {
            if (cells[i].textContent === "") {
                cells[i].textContent = currentPlayer

                if (currentPlayer === player1) {
                    currentPlayer = player2
                    Win()
                } else {
                    currentPlayer = player1
                    Win()
                    
                }
            }
        });
    }
    
    function Win() {
        winning_combinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]

        for (combination of winning_combinations) {
            const [a, b, c] = combination;
            if (cells[a].textContent != "" &&
                cells[a].textContent === cells[b].textContent &&
                cells[b].textContent === cells[c].textContent) {
                    if (cells[a].textContent === player1) {
                        console.log("Player 1 Wins")
                    } else if (cells[a].textContent === player2) {
                        console.log("Player 2 Wins")
                    }
                }
        }
    }
}





startGame()
XandOPlayerDeclaration()
playerToGame()