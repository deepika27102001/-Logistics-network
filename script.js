document.getElementById("toggle-dark-mode").addEventListener("change", function() {
  document.body.classList.toggle("dark-mode");
});

document.querySelector(".accordion-toggle").addEventListener("click", function() {
  const accordionContent = document.querySelector(".accordion-content");
  accordionContent.style.display = accordionContent.style.display === "block" ? "none" : "block";
});

const scrollTopButton = document.getElementById("scroll-top");

window.addEventListener("scroll", function() {
  if (window.scrollY > 300) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});

scrollTopButton.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
