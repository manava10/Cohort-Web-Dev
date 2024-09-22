// let fs = require("fs");
// const a = fs.readFileSync("a.txt","utf-8");
// const b = fs.readFileSync("b.txt","utf-8");
// //We are doing it Synchronously.
// console.log(a);
// console.log(b);
let fs = require("fs");
function read(err,data){
    if(err){
        console.log("File not Found");
    }else{
        console.log(data);
    }
}

const a = fs.readFile("a.txt","utf-8",read);
const b = fs.readFile("b.txt","utf-8",read);
const c = fs.readFile("c.txt","utf-8",read);

setTimeout(2000,read);



