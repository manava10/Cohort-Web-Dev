//Example of asynchronus CODE
let fsa = require("fs");

function print(err, data){
    if(err){
        console.log("File not found");
    }else{
        console.log(data);
    }
}

const contents = fsa.readFile("a.txt","utf-8",print);

const contents2 = fsa.readFile("b.txt","utf-8",print);

const contents3 = fsa.readFileSync("c.txt","utf-8");
console.log(contents3);

console.log("!Done");
console.log("Sab ulta pulta ho gaya Malik")
