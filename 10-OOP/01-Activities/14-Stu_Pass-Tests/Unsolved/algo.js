function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  const splitString = str.split("");
  const reverseArray = splitString.reverse();

  const joinArray = reverseArray.join("");

  return joinArray;
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
  const givenString = str.split("");
  const reverseString = givenString.reverse();
  const joinArray = reverseString.join("");

  if (str === joinArray){
    return true;
  } else {
    return false;
  }

};

Algo.prototype.capitalize = function(str) {

  const capitalize = str.toUpperCase;

  return capitalize;


};

module.exports = Algo;
