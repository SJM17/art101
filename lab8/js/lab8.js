// index.js - Lab 8 Anon Functions and Callbacks
// Author: Sophie Morris
// Date: 5/1/25

function isOdd(x) {
  return (x % 2 !== 0);
}

// Get the output div
const outputDiv = document.getElementById('output');

// Create output HTML
let outputHTML = '';

// Test function and add to output
outputHTML += `<p>Is 3 odd? ${isOdd(3)}</p>`;
outputHTML += `<p>Is 4 odd? ${isOdd(4)}</p>`;

const array = [34, 59, 8, 102, 307, 74, 3.14, -6, -12, -15];
outputHTML += `<p>My array: [${array.join(', ')}]</p>`;

let result = array.map(isOdd);
outputHTML += `<p>Test of oddness of array: [${result.join(', ')}]</p>`;

let results = array.map(function(x) {
  return x * 8;
});
outputHTML += `<p>Array Numbers Times 8: [${results.join(', ')}]</p>`;

// Set the output div's content
outputDiv.innerHTML = outputHTML;

// Keep the console logs for debugging if needed
console.log("Is 3 odd? ", isOdd(3));
console.log("Is 4 odd? ", isOdd(4));
console.log("My array ", array);
console.log("Test of oddness of array: ", result);
console.log("Array Numbers Times 8: ", results);