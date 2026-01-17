/* ===================================
   Portfolio JavaScript - Portavia Style
   =================================== */

// Configuration
const CONFIG = {
    githubUsername: 'tygwan',
    featuredProjects: [
        'AgenticLabeling',
        'binance-algo-trading',
        'cc-initializer',
        'DXTnavis',
        'AgenticREVIT'
    ],
    experimentalProjects: [
        'algo-quant',
        'palantir-stock',
        'med-vision',
        'student-manager'
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
    },
    // Project cover images (fallback gradients if no image)
    projectCovers: {
        'AgenticLabeling': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'binance-algo-trading': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'cc-initializer': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'DXTnavis': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'AgenticREVIT': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'algo-quant': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'palantir-stock': 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
        'med-vision': 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
        'student-manager': 'linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)',
        'default': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }
};

// Store project details from data.json
let projectDetailsData = {};

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const nav = document.getElementById('nav');
const projectsTrack = document.getElementById('projects-track');
const experimentalGrid = document.getElementById('experimental-grid');

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

// Load project details from data.json
async function loadProjectDetails() {
    try {
        const response = await fetch('projects/data.json');
        if (response.ok) {
            projectDetailsData = await response.json();
        }
    } catch (error) {
        console.error('Error loading project details:', error);
    }
}

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

        // Filter experimental projects
        const experimentalRepos = repos.filter(repo =>
            CONFIG.experimentalProjects.some(name =>
                name.toLowerCase() === repo.name.toLowerCase()
            )
        );

        // Sort featured by order
        featuredRepos.sort((a, b) => {
            const indexA = CONFIG.featuredProjects.findIndex(
                name => name.toLowerCase() === a.name.toLowerCase()
            );
            const indexB = CONFIG.featuredProjects.findIndex(
                name => name.toLowerCase() === b.name.toLowerCase()
            );
            return indexA - indexB;
        });

        // Sort experimental by order
        experimentalRepos.sort((a, b) => {
            const indexA = CONFIG.experimentalProjects.findIndex(
                name => name.toLowerCase() === a.name.toLowerCase()
            );
            const indexB = CONFIG.experimentalProjects.findIndex(
                name => name.toLowerCase() === b.name.toLowerCase()
            );
            return indexA - indexB;
        });

        // Display featured projects in horizontal scroll
        displayFeaturedProjects(featuredRepos);

        // Display experimental projects in grid
        displayExperimentalProjects(experimentalRepos);

    } catch (error) {
        console.error('Error loading projects:', error);
        displayError();
    }
}

// Display featured projects in horizontal scroll track
function displayFeaturedProjects(repos) {
    if (!projectsTrack) return;

    if (repos.length === 0) {
        projectsTrack.innerHTML = `
            <div class="projects-loading">
                <p>No featured projects found.</p>
            </div>
        `;
        return;
    }

    projectsTrack.innerHTML = repos.map(repo => createProjectCard(repo)).join('');
}

// Display experimental projects in grid
function displayExperimentalProjects(repos) {
    if (!experimentalGrid) return;

    if (repos.length === 0) {
        experimentalGrid.innerHTML = `
            <div class="projects-loading">
                <p>No experimental projects found.</p>
            </div>
        `;
        return;
    }

    experimentalGrid.innerHTML = repos.map(repo => createExperimentalCard(repo)).join('');
}

// Create project card HTML (Portavia style - for featured projects)
function createProjectCard(repo) {
    const projectDetails = projectDetailsData[repo.name];
    const summary = projectDetails?.summary || repo.description || 'No description available';
    const coverStyle = CONFIG.projectCovers[repo.name] || CONFIG.projectCovers.default;

    // Get tech stack for display
    const frontendStack = projectDetails?.frontend?.stack || [];
    const backendStack = projectDetails?.backend?.stack || [];
    const allTech = [...frontendStack.slice(0, 2), ...backendStack.slice(0, 2)];
    const techDisplay = allTech.slice(0, 4);

    return `
        <article class="project-card">
            <a href="${repo.html_url}" target="_blank" rel="noopener" class="project-card-link">
                <div class="project-cover" style="background: ${coverStyle}">
                    <div class="project-cover-overlay">
                        <span class="view-project">View Project</span>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${repo.name}</h3>
                    <p class="project-summary">${escapeHtml(summary)}</p>
                    ${techDisplay.length > 0 ? `
                        <div class="project-tech">
                            ${techDisplay.map(tech => `<span class="tech-badge">${escapeHtml(tech)}</span>`).join('')}
                            ${allTech.length > 4 ? `<span class="tech-badge more">+${allTech.length - 4}</span>` : ''}
                        </div>
                    ` : ''}
                    <div class="project-meta">
                        <span class="project-language">
                            <span class="language-dot" style="background-color: ${CONFIG.languageColors[repo.language] || CONFIG.languageColors.default}"></span>
                            ${repo.language || 'N/A'}
                        </span>
                        <div class="project-stats">
                            ${repo.stargazers_count > 0 ? `
                                <span title="Stars">
                                    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                                        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                                    </svg>
                                    ${repo.stargazers_count}
                                </span>
                            ` : ''}
                            ${repo.forks_count > 0 ? `
                                <span title="Forks">
                                    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                                        <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
                                    </svg>
                                    ${repo.forks_count}
                                </span>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </a>
        </article>
    `;
}

// Create experimental project card (smaller, grid style)
function createExperimentalCard(repo) {
    const projectDetails = projectDetailsData[repo.name];
    const summary = projectDetails?.summary || repo.description || 'No description available';
    const coverStyle = CONFIG.projectCovers[repo.name] || CONFIG.projectCovers.default;

    return `
        <article class="experimental-card">
            <a href="${repo.html_url}" target="_blank" rel="noopener" class="experimental-card-link">
                <div class="experimental-cover" style="background: ${coverStyle}"></div>
                <div class="experimental-content">
                    <h4 class="experimental-title">${repo.name}</h4>
                    <p class="experimental-summary">${escapeHtml(summary)}</p>
                    <span class="experimental-language">
                        <span class="language-dot" style="background-color: ${CONFIG.languageColors[repo.language] || CONFIG.languageColors.default}"></span>
                        ${repo.language || 'N/A'}
                    </span>
                </div>
            </a>
        </article>
    `;
}

// Display error message
function displayError() {
    if (!projectsTrack) return;

    projectsTrack.innerHTML = `
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
// Horizontal Scroll Enhancement
// ===================================

function initHorizontalScroll() {
    const scrollContainer = document.querySelector('.projects-scroll-container');
    if (!scrollContainer) return;

    // Enable smooth drag scrolling
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollContainer.classList.add('grabbing');
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mouseleave', () => {
        isDown = false;
        scrollContainer.classList.remove('grabbing');
    });

    scrollContainer.addEventListener('mouseup', () => {
        isDown = false;
        scrollContainer.classList.remove('grabbing');
    });

    scrollContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollContainer.scrollLeft = scrollLeft - walk;
    });

    // Keyboard navigation
    scrollContainer.setAttribute('tabindex', '0');
    scrollContainer.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            scrollContainer.scrollBy({ left: -400, behavior: 'smooth' });
        } else if (e.key === 'ArrowRight') {
            scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
        }
    });
}

// ===================================
// Tech Cloud Animation
// ===================================

function initTechCloud() {
    const techItems = document.querySelectorAll('.tech-item');

    techItems.forEach((item, index) => {
        // Stagger animation
        item.style.animationDelay = `${index * 0.05}s`;

        // Hover effect with random subtle movement
        item.addEventListener('mouseenter', () => {
            const randomX = (Math.random() - 0.5) * 4;
            const randomY = (Math.random() - 0.5) * 4;
            item.style.transform = `translate(${randomX}px, ${randomY}px) scale(1.1)`;
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
        });
    });
}

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
    .projects-scroll-container.grabbing {
        cursor: grabbing;
    }
    .projects-scroll-container.grabbing .project-card {
        pointer-events: none;
    }
`;
document.head.appendChild(style);

// ===================================
// Initialize
// ===================================

document.addEventListener('DOMContentLoaded', async () => {
    // Load project details first
    await loadProjectDetails();

    // Load projects from GitHub
    loadProjects();

    // Initialize horizontal scroll
    initHorizontalScroll();

    // Initialize tech cloud
    initTechCloud();
});
