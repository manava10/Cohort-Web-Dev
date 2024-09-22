
function random(resolve){
    setTimeout(resolve,3000);

}
let p = new Promise(random);

function callback(){
    console.log("Promise succeed");
}
p.then(callback);
