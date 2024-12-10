document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    };

    const cardsCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    };


    const cardsObserver = new IntersectionObserver(cardsCallback, observerOptions);

    cards.forEach((card)=>{
        cardsObserver.observe(card);
    });
});
