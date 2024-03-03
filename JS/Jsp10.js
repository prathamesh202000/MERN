let form=document.querySelector("form");
let body=document.querySelector("body");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
});

let btn=document.querySelector("button");
btn.addEventListener("mouseout",()=>{
    console.log("mouseout event");
});

btn.addEventListener("click",()=>{
    btn.style.backgroundColor="green";
});

let inp=document.querySelector("input");
inp.addEventListener("keypress",()=>{
    console.log("keypress event");
});

body.addEventListener("scroll",()=>{
    console.log("scroll event");
});

window.addEventListener("load",()=>{
    console.log("Page loaded");
});

let username=document.createElement("input");
username.setAttribute("placeholder","enter your name");
body.append(username);
let head=document.createElement("h2");
body.append(head);

username.addEventListener("input",()=>{
    head.innerText=username.value;
});