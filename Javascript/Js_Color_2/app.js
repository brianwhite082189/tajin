
let R = document.querySelector("#redbtn");

let O = document.querySelector("#orangebtn");

let Y = document.querySelector("#yellowbtn");

let G = document.querySelector("#greenbtn");


let B = document.querySelector("#bluebtn");

let I = document.querySelector("#indigobtn");

let V = document.querySelector("#violetbtn");

let X = document.querySelector("#color");

R.addEventListener('click',function(){
X.style.backgroundColor = 'red';
});

O.addEventListener('click',function(){
X.style.backgroundColor = 'orange';
});

Y.addEventListener('click',function(){
X.style.backgroundColor = 'yellow';
});

G.addEventListener('click',function(){
X.style.backgroundColor = 'green';
});

B.addEventListener('click',function(){
X.style.backgroundColor = 'blue';
});

I.addEventListener('click',function(){
X.style.backgroundColor = 'indigo';
});

V.addEventListener('click',function(){
X.style.backgroundColor = 'violet';
});
