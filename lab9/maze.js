var started = false;
$(function () {
    $('#start').click(startGame);
});

function startGame(evnt) {
    started = true;
    $('#end').on('mouseover', youWin);
    $('.boundary').on('mouseover', youLoose);
}

function youWin(evnt) {
    if (started) {
        $('#result').append($("<p>", { "text": "You win" }));
        $(".boundary").css("background-color", "green");
        started = false;
    }
}

function youLoose(evnt) {
    if (started) {
        $(".boundary").css("background-color", "red");
        $('#result').append($("<p>", { "text": "You Loose" }));
        started = false;
    }
}