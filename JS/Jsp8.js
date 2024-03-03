//p1
// let arr=[10,20,30,4];

// let m10=arr.every((n)=>n%10==0);
// console.log(m10);

//p2
// let arr=[10,20,30,40];

// let min=arr.reduce((res, el)=>Math.min(res,el));
// console.log(min);

// console.log(Math.min(1,2,3,4,45,5));

// console.log(..."abcd");

//q1
// let arr=[1,2,3,4];

// let sumSqAvg=arr.reduce((res, el)=>el*el+res)/arr.length;
// console.log(sumSqAvg);

//q2
// let arr=[1,2,3,4];
// let plus5=arr.map(el=>el+5);
// console.log(plus5);

//q3
// let arr=["abc","def","gfi"];
// let uarr=arr.map(el=>el.toUpperCase());
// console.log(uarr);

// q4
let doubleAndReturnArgs=(arr, ...args)=>{
    return [...arr, ...args.map(el=>2*el)];
};
let arr=[1,2,3,4];
let newArr=doubleAndReturnArgs(arr, 5,6,7,8,9);
console.log(newArr);
console.log(doubleAndReturnArgs);

//q5
// function mergeObjects(obj1, obj2){
//     return {...obj1, ...obj2};
// }

// let user1={
//     name: "Alex",
//     id: "1"
// };
// let user2={
//     name2: "Raj",
//     id2: "2"
// };  

// let combObj=mergeObjects(user1,user2);
// console.log(combObj);