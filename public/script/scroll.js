document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.tarif-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { 
        threshold: 0.2,  
        rootMargin: '0px 0px -30px 0px'
    });

    items.forEach((item) => {
        observer.observe(item);
    });
});