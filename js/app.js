
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var newGame = function(){
  		var number = function(){
  		Math.floor(Math.random() * 10);
  		};
  	var guess = function(){
  		$(":input") //How do i select and store the input? 

  		//is this the correct way to check the hot/cold
  		if(guess == number){
		$(".feedback").(""); //do I change the feedback give by appending?
		}
		else if(guess > number += 30){
			$(".feedback").("");
		}
		else if(guess > number += 20){
			$(".feedback").("");
		}
		else if(guess > number += 10){
			$(".feedback").("");
		}
		else if(guess < number -= 30){
			$(".feedback").("");
		}
		else if(guess < number -= 20){
			$(".feedback").("");
		}
		else if(guess < number -= 10){
			$(".feedback").("");
		}
  	}


  	};
});


