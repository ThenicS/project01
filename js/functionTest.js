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
// document.body.style.backgroundImage = "url('/picture/background/town02.jpg')";

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

// ******* Exchangeable function *******
function exchangeable(id) {
    if (id == 1) return [2, 4];
    if (id == 2) return [1, 3, 5];
    if (id == 3) return [2, 6];
    if (id == 4) return [1, 5, 7];
    if (id == 5) return [2, 4, 6, 8];
    if (id == 6) return [3, 5, 9];
    if (id == 7) return [4, 8];
    if (id == 8) return [5, 7, 9];
    if (id == 9) return [6, 8];
}
function indexPosition(setterTile) {
    let index = setterTile.parentElement.id;
    console.log(index);
    return index;
}
function evAdd6() {
    let imgTag = this.innerHTML;
    this.innerHTML = id6.innerHTML;
    id6.innerHTML = imgTag;
    // console.log(exchangeable(this.id));
    checkWin();
    console.log(this.id);
}
function evAdd9() {
    let imgTag = this.innerHTML;
    this.innerHTML = id9.innerHTML;
    id9.innerHTML = imgTag;
    // console.log(exchangeable(this.id));
    checkWin();
    console.log(this.id);
}
// show element in console
console.log(id1.firstChild.className);
console.log(board.hasChildNodes);
console.log(hint);
// เช็๋ค render ในcheckWin แล้วค่อย removeEvent
// shuffle
// render addEventlistener
// checkWin stopEventlistener
// if checkwin = true gameEnd
// retrartBtn click to play again
// if not continue render addEventlistener
// checkWin
// if checkwin = true gameEnd
// retrartBtn click to play again
// if not continue render

// console.log(setter.parentElement.id);
// Change render() to render(index) {}
// index = position of setter tile

// function removeEvt(element) {
//     element.removeEventListener('click');
// }
//  DEMO test eventListener
id9.addEventListener('click', function () {
    let oldpic = this.innerHTML;
    // console.log(oldpic);
    this.innerHTML = id6.innerHTML;
    id6.innerHTML = oldpic;
    // console.log(id6);
    textTurn.innerHTML = 'TURN: 1';
    return this.id;
});
id6.addEventListener('click', function () {
    let oldpic = this.innerHTML;
    // console.log(oldpic);
    this.innerHTML = id9.innerHTML;
    id9.innerHTML = oldpic;
    // console.log(id9);
    textTurn.innerHTML = 'TURN: 1';
    console.log(exchangeable(this.id));
    exchangeable(this.id);
});
id9.addEventListener('click', evAdd);// comment me back

id8.addEventListener('click', function () {
    let oldpic = this.innerHTML;
    // console.log(oldpic);
    this.innerHTML = id9.innerHTML;
    id9.innerHTML = oldpic;
    // console.log(id9);
    textTurn.innerHTML = 'TURN: 1';
    // console an Array
    console.log(exchangeable(this.id));
    return exchangeable(this.id);
});
