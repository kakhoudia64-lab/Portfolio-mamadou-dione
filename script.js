
document.addEventListener("DOMContentLoaded", () => {
  // Active les icônes Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Menu de navigation sur téléphone
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");

      const isOpen = nav.classList.contains("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fermer le menu" : "Ouvrir le menu"
      );

      menuToggle.innerHTML = isOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

      if (window.lucide) {
        window.lucide.createIcons();
      }
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i data-lucide="menu"></i>';

        if (window.lucide) {
          window.lucide.createIcons();
        }
      });
    });
  }

  // Animation légère à l'apparition des sections
  const sections = document.querySelectorAll(
    ".hero-text, .hero-image, .section > *, .timeline article, .skills article, .research article"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    sections.forEach(section => {
      section.classList.add("reveal");
      observer.observe(section);
    });
  }

  // Année automatique dans le pied de page
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
