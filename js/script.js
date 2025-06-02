// Ensure DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const nav = document.querySelector('nav.nav-links'); // target nav container

    // Toggle mobile navigation menu when hamburger is clicked
    if (hamburger && nav) {
        hamburger.addEventListener('click', function (event) {
            event.stopPropagation(); // prevent event bubbling to body
            nav.classList.toggle('show'); // show/hide the nav
            hamburger.classList.toggle('active'); // change button style
        });

        // Close mobile nav if user clicks outside of it
        document.addEventListener('click', function (event) {
            const isClickInsideNav = event.target.closest('nav');
            const isHamburger = event.target === hamburger;

            if (nav.classList.contains('show') && !isClickInsideNav && !isHamburger) {
                nav.classList.remove('show');
                hamburger.classList.remove('active');
            }
        });
    }
});

// ================================
// Handle dropdown menu toggling
// ================================

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.dropdown-trigger');
    const menu = dropdown.querySelector('.dropdown-menu');

    // Toggle visibility of current dropdown menu
    trigger.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation(); // stop outside click listener from firing

        // Close all other dropdowns first
        dropdowns.forEach(d => {
            if (d !== dropdown) {
                d.querySelector('.dropdown-menu').classList.remove('show');
            }
        });

        // Toggle the clicked dropdown
        menu.classList.toggle('show');
    });
});

// Close all dropdowns when clicking outside
document.addEventListener('click', function () {
    dropdowns.forEach(dropdown => {
        dropdown.querySelector('.dropdown-menu').classList.remove('show');
    });
});
