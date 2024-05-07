var slideIndex = 0;
var testimonials = document.querySelectorAll('.testimonial');

showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    if (n >= testimonials.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = testimonials.length - 1;
    }
    var transformValue = -(slideIndex * 100) + '%';
    document.querySelector('.slider').style.transform = 'translateX(' + transformValue + ')';
}
