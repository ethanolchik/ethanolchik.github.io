projects = document.querySelectorAll('.project');

projects.forEach(function(project) {
    project.addEventListener('click', function() {
        var alt = this.getAttribute('alt');

        if (alt === "Portfolio") {
            window.location.href = 'https://github.com/ethanolchik/ethanolchik.github.io';
        } else if (alt === "Perlin Noise") {
            window.location.href = 'https://github.com/ethanolchik/Perlin-Noise';
        } else if (alt === "Compiler") {
            window.location.href = 'https://github.com/ethanolchik/Compiler';
        }
    });
});