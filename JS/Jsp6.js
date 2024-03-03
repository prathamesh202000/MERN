//q1
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let n=prompt("Enter a number: ");

// function larger(n){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>n){
//             console.log(arr[i]);
//         }
//     }
// }

// larger(n);

//q2
// let str="abcdabcdefgggh";
// let ans="";

// function unique(str){
//     for(let i=0; i<str.length; i++){
//         if(ans.includes(str[i])){
//             continue;
//         }else{
//             ans+=str[i];
//         }
//     }
//     console.log(ans);
// }

// unique(str);

//q3
// let country=["Australia", "Germany", "United States of America"];

// function longest(country){
//     let ans="";
//     for(let i=0; i<country.length; i++){
//         if(country[i].length>ans.length){
//             ans=country[i];
//         }
//     }
//     console.log(ans);
// }

// longest(country);

//q4
// let str="abcde";

// function vowels(str){
//     let count=0;
//     for(let i=0; i<str.length; i++){
//         if(str[i].toLowerCase()=="a" || str[i].toLowerCase()=="e" || str[i].toLowerCase()=="i" || str[i].toLowerCase()=="o" || str[i].toLowerCase()=="u"){
//             count++;
//         }

//     }
//     console.log(count);
// }

// vowels(str);

//q5

// function random(){
//     let a=parseInt(prompt("Enter start of range: "));
//     let b=parseInt(prompt("Enter end of range: "));
//     console.log(Math.floor(Math.random()*(b-a))+a);
// }

// random();