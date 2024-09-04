// function myFunction(){
//     console.log("welcome to code");
//     console.log("we are learning Js");

// }
// myFunction();

//function -> 2 number ,sum

// function sum(x,y){
//     console.log(x+y);

// }
// sum(5,7);

//Arrow function

// const arrowSum = (a,b)=> {
//     console.log(a+b);
// };

// const arrowMul =(a,b)=>{
//     console.log(a*b);

// };



// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }


// const countVow = (str) =>{
//     let count = 0;
//     for (const char of str) {
//       if (
//         char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u"
//       ) {
//         count++;
//       }
//     }
//     return count;
// }


// let num = [2,3,4,5,6];

// num.forEach((num)=>{
//     console.log(num**2);
    
// });

// let num =[15,20,25,30];
// let calcSquare = (num) =>{
//     console.log(num**2);   
// };
// num.forEach(calcSquare);


// let num = [35,56,67,89];
// let newArr = num.map((val)=>{
//     return val**2;
// });
// console.log(newArr);


// let arr = [1,2,3,4,5,6,7,8];
// let evenArr =arr.filter((val)=>{
//     return val % 2 === 0;
// });
// console.log(evenArr);


// let arr = [1,2,3,4];
// const output =  arr.reduce((res,curr) =>{
//     return res+curr;
// });
// console.log(output);

// let arr = [1,2,3,4];
// const output =  arr.reduce((prev,curr) =>{
//     return prev > curr ? prev : curr;
// });
// console.log(output);




// let marks = [97,67,99,89,96];
// let toppers = marks.filter((val) => {
//     return val > 90;
// });
// console.log(toppers);


// let n = prompt("enter the number");

// let arr = [];

// for (let i = 1; i <= n; i++){
//     arr[i-1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((res,curr) => {
//     return res + curr;
// })

// console.log("sum is =", sum);


// let factorial= arr.reduce((res,curr) => {
//     return res * curr;
// })

// console.log("factorial =", factorial);