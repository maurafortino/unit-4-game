$(document).ready(function(){

//list of global variables
var magicNumText = $("#magic-number"); //gives access to magic-number id
var magicNumber = randomNum(19, 120); //variable that holds the random number function 
var winsText = $("#wins"); //gives access to the wins id
var wins = 0; //stores the wins and will be updated when user wins
var lossesText = $("#losses"); //gives access to the losses id
var losses = 0;// stores the losses and will be updated when user loses
var userNumberText = $("#user-number"); //gives access to the user-number h3
var userNumber = 0; //this will store the user number
var randomNumArray = [Math.floor(Math.random()*12 + 1), Math.floor(Math.random()*12 + 1), Math.floor(Math.random()*12 + 1), Math.floor(Math.random()*12 + 1)]
//generates code for the magic number and then adds it to the HTML
//code to display wins and losses text in the very beginning of game wins and losses should be 0
winsText.text(wins);
lossesText.text(losses);

function randomNum(min, max){
    return Math.floor(Math.random()*(max-min+1) + min);
};
magicNumText.text(magicNumber);


//creates four crystals with a different value

for(var i = 0; i < randomNumArray.length; i++){
    var crystalImages = $("<img>");

    crystalImages.addClass("crystal");
    crystalImages.attr("src", "assets/images/white-crystal.png");
    crystalImages.attr("value", randomNumArray[i]);


    $("#crystal-images").append(crystalImages);
    
    }

$(".crystal").on("click", function(){
    var crystalNum = parseInt($(this).attr("value"));
    userNumber += crystalNum
    userNumberText.text(userNumber);
});


if(userNumber === magicNumber){
    console.log(wins++);
 }
























//don't delete this - for the document ready function
});