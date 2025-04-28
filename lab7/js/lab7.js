// index.js - Lab 7 Functions
// Author: Sophie Morris
// Date: 4/28/25



// sortUserName - a function that takes user input and sorts the letters of their name
function sortUserName() {
  let userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);
  //split string to array
  let nameArray = userName.split('');
  console.log("nameArraySort =", nameArray);
  //sort the array
  let nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
  let nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  //
  return nameSorted;
}

//output
document.writeln("Here's your sorted name: ",sortUserName(),
  "<br>", "<br>", "Oh hey I fixed your name.","<br>","Your new one is above.");
 











// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
