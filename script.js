function createHearts() {
    const heartsContainer = document.getElementById('hearts-background');
    const heartCount = 15; 
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 10 + Math.random() * 10;
        const size = 10 + Math.random() * 15;
        
        heart.style.left = `${left}vw`;
        heart.style.animationDelay = `${delay}s`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        
        heartsContainer.appendChild(heart);
    }
}

function populateGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    const photoUrls = [
        '1.jpeg',
        '3.jpeg',
        '4.jpeg',
        '5.jpeg',
        '7.jpeg',
        '8.jpeg',
        '9.jpeg',
        '10.jpeg',
        '11.jpeg',
        '12.jpeg',
        '13.jpeg',
        '14.jpeg',
        '15.jpeg',
        '16.jpeg',
        '17.jpeg',
        '18.jpeg',
    ];
    
    photoUrls.forEach(url => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Anniversary Photo';
        img.loading = 'lazy'; 
        
        galleryItem.appendChild(img);
        galleryGrid.appendChild(galleryItem);
    });
}

function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function addParallaxEffect() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.anniversary-greeting, .love-photo');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

function typeWriterEffect() {
    const greetingText = document.querySelector('.greeting-text');
    const originalText = greetingText.textContent;
    greetingText.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            greetingText.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    createHearts();
    populateGallery();
    smoothScroll();
    addParallaxEffect();
    typeWriterEffect();
    
    window.addEventListener('resize', function() {
        const heartsContainer = document.getElementById('hearts-background');
        heartsContainer.innerHTML = '';
        createHearts();
    });
});

document.addEventListener('mousemove', function(e) {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        heart.style.transform = `translate(${x * 10}px, ${y * 10}px) rotate(45deg)`;
    });
});