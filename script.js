const navBar = document.querySelector(".nav");
const navButton = document.querySelector(".nav-toggle");

// Hamburger Navigation
function toggleNavigation() {
  if (navBar.classList.contains("is-open")) {
    navBar.classList.remove("is-open");
  } else {
    navBar.classList.add("is-open");
  }
}

navButton.addEventListener("click", toggleNavigation);
