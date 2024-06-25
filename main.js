// toggle icon navbar 

let menuicon = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navbar');

menuicon.onclick = () =>{
    menuicon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar 
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // REMOVE TOGGLE ICON AND NAVBAR

    menuicon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

// SCROLL REVEAL
ScrollReveal({
    distance:'80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content,heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


// TYPED JS 

const typed = new Typed('.multiple-text',{
    strings: ['Aspiring Software Engineer','Full Stack Web Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// script.js

// Function to add 'active' class to reveal elements
const revealElements = () => {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('active');
        }
    });
};

// Function to check if element is in viewport
const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Intersection Observer setup to trigger reveal on scroll
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    },
    { threshold: 0.2 }
);

// Observe all elements with 'reveal' class
document.querySelectorAll('.reveal').forEach((element) => {
    observer.observe(element);
});

// Initial check and reveal for elements in viewport on page load
window.addEventListener('load', revealElements);
window.addEventListener('scroll', revealElements);
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
 

// // TO REDIRECT TO WEBPAGE OR SOURCE CODE OF PROJECT ON CLICKING VIDEO 

