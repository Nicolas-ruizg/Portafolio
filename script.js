document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollTop = window.pageYOffset;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    if (scrollTop >= sectionTop - window.innerHeight / 1.3) {
      const direction = index % 2 === 0 ? "translateX(-50px)" : "translateX(50px)";
      
      section.style.opacity = 1;
      section.style.transform = "translateX(0)";
      section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    } else {
      section.style.opacity = 0;
      section.style.transform = index % 2 === 0 ? "translateX(-50px)" : "translateX(50px)";
    }
  });
});






document.addEventListener("DOMContentLoaded", () => {
const numStars = 100; 
const starContainer = document.createElement("div");
starContainer.classList.add("star-container");
document.body.appendChild(starContainer);

for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `${Math.random() * 100}vh`;
  
  // Tamaño aleatorio
  const size = Math.random() * 3 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  star.style.animationDuration = `${Math.random() * 5 + 2}s`;
  star.style.animationDelay = `${Math.random() * 5}s`;

  starContainer.appendChild(star);
}
});

function toggleMenu() {
const nav = document.getElementById("barra-nav");
nav.classList.toggle("visible");
}


document.addEventListener('DOMContentLoaded', () => {
const navbarToggler = document.querySelector('.navbar-toggler');
const offcanvas = document.querySelector('#offcanvasDarkNavbar');

navbarToggler.addEventListener('click', () => {
  navbarToggler.style.display = 'none'; 
});

offcanvas.addEventListener('hidden.bs.offcanvas', () => {
  navbarToggler.style.display = ''; 
});
});

