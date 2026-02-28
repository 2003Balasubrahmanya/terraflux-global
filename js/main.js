document.addEventListener("DOMContentLoaded", function () {

  const fadeSections = document.querySelectorAll(".fade-section");

  window.addEventListener("scroll", () => {
    fadeSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 100) {
        section.classList.add("show");
      }
    });
  });

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");   // 👈 This line added
    navLinks.classList.toggle("active");
  });

});
