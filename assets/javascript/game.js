$(document).ready(function(){

//list of global variables
var magicNumText = $("#magic-number") //gives access to magic-number id
var magicNumber = randomInt(19, 120); //variable that holds the random number function 
var winsText = $("#wins"); //gives access to the wins id
var wins = 0; //stores the wins and will be updated when user wins
var lossesText = $("#losses"); //gives access to the losses id
var losses = 0;// stores the losses and will be updated when user loses

//generates code for the magic number and then adds it to the HTML
function randomInt(min, max){
    return Math.floor(Math.random()*(max-min+1) + min);
};
magicNumText.text(magicNumber);


//code to display wins and losses text in the very beginning of game wins and losses should be 0
winsText.text(wins);
lossesText.text(losses);






















//don't delete this - for the document ready function
});