// KK Cloud Kitchen JavaScript

document.addEventListener("DOMContentLoaded", () => {
  console.log("KK Cloud Kitchen Website Loaded");

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Welcome message
  setTimeout(() => {
    alert("🍕 Welcome to KK Cloud Kitchen!");
  }, 1000);
});
