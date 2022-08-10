// If the scrollY value is greater than 0, add the class 'active' to the navbar element, otherwise remove it.

const navbar = document.getElementById("header");

function activeScroll() {
  navbar.classList.toggle("active", scrollY > 0);
}

window.addEventListener("scroll", activeScroll);