/* ===================================
   Portfolio JavaScript
   =================================== */

// Configuration
const CONFIG = {
    githubUsername: 'tygwan',
    featuredProjects: [
        'AgenticLabeling',
        'DXTnavis',
        'AgenticREVIT',
        'cc-initializer',
        'algo-quant',
        'palantir-stock',
        'n8n'
    ],
    // Language colors (GitHub style)
    languageColors: {
        'Python': '#3572A5',
        'JavaScript': '#f1e05a',
        'TypeScript': '#3178c6',
        'C#': '#178600',
        'Shell': '#89e051',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'Go': '#00ADD8',
        'Rust': '#dea584',
        'Java': '#b07219',
        'default': '#B1ADA1'
    }
};

// Store repos data for modal
let reposData = [];

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const nav = document.getElementById('nav');
const projectsGrid = document.getElementById('projects-grid');
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');

// ===================================
// Navigation
// ===================================

// Mobile menu toggle
navToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
navMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle?.classList.remove('active');
    });
});

// Scroll-based navigation styling
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav?.classList.add('scrolled');
    } else {
        nav?.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = nav?.offsetHeight || 0;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// GitHub Projects
// ===================================

// Fetch and display projects
async function loadProjects() {
    try {
        const response = await fetch(
            `https://api.github.com/users/${CONFIG.githubUsername}/repos?sort=updated&per_page=100`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }

        const repos = await response.json();

        // Filter featured projects
        const featuredRepos = repos.filter(repo =>
            CONFIG.featuredProjects.some(name =>
                name.toLowerCase() === repo.name.toLowerCase()
            )
        );

        // Sort by featured order
        featuredRepos.sort((a, b) => {
            const indexA = CONFIG.featuredProjects.findIndex(
                name => name.toLowerCase() === a.name.toLowerCase()
            );
            const indexB = CONFIG.featuredProjects.findIndex(
                name => name.toLowerCase() === b.name.toLowerCase()
            );
            return indexA - indexB;
        });

        // Store for modal use
        reposData = featuredRepos;

        displayProjects(featuredRepos);

    } catch (error) {
        console.error('Error loading projects:', error);
        displayError();
    }
}

// Display projects in grid
function displayProjects(repos) {
    if (!projectsGrid) return;

    if (repos.length === 0) {
        projectsGrid.innerHTML = `
            <div class="projects-loading">
                <p>No featured projects found.</p>
            </div>
        `;
        return;
    }

    projectsGrid.innerHTML = repos.map(repo => createProjectCard(repo)).join('');

    // Add click event listeners to cards
    projectsGrid.querySelectorAll('.project-card').forEach((card, index) => {
        card.addEventListener('click', (e) => {
            // Don't open modal if clicking on the GitHub link
            if (e.target.closest('.project-link')) return;
            openModal(repos[index]);
        });
    });
}

// Create project card HTML
function createProjectCard(repo) {
    const languageColor = CONFIG.languageColors[repo.language] || CONFIG.languageColors.default;
    const description = repo.description || 'No description available';
    const isFeatured = repo.name.toLowerCase() === 'cc-initializer';

    return `
        <article class="project-card${isFeatured ? ' featured' : ''}" data-repo="${repo.name}">
            <div class="project-header">
                <h3 class="project-title">${isFeatured ? '<span class="featured-badge">⭐</span> ' : ''}${repo.name}</h3>
                <a href="${repo.html_url}" target="_blank" rel="noopener" class="project-link" aria-label="View on GitHub">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
            </div>
            <p class="project-description">${escapeHtml(description)}</p>
            <div class="project-meta">
                ${repo.language ? `
                    <span class="project-language">
                        <span class="language-dot" style="background-color: ${languageColor}"></span>
                        ${repo.language}
                    </span>
                ` : '<span></span>'}
                <div class="project-stats">
                    ${repo.stargazers_count > 0 ? `
                        <span title="Stars">
                            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                                <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                            </svg>
                            ${repo.stargazers_count}
                        </span>
                    ` : ''}
                    ${repo.forks_count > 0 ? `
                        <span title="Forks">
                            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                                <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
                            </svg>
                            ${repo.forks_count}
                        </span>
                    ` : ''}
                </div>
            </div>
        </article>
    `;
}

// Display error message
function displayError() {
    if (!projectsGrid) return;

    projectsGrid.innerHTML = `
        <div class="projects-loading">
            <p>Unable to load projects. Please try again later.</p>
            <a href="https://github.com/${CONFIG.githubUsername}" target="_blank" rel="noopener" class="btn btn-secondary mt-4">
                View on GitHub
            </a>
        </div>
    `;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===================================
// Project Modal
// ===================================

// Open modal with project details
async function openModal(repo) {
    if (!modal) return;

    const modalTitle = document.getElementById('modal-title');
    const modalLanguage = document.getElementById('modal-language');
    const modalDescription = document.getElementById('modal-description');
    const modalStats = document.getElementById('modal-stats');
    const modalReadme = document.getElementById('modal-readme');
    const modalRepoLink = document.getElementById('modal-repo-link');

    // Set basic info
    modalTitle.textContent = repo.name;
    modalLanguage.textContent = repo.language || 'Unknown';
    modalDescription.textContent = repo.description || 'No description available';

    // Store URL for button click
    currentRepoUrl = repo.html_url;

    // Calculate development period
    const createdDate = new Date(repo.created_at);
    const updatedDate = new Date(repo.pushed_at || repo.updated_at);
    const formatDate = (date) => {
        return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'short' });
    };

    // Set stats
    modalStats.innerHTML = `
        <span class="modal-stat">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path d="M4.75 0a.75.75 0 01.75.75V2h5V.75a.75.75 0 011.5 0V2h1.25c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0113.25 16H2.75A1.75 1.75 0 011 14.25V3.75C1 2.784 1.784 2 2.75 2H4V.75A.75.75 0 014.75 0zm0 3.5h8.5a.25.25 0 01.25.25V6h-11V3.75a.25.25 0 01.25-.25h2zm-2.25 4v6.75c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25V7.5h-11z"/>
            </svg>
            ${formatDate(createdDate)} ~ ${formatDate(updatedDate)}
        </span>
        <span class="modal-stat">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
            </svg>
            ${repo.stargazers_count} Stars
        </span>
        <span class="modal-stat">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
            </svg>
            ${repo.forks_count} Forks
        </span>
    `;

    // Loading state for README
    modalReadme.innerHTML = `
        <div class="loading-spinner"></div>
        <p style="text-align: center;">Loading README...</p>
    `;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Fetch README
    try {
        const readmeResponse = await fetch(
            `https://api.github.com/repos/${CONFIG.githubUsername}/${repo.name}/readme`,
            {
                headers: {
                    'Accept': 'application/vnd.github.v3.raw'
                }
            }
        );

        if (readmeResponse.ok) {
            const readmeContent = await readmeResponse.text();
            modalReadme.innerHTML = formatReadme(readmeContent);
        } else {
            modalReadme.innerHTML = '<p>No README available for this project.</p>';
        }
    } catch (error) {
        console.error('Error fetching README:', error);
        modalReadme.innerHTML = '<p>Unable to load README.</p>';
    }
}

// Close modal
function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Format README using marked.js
function formatReadme(markdown) {
    if (typeof marked !== 'undefined') {
        // Configure marked for security
        marked.setOptions({
            breaks: true,
            gfm: true
        });
        return marked.parse(markdown);
    }
    // Fallback: just escape and show as preformatted
    return '<pre>' + escapeHtml(markdown) + '</pre>';
}

// Store current repo URL for the button
let currentRepoUrl = '';

// Modal event listeners
modalClose?.addEventListener('click', closeModal);

modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// View Repository button click handler
document.getElementById('modal-repo-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentRepoUrl) {
        window.open(currentRepoUrl, '_blank', 'noopener');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
        closeModal();
    }
});

// ===================================
// Intersection Observer for Animations
// ===================================

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe sections for fade-in animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add visible class styles
const style = document.createElement('style');
style.textContent = `
    section.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ===================================
// Initialize
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});
