// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

 function findMatching(arr, string1){
    return arr.filter(string2 => string1.toUpperCase() === string2.toUpperCase())
    };

function fuzzyMatch(arr, string1){
   return arr.filter(string2 => string1 === string2 || string1[0] === string2[0])
    
}
 function matchName(drivers, query){
   return drivers.filter(driver => driver.name === query)
    
};
