//q1
let body=document.querySelector("body");
let inp=document.createElement("input");
inp.setAttribute("type","text");
let btn=document.createElement("button");
btn.innerText="Click me";
body.appendChild(inp);
body.appendChild(btn);

//q2
inp.setAttribute("placeholder","usernaame");
btn.setAttribute("id","btn");

// q3
// let btn=document.querySelector("#btn");
// btn2.setAttribute("style","background-color:blue, color: white");
btn.style.backgroundColor="blue";
btn.style.color="White";

//q4
let h1=document.createElement("h1");
h1.innerText="DOM text";
h1.style.textDecoration="underline";
h1.style.color="purple";
body.append(h1);

//q5
let p=document.createElement("p");
p.innerHTML="<b>DOM</b> practice";
body.append(p);