function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

const diceContainer = document.getElementById('dice');
const diceImage = diceContainer.querySelector('img');

diceContainer.addEventListener('click', function () {
    const diceRoll = rollDice();
    diceImage.src = `./img/inverted-dice-${diceRoll}.svg`
});

