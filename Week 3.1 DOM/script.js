let ctr = 0;
function callback(){
    document.querySelectorAll("h2")[1].innerHTML=ctr;
    ctr = ctr + 1;
}

setInterval(callback,1000);