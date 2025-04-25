// index.js - Lab 6 Arrays and Objects
// Author: Sophie Morris
// Date: 4/25/25

// Define Variables
myTransport = ["Car", " Bus", " Bike"]

// Object for my main ride
myMainRide = {
  Make: "Volkswagen",
  Model: "Golf GTI",
  Color: "White",
  Year: 2012,
  Age: function() {
    return 2025 - this.year;
  }
}


//output
document.writeln("<br>", "Kinds of transporation I use: ", myTransport, "</br>");
//writing out an object in the document
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");








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
