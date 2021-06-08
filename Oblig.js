//model
    var points;
    var pointsPerClick = 1;
    var guessNumber;
    var randomNumber;

//controller
    function doClick() {
        let addPoints;
        if (guessNumber == null || isNaN(guessNumber)) {
            addPoints = points;
        } else {
            points += pointsPerClick;
            updateView();
        }
    }
    startGame();
    function startGame() {
        guessNumber = null;
        randomNumber = Math.ceil(Math.random() * 999);
        points = 0;
        updateView();
    }
//view
    updateView();
    function updateView() {
        const guessText = (guessNumber == null || isNaN(guessNumber)) ? '' : `${guessNumber}.`;
        let theAnswer =
            (guessNumber == null || isNaN(guessNumber)) ? 'Guess a number from 1 to 999':
            guessNumber == randomNumber ? '<b>The number i correct!</b>':
            guessNumber < randomNumber ? '<b>Higher</b>':
            guessNumber > randomNumber ? '<b>Lower</b>':
            '<b>Something is wrong</b>';

        document.getElementById('answer').innerHTML = `
            <div id="answerInfo">Answer: ${theAnswer} </div >
        `;
        document.getElementById('guess').innerHTML = `
            <div id="guessInfo">You guessed the nubber: <b>${guessText}</b></div >
        `;
        document.getElementById('click').innerHTML = `
            <div id="pointsInfo">You have guessed ${points} times.</div >
        `;
    }