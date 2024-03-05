// let f1=document.querySelector("#f1");
// let f2=document.querySelector("#f2");

// f1.addEventListener("submit",(event)=>{
//     event.preventDefault();
// });
// f2.addEventListener("submit",(event)=>{
//     event.preventDefault();
// });

// let url1="http://universities.hipolabs.com/search?country=";
// // let url2="http://universities.hipolabs.com/search?state-province=";
// let btn1=document.querySelector("#b1");
// let btn2=document.querySelector("#b2");

// btn1.addEventListener("click",async ()=>{
//     let inp1=document.querySelector("#i1");
//     let country=inp1.value;
//     console.log(country);
//     let data=await getData(url1, country);
//     show(data, "#l1");
// });

// btn2.addEventListener("click",async ()=>{
//     let inp2=document.querySelector("#i2");
//     let state=inp2.value;
//     console.log(state);
//     let data=await getData(url1, "india");
//     show2(data, "#l2", state);
// });

// function show(data, ulid){
//     let list=document.querySelector(ulid);
//     list.innerText="";

//     for(college of data){
//         let li=document.createElement("li");
//         console.log(college["state-province"]);
//         // console.log(college.country);
//         li.innerText=college.name;
//         list.append(li);
//     }
// }

// function show2(data, ulid, state){
//     let list=document.querySelector(ulid);
//     list.innerText="";

//     for(college of data){
//         let li=document.createElement("li");
//         if(college["state-province"]!=null && college["state-province"].toUpperCase()==state.toUpperCase()){
//             li.innerText=college.name;
//             console.log(college["state-province"]);
//         list.append(li);}
//     }
// }

// async function getData(url, place){
//    console.log(url);
//    console.log(place);
//     try{
//         let res=await axios.get(url+place);
//         return res.data;
//     }catch(error){
//         console.log(error);
//         return [];
//     }
// } 