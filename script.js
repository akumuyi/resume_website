document.addEventListener('DOMContentLoaded', function () {
    // Get all the navigation links
    var navLinks = document.querySelectorAll('nav a');

    // Loop through each navigation link
    navLinks.forEach(function (navLink) {
        // Add click event listener to each navigation link
        navLink.addEventListener('click', function (event) {
            // Prevent default anchor behavior
            event.preventDefault();

            // Get the target section's id from the href attribute
            var targetId = this.getAttribute('href');

            // Scroll to the target section smoothly
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});