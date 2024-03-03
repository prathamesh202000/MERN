let form=document.querySelector("form");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
});

let inp=document.querySelector("input");
let p=document.querySelector("p");
inp.addEventListener("input",()=>{
    p.innerText=inp.value;
})