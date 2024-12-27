document.addEventListener('scroll', () => {
    let rotationInProgress = false;
    const image = document.querySelector('.rotating-image');
    const homeSection = document.querySelector('#home');
    const homeTop = homeSection.offsetTop;
    const homeHeight = homeSection.offsetHeight;

    if (!rotationInProgress && window.scrollY >= homeTop && window.scrollY <= homeTop + homeHeight) {
        rotationInProgress = true;
        requestAnimationFrame(() => {
            const rotation = (window.scrollY - homeTop) % 360;
            image.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
            rotationInProgress = false;
        });
    }
});

// ResizeObserver for Gallery
const gallery = document.querySelector('.project-gallery');
const resizeObserver = new ResizeObserver(() => {
    if (window.innerWidth >= 1024) {
        gallery.style.animation = 'scrollLeftToRight 30s linear infinite';
    } else {
        gallery.style.animation = 'none';
    }
});
resizeObserver.observe(gallery);
// Ensuring the smooth loop using JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".project-gallery");
    gallery.addEventListener('animationiteration', () => {
        gallery.appendChild(gallery.firstElementChild); // Move the first item to the end after one loop
    });
});
