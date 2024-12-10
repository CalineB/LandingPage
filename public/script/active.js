document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar a');

  function removeActiveClass() {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = document.querySelector(`a[href="#${entry.target.id}"]`);

      if (entry.isIntersecting) {
        removeActiveClass();

        link.classList.add('active');
      }
    });
  }, { threshold: 0.5 }); 

  sections.forEach(section => {
    observer.observe(section);
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();

        removeActiveClass();
        this.classList.add('active');

        const targetId = this.getAttribute('href').substring(1); 
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});
