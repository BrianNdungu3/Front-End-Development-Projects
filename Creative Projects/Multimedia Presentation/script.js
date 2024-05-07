document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    function showSlide(slideIndex) {
      slides.forEach((slide) => {
        slide.style.display = "none";
      });
      slides[slideIndex].style.display = "block";
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    showSlide(currentSlide);
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
  });
  