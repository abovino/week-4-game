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

});
