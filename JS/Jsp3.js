// q
// let n=prompt("Enter size of arr:");
// let arr=[];
// while(n>0){
//     arr.push(parseInt(prompt("Enter arr element:")));
//     n--;
//     }
// console.log(arr);
// console.log(typeof(arr[0]));

// // q1
// let arr=[7,9,0,-2];
// let n=prompt("How many first elements of Array to be shown:");
// console.log(arr.slice(0,n));

// // q2
// let arr=[7,9,0,-2];
// let n=prompt("How many last elements of Array to be shown:");
// console.log(arr.slice(-n));

// q3
// let str=prompt("Enter a string:");
// if(str){
//     console.log("String is not blank.");
// }else{
//     console.log("String is blank.");
// }

//q4
// let str="AaBbCc";
// let i=prompt("Enter index value:");
// if(str[i]>'Z'){
//     console.log(`Character at ${i} is lowercase.`);
// }else{
//     console.log(`Character at ${i} is uppercase.`);
// }

// q5
// let str=prompt("Enter a string:");
// console.log(str.trim());

// q6
let arr=[1,2,3,4];
let n=prompt("Enter a number:");
if(arr.includes(parseInt(n))){
    console.log("Number exists in array.");
}else{
    console.log("Number does not exists in array.");
}