$(document).ready(function() {
	var number;
	var gemNums = [];
	var userGems = 0;
	var wins = 0;
	var losses = 0;

		function reset(){
	number = (Math.floor(Math.random() * (121 - 19)) + 19);
		$('#ranNum').html(number);
			for (i=0; i<4; i++){
				gemNums[i] = (Math.floor(Math.random()*(13-1)) + 1);
			}
		userGems = 0;
		$('#userScore').html(userGems);
}

	reset();

		$("#gem1").click(function() {
	    userGems= userGems+gemNums[0];
	    $('#userScore').html(userGems);
	    scoreBoard(userGems);
		})

		$("#gem2").click(function() {
	    userGems= userGems+gemNums[1];
	    $('#userScore').html(userGems);
	    scoreBoard(userGems);
		})

		$("#gem3").click(function() {
	    userGems= userGems+gemNums[2];
	    $('#userScore').html(userGems);
	    scoreBoard(userGems);
		})

		$("#gem4").click(function() {
	    userGems= userGems+gemNums[3];
	    $('#userScore').html(userGems);
	    scoreBoard(userGems);
	})

	function scoreBoard(x){
		if (x === number) {
			wins++;
			$('#wins').html(wins);
			alert('You Win!');
			reset();
		} else if (x > number) {
			losses++;
			$('#losses').html(losses);
			alert('You Lose!')
			reset();
		}
	}

	});
