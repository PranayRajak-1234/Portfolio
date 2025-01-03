// Smooth scroll to section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Message sent!');
    // Form reset can go here if needed
    this.reset();
});
