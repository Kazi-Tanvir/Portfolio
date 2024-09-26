document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const leftButton = document.querySelector('.carousel-button.left');
    const rightButton = document.querySelector('.carousel-button.right');
    let index = 0;

    rightButton.addEventListener('click', () => {
        if (index < carousel.children.length - 1) {
            index++;
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }
    });

    leftButton.addEventListener('click', () => {
        if (index > 0) {
            index--;
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }
    });
});
