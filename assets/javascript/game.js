// Variables

var wins = 0;
var losses = 0;
var sum = 0

var crystalRandom = Math.floor(Math.random() * (120 - 19)) + 19;  
console.log(crystalRandom);

var crystalOne = Math.floor(Math.random() * (4 - 1)) + 1;
console.log(crystalOne); 

var crystalTwo = Math.floor(Math.random() * (7 - 4)) + 4;  
console.log(crystalTwo);

var crystalThree = Math.floor(Math.random() * (10 - 7)) + 7;
console.log(crystalThree);

var crystalFour = Math.floor(Math.random() * (13 - 10)) + 10;
console.log(crystalFour); 

var addToSum = function(x)
	{ sum=x+sum;
		$("#sum").html(sum);
		if (sum===crystalRandom){
			wins++;
			console.log(wins);
			$("#winz").text("Wins: " + wins)
			reset();
			$("#sum").text(sum=0);
		}
		else if (sum>crystalRandom){
			losses++;
			console.log(losses);
			$("#lossez").text("Losses: " + losses)
			reset();
			$("#sum").text(sum=0);
	}
} 

function reset() {
	crystalRandom = Math.floor(Math.random() * (120 - 19)) + 19;  
console.log(crystalRandom);
	$("#main-crystal").html(crystalRandom);
	crystalOne = Math.floor(Math.random() * (4 - 1)) + 1;
console.log(crystalOne);
	crystalTwo = Math.floor(Math.random() * (7 - 4)) + 4;  
console.log(crystalTwo);
	crystalThree = Math.floor(Math.random() * (10 - 7)) + 7;
console.log(crystalThree);
	crystalFour = Math.floor(Math.random() * (13 - 10)) + 10;
console.log(crystalFour);
	
}

$(document).ready(function() {
	$("#main-crystal").html(crystalRandom);

	$("#rockOne").on("click", function(event){
		addToSum(crystalOne);
		console.log(sum);
	 });
	$("#rockTwo").on("click", function(event){
		addToSum(crystalTwo);
		console.log(sum);
	 });
	$("#rockThree").on("click", function(event){
		addToSum(crystalThree);
		console.log(sum);
	 });
	$("#rockFour").on("click", function(event){
		addToSum(crystalFour);
		console.log(sum);
	 });

})