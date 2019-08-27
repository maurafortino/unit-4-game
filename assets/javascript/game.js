$(document).ready(function () {

    //list of global variables
    var magicNumText = $("#magic-number"); //gives access to magic-number id
    var magicNumber, userNumber, randomNumArray;
    var winsText = $("#wins"); //gives access to the wins id
    var userNumberText = $("#user-number"); //gives access to the user-number h3
    var wins = 0; //stores the wins and will be updated when user wins
    var lossesText = $("#losses"); //gives access to the losses id
    var losses = 0;// stores the losses and will be updated when user loses
    //generates code for the magic number
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    replay();
    //uses a function to reset the game: includes new numbers for the crystals and new magic number; wins/losses will not be affected by this
    function replay() {
        winsText.text(wins);
        lossesText.text(losses);

        magicNumber = randomNum(19, 120); //stores the magic number from randomNum function below
        magicNumText.text(magicNumber); //adds value stores in magicNumber var to HTML
        userNumber = 0; //sets user number to zero
        userNumberText.empty(); //clears user number div
        $("#crystal-images").empty(); //clears crystal images
        randomNumArray = [Math.floor(Math.random() * 12 + 1), Math.floor(Math.random() * 12 + 1), Math.floor(Math.random() * 12 + 1), Math.floor(Math.random() * 12 + 1)]; //creates an array used in for loop below

        //adds new crystals to the crystal-images div and assigns them new values based on the random number and position of index
        for (var i = 0; i < randomNumArray.length; i++) {
            var crystalImages = $("<img>");

            crystalImages.addClass("crystal");
            crystalImages.attr("src", "assets/images/white-crystal.png");
            crystalImages.attr("value", randomNumArray[i]);

            $("#crystal-images").append(crystalImages);
        }

        //adds an onclick event to the crystal images to make them act as buttons
        $(".crystal").on("click", function () {
            var crystalNum = parseInt($(this).attr("value"));
            userNumber += crystalNum
            userNumberText.text(userNumber);
            if (userNumber === magicNumber) {
                wins++;
                replay();
            } else if (userNumber > magicNumber) {
                losses++;
                replay();
            }
        });

    }

});