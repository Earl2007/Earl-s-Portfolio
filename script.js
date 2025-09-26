// This script is meant to add interactivity and smooth scrolling to the portfolio

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Function to handle smooth scrolling for anchor links
    function smoothScroll(event) {
        // Prevent the default action (jumping to the anchor)
        event.preventDefault();

        // Get the target element's ID from the clicked link's href attribute
        const targetId = this.getAttribute('href').slice(1); // Remove '#' symbol
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Scroll to the target element smoothly
            window.scrollTo({
                top: targetElement.offsetTop - 50,  // Adjust for any fixed navigation bar (optional)
                behavior: 'smooth'
            });
        }
    }

    // Add event listeners to all internal anchor links for smooth scrolling
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function (link) {
        link.addEventListener('click', smoothScroll);
    });

    // Function to handle a simple toggle for the 'Contact' section visibility (example interaction)
    const contactSection = document.getElementById('contact');
    const contactButton = document.createElement('button');
    contactButton.innerText = 'Show Contact Info';
    document.body.appendChild(contactButton);

    contactButton.addEventListener('click', function () {
        // Toggle the visibility of the contact section
        if (contactSection.style.display === 'none' || !contactSection.style.display) {
            contactSection.style.display = 'block';
        } else {
            contactSection.style.display = 'none';
        }
    });

});
