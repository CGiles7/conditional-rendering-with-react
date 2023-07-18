import React from "react";


//for switch case make sure to declare variable to return and add breaks between each case
function Clock() {
  const currentTime = new Date().getHours();
  let greeting;
  
  switch(true) {
    case currentTime < 12:
      greeting = <p>Good Morning!</p>;
      break;
    case currentTime < 18:
      greeting = <p>Good Afternoon!</p>;
      break;
    default:
      greeting = <p>Good Evening!</p>;
      break;
  }
  return greeting;
} 
  
  
  //can also solve with an if statement instead of switch cases
  //if (currentTime < 12) {
    //return <p>Good Morning!</p>;
  //} else if (currentTime >= 12 && currentTime < 18){
    //return <p>Good Afternoon!</p>;
  //} else {
    //return <p>Good Evening!</p>
 //


export default Clock;
