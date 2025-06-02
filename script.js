document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.main-content');
    const profileImage = document.querySelector('.profile-image');
    const socialLinks = document.querySelectorAll('.social-btn');
    const comments = document.querySelectorAll('.comment-card');
    const gradientSpheres = document.querySelectorAll('.gradient-sphere');
    const sections = document.querySelectorAll('.section');

    // Анимация появления контейнера
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);

    // 3D эффект для аватара
    if (profileImage) {
        profileImage.addEventListener('mousemove', (e) => {
            const rect = profileImage.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            profileImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        profileImage.addEventListener('mouseleave', () => {
            profileImage.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }

    // Анимация социальных иконок
    socialLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            link.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 200 + index * 100);
    });

    // Анимация секций
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 300 + index * 100);
    });

    // Анимация комментариев
    comments.forEach((comment, index) => {
        comment.style.opacity = '0';
        comment.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            comment.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            comment.style.opacity = '1';
            comment.style.transform = 'translateY(0)';
        }, 300 + index * 100);
    });

    // Параллакс эффект для фона
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        gradientSpheres.forEach((sphere, index) => {
            const speed = 0.05 * (index + 1);
            const x = (mouseX - 0.5) * speed * 100;
            const y = (mouseY - 0.5) * speed * 100;
            
            sphere.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Анимация при наведении на карточки
    const cards = document.querySelectorAll('.project-card, .comment-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = 'none';
        });
    });

    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});