// Arithmatic operators
//  let a= 5;
// let b =2;
// console.log("a =", a,"&b = ",b)
// console.log("a+b =",a+b)
// console.log("a-b=",a-b)
// console.log("a*b=",a*b)
// console.log("a/b=",a/b)
// console.log("a%b=",a%b)  //modulus
// console.log("a**b=",a**b) //exponentiation

//Unary Operators
// let a= 5;
// let b =2;
// console.log("a =", a,"&b = ",b)
//console.log("++a =",++a); //6 pre increment first update then print
// console.log("a++ =",a++);//5 post increment frist print the value then update the value
// console.log("a =",a)//6
//console.log("--a =",--a);

//Assignment Operators
// let a= 5;
// let b =2;
// a += 4; //a = a+4
// console.log("a = ",a); //9
// a -= 4; //a = a-4
// console.log("a = ",a); //1
// a *= 4; //a = a*4
// console.log("a = ",a); //20
// a /= 4; //a = a/4
// console.log("a = ",a); //1.25
// a %= 4; //a = a%4
// console.log("a = ",a); //1
// a **= 4; //a = a**4
// console.log("a = ",a); //625

//Comparison Operators
// le a= 5;
// let b =2;
// cosole.log("a ==b",a==b); //false(5,2)//true(5,5)
// let a =5;
// let b =2;
// console.log("a!=b",a!=b);//true
// let a =5;
// let b ="5";
// console.log("a ==b",a==b);//true
// let a =5;
// let b ="5";
// console.log("a ===b",a===b);//false
// let a =5;
// let b ="5";
// console.log("a !==b",a!==b);//true

//Logical Operators
// let a=6;
// let b=5;
//console.log("!(a<b)=",!(a===6));
//console.log("con1 || con2",a<b || a===6);
// console.log("con1 && con2 =",a<b && a===6);



//Coditional Statements

// let age = 20
// if ( age >=18)
// {
//     console.log("you can vote");
// }
// if(age<18){
//     console.log("you cannot vote");
// }

 

// let mode ="dark";
// let color;
// if(mode === "dark"){
//     color ="black";
// }
// if(mode ==="light"){
//     color ="white";
// }
// console.log(color);

// let mode ="blue";
// let color;
// if(mode === "dark"){
//     color ="black";
// }
// else{
//     color ="white";
// }
// console.log(color);


//ODD AND EVEN
// let num=10;
// if(num%2===0){
//     console.log(num,"is even");
// }
// else{
//     console.log(num,"is odd")
// }

// let mode ="silver";
// let color;
// if(mode==="dark")
// {
//     color ="black";
// }else if(mode==="blue"){
//     color="blue";
// }
// else if(mode==="pink")
// {
//     color ="pink";
// }
// else{
//     color ="white";
// }
// console.log(color);

//Ternary Operator

// let age =20;
// let result = age>=18?"adult":"not adult";
// console.log(result);

//get user to input a number using prompt("enter a number:").Check if the number is a multiple of 5 or not.

// let num = prompt("enter a number");
// if(num %5===0){
//     console.log(num,"is a multiple of 5");
// }else{
//     console.log(num,"is not a multiple of 5");
// }

//write a code which can give grades to students according to their scores:
//90-100 A , 70-89 B , 60-69 C , 50-59 D , 0-49 , F

// let score =75;
// let score = prompt("enter your score(0-100):");
// let grade;
// if(score>=90 && score<=100){
//     grade ="A"
// }else if(score>=70 && score<=89){
//     grade ="B"
// }else if(score>=60 && score<=69){
//     grade ="C"
// }else if(score>=50 && score <=59){
//     grade ="D"
// }else if (score>=0 && score <=49){
//     grade ="F"
// }

// console.log("according to your scores, your grade was:",grade);