let activePlayer = 'X'; //This variable keeps track of whose turn it is.
let selectedSquares = [];//This array stores an array of moves. We use this to determine win conditions.

function placeXorO(squareNumber) { //This function if for placing x or o in a square
    if (!selectedSquares.some(element => element.includes(squareNumber))) { //This condition ensures a square hasn't been selected already. The.some method is used to check each element of selectedSquare array
        let select = document.getElementById(squareNumber);                 //to see if it contains the square number clicked on. this variable here retrieves the html element id that was clicked
        if (activePlayer === 'X') {                                         //this condition checks whose turn it is
            select.style.backgroundImage = 'url("images/betterX.png")';           //if active player is equal to X the x.png is placed in html
        } else {                                                            //active player may only be X or O so if not X it must be O
            select.style.backgroundImage = 'url("images/betterO.png")';           //if activaplayer is equal to O the o.png is placed in hTML
        }
        selectedSquares.push(squareNumber + activePlayer);                  //squareNUmber and activePlayer are concatenated together and added to the array
        checkWinConditions(); //this calls a funciton to check for any win conditions
        if (activePlayer === 'X') { //This condition if for changing the active player.
            activePlayer = 'O';     //If active player is X then change to O
        } else {                    //If active player is not X then change to X
            activePlayer = 'X';
        }
        audio('./media/whoosh.mp3'); //this function plays a placement sound.
        if (activePlayer === 'O') { //this condition checks to see if it copmuters turn.
            disableClick();         //this function disables clicking for computers turn
            setTimeout(function () { computersTurn(); }, 1000) //this function waits 1 second before computer places image and enables click
        }
        return true; //returning true is needed for our computersTurn() function to work
    }
    function computersTurn() { //this function results in a random square being selected.
        let success = false;   //this boolean is needed for our while loop 
        let pickASquare;       //this variable stores a random number 0-8
        while(!success) {      //this condition allows our while loop to keep trying if a square is selected already
            pickASquare = String(Math.floor(Math.random() * 9));    //a random number between 0 and 8 is selected
            if (placeXorO(pickASquare)) {                           //if the random number evaluated returns true, the square hasnt been selected yet
                placeXorO(pickASquare);                             //this line calls the function.
                success = true;                                     //this changes our boolean nad ends the loop
            };
        }
    }
}

function checkWinConditions() { //This function parses the selectedSquares array to search for win conditions. drawWinLine function is called to draw line if condition is met
    if      (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50,100,558,100) }   //X 0,1,2 condition
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50,304,558,304) }   //X 3,4,5 condition
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50,508,558,508) }   //X 6,7,8 condition
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100,50,100,558) }   //X 0,3,6 condition
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304,50,304,558) }   //X 1,4,7 condition
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508,50,508,558) }   //X 2,5,8 condition
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100,508,510,90) }   //X 6,4,2 condition
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100,100,520,520) }  //X 0,4,8 condition
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50,100,558,100) }   //O 0,1,2 condition
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50,304,558,304) }   //O 3,4,5 condition
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50,508,558,508) }   //O 6,7,8 condition
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100,50,100,558) }   //O 0,3,6 condition
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304,50,304,558) }   //O 1,4,7 condition
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508,50,508,558) }   //O 2,5,8 condition
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100,508,510,90) }   //O 6,4,2 condition
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100,100,520,520) }  //O 0,4,8 condition
    else if (selectedSquares.length >= 9) { //this condition checks for a tie, if none of the above conditions register and 9 squares are selected the code executes
        audio('./media/wahwah.mp3');           //this function plays the tie game sound
        setTimeout(function () { resetGame(); }, 1000); //this function sets a .3 second timer before the resetGame is called
    }
    function arrayIncludes(squareA, squareB, squareC) { //This function checks if an array includes 3 strings. it is used to check for each win condition
        const a = selectedSquares.includes(squareA)     //These 3 variables will be used to check for 3 in a row.
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        if (a === true && b === true && c === true) { return true } //if the 3 variables are all included in our array, true is returned and our else if condition executed the drawWinLine function.
    }
}

function disableClick() {   //this function makes our body element temporarily unclickable
    body.style.pointerEvents = 'none';  //this makes our body unclickable
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);  //this makes our body clickable again after 1 second
}

function audio(audioURL) {  //this function takes a string parameter of the path you set earlier for placement sound ('./media/place.mp3')
    let audio = new Audio(audioURL);    //we create a new audio object and we pass the path as a parameter
    audio.play();                       //play method plays our audio sound
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {  //This function utilizes html canvas to draw win lines
    const canvas = document.getElementById('win-lines')     //this lines accesses our html canvas element
    const c = canvas.getContext('2d');                      //this line gives us access to methods and properties to use on canvas
    let x1 = coordX1,                                       //this line indicates where the start of a lines x axis is 
        y1 = coordY1,                                       //this line indicates where the start of a lines y axis is
        x2 = coordX2,                                       //this line indicates where the end of a lines x axis is
        y2 = coordY2,                                       //this line indicates where the end of a lines y axis is
        x = x1,                                             //this variable stores temporary x axis data we update in out animation loop
        y = y1;                                             //this variable stores temporary y axis data we update in our animation loop
    function animateLineDrawing() {                         //this function interacts with the canvas
        const animationLoop = requestAnimationFrame(animateLineDrawing);    //this variable creates a loop
        c.clearRect(0,0,608,608)                            //this method clears content from last loop iteration
        c.beginPath();                                      //this method starts a new path
        c.moveTo(x1,y1)                                     //this method moves us to a starting point for our line
        c.lineTo(x,y)                                       //this method indicates the end point of our line
        c.lineWidth = 10;                                   //this method sets the width of our line
        c.strokeStyle = 'rgba(70,255,33,.8)';               //this method sets the color of our line
        c.stroke();                                         //this method draws everything we laid out above
        if (x1 <= x2 && y1 <= y2) {                         //this condition checks if we've reached the endpoint
            if (x < x2) { x += 10; }                        //this condition adds 10 to the previous end x point
            if (y < y2) { y += 10; }                        //this condition adds 10 to the previous end y point
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }    //this condition cancels our animation loop if we've reached the end points
        }
        if (x1 <= x2 && y1 >= y2) {                           //this condition is similar to the one above
            if (x < x2) { x += 10; }                        //this is necessary for the 6,4,2 win condition
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    function clear() {  //this function clears our canvas after our win line is drawn
        const animationLoop = requestAnimationFrame(clear); //this line starts our animation loop
        c.clearRect(0,0,608,608)                            //this line clears our canvas
        cancelAnimationFrame(animationLoop);                //this line stops our animation loop
    }
    disableClick();                                         //this line disallows clicking while the win sound is playing
    audio('./media/arcade.mp3');                           //this line plays the win sounds
    animateLineDrawing();                                   //this line calls our main animation loop
    setTimeout(function () { clear(); resetGame(); }, 1000);//this line waits 1 second, clears canvas, resets game, and allows clicking again
}

function resetGame() {      //this function resets the game in the event of a tie or a win
    for (let i = 0; i < 9; i++) {   //this for loop iterates through each html square element
        let square = document.getElementById(String(i)) //this variable gets the html element of i
        square.style.backgroundImage = ''               //this removes our elements backgroundImage
    }
    selectedSquares = [];   //this resets our array so it is empty and we can start over
}