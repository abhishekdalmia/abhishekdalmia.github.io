// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.style.backgroundColor = window.scrollY > 50 ? 
        'var(--nav-bg)' : 
        'var(--background)';
});

// Replace placeholder links with actual links
const socialLinks = {
    GITHUB_LINK: 'https://github.com/abhishekdalmia',
    LINKEDIN_LINK: 'https://www.linkedin.com/in/abhishekdalmia10/',
    CODEFORCES_LINK: 'https://codeforces.com/profile/abhishekdalmia',
    CODECHEF_LINK: 'https://www.codechef.com/users/abhishekdalmia',
    RESUME_LINK: 'static/docs/resume.pdf'
};

// Function to update social links
function updateSocialLinks() {
    const socialLinksContainer = document.querySelector('.social-links');
    const links = socialLinksContainer.querySelectorAll('a');
    
    links.forEach(link => {
        const placeholder = link.getAttribute('href');
        if (socialLinks[placeholder]) {
            link.setAttribute('href', socialLinks[placeholder]);
        }
    });
}

// Call the function when the page loads and initialize theme dropdown
document.addEventListener('DOMContentLoaded', function () {
    updateSocialLinks();
    if (window.ThemeManager && window.ThemeManager.initThemeDropdown) {
        ThemeManager.initThemeDropdown('theme-dropdown-trigger', 'theme-dropdown-panel');
    }
}); 