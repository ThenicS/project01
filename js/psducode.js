class SlidingPuzzle {
    constructor(gameEl) {
        this.boardEl = gameEl.querySelector('.puzzleBoard');
    }
}
// Create the new grid by createElement('div)
// const grid = document.querySelector('#puzzle_oard');
// for (let i = 0; i < 16; i++) {
//     const square = document.createElement('div');
//     grid.appendChild(square);
// }

class SlidingPuzzle {
    constructor(gameEl) {
        thisboardEl = gameEl.querySelector('.puzzle_board');
        this.messageEl = gameEl.querySelector('.showTurn');
    }
    static winningCondition = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    ];
}

// Create the new grid by document.createElement('div)
const normalBoard = document.querySelector('.puzzleBoard');
for (let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    normalBoard.appendChild(square);
}
console.log(normalBoard);

// EVENT LISTENNER
id6.addEventListener('click', function () {
    let oldpic = this.innerHTML;
    // console.log(oldpic);
    this.innerHTML = id9.innerHTML;
    id9.innerHTML = oldpic;
    // console.log(id9);
    textTurn.innerHTML = 'TURN: 1';
    console.log(this.id);
});

function evAdd() {
    let oldpic = this.innerHTML;
    this.innerHTML = id9.innerHTML;
    id9.innerHTML = oldpic;
    console.log(exchangeable(this.id));
    console.log(this.id);
    exchangeable(this.id);
    checkWin();
}

function abc(arr) {
    for (let i = 0; i < arr.length; i++) {
        let (id + i) = document.getElementById('`${i}`');
        console(id + i)
    }
}
const id3 = document.getElementById('3');//3,5,9