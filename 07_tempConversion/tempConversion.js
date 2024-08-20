const convertToCelsius = function(f) {
  const celsius = (f - 32) / 1.8;
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(c) {
  const fahrenheit = (c * 1.8) + 32;
  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
