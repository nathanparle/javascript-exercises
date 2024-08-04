const fibonacci = function(input) {
    if (input < 0 ){ return "OOPS";}
    if (input == 1 ){ return 1;}
let num = input *1;
let first = 0;
let second = 1;
let fib = 0;
for ( let i = 1; i < num; i++){
    fib = first + second; 
    first = second;
    second = fib;
}
return fib;
};

// Do not edit below this line
module.exports = fibonacci;
