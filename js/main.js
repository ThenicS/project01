// get id form html
const id1 = document.getElementById('1');
const id2 = document.getElementById('2');
const id3 = document.getElementById('3');
const id4 = document.getElementById('4');
const id5 = document.getElementById('5');
const id6 = document.getElementById('6');
const id7 = document.getElementById('7');
const id8 = document.getElementById('8');
const id9 = document.getElementById('9');
// get document
let setter = document.querySelector('.setterTile');
const board = document.querySelector('.puzzleBoard');
let setterTile = document.querySelector('.setterTile');
// let setterTileIndex = setterTile.parentElement.id;
let textTurn = document.querySelector('.showTurn');
let winningCondition = [1, 2, 3, 4, 5, 6, 7, 8, 9];
initialise();

console.log(id1.firstChild.className);
console.log(board.hasChildNodes);
// console.log(setter);
// console.log(textTurn);
// console.log(setterTile.parentElement);
// ############# shuffle tile ##################
function shuffle() {}
// initialise game function
function initialise() {
    // If setterTile index position get the array of posible mvoe tile
    // exchangeable();
    checkWin();
}
// ############## Checking win ###############
function checkWin() {
    if (
        id1.firstChild.className === 'tile1' &&
        id2.firstChild.className === 'tile2' &&
        id3.firstChild.className === 'tile3' &&
        id4.firstChild.className === 'tile4' &&
        id5.firstChild.className === 'tile5' &&
        id6.firstChild.className === 'tile6' &&
        id7.firstChild.className === 'tile7' &&
        id8.firstChild.className === 'tile8'
    ) {
        return true;
    }
    return false;
}
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
    return exchangeable(this.id);
});
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
// ****** Add Event *******

// Winning Condition

// Function of orderTile

// test console.log
console.log(exchangeable(9));
