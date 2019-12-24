/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, gamePlaying;

init();

function init() {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	document.querySelector('.dice').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');	

	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	// document.querySelector('.player-0-panel').classList.remove('active');
	// document.querySelector('.player-1-panel').classList.add('active');

	document.querySelector('.dice').style.display = 'none';
};

document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gamePlaying) {
		// Random number
		var dice = Math.floor(Math.random() * 6) + 1;
		// Display the resunl
		var diceDOM = document.querySelector('.dice');
		document.querySelector('#current-' + activePlayer).textContent;
		diceDOM.style.display = 'block';
		diceDOM.src = 'img/dice-' + dice + '.png';

		if (dice !== 1) {
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			nextPlayer();
		}	
	}

});

document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {
		scores[activePlayer] += roundScore;
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		if (scores[activePlayer] >= 100) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			nextPlayer();
		}
	}

});

document.querySelector('.btn-ruls').addEventListener('click', function() {
	alert(`
ПРАВИЛА ИГРЫ:
- В игре 2 игрока, играющих в раундах
- В каждом ходу игрок бросает кости столько раз, сколько он желает. Каждый результат добавляется к его раунду
- НО, если игрок бросает 1, все его результаты раунда теряются. После этого очередь следующего игрока
- Игрок может выбрать «Удерживать», что означает, что его счет КРУГЛЫХ будет добавлен к его счету ГЛБАЛ. После этого очередь следующего игрока
- Первый игрок, набравший 100 очков по ГЛОБАЛЬНОМУ счету, выигрывает игру`)
})


document.querySelector('.btn-new').addEventListener('click', init);
