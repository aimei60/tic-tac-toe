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

function createPlayer(name, sign) {
    return {
        name,
        sign,
        player_summary() {
            console.log(` Player: ${name}, Sign: ${sign}` );
        }
     }
}

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

Game();