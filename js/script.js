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
  let fullName = document.querySelector(".name");
  let email = document.querySelector(".email");
  let message = document.querySelector(".text-message");
  const radioInputs = document.querySelectorAll('input[name="size"]');
  const type = radioInputs[0].checked
    ? radioInputs[0].value
    : radioInputs[1].value;

  function sendMail() {
    let params = {
      fullName: fullName.value,
      email: email.value,
      message: message.value,
      type: type,
    };
    emailjs.send("service_4hrt4z1", "template_7nmtapv", params)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }

  if (!email) {
    alert("Email daxil edin");
  }
  if (email) {
    fetch("https://azirrigationserver.azurewebsites.net/contact/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullName.value,
        email: email.value,
        message: message.value,
        type: type,
      }),
    })
      .then((res) => {
        console.log(fullName);
        sendMail();
        // document.querySelector(".name").value = ''
        reset(fullName, email, message);
      })
      .catch((err) => console.log(err));
  }
});

function reset(fullName, email, message) {
  fullName.value = "";
  email.value = "";
  message.value = "";
}
