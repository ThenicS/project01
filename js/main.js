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
// get html botton
const dayNight = document.querySelector('.dayNight');
const nightDay = document.querySelector('.nightDay');
const shuffle = document.querySelector('.shuffleButton');
// get document
// let setter = document.querySelector('.setterTile');
const board = document.querySelector('.puzzleBoard');
const restartBtn = document.querySelector('.playButton');
// get show turn message
let textTurn = document.querySelector('.showTurn');
let turn = 0;
console.log(restartBtn);
console.log(textTurn);
// addEventListener button
shuffle.addEventListener('click', shuffleTile);
dayNight.addEventListener('click', function () {
    debugger;
    setTimeout(() => {
        document.body.style.backgroundImage =
            "url('/picture/background/town02.jpg')";
    }, 1000);
    document.body.style.backgroundImage =
        "url('/picture/background/town03.jpg')";
});
nightDay.addEventListener('click', function () {
    setTimeout(() => {
        document.body.style.backgroundImage =
            "url('/picture/background/town01.jpg')";
    }, 1000);
    document.body.style.backgroundImage =
        "url('/picture/background/town03.jpg')";
});
hint.addEventListener('click', showHint);
// INITIALISE
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
}
function turnCount() {
    textTurn.innerHTML = `TURN: ${turn}`;
}
function winnerImage() {
    let img = document.querySelector('#hintImage');
    img.firstElementChild.src = './picture/Eevee3*3/thanks.png';
}

// ############# Shuffle tile ##################
function shuffleTile() {
    let image1 = id1.innerHTML;
    let image2 = id2.innerHTML;
    let image3 = id3.innerHTML;
    let image4 = id4.innerHTML;
    let image5 = id5.innerHTML;
    let image6 = id6.innerHTML;
    let image7 = id7.innerHTML;
    let image8 = id8.innerHTML;
    let imageSetter = id9.innerHTML;
    id1.innerHTML = image6;
    id2.innerHTML = image7;
    id3.innerHTML = image2;
    id4.innerHTML = imageSetter;
    id5.innerHTML = image1;
    id6.innerHTML = image3;
    id7.innerHTML = image5;
    id8.innerHTML = image4;
    id9.innerHTML = image8;
    removeEvent();
    render();
}
// ############# Starter Tile ##################
function playAgain() {
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
    // alert('Game Start!!');
    turn = 0;
    textTurn.innerHTML = `TURN: ${turn}`;
    showHint();
    // add showHint
    hint.addEventListener('click', showHint);
    // Event Shuffle
    shuffle.addEventListener('click', shuffleTile);
    // Remove event Play Again
    restartBtn.removeEventListener('click', initialise);
    // Suffletile
    playAgain();
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
        // alert('You Win!!');
        removeEvent();
        winnerImage();
        restartBtn.addEventListener('click', initialise);
        shuffle.removeEventListener('click', shuffleTile);
        hint.removeEventListener('click', showHint);
    } else {
        removeEvent();
        render();
    }
}
// AddEventlistener function evAdd1 - evAdd9
function evAdd1() {
    let imgTag = this.innerHTML;
    this.innerHTML = id1.innerHTML;
    id1.innerHTML = imgTag;
    turn += 1;
    turnCount();
    checkWin();
}
function evAdd2() {
    let imgTag = this.innerHTML;
    this.innerHTML = id2.innerHTML;
    id2.innerHTML = imgTag;
    turn += 1;
    turnCount();
    checkWin();
}
function evAdd3() {
    let imgTag = this.innerHTML;
    this.innerHTML = id3.innerHTML;
    id3.innerHTML = imgTag;
    turn += 1;
    turnCount();
    checkWin();
}
function evAdd4() {
    let imgTag = this.innerHTML;
    this.innerHTML = id4.innerHTML;
    id4.innerHTML = imgTag;
    turn += 1;
    turnCount();
    checkWin();
}
function evAdd5() {
    let imgTag = this.innerHTML;
    this.innerHTML = id5.innerHTML;
    id5.innerHTML = imgTag;
    turn += 1;
    turnCount();
    checkWin();
}
function evAdd6() {
    let imgTag = this.innerHTML;
    this.innerHTML = id6.innerHTML;
    id6.innerHTML = imgTag;
    turn += 1;
    turnCount();
    checkWin();
}
function evAdd7() {
    let imgTag = this.innerHTML;
    this.innerHTML = id7.innerHTML;
    id7.innerHTML = imgTag;
    turn += 1;
    turnCount();
    checkWin();
}
function evAdd8() {
    let imgTag = this.innerHTML;
    this.innerHTML = id8.innerHTML;
    id8.innerHTML = imgTag;
    turn += 1;
    turnCount();
    checkWin();
}
function evAdd9() {
    let imgTag = this.innerHTML;
    this.innerHTML = id9.innerHTML;
    id9.innerHTML = imgTag;
    turn += 1;
    turnCount();
    checkWin();
}
// Render setterTile position
function render() {
    // let setter1 = document.querySelector('.setterTile');
    let setterTile = document.querySelector('.setterTile');
    let setterIndex = setterTile.parentElement.id;
    console.log(`setterTile in position: ${setterIndex}`);
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
}
// Remove Eventlistener form render
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
