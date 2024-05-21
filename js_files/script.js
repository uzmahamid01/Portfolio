document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');

    function checkPosition() {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const positionFromTop = element.getBoundingClientRect().top;

            if (positionFromTop - window.innerHeight < 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    checkPosition();
});
