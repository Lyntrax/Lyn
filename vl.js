$(document).ready(function () {
    var balloonCount = 0;
    var maxBalloons = 7;

    $('.container').mouseenter(function () {
        if (balloonCount < maxBalloons) {
            var balloon = $('<div class="balloon"><div class="heart-balloon"><div class="balloon-text">Mwa!</div></div></div>');
            balloon.appendTo('.balloon-container').fadeIn(500);
            balloonCount++;
        }
        // Animate the card and reveal the heart when the card slides up
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow').addClass('open'); // Add 'open' class to trigger visibility
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow').removeClass('open'); // Remove 'open' class to hide heart again
    });
});
