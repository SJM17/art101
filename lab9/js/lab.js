// lab.js - Lab 9 Libraries and jQuery
// Requirements: jQuery must be loaded for this script to work
// Author: Sophie Morris
// Date: 5/5/25


//add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

//add a click listener to the challenge button
$("#button-challenge").click(function(){
  //now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
});



//problems button
$("#problem").append("<button id='button-problem'>Make Special</button>");

//add a click listener to the challenge button
$("#button-problem").click(function(){
  //now add (or subtract) the "special" class to the section
  $("#problem").toggleClass("special");
});


//reflection button
$("#reflection").append("<button id='button-reflection'>Make Special</button>");

//add a click listener to the challenge button
$("#button-reflection").click(function(){
  //now add (or subtract) the "special" class to the section
  $("#reflection").toggleClass("special");
});


//results button
$("#results").append("<button id='button-results'>Make Special</button>");

//add a click listener to the challenge button
$("#button-results").click(function(){
  //now add (or subtract) the "special" class to the section
  $("#results").toggleClass("special");
});