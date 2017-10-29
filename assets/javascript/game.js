// Variables

var wins;
var losses;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var crystalSum;

var crystalRandom = function(min, max) {
  min = Math.ceil(19);
  max = Math.floor(120);
  return Math.floor(Math.random() * (120 - 19)) + 19; 
}

console.log(crystalRandom());