//Asynchronously Nature of JavaScript

let ob = require("fs");


console.log("Lets Start");




function manav(err,data){
    if(err){
        console.log("The data is not availble or anything")
    }else{
        console.log(data);
    }

}


const a = ob.readFile("d.txt","utf-8", manav);
const b = ob.readFile("a.txt","utf-8", manav);

let sum = 1
for(let i=0; i<1;i++){
    sum = sum +i;
}
console.log(sum);

const c = ob.readFile("a.txt","utf-8", manav);

console.log("We should end this chutiyapa");