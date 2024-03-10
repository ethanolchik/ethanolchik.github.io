// Get all elements with class "socials-icon"
var socialIcons = document.querySelectorAll('.socials-icon');

// Add click event listener to each social icon
socialIcons.forEach(function(icon) {
    icon.addEventListener('click', function() {
        // Check the alt attribute value of the clicked social icon
        var altValue = this.getAttribute('alt');

        // Redirect based on the alt attribute value
        if (altValue === 'GitHub') {
            window.location.href = 'https://github.com/ethanolchik'; // Redirect to GitHub
        } else if (altValue === 'LinkedIn') {
            window.location.href = 'https://www.linkedin.com/in/ethan-olchik-65b4282a5/'; // Redirect to LinkedIn
        }
        // Add more conditions for other social media if needed
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
    root: null, // Use the viewport as the root element
    threshold: 0 // Trigger the callback when any part of the element is visible
});

observer.observe(textElement);

