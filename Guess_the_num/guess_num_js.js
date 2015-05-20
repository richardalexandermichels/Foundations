var ans = Math.floor(100 * Math.random() + 1);
var lives = 5;
var guesses = [];
var l=0;
$(document).ready(function(){
	function process_temp(g){
		var diff = Math.abs(ans - g);
		if(!isNaN(g) && g){
				return (diff == 0) ? "CORRECT": (diff <= 5) ? "HOT" : (diff <= 10) ? "warm":
				(diff <= 15) ? "cool" : "COLD"
		}else{
			return "not a number";
		}	
	};
	function process_direction(g){
		if(!isNaN(g) && g !=ans){
			lives--;
			$(".lives-left").html(lives);
			return (g > ans) ? " is Too high" : " is Too low";
		}
		else{
			return " is correct!"
		}
	}
	$('.guess').on('click', function(event){
		event.preventDefault();
		var guess = $('input').val();
		//alert("Is " + $('input').val()+" equal to "+ ans +"?");
		$('.temp').html(process_temp(guess));
		if(process_temp(guess)==="CORRECT"){
			$('.jumbotron').css("background-", "url('https://www.evl.uic.edu/aej/526/pics/htwww4.jpg')");
			$('.temp').css("background-color","white");
		}
		if(lives<=0){
			$('.temp').html("Out of Lives");
			lives = 1;
		}
		if(!isNaN(guess) && guess){
			$( ".guess-list li:nth-child("+(6-lives)+")" ).html(guess + process_direction(guess));
			}
	});
	$('input').on('click', function(){
		$(this).select();
	});
	$('.new-num').on('click', function(event){
		event.preventDefault();
		ans = Math.floor(100 * Math.random() + 1);
		//alert(ans + " from new num")
		lives=5;
		$(".lives-left").html(lives);
		$(".hint").html("HINT");
		$(".temp").html("Enter a guess and see how close you get!")
		$(".guess-list").children().html("");
		$('input').val('');
		$('.jumbotron').css("background-image", "");;
		$('.temp').css("background-color","");
		return $('.result').html("<p></p>");		
	});	
	$(".hint").on('click', function(){
		$(this).html(ans);
	});
});








