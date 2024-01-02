let Ibtn = document.getElementById('increment-btn');
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el')


let count = 0;

function Increment(){
count += 1;
countEl.textContent = count;

}

function Save(){
    console.log(count);
    let dash = " - "
    let withDash =  count + dash
    saveEl.textContent += withDash;
    count = 0;
    countEl.textContent = 0;


}

