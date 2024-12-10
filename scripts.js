// Interactivity Script for The Portal Opens

document.addEventListener('DOMContentLoaded', () => {
    // Toggle visibility for sections
    const toggles = document.querySelectorAll('[data-toggle]');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const targetId = toggle.getAttribute('data-toggle');
            const target = document.getElementById(targetId);
            if (target) {
                target.classList.toggle('hidden');
            }
        });
    });
});
