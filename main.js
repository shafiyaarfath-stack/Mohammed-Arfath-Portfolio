var typed = new Typed(".text", {
    strings: [
        "Python Programmer",
        "AI & ML Enthusiast",
        "Web Developer"
    ],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1800,
    loop: true
});

const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => cursor.style.transform = 'translate(-50%, -50%) scale(1.8)');
document.addEventListener('mouseup', () => cursor.style.transform = 'translate(-50%, -50%) scale(1)');

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
});

const menuToggle = document.getElementById('menuToggle');
const navbar = document.querySelector('.navbar');
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
});

navbar.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navbar.classList.remove('open'));
});

const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
    });
    navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.skill-card').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});
