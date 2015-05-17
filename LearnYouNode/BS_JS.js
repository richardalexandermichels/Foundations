var ans = Math.floor(100 * Math.random() + 1);
var lives = 5;
var guesses = [];
var l=0;
$(document).ready(function(){
	function process_temp(g){
		var diff = Math.abs(ans - g);
		if(!isNaN(g)){
				return (diff == 0) ? "CORRECT": (diff <= 5) ? " Nope! but you are real HOT!" : (diff <= 10) ? "Nah but you are warming up":
				(diff <= 15) ? "Uh-oh cooling" : "No way, you are dead COLD"
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
			return ""
		}
	}
	$('.guess').on('click', function(event){
		event.preventDefault();
		var guess = $('input').val();
		//alert("Is " + $('input').val()+" equal to "+ ans +"?");
		$('.temp').html(process_temp(guess));
		if(!isNaN(guess)){
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
		return $('.result').html("<p></p>");		
	});	
	$(".hint").on('click', function(){
		$(this).html(ans);
	});
});








