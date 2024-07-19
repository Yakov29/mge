// const slides = document.querySelectorAll('.slides');
// const next = document.getElementById('next');
// const previous = document.getElementById('previous');
// const dotsContainer = document.getElementById('dotsContainer');

// let currentIndex = 0;

// slides.forEach((_, index) => {
//     const dot = document.createElement('div');
//     dot.classList.add('dot');
//     if (index === currentIndex) dot.classList.add('active');
//     dotsContainer.appendChild(dot);
// });

// function updateSlides() {
//     const slideWidth = document.getElementById('window').clientWidth;
//     document.getElementById('slide-container').style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    
//     document.querySelectorAll('.dot').forEach((dot, index) => {
//         dot.classList.toggle('active', index === currentIndex);
//     });
// }

// next.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % slides.length;
//     updateSlides();
// });

// previous.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     updateSlides();
// });

// dotsContainer.addEventListener('click', (event) => {
//     if (event.target.classList.contains('dot')) {
//         currentIndex = Array.from(dotsContainer.children).indexOf(event.target);
//         updateSlides();
//     }
// });

// window.addEventListener('resize', updateSlides);

// updateSlides();