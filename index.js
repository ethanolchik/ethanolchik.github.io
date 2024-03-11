var socialIcons = document.querySelectorAll('.socials-icon');
socialIcons.forEach(function(icon) {
    icon.addEventListener('click', function() {
        var altValue = this.getAttribute('alt');

        if (altValue === 'GitHub') {
            window.location.href = 'https://github.com/ethanolchik';
        } else if (altValue === 'LinkedIn') {
            window.location.href = 'https://www.linkedin.com/in/ethan-olchik-65b4282a5/';
        }
    });
});


const textElement = document.querySelector('.about-description');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            textElement.classList.add('visible');
        }
    });
}, {
    root: null,
    threshold: 0
});

observer.observe(textElement);