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

// send email

const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;
  const message = document.querySelector(".text-message").value;
  const radioInputs = document.querySelectorAll('input[name="size"]');
  const type = radioInputs[0].checked
    ? radioInputs[0].value
    : radioInputs[1].value;

  if (email) {
    fetch("https://azirrigationserver.azurewebsites.net/contact/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        message: message,
        type: type,
      }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
});
