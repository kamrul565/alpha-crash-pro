

document.addEventListener('keyup', function (event) {
    const expected = document.getElementById('char-show');

    if (event.key === 'Escape') gameOver();

    const ch = expected.innerText.toLowerCase();
    if (event.key === ch) {

        const currScore = getValueById('curr-score');
        const newScore = currScore + 1;
        setValueById('curr-score', newScore);


        removeBg(ch);
        continuePlay();
    }
    else {

        const currLife = getValueById('curr-life');
        const newLife = currLife - 1;

        setValueById('curr-life', newLife);
        if (newLife === 0) {
            gameOver();
            // let ch = document.getElementById('char-show');
            // ch = ch.innerText.toLowerCase();
            // removeBg(ch);
        }

    }
})

function getValueById(id) {
    const x = document.getElementById(id);
    const y = parseInt(x.innerText);
    return y;
}

function setValueById(id, val) {
    const x = document.getElementById(id);
    x.innerText = val;
}


function continuePlay() {

    const ch = getChar();
    const charShow = document.getElementById('char-show');
    charShow.innerText = ch.toUpperCase();
    chaBg(ch);
}

function play() {

    restart();
    const x = document.getElementById('final-score');
    if (!x.classList.contains('hidden')) hide('final-score');
    hide('home');
    show('play');
    continuePlay();
}


function getChar() {
    const str = "abcdefghijklmnopqrstuvwxyz";
    let randomNumber = parseInt(Math.random() * 100) % 26;
    return str[randomNumber];
}

function gameOver() {
    hide('play');
    const finalScore = getValueById('curr-score');
    setValueById('your-final-score', finalScore);
    show('final-score');
    let ch = document.getElementById('char-show');
    ch = ch.innerText.toLowerCase();
    removeBg(ch);
}


function restart() {
    setValueById('curr-life', 2);
    setValueById('curr-score', 0);
}