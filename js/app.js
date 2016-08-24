$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    // var guess_num = parseInt(guess());
    var number = getRandomNumber(1, 100);
    console.log(number);
    var count = 0;

    $('#guessButton').click(function(event) {
        event.preventDefault();
        game(number);
        ClearGuess();
        count += 1;
        console.log(count);
        $("#count").text(count);
    });
    $('.new').click(function(){
        location.reload();
    })

});


function game(number) {

    var guess_num = parseInt(guess());
    console.log(guess_num);
    var difference = diff(guess_num, number);
    console.log(difference)
    feedback(difference);
    $('.guessBox').append("<li>" + guess_num + "</li>");

}


//to get the input value from the text box "enter your guess"
function guess() {
    var num = $('#userGuess').val();
    return num;
    //feedback(num);
}

function diff(guess_num, num) {
    return Math.abs(guess_num - num);
}
//generates a random number from 1 to 100;
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function feedback(difference) {
    if (difference == 0) {
        $('h2#feedback').text("Congratulations you guessed correctly!!");
    } else if ((difference >= 30) && (difference <= 50)) {
        $('h2#feedback').text("cold");
    } else if ((difference >= 20) && (difference < 30)) {
        $('h2#feedback').text("warm");
    } else if ((difference >= 10) && (difference < 20)) {
        $('h2#feedback').text("hot");
    } else if ((difference >= 1) && (difference < 10)) {
        $('h2#feedback').text("very hot");
    } else if (difference > 50) {
        $('h2#feedback').text("Ice cold");
    } else {
        $('h2#feedback').text("Invalid");
    }

}
var ClearGuess = function() {

    $("#userGuess").val("").focus();
    //function to clear guess text section
}





//function to keep track of the number of guesses
