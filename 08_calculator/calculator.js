const add = function(num1, num2) {
return num1 + num2;	
};

const subtract = function(num1, num2) {
return num1- num2;
};

const sum = function(array) {
  let result = 0; 
for (let i = 0; i<array.length; i++){
result +=array[i];
	
}; return result};

const multiply = function(array) {
  let first = array[0]; let second = 0;
  let j = 1;
  let result = 0;
  for (let i = 0; i < 1; i++){ while (j < array.length){   
  result =  first * array[j]; first = result;j++;
  } return result;

};}

const power = function(x, y) {
let result = Math.pow(x,y);
return result;
	
};

const factorial = function(n) {
  let result =1;
  
  for (let i =2; i<=n; i++){
    result *= i;}
   return result;
	
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
