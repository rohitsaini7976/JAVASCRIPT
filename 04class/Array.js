//let marks = [97,82,75,64,36]
//console.log(marks);

//arry indices
 //arr[0],arr[1]...

 //Looping over an array

 //let heroes =["iroman","thor","hulk","shaktiman","antman"]

//  for (let idx=0; idx< heroes.length; idx++){
//     console.log(heroes[idx]);
//  }

//Question. 1
// for a given array with marks of students-> [85,97,44,37,76,60]. Find the average marks of the entire class.

// let marks =[85,97,44,37,76,60];
// let sum = 0;

// for(let val of marks){
//    sum += val;
// }
// let avg = sum / marks.length;
//console.log("avg marks of the class =",avg);
// console.log(`avg marks of the class=${avg}`);


//Question. 2
// For a given array with prices of 5 items ->[250,645,300,900,50]
//All items have an offer of 10% off on them. change the array to store final price after applying offer.


// let items = [250,645,300,900,50];

// let i = 0;
// for (let val of items) {
//   let offer = val/10;
//   items[i]=items[i] -offer;
//   console.log(`value after offer=${items[i]}`);
//   i++;
    
// }


// let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
// let val = companies.splice(0,1);
// console.log(val);
// console.log(companies);


//  let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
//   let val=companies.splice(2,1,"Ola");
//   console.log(val);
//   console.log(companies);

// let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
// companies.splice(5,0,"Amazon");
// console.log(companies);