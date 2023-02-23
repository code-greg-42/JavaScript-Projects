// variable for whose turn it is
let activePlayer = 'X';
// array of moves for win conditions
let selectedSquares = [];

// function for placing x and o
const placeXOrO = squareNumber => {
    // make sure no square already selected
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        // who's turn?
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("./media/green-x.png")';
        } else {
            select.style.backgroundImage = 'url("./media/green-o.png")';
        }
        // squarenumber and activeplayer concatenated and added
        selectedSquares.push(squareNumber + activePlayer);
        // call func to check for win
        checkWinConditions();
        // check active player
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        // plays placement sound
        audio('./media/zapsplat_thud.mp3');
        if (activePlayer === 'O') {
            // function for disabling click
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        }
        return true;
    }
    //const computersTurn = () => {
    //    let success = false;
    //    let pickASquare;
        // while loop until it picks a square
    //    while (!success) {
            // rand number between 0 and 8
    //        pickASquare = String(Math.floor(Math.random() * 9));
    //        if (placeXOrO(pickASquare)) {
    //            placeXOrO(pickASquare);
    //            // ends loop
    //            success = true;
    //        }
      //  }
    //}
}

const computersTurn = () => {
    let success = false;
    let pickASquare;
    // while loop until it picks a square
    while (!success) {
        // rand number between 0 and 8
        pickASquare = String(Math.floor(Math.random() * 9));
        if (placeXOrO(pickASquare)) {
            placeXOrO(pickASquare);
            // ends loop
            success = true;
        }
    }
}

// parses selectedSquares array for win conditions
// draws line if condition met
const checkWinConditions = () => {
    if (arrayIncludes('0X', '1X', '2X')) {
        drawWinLine(50, 100, 558, 100);
    }
    else if (arrayIncludes('3X', '4X', '5X')) {
        drawWinLine(50, 304, 558, 304);
    }
    else if (arrayIncludes('6X', '7X', '8X')) {
        drawWinLine(50, 508, 558, 508);
    }
    else if (arrayIncludes('0X', '3X', '6X')) {
        drawWinLine(100, 50, 100, 558);
    }
    else if (arrayIncludes('1X', '4X', '7X')) {
        drawWinLine(304, 50, 304, 558);
    }
    else if (arrayIncludes('2X', '5X', '8X')) {
        drawWinLine(508, 50, 508, 558);
    }
    else if (arrayIncludes('6X', '4X', '2X')) {
        drawWinLine(100, 508, 510, 90);
    }
    else if (arrayIncludes('0X', '4X', '8X')) {
        drawWinLine(100, 100, 520, 520);
    }
    else if (arrayIncludes('0O', '1O', '2O')) {
        drawWinLine(50, 100, 558, 100);
    }
    else if (arrayIncludes('3O', '4O', '5O')) {
        drawWinLine(50, 304, 558, 304);
    }
    else if (arrayIncludes('6O', '7O', '8O')) {
        drawWinLine(50, 508, 558, 508);
    }
    else if (arrayIncludes('0O', '3O', '6O')) {
        drawWinLine(100, 50, 100, 558);
    }
    else if (arrayIncludes('1O', '4O', '7O')) {
        drawWinLine(304, 50, 304, 558);
    }
    else if (arrayIncludes('2O', '5O', '8O')) {
        drawWinLine(508, 50, 508, 558);
    }
    else if (arrayIncludes('6O', '4O', '2O')) {
        drawWinLine(100, 508, 510, 90);
    }
    else if (arrayIncludes('0O', '4O', '8O')) {
        drawWinLine(100, 100, 520, 520);
    }
    // condition for a tie
    else if (selectedSquares.length >= 9) {
        audio('./media/zapsplat_car_screech.mp3');
        // timer before reset
        setTimeout(function () { resetGame(); }, 500);
    }
}
    // check if array includes 3 strings
    //const arrayIncludes = (squareA, squareB, squareC) => {
      //  const a = selectedSquares.includes(squareA);
      //  const b = selectedSquares.includes(squareB);
      //  const c = selectedSquares.includes(squareC);
        // return true if all 3 found
        //if (a === true && b === true && c === true) {
        //    return true;
        //}
    //}

// check if array includes 3 strings
const arrayIncludes = (squareA, squareB, squareC) => {
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    // return true if all 3 found
    if (a === true && b === true && c === true) {
        return true;
    }
}

const disableClick = () => {
    // makes body unclickable
    body.style.pointerEvents = 'none';
    // pause for 1 sec then return functionality
    setTimeout(() => {
        body.style.pointerEvents = 'auto';
    }, 1000)
}

const audio = audioURL => {
    let audio = new Audio(audioURL);
    // play method plays audio sound
    audio.play();
}

const drawWinLine = (coordX1, coordY1, coordX2, coordY2) => {
    const canvas = document.querySelector('#win-lines');
    const c = canvas.getContext('2d');
    // variable declarations (name changes mostly)
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1

    // interact with canvas
    function animateLineDrawing() {
        // loop creation
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0,0,608,608);
        // new path
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70,255,33,.8)';
        // draws the above
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) {
                x += 10;
            }
            if (y < y2) {
                y += 10;
            }
            if (x >= x2 && y >= y2) {
                cancelAnimationFrame(animationLoop);
            }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {
                x += 10;
            }
            if (y > y2) {
                y -= 10;
            }
            if (x >= x2 && y <= y2) {
                cancelAnimationFrame(animationLoop);
            }
        }
    }

    function clear() {
        // starts loop
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0,0,608,608);
        // stop loop
        cancelAnimationFrame(animationLoop);
    }
    // disallows clicking during win sound
    disableClick();
    // plays win sound
    audio('./media/zapsplat_positive.mp3');
    // call main loop
    animateLineDrawing();
    // waits 1 sec then clears and resets
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

function resetGame() {
    // iterates html elements
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        // remove background image
        square.style.backgroundImage = '';
    }
    // resets array
    selectedSquares = [];
}