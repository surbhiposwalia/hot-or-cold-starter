$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });
    var number = getRandomNumber(1, 100);
console.log(number);
    var guess_num=parseInt(guess());

    var difference = diff(guess_num, number);
    feedback(difference);
    $('#guessButton').click(function(event) {
        event.preventDefault();

        var guess_num = guess();
        console.log(guess_num);
    });

});
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
    return Math.floor(Math.random() * (max - min + 1))+min;
}

function feedback(diff) {

    if ((diff >= 30) && (diff <=50)) {
        $('h2#feedback').text("cold");
    }
    if ((diff >= 20) && (diff < 30)) {
        $('h2#feedback').text("warm");

    }
    if ((diff >= 10) && (diff < 20)) {

        $('h2#feedback').text("hot");

    }
    if ((diff >= 1) && (diff < 10)) {
        $('h2#feedback').text("very hot");


    }
    if (diff > 50) {
        $('h2#feedback').text("Ice cold");


    }

}



//     var ClearGuess = function() {

//             $("#userGuess").val("").focus();

//             //function to clear guess text section

// }

//             var guessCount = function() {

//                 $("#count").text(guessCount);

//                 //function to keep track of the number of guesses

//             };
