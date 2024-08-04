const reverseString = function(input) {
    let string = input;
    let reversed = '';
    for ( let i = string.length; i >= 0; i-- ){
        reversed += string.charAt(i);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
