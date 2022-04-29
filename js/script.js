// Copyright (c) 2022 Angelo Pintilie All rights reserved
// Created by: Angelo Pintilie
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

  	// if number is number is equal to random number, display correct response
	if (temp > 15) {
		response = "It’s hot out there!"
	} 
	// otherwise, if number is not equal to random number, display incorrect response	
	else if(temp < 15) {
		response = "It’s cold out there!" 
	}

  // display the results
  document.getElementById('temperature').innerHTML = response

  // Changes colors depending on temperature
    if (temp <= 0){
    document.getElementById('temp').style.color = "blue";
  } else if (temp > 25) {
    document.getElementById('temp').style.color = "red";
  }else{
    document.getElementById('temp').style.color = "black";
  }
}
  