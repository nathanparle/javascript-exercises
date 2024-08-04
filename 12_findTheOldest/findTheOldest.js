
const getAge = function (death, birth){
    if(!death){
        death = 2024;}
    return death - birth;
    };


      const findTheOldest = function(person){
        const oldest = person.sort(function(a, b) {
        const firstPerson = getAge(a.yearOfDeath, a.yearOfBirth) ;
        const secodnPerson = getAge(b.yearOfDeath,b.yearOfBirth) ;
        return firstPerson > secodnPerson ? -1 : 1; 
     
});
return oldest[0];}


// Do not edit below this line
module.exports = findTheOldest;
