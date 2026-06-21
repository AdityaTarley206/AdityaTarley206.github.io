// Glitch effect on hover for the main title
const glitchText = document.querySelector('.glitch');
if (glitchText) {
    glitchText.addEventListener('mouseover', () => {
        glitchText.style.textShadow = '2px 2px 0px #0ea5e9, -2px -2px 0px #8b5cf6';
        setTimeout(() => {
            glitchText.style.textShadow = 'none';
        }, 300);
    });
}

// Intersection Observer for scroll animations (fade-in-up)
document.addEventListener("DOMContentLoaded", () => {
    // Initial hero load
    const heroElements = document.querySelectorAll('.hero .fade-in-up');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 200);
    });

    // Scroll animations for sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in-up class to sections and observe them
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.classList.add('fade-in-up');
        observer.observe(section);
    });

    // Also animate individual project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('fade-in-up');
        // Add slight delay based on index for staggered effect if multiple are visible
        if(index > 0) card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
});

// Navbar background effect on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(30, 41, 59, 0.7)';
        navbar.style.borderBottom = 'none';
    }
});
