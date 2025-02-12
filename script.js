/* Toggle Hamburger Menu & Mobile Navigation */
function toggleMenu() {
    const mobileNav = document.getElementById("mobile-nav");
    mobileNav.classList.toggle("open");
    animateHamburger();
  }
  
  function animateHamburger() {
    const spans = document.querySelectorAll(".hamburger span");
    const mobileNav = document.getElementById("mobile-nav");
    spans.forEach((span, index) => {
      if (mobileNav.classList.contains("open")) {
        if (index === 0) {
          span.style.transform = "rotate(45deg) translate(5px, 5px)";
        } else if (index === 1) {
          span.style.opacity = "0";
        } else if (index === 2) {
          span.style.transform = "rotate(-45deg) translate(5px, -5px)";
        }
      } else {
        span.style.transform = "rotate(0) translate(0, 0)";
        if (index === 1) {
          span.style.opacity = "1";
        }
      }
    });
  }
  
  /* Toggle Dark Mode with Persistence */
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
  }
  
  /* Set up dark mode event listeners */
  document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
  const darkModeToggleMobile = document.getElementById("dark-mode-toggle-mobile");
  if (darkModeToggleMobile) {
    darkModeToggleMobile.addEventListener("click", toggleDarkMode);
  }
  
  /* Close mobile menu when a nav link is clicked */
  document.querySelectorAll(".mobile-nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      const mobileNav = document.getElementById("mobile-nav");
      if (mobileNav.classList.contains("open")) {
        mobileNav.classList.remove("open");
        animateHamburger();
      }
    });
  });
  
  /* On Page Load */
  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark-mode");
    }
    
    // Fade-in animations using Intersection Observer
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });
  