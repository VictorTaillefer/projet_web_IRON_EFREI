// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {

    // ===== MOBILE MENU TOGGLE =====
    const menuBtn = document.getElementById('menu-button');
    const navLinks = document.getElementById('navLinks');

    // Toggle mobile menu when hamburger button is clicked
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
            // Toggle active class on navigation links
            navLinks.classList.toggle('active');
            // Toggle active class on menu button (for animation)
            menuBtn.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (navLinks.classList.contains('active') && !event.target.closest('nav')) {
                navLinks.classList.remove('active');
                menuBtn.classList.remove('active');
            }
        });
    }
});