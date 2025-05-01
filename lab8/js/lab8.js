// index.js - Lab 8 Anon Functions and Callbacks
// Author: Sophie Morris
// Date: 5/1/25

function isOdd(x){
  return (x % 2 !== 0);
  }

//test function
console.log("Is 3 odd? ", isOdd(3));
console.log("Is 4 odd? ", isOdd(4));

array = [34,59,8,102,307,74,3.14,-6,-12,-15]
console.log("My array ", array);

let result = array.map(isOdd);
console.log("Test of oddness of array: ", result);

let results = array.map(function(x){
  return x * 8;
})

console.log("Array Numbers Times 8: ", results);


