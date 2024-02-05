document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('h1');
    const navLinks = document.querySelectorAll('#menu a');

    window.addEventListener('scroll', function() {
        let currentSection = '';

        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(function(link) {
            link.classList.remove('active');

            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
});