const squares = Array.from(document.querySelectorAll(`th`))

squares.forEach(square => square.addEventListener(`click`, runGame))

let counter = 0
function runGame(e) {

    function displayChoice(e) {
        if (e.target.textContent != "") {
            return;
        }
        counter++
        if (counter % 2 === 0) {
            e.target.textContent = `X`
        } else e.target.textContent = "O"
    }

    displayChoice(e)

    // CHECKING IF GAME IS WON

    for (i = 0; i <= 2; i++) {
        if (squares[i].textContent != "" &&
            squares[i].textContent === squares[i + 3].textContent &&
            squares[i].textContent === squares[i + 6].textContent) {
            alert(`you win! vertically`);
            squares.forEach(square => square.textContent = "")
        }
    }

    for (i = 0; i <= 8; i += 3) {
        if (squares[i].textContent != "" &&
            squares[i].textContent === squares[i + 1].textContent &&
            squares[i].textContent === squares[i + 2].textContent) {
            alert(`you win! horizontally`);
            squares.forEach(square => square.textContent = "")
        }
    }

    if (squares[0].textContent != "" &&
        squares[0].textContent === squares[4].textContent &&
        squares[0].textContent === squares[8].textContent) {
        alert(`you win! diag top left`);
        squares.forEach(square => square.textContent = "")
    }

    if (squares[2].textContent != "" &&
        squares[2].textContent === squares[4].textContent &&
        squares[2].textContent === squares[6].textContent) {
        alert(`you win! diag bottom left`);
        squares.forEach(square => square.textContent = "")
    }

    // for (i=0;i<=8;i++) {
    //     if (squares[i].textContent != "")
    //     alert(`it's a tie!`)
    // }


}
