document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.custom-cursor');
    const trails = [];
    
    for (let i = 0; i < 5; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        document.body.appendChild(trail);
        trails.push(trail);
    }
    
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX - 10 + 'px';
        cursor.style.top = mouseY - 10 + 'px';
    });
    
    let trailIndex = 0;
    setInterval(() => {
        trails[trailIndex].style.left = mouseX - 3 + 'px';
        trails[trailIndex].style.top = mouseY - 3 + 'px';
        trails[trailIndex].style.opacity = '0.6';
        
        setTimeout(() => {
            trails[trailIndex].style.opacity = '0';
        }, 200);
        
        trailIndex = (trailIndex + 1) % trails.length;
    }, 50);
});

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            const section = document.getElementById(targetSection);
            
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === current) {
                item.classList.add('active');
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            filterBtns.forEach(b => {
                b.classList.remove('active', 'text-primary', 'border-primary');
                b.classList.add('text-gray-400', 'border-gray-600');
            });
            
            this.classList.add('active', 'text-primary', 'border-primary');
            this.classList.remove('text-gray-400', 'border-gray-600');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const skillIcons = document.querySelectorAll('.skill-icon');
    const tooltip = document.querySelector('.skill-tooltip');
    const tooltipTitle = tooltip.querySelector('h4');
    const tooltipBar = tooltip.querySelector('.w-32 > div');
    const tooltipText = tooltip.querySelector('span');
    
    const skillData = {
        'React': { level: 95, description: 'Expert level - 5+ years' },
        'JavaScript': { level: 98, description: 'Master level - 8+ years' },
        'Python': { level: 90, description: 'Expert level - 6+ years' },
        'Node.js': { level: 88, description: 'Expert level - 4+ years' },
        'Docker': { level: 85, description: 'Advanced level - 3+ years' },
        'MongoDB': { level: 82, description: 'Advanced level - 4+ years' },
        'AWS': { level: 80, description: 'Advanced level - 3+ years' },
        'GraphQL': { level: 75, description: 'Intermediate level - 2+ years' },
        'TypeScript': { level: 92, description: 'Expert level - 4+ years' }
    };
    
    skillIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            const skill = this.getAttribute('data-skill');
            const data = skillData[skill];
            
            if (data) {
                tooltipTitle.textContent = skill;
                tooltipBar.style.width = data.level + '%';
                tooltipText.textContent = data.description;
                tooltip.style.opacity = '1';
            }
        });
        
        icon.addEventListener('mouseleave', function() {
            tooltip.style.opacity = '0';
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input, textarea');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        submitBtn.textContent = 'Transmitting...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = 'linear-gradient(to right, #00FFB2, #00F0FF)';
            
            setTimeout(() => {
                submitBtn.textContent = 'Transmit Message';
                submitBtn.disabled = false;
                submitBtn.style.background = 'linear-gradient(to right, #00F0FF, #B026FF)';
                form.reset();
            }, 2000);
        }, 1500);
    });
});
