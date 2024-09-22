// We are practicing to read Sync Java.

let ob = require("fs");
const contents = ob.readFileSync("d.txt","utf-8");
console.log(contents);

console.log("Why");
//This is example of Synchoronus Js