const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementsByClassName("navbar")[0];
const nav = document.querySelectorAll("nav a");
const header = document.getElementsByClassName("header")[0];

for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  header.classList.toggle("head")
});

document.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 80);
});
// document.addEventListener("click",()=>{
//   header.classList.toggle("active")
// })

// sticky navbar
