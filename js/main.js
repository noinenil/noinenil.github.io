
/*follow the click
*******************

$('html').click(function(event) {
	$('#headiText').offset({
		left: event.pageX,
		top: event.pageY
	});
});
*******************/

/*own star animation
*********************

var flagLeft = false;
var flagUp = false;
var flagRight = false;
var flagDown = false;
var leftOffset = 0;
var topOffset = 0;
var squareWay = function() {
	$('#headiText').offset({
		left:leftOffset,
		top:topOffset,
	});
	if (flagRight && leftOffset >= 0) {
		leftOffset++
	}
	if (flagLeft && leftOffset <= 400) {
		leftOffset--;
	}
	if (flagDown && topOffset <= 400) {
		topOffset++;
	}
	if (flagUp && topOffset >= 0) {
		topOffset--;
	}
	if (leftOffset == 0 && topOffset == 0) {
		flagRight = true
		flagUp = false
	}
	if (leftOffset == 400 && topOffset == 0) {
		flagDown = true
		flagRight = false
	}
	if (topOffset == 400 && leftOffset == 400) {
		flagLeft = true
		flagDown = false
	}
	if (leftOffset == 0 && topOffset == 400) {
		flagUp = true
		flagLeft = false
	}
}

setInterval(squareWay, 1)
*********************/

/* stop animation with click
*****************************

var flagLeft = false;
var flagUp = false;
var flagRight = false;
var flagDown = false;
var leftOffset = 0;
var topOffset = 0;
var squareWay = function(event) {
	$('#headiText').offset({
		left:leftOffset,
		top:topOffset,
	});
	if (flagRight && leftOffset >= 0) {
		leftOffset+=5;
	}
	if (flagLeft && leftOffset <= 400) {
		leftOffset-=5;
	}
	if (flagDown && topOffset <= 400) {
		topOffset+=5;
	}
	if (flagUp && topOffset >= 0) {
		topOffset-=5;
	}
	if (leftOffset == 0 && topOffset == 0) {
		flagRight = true;
		flagUp = false;
	}
	if (leftOffset == 400 && topOffset == 0) {
		flagDown = true;
		flagRight = false;
	}
	if (topOffset == 400 && leftOffset == 400) {
		flagLeft = true;
		flagDown = false;
	}
	if (leftOffset == 0 && topOffset == 400) {
		flagUp = true;
		flagLeft = false;
	}
}

var stopClick = function(event) {
	clearInterval(squareID);
}
var squareID = setInterval(squareWay, 10);
$('*').click(stopClick);
****************************/

/*click on the title
*********************/

var flagLeft = false;
var flagUp = false;
var flagRight = false;
var flagDown = false;
var leftOffset = 200;
var topOffset = 200;
var score = 1;
var squareWay = function(event) {
	$('#headiText').offset({
		left:leftOffset,
		top:topOffset,
	});
	if (flagRight && leftOffset <= 400) {
		leftOffset+= score;
	}
	if (flagLeft && leftOffset >= 200) {
		leftOffset-= score;
	}
	if (flagDown && topOffset <= 400) {
		topOffset+= score;
	}
	if (flagUp && topOffset >= 200) {
		topOffset-= score;
	}
	if (leftOffset <= 200 && topOffset <= 200) {
		flagRight = true;
		flagUp = false;
	}
	if (leftOffset >= 400 && topOffset <= 200) {
		flagDown = true;
		flagRight = false;
	}
	if (topOffset >= 400 && leftOffset >= 400) {
		flagLeft = true;
		flagDown = false;
	}
	if (leftOffset <= 200 && topOffset >= 400) {
		flagUp = true;
		flagLeft = false;
	}
}

var stopClick = function(event) {
	if (score < 10) {
		score++;
		textScore.text('Score is: ' + score);
	}	
	if (score == 10) {
		clearInterval(squareID);
		textToWinner = alert('You are winner!');
		$('body').append('<a href="carsRideHTML/index.html">Play in @CarsRace</a>');
		clearInterval(squareID);
	}
}
var squareID = setInterval(squareWay, 10);
textScore = $('p')
$('h1').click(stopClick);
