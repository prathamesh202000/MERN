let div=document.querySelector("div");

function changeColor(color){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            div.style.backgroundColor=color;
            resolve("Color changed successfully!");
        }, 1000);
        
    });
}

changeColor("green")
.then((result)=>{
    console.log(result);
    return changeColor("red");
})
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});

function saveToDB(data){
    return new Promise((resolve, reject)=>{
        let speed=Math.floor(Math.random()*10)+1;
        if(speed>=5){
            console.log(data);
            resolve("Data saved!");
        }else{
            reject("Low internet speed Data not saved!");
        }
    });
}

saveToDB("d1")
.then((result)=>{
    console.log(result);
    return saveToDB("d2");
})
.then((result)=>{
    console.log(result);
    return saveToDB("d3");
})
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});
