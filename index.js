
let bigNumber = document.getElementById("bigNumber");

let subtractBtn = document.getElementById("subtractBtn");
let reset = document.getElementById("resetBtn");
let add = document.getElementById("addBtn");

let count = 0;


subtractBtn.onclick = function(){
    count-- ; 
    console.log(count)
    bigNumber.innerHTML = count;
}


resetBtn.onclick = function(){
}

addBtn.onclick = function(){
}