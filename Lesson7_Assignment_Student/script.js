// Program Name: Recipe Display Application 

// Author: Paul Govoni

// Date: 7/19/2015

// Filename: script.js
function display(event){

    $(event.currentTarget).next().fadeIn("slow");

}//end of display()

$("h3").click(display);