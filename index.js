// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name){
    return array.filter((match) =>
     match.toLowerCase()=== name.toLowerCase())


 }
 let fuzzyMatch=(array,names)=>{
    let fuzzy =[];
    for(const name of array ){
        if (name.slice(0,1)===names.slice(0,1)){
            fuzzy.push(name)
        }
    }
    return fuzzy
 }
 const matchName = (array, str) => {
    const matchl = [];
    for(const user of array){
        if(user.name.toLowerCase() === str.toLowerCase() || user.hometown.toLowerCase() === str.toLowerCase()){
            matchl.push(user)
        }
    }
    return matchl;
} 