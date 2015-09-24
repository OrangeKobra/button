var Uscore = 0;

var highscore = 10;

var audio = new Audio('button-4.mp3')

var press = function() {
	Uscore++;
	audio.play();
	document.getElementById('score').innerHTML = "Your Score: " + Uscore;
	if (Uscore > highscore) {
		document.getElementById('hiscore').innerHTML = "New Highscore: " + Uscore;
		return;

	}
};