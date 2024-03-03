let btn=document.querySelector("button");
let div=document.querySelector("div");
let h=document.querySelector("h3");

function randomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    return `rgb(${red},${green},${blue})`;
}

btn.addEventListener("click",()=>{
    let color=randomColor();
    h.innerText=color;
    div.style.backgroundColor=color;
});