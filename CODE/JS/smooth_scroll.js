const links = document.querySelectorAll('.smooth-scroll');

links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));

        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 60;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
            duration: 3000
        });
    });
});