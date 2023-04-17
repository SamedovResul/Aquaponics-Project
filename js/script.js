const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementsByClassName("navbar")[0];
const nav = document.querySelectorAll("nav a");
const header = document.getElementsByClassName("header")[0];
// const form = document.querySelectorAll("form")[0];

// for (let i = 0; i < form.length; i++) {
//   form[i].addEventListener("change", (e) => console.log(e.target.value));
// }

for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  header.classList.toggle("head");
});

document.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 80);
});

const handleSubmit = (e) => {
  e.preventDefault();

};

// form.addEventListener("submit", handleSubmit);
