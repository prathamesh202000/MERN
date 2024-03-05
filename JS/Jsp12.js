// function changeColor(color){
//     return new Promise((resolve, reject)=>{setTimeout(()=>{
//         let text=document.querySelector("h1");
//         text.style.color=color;
//         reject("Color changed!");
//     },1000)});
// }

// async function colorRange(){
//    try{
//     await changeColor("red").then((result)=>{console.log(result)});
//     await changeColor("blue").then((result)=>{console.log(result)});
//     await changeColor("green").then((result)=>{console.log(result)}).catch((error)=>{
//         console.log(error);
//     });
//    }catch(error){console.log("error caught")};
// };

// colorRange();

// let url="https://catfact.ninja/fact";
// let btn=document.querySelector(".catfact");
// let p=document.querySelector("p");

// btn.addEventListener("click",getFact);

// async function getFact(){
//     try{
//         let res= await fetch(url);
//         let data=await res.json();
//         p.innerText=data.fact;
//     }catch(error){
//         console.log(error);
//     }

//     setTimeout(()=>console.log("Successful"),2000);
// }

// let url="https://catfact.ninja/fact";
// let btn=document.querySelector(".catfact");
// let p=document.querySelector("p");

// btn.addEventListener("click",getFact);

// async function getFact(){
//     try{
//         let res= await axios.get(url);
//         //let data=await res.json();
//         console.log(res);
//         p.innerText=res.data.fact;
//     }catch(error){
//         console.log(error);
//     }

//     setTimeout(()=>console.log("Successful"),2000);
// }

let url2="https://dog.ceo/api/breeds/image/random";

let btn2=document.querySelector(".getPic");
btn2.addEventListener("click",async ()=>{
    let link=await getImage();
    let img=document.querySelector("img");
    img.setAttribute("src", link);
    
});

async function getImage(){
    try{
        let res=await axios.get(url2);
        return res.data.message;
    }catch(error){
        console.log(error);
        return "/";
    }
    
}
