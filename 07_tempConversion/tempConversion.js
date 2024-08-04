const convertToCelsius = function(num) {
let result ;
result = (num-32) /1.8;
result = Math.round(result * 10) / 10;
return result;

};

const convertToFahrenheit = function(num) {
  let result ;
  result = (num*1.8)+32;
  result = Math.round(result * 10) / 10;
  return result; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
