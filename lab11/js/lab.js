// lab.js - Lab 11 JavaScript Events and Forms
// Requirements: jQuery must be loaded for this script to work
// Author: Sophie Morris
// Date: 5/14/25

function anagram(inputString){
const arr = inputString.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    return arr.join('');
}

//sorts the characters if a string in alphabetical order
function sortString(inputString){
  //we have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}



//click listener for button
$("#submit").click(function(){

  //get value of input field
  const userName = $("#user-name").val();

  //now lets sort it
  userNameSorted = anagram(userName);

  //append new div to our output div
  $("#output").html('<div class="text"<p>' + userNameSorted + '</p></div>');
});
