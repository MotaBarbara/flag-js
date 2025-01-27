const form = document.querySelector('form');
let gameArea = document.querySelector('#gameArea');
let attemptsLeft = document.querySelector('#attemptsLeft');
let reload = document.getElementById('game-won');
const words = [
	'Amigo',
	'Presente',
	'Portugal',
	'Algarve',
	'Portalegre',
	'Chinchila',
	'Australopiteco',
	'Espirituosocaturiscadamente',
	'Efectivamente',
	'Otorrinolaringologista',
	'Pneumoultramicroscopicossilicovulcanoconiose',
];
let choosenWord;

function generateRandomNumber() {
	let randomNumber = Math.floor(Math.random() * words.length);
	choosenWord = words[randomNumber];
	choosenWord = choosenWord.toUpperCase();
	console.log(choosenWord);
	console.log(choosenWord.length);
	for (let i = 0; i < choosenWord.length; i++) {
		gameArea.appendChild(document.createElement('span')).textContent = '_';
	}
}
generateRandomNumber();
let choosenLetter;
form.addEventListener('submit', function (event) {
	event.preventDefault();
	choosenLetter = form.letter.value;
	choosenLetter = choosenLetter.toUpperCase();
	let isCorrect = false;
	let gameWon = false;

	for (let i = 0; i < choosenWord.length; i++) {
		if (choosenLetter === choosenWord[i]) {
			gameArea.children[i].textContent = choosenLetter;
			isCorrect = true;
		}
	}
	if (isCorrect === false) {
		attemptsLeft.textContent = attemptsLeft.textContent - 1;
	}

	if (isCorrect === false && attemptsLeft.textContent > 0) {
		attemptsLeft.textContent = attemptsLeft.textContent - 1;
	}

	if (isCorrect === false && attemptsLeft.textContent == 0) {
		attemptsLeft.textContent = 'GAME OVER';
	}
	form.letter.value = '';
	for (let i = 0; i < choosenWord.length; i++) {
		if (gameArea.children[i].textContent === '_') {
			gameWon = false;
			return;
		} else {
			gameWon = true;
		}
	}
	console.log(gameWon);

	if (gameWon === true) {
		reload.appendChild(document.createElement('button')).textContent = 'Won, go again';
	}
});
reload.addEventListener('click', function () {
    reload.textContent = '';
    gameArea.children 
	generateRandomNumber();
	for (let i = 0; i < choosenWord.length; i++) {
		if (choosenLetter === choosenWord[i]) {
			gameArea.children[i].textContent === '_';
		}
	}
	isCorrect = false;
	gameWon = false;
});
