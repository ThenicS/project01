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
let hint = document.querySelector('.hintBoard');
// get document
// let setter = document.querySelector('.setterTile');
const board = document.querySelector('.puzzleBoard');
const restartBtn = document.querySelector('.playButton');
// let setterTile = document.querySelector('.setterTile');
// let setterTileIndex = setterTile.parentElement.id;
let textTurn = document.querySelector('.showTurn');
console.log(restartBtn);
restartBtn.addEventListener('click', initialise); // เดี้ยวกลับมาแก้ใหม่
hint.addEventListener('click', showHint);
initialise();

console.log(id1.firstChild.className);
console.log(board.hasChildNodes);
console.log(hint);

function showHint() {
    let img = document.querySelector('#hintImage');
    img.firstElementChild.src = './picture/Eevee3*3/solution.jpg';
    setTimeout(() => {
        img.firstElementChild.src = './picture/Eevee3*3/hint.png';
    }, 500);

    // console.log(this.firstElementChild);
    // console.log(img.firstElementChild.src);
}
// console.log(setter.parentElement.id);
// console.log(setter);
// console.log(textTurn);
// console.log(setterTile.parentElement);
// ############# shuffle tile ##################
function shuffle() {
    let image1 = id1.innerHTML;
    let image2 = id2.innerHTML;
    let image3 = id3.innerHTML;
    let image4 = id4.innerHTML;
    let image5 = id5.innerHTML;
    let image6 = id6.innerHTML;
    let image7 = id7.innerHTML;
    let image8 = id8.innerHTML;
    let imageSetter = id9.innerHTML;
    id1.innerHTML = imageSetter;
    id2.innerHTML = image8;
    id3.innerHTML = image7;
    id4.innerHTML = image6;
    id5.innerHTML = image5;
    id6.innerHTML = image4;
    id7.innerHTML = image3;
    id8.innerHTML = image2;
    id9.innerHTML = image1;
}
// initialise game function
function initialise() {
    alert('Game Start!!');
    shuffle();
    // Suffletile
    // If setterTile index position get the array of posible mvoe tile
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
        id8.firstChild.className === 'tile8' &&
        id9.firstChild.className === 'setterTile'
    ) {
        alert('You Win!!');
        removeEvent();
        return true;
    } else {
        removeEvent();
        render();
    }
}

function indexPosition(setterTile) {
    let index = setterTile.parentElement.id;
    console.log(index);
    return index;
}
// function removeEvt(element) {
//     element.removeEventListener('click');
// }
// test eventListener
// id9.addEventListener('click', function () {
//     let oldpic = this.innerHTML;
//     // console.log(oldpic);
//     this.innerHTML = id6.innerHTML;
//     id6.innerHTML = oldpic;
//     // console.log(id6);
//     textTurn.innerHTML = 'TURN: 1';
//     return this.id;
// });
// id6.addEventListener('click', function () {
//     let oldpic = this.innerHTML;
//     // console.log(oldpic);
//     this.innerHTML = id9.innerHTML;
//     id9.innerHTML = oldpic;
//     // console.log(id9);
//     textTurn.innerHTML = 'TURN: 1';
//     console.log(exchangeable(this.id));
//     exchangeable(this.id);
// });
// id9.addEventListener('click', evAdd);// comment me back

// id8.addEventListener('click', function () {
//     let oldpic = this.innerHTML;
//     // console.log(oldpic);
//     this.innerHTML = id9.innerHTML;
//     id9.innerHTML = oldpic;
//     // console.log(id9);
//     textTurn.innerHTML = 'TURN: 1';
//     // console an Array
//     console.log(exchangeable(this.id));
//     return exchangeable(this.id);
// });
function evAdd1() {
    let imgTag = this.innerHTML;
    this.innerHTML = id1.innerHTML;
    id1.innerHTML = imgTag;
    // console.log(exchangeable(this.id));
    checkWin();
    console.log(this.id);
}
function evAdd2() {
    let imgTag = this.innerHTML;
    this.innerHTML = id2.innerHTML;
    id2.innerHTML = imgTag;
    // console.log(exchangeable(this.id));
    checkWin();
    console.log(this.id);
}
function evAdd3() {
    let imgTag = this.innerHTML;
    this.innerHTML = id3.innerHTML;
    id3.innerHTML = imgTag;
    // console.log(exchangeable(this.id));
    checkWin();
    console.log(this.id);
}
function evAdd4() {
    let imgTag = this.innerHTML;
    this.innerHTML = id4.innerHTML;
    id4.innerHTML = imgTag;
    // console.log(exchangeable(this.id));
    checkWin();
    console.log(this.id);
}
function evAdd5() {
    let imgTag = this.innerHTML;
    this.innerHTML = id5.innerHTML;
    id5.innerHTML = imgTag;
    // console.log(exchangeable(this.id));
    checkWin();
    console.log(this.id);
}
function evAdd6() {
    let imgTag = this.innerHTML;
    this.innerHTML = id6.innerHTML;
    id6.innerHTML = imgTag;
    // console.log(exchangeable(this.id));
    checkWin();
    console.log(this.id);
}
function evAdd7() {
    let imgTag = this.innerHTML;
    this.innerHTML = id7.innerHTML;
    id7.innerHTML = imgTag;
    // console.log(exchangeable(this.id));
    checkWin();
    console.log(this.id);
}
function evAdd8() {
    let imgTag = this.innerHTML;
    this.innerHTML = id8.innerHTML;
    id8.innerHTML = imgTag;
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
function render() {
    // let setter1 = document.querySelector('.setterTile');
    let setterTile = document.querySelector('.setterTile');
    let setterIndex = setterTile.parentElement.id;
    console.log(setterIndex);
    // if setterTile in position 1 => can move tile2, tile4
    if (setterIndex == 1) {
        id2.addEventListener('click', evAdd1);
        id4.addEventListener('click', evAdd1);
        // if setterTile in position 2 => can move tile1, tile3, tile5
    } else if (setterIndex == 2) {
        id1.addEventListener('click', evAdd2);
        id3.addEventListener('click', evAdd2);
        id5.addEventListener('click', evAdd2);
        // if setterTile in position 3 => can move tile2, tile5
    } else if (setterIndex == 3) {
        id2.addEventListener('click', evAdd3);
        id6.addEventListener('click', evAdd3);
        // if setterTile in position 4 => can move tile1, tile5, tile7
    } else if (setterIndex == 4) {
        id1.addEventListener('click', evAdd4);
        id5.addEventListener('click', evAdd4);
        id7.addEventListener('click', evAdd4);
        // if setterTile in position 5 => can move tile2, tile4, tile6, tile8
    } else if (setterIndex == 5) {
        id2.addEventListener('click', evAdd5);
        id4.addEventListener('click', evAdd5);
        id6.addEventListener('click', evAdd5);
        id8.addEventListener('click', evAdd5);
        return;
        // if setterTile in position 6 => can move tile3, tile5, tile9
    } else if (setterIndex == 6) {
        id3.addEventListener('click', evAdd6);
        id5.addEventListener('click', evAdd6);
        id9.addEventListener('click', evAdd6);
        // if setterTile in position 7 => can move tile4, tile8
    } else if (setterIndex == 7) {
        id4.addEventListener('click', evAdd7);
        id8.addEventListener('click', evAdd7);
        // if setterTile in position 8 => can move tile5, tile7, tile9
    } else if (setterIndex == 8) {
        id5.addEventListener('click', evAdd8);
        id7.addEventListener('click', evAdd8);
        id9.addEventListener('click', evAdd8);
        // if setterTile in position 9 => can move tile6, tile8
    } else if (setterIndex == 9) {
        id6.addEventListener('click', evAdd9);
        id8.addEventListener('click', evAdd9);
    }
    // let setterTile2 = document.querySelector('.setterTile');
    // let setterIndex2 = setterTile2.parentElement.id;
    // return console.log(setterIndex2);
}
// 1,2,3,4,5,6,7,8,9
function removeEvent() {
    id2.removeEventListener('click', evAdd1);
    id4.removeEventListener('click', evAdd1);
    id1.removeEventListener('click', evAdd2);
    id3.removeEventListener('click', evAdd2);
    id5.removeEventListener('click', evAdd2);
    id2.removeEventListener('click', evAdd3);
    id6.removeEventListener('click', evAdd3);
    id1.removeEventListener('click', evAdd4);
    id5.removeEventListener('click', evAdd4);
    id7.removeEventListener('click', evAdd4);
    id2.removeEventListener('click', evAdd5);
    id4.removeEventListener('click', evAdd5);
    id6.removeEventListener('click', evAdd5);
    id8.removeEventListener('click', evAdd5);
    id9.removeEventListener('click', evAdd6);
    id5.removeEventListener('click', evAdd6);
    id3.removeEventListener('click', evAdd6);
    id4.removeEventListener('click', evAdd7);
    id8.removeEventListener('click', evAdd7);
    id5.removeEventListener('click', evAdd8);
    id7.removeEventListener('click', evAdd8);
    id9.removeEventListener('click', evAdd8);
    id6.removeEventListener('click', evAdd9);
    id8.removeEventListener('click', evAdd9);
}
