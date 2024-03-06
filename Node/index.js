// let figlet=require("figlet");

// figlet("P R A T H M E S H", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });


//express app configuration
const express=require("express");
const app=express();
const port=3000;

//ejs configuration
const path=require("path");
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

//running app/backend
app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
});

//css files
app.use(express.static(path.join(__dirname,"public")));
//general response for all paths 
// app.use((req, res)=>{
//     res.send("/root");
// });

//req parameters
// app.get("/:username/:id",(req,res)=>{
//     let {username, id}=req.params;
//     res.send(`<b>Username</b>: ${username} <br> <b>Id</b>: ${id}`);
// });

// //req query
// app.get("/search",(req,res)=>{
//     let {q}=req.query;
//     if(!q){
//         res.send("Nothing searched");
//     }
//     res.send(q);
// });

// app.get("/home",(req,res)=>{
//     res.render("home.ejs");
// });

//instagram
app.get("/ig/:username", (req,res)=>{
    let {username}=req.params;
    let database=require("./database.json");
    let data=database[username];
    res.render("ig.ejs", {data});
});

app.get("/roll", (req,res)=>{
    let n=Math.floor(Math.random()*6)+1;
    res.render("Dice.ejs",{n});
});