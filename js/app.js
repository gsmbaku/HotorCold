
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
	var number = Math.floor(Math.random() * 100);
  	var newGame = function(){
  		number = Math.floor(Math.random() * 100);
  	};
  	
  
  	$(".new").on('click', function(event) {
  		event.preventDefault();
  		newGame();
  		$("#feedback").html('Make Your Guess!');
  	});

  	$(".button").on('click', function(event) {
  		event.preventDefault();

  		guess();
  	});
  	var guess = function(){
  		var userInput = $("#userGuess").val();

  	
  		if(userInput == number){
			$("#feedback").html('Correct!');
		}
		else if(Math.abs(userInput - number) > 30){
			$("#feedback").html('Ice Cold');

		}
		else if(Math.abs(userInput - number) > 20){
			$("#feedback").html("Cold");
		}
		else if(Math.abs(userInput - number) > 10){
			$("#feedback").html("Warm");
		}
		else if(Math.abs(userInput - number) > 0){
			$("#feedback").html("Hot");
		}
  	
  	}


});


