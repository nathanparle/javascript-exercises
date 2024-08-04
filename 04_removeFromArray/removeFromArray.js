const removeFromArray = function(input, arg1, arg2, arg3, arg4) {
    let newArray = [];
    for (let i = 0; i < input.length; i++){
        

        
        if (input[i] !== arg1 && input[i] !== arg2 && input[i] !== arg3 && input[i] !== arg4){
            newArray.push(input[i]);
        }
        
    }return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
