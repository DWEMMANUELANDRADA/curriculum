window.sr = ScrollReveal();

sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
});

sr.reveal('.header-content-left', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

sr.reveal('.header-content-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});
sr.reveal('#imagencntcto', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

sr.reveal('.header-btn', {
    duration: 2000,
    delay: 1000,
    origin: 'bottom'
});

sr.reveal('#testimonial div', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
});

sr.reveal('.skill-item', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    interval: 100 // Stagger effect
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var email = document.querySelector("#button");
var correo = document.querySelector("#correo");
email.addEventListener("click", function () {
    correo.style.display = "inline-block";
});
var whatssap = document.querySelector("#chat");
var wchat = document.querySelector("#wchat");
whatssap.addEventListener("click", function () {
    wchat.style.display = "block";

})

// Show More Projects Logic
var showMoreBtn = document.getElementById('show-more-btn');
var extraProjects = document.getElementById('extra-projects');
var isExpanded = false;

if (showMoreBtn && extraProjects) {
    showMoreBtn.addEventListener('click', function () {
        if (!isExpanded) {
            extraProjects.style.display = 'flex'; // Show row
            this.style.transform = 'rotate(180deg)'; // Rotate arrow up
            isExpanded = true;

            // Re-trigger ScrollReveal for new elements if needed, or simply let them appear
            // sr.reveal('#extra-projects .project-card'); // Optional if we want to animate them in
        } else {
            extraProjects.style.display = 'none'; // Hide row
            this.style.transform = 'rotate(0deg)'; // Rotate arrow down
            isExpanded = false;

            // Scroll back to top of projects if user closed it?
            // document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' });
        }
    });
}
