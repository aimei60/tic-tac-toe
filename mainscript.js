/*plan for simple game of tic tac toe

player X - user

player O - Bot

board:
3x3 grid


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

/*board object */
function board() {
    let board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
}

/* player object */
function createPlayer(name, sign) {
    const player = {name, sign, describe() {
        console.log(`Name: ${this.name}, Sign: ${this.sign}`);
    },
}

    return player;
}
/*Game object*/
