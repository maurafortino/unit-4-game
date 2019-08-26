$(document).ready(function(){

//list of global variables
var magicNumText = $("#magic-number"); //gives access to magic-number id
var magicNumber = randomNum(19, 120); //variable that holds the random number function 
var winsText = $("#wins"); //gives access to the wins id
var wins = 0; //stores the wins and will be updated when user wins
var lossesText = $("#losses"); //gives access to the losses id
var losses = 0;// stores the losses and will be updated when user loses
var userNumberText = $("#user-number"); //gives access to the user-number h3
var userNumber; //this will store the user number
var crystals = $(".crystal");


//generates code for the magic number and then adds it to the HTML
function randomNum(min, max){
    return Math.floor(Math.random()*(max-min+1) + min);
};
magicNumText.text(magicNumber);


//function that allows crystals to be clicked and will generate a random number for each crystal
crystals.on("click", function(){
    for(var i = 0; i < crystals.length; i++){
    crystals.attr("value", Math.floor(Math.random()*13));
    }
    return ($(this).attr("value"));
});


//code to display wins and losses text in the very beginning of game wins and losses should be 0
winsText.text(wins);
lossesText.text(losses);


// letterBtn.attr("data-letter", letters[i]);
// $(".letter-button").on("click", function(){
//     var fridgeMagnet = $("<div>");
//     fridgeMagnet.attr("class", "letter fridge-color");
//     fridgeMagnet.text($(this).attr("data-letter"));
//     $("#display").append(fridgeMagnet);
//   });






















//don't delete this - for the document ready function
});