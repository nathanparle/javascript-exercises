
    
    
    const palindromes = function (input) {
    let string = "";
    let reversed = "";
    string = input.toUpperCase();
    for ( let i = input.length-1; i>=0; i--){
        if ((string[i] >= '0' && string[i] <= '9') || (string[i] >= 'a' && string[i] <= 'z') || (string[i] >= 'A' && string[i] <= 'Z')){
            reversed += string[i];
           }
           else { string = string.substring(0, i) + string.substring(i+1);
                }
           
    } 
    if (string === reversed){console.log(string, reversed);
    return true;}
        
    else {  console.log(string, reversed); return false; } 

};


// Do not edit below this line
 //module.exports = palindromes;
