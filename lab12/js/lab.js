// lab.js - Lab 12 Conditionals
// Requirements: jQuery must be loaded for this script to work
// Author: Sophie Morris
// Date: 5/19/25

function sortingHat(num){
  //get remainder when divided by 4
  let remainder = num % 4;
  let str = "";
  if (remainder == 0){
    str = "Airbending: Airbenders, are masters of speed and agility, using air currents to evade attacks and move quickly.";
  } else if (remainder == 1){
    str = "Waterbending: Waterbenders, can manipulate water's flow and use it for both offense and defense, even turning their opponents' own forces against them.";
  } else if (remainder == 2){
    str = "Earthbending: Earthbenders, are skilled in manipulating earth and rock, relying on their strength and stability to defend against attacks and counterattack.";
  } else if (remainder ==3){
    str = "Firebending: Firebenders, are known for their aggressive style, wielding fire to burn and create heat, making them powerful in combat.";
  }
  return str;
}


//attach click handler to submit button
$("#button").click(function(){
  let name = $("#input").val()
  console.log(name);

  let nameLength = name.length;
  console.log(nameLength);

  let house = sortingHat(nameLength);
  console.log(house);

  $("#output").html("<h2 style='font-family: Georgia, sans-serif; color:black;'>" + house + "</h2>");
});