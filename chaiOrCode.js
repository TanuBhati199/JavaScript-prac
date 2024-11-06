const color=function(){const hex='0123456789ABCDEF'
let col='#';
for(let i=0;i<6;i++){
col+=hex[Math.floor(Math.random()*16)];
}
return col;
}
let interval;
const startcolchange=function(){
    if(!interval){
interval=setInterval(changebg,1000);
    }
function changebg(){
document.body.style.backgroundColor=color();
}}
const endsetcolor=function(){
    clearInterval(interval);
    interval=null;
}
document.querySelector('.start').addEventListener('click',startcolchange);
document.querySelector('.end').addEventListener('click',endsetcolor);

