const menuButton = document.querySelector(".mobileNav .menuButton");
menuButton.addEventListener("click", (e) => {
  alert("clicked");
});

const mobileMenu = document.querySelector("#mobileSidebar");

const closeMobileMenuButton = document.querySelector(
  "#close-mobile-menu-button"
);
closeMobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});
