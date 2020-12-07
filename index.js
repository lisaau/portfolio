const scrollToTopButton = document.getElementById("topBtn");
          
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('#about');
    const position = aboutSection.getBoundingClientRect();

    // Show scrollToTopButton if the About section is not visible
    (position.top < window.innerHeight && position.bottom >= 0) ?
        scrollToTopButton.style.display = "none" :
        scrollToTopButton.style.display = "block";
});