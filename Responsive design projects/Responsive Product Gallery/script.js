var slideIndex = 0;
var slides = document.querySelectorAll('.gallery img');

showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    var transformValue = -(slideIndex * 100) + '%';
    document.querySelector('.gallery').style.transform = 'translateX(' + transformValue + ')';
}
