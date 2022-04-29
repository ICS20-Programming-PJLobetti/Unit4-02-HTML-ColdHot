// Copyright (c) 2022 PJ Lobetti All rights reserved
// Created by: PJ Lobetti
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays a response based on a users inputted number
 */
function displayStatement () {
  	// initialize variables
	let response = ""
  
	// get user input
	let temp = parseInt(document.getElementById('temp').value)

  	// if number is greater than 15 display  “It’s hot out there!”.
	if (temp > 15) {
		response = "It’s hot out there!"
	} 
	// otherwise, if number is less than 15 display  “It’s cold out there!”.	
	else if(temp < 15) {
		response = "It’s cold out there!" 
	}

  // display the results
  document.getElementById('temperature').innerHTML = response

  // Changes colors depending on temperature
    if (temp <= 5){
    document.getElementById('temperature').style.color = "blue";
  } else if (temp > 25) {
    document.getElementById('temperature').style.color = "red";
  }else{
    document.getElementById('temperature').style.color = "black";
  }
}
  