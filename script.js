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

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateSocialLinks);

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') || 
    (prefersDarkScheme.matches ? 'dark' : 'light');

// Apply the saved theme
if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle theme function
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    themeToggle.innerHTML = newTheme === 'dark' ? 
        '<i class="fas fa-sun"></i>' : 
        '<i class="fas fa-moon"></i>';
}

// Add click event listener to theme toggle
themeToggle.addEventListener('click', toggleTheme); 