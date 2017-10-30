// Variables

var wins;
var losses;
var crystalSum;

var crystalRandom = function(min, max) {
  min = Math.ceil(1);
  max = Math.floor(12);
  return Math.floor(Math.random() * (120 - 19)) + 19; 
}

var crystalOne = function(min, max) {
  min = Math.ceil(1);
  max = Math.floor(4);
  return Math.floor(Math.random() * (4 - 1)) + 1; 
}

var crystalTwo = function(min, max) {
	crystalTwo != crystalOne;
  min = Math.ceil(4);
  max = Math.floor(7);
  return Math.floor(Math.random() * (7 - 4)) + 4;  
}

var crystalThree = function(min, max) {
  min = Math.ceil(7);
  max = Math.floor(10);
  return Math.floor(Math.random() * (10 - 7)) + 7;  
}

var crystalFour = function(min, max) {
  min = Math.ceil(10);
  max = Math.floor(13);
  return Math.floor(Math.random() * (13 - 10)) + 10;  
}

console.log(crystalRandom());
console.log(crystalOne());
console.log(crystalTwo());
console.log(crystalThree());
console.log(crystalFour());