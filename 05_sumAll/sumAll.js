
    
    const sumAll = function(first,second) {
    let i = 0;
    let j = 0;
    let total = 0;
    
    if  (Number.isInteger(first) && Number.isInteger(second)){
       if (first<second&&first>0){
        
        i=first;
        j=second;
        total=i;}
        else if(second<first&&second>>0){ 
            i = second; 
            j = first;
            total = i;
        } else {return ("ERROR");}
    
    while ( i < j ){
        total += i+1;
        i++;
    }
    
        
return total;

}else {return ("ERROR");}}

// Do not edit below this line
module.exports = sumAll;
