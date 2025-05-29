// lab.js - Lab 13 Loops
// Requirements: jQuery must be loaded for this script to work
// Author: Sophie Morris
// Date: 5/23/25

 function fizzBuzzBoom() {
        let oneLongString = "";
        
        for (let i = 1; i <= 200; i++) {
            let output = "";
            
            if (i % 3 == 0) output += "Fizz";
            if (i % 5 == 0) output += "Buzz";
            if (i % 7 == 0) output += "Boom";
            if (i % 9 == 0) output += "Bang";
            
            if (output == "") {
                oneLongString += i + "<br>";
            } else {
                oneLongString += i + " " + output + "!<br>";
            }
        }
        
        $("#output").html(oneLongString);
    }

    // Call the function
    fizzBuzzBoom();




