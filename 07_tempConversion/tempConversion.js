const ftoc = function(temp) {
  const celcius = (temp - 32) * 5 / 9
  return Math.round(celcius * 10) / 10
};

const ctof = function(temp) {
  const fahrenheit = temp * 9 / 5 + 32
  return Math.round(fahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
