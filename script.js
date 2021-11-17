const Gameboard = (() => {
    const squares = Array.from(document.querySelectorAll(`th`))
    squares.forEach(square => square.addEventListener(`click`, runGame))

    const restartButton = document.querySelector(`#restart-button`)
    restartButton.addEventListener(`click`, gameOver)

    let counter = 0 // decides when X or O plays

    function gameOver(message) {
        if (typeof message != `object`)
            alert(message);
        squares.forEach(square => square.textContent = "")
        counter = 0
    }

    function decideWinner(square) {
        if (square.textContent === player1.choice) {
            gameOver(`${player1.name} wins!`)
        } else {
            gameOver(`${player2.name} wins!`)
        }
    }

    function displayChoice(e) {
        if (e.target.textContent != "") {
            return;
        }
        counter++
        if (counter % 2 === 1) {
            e.target.textContent = player1.choice
        } else e.target.textContent = player2.choice
    }

    function runGame(e) {

        displayChoice(e)

        // CHECKING IF GAME IS WON

        for (i = 0; i <= 2; i++) {  // vertical win
            if (squares[i].textContent != "" &&
                squares[i].textContent === squares[i + 3].textContent &&
                squares[i].textContent === squares[i + 6].textContent) {
                decideWinner(squares[i])
            }
        }

        for (i = 0; i <= 8; i += 3) {  // horizontal win
            if (squares[i].textContent != "" &&
                squares[i].textContent === squares[i + 1].textContent &&
                squares[i].textContent === squares[i + 2].textContent) {
                decideWinner(squares[i])
            }
        }

        if (squares[0].textContent != "" &&  // diag top left win
            squares[0].textContent === squares[4].textContent &&
            squares[0].textContent === squares[8].textContent) {
            decideWinner(squares[0])
        }

        if (squares[2].textContent != "" &&  // diag bottom left win
            squares[2].textContent === squares[4].textContent &&
            squares[2].textContent === squares[6].textContent) {
            decideWinner(squares[2])
        }

        for (i = 0; i <= 8; i++) {
            if (counter === 9) {
                gameOver(`It's a tie!`)
            }
        }
    }
})

const Player = () => {
    let name = prompt(`what is your name`)
    let choice = prompt(`what is your choice`)
    return { name, choice }
}

const player1 = Player()
const player2 = Player()
Gameboard()



