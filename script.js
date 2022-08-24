const mobileMenu = document.querySelector("#mobileSidebar");

const openMobileMenuButton = document.querySelector("#open-mobile-menu-button");
const closeMobileMenuButton = document.querySelector(
  "#close-mobile-menu-button"
);

closeMobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

openMobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

const submenuLinks = document.querySelectorAll(".submenuLink");

for (const link of submenuLinks) {
  link.addEventListener("click", () => {
    link.nextElementSibling.classList.toggle("hidden");
    link.lastElementChild.classList.toggle("rotate-180");
  });
}
