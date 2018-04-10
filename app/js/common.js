$(document).ready(function () {

    function changeSlide(n) {
        displaySlide(slideId += n);
    }

    function displaySlide(n) {
        var x = document.getElementsByClassName("slide");
        if (n > x.length) {
            slideId = 1
        }
        if (n < 1) {
            slideId = x.length
        }
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideId - 1].style.display = "flex";
    }

    var slideId = 1;
    displaySlide(slideId);

    $('.prev').click(function () {
        changeSlide(-1)
    });

    $('.next').click(function () {
        changeSlide(1)
    });

});




