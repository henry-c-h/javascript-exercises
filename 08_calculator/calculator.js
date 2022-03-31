const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  // if (arr.length === 0) {
  //   return 0;
  // } else if (arr.length === 1) {
  //   return arr[0];
  // }
  return arr.reduce((a, b) => a + b, 0);
};

const multiply = function(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr.reduce((a, b) => a * b, 1);
};

const power = function(num, exponent) {
  let total = 1;
	for (let i = 0; i < exponent; i++) {
    total *= num;
  }
  return total;
};

const factorial = function(num) {
  let total = 1;
	for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
