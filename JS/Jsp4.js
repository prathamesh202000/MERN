// q1
// let arr=[1,2,3,4,5,6,2,3];
// console.log(arr);
// let n=parseInt(prompt("Enter number to be deleted"));
// while(arr.indexOf(n)!=-1){
//     arr.splice(arr.indexOf(n),1);
// }
// console.log(arr);

// q2
// let n=287152;
// let digits=0;
// while(n>0){
//     digits++;
//     n=Math.floor(n/10);
// }
// console.log(digits);

//q3
// let n=287152;
// let sum=0;
// while(n>0){
//     sum+=(n%10);
//     n=Math.floor(n/10);
// }
// console.log(sum);

//q4
// let n=prompt("Enter a number")
// let fact=1;
// while(n>0){
//     fact*=n;
//     n--;
// }
// console.log(fact);

//q5
let arr=[2,5,10,4,2,7,1,9];
let max=0;
for (let n of arr) {
    max=Math.max(max,n);
}
console.log(max);