

const About = document.querySelectorAll('.Əsas');
const AboutSection = document.getElementById('Əsas');


const wakeMeUp = document.querySelectorAll('.Problem');
const wakeMeUpSection = document.getElementById("Problem");

const App = document.querySelectorAll('.Həll');
const AppSection= document.getElementById("Həll");

const Team = document.querySelectorAll('.Qiymət');
const TeamSection = document.getElementById("Qiymət");

const Support = document.querySelectorAll('.Əlaqə');
const SupportSection = document.getElementById("Əlaqə");


const Contact = document.querySelectorAll('.Contact');
const ContactSection = document.getElementById("contact-section");

for (let i = 0; i < About.length; i++) {
  About[i].addEventListener("click", function(){
    AboutSection.scrollIntoView();
  })
}


for (let i = 0; i < wakeMeUp.length; i++) {
  wakeMeUp[i].addEventListener("click", function(){
    console.log(wakeMeUp)
    wakeMeUpSection.scrollIntoView();
  })
}

for (let i = 0; i < App.length; i++) {
  App[i].addEventListener("click", function(){
    console.log(AppSection)
    AppSection.scrollIntoView();
  })
}

for (let i = 0; i < Team.length; i++) {
  Team[i].addEventListener("click", function(){
    TeamSection.scrollIntoView();
  })
}

for (let i = 0; i < Support.length; i++) {
  Support[i].addEventListener("click", function(){
    SupportSection.scrollIntoView();
  })
}


for (let i = 0; i < Contact.length; i++) {
  Contact[i].addEventListener("click", function(){
    ContactSection.scrollIntoView();
  })
}



// burger function

const openBurger = document.getElementById('burger-open');
const burgerMenu = document.getElementById('burger-menu');
const closeBurger = document.getElementById('burger-close');


let display = false

$(document).ready(function(){
  $(".burger-open").click(function(){
    if(display){
      display = false
      console.log(display)
      $(".burger-menu").fadeOut();
    }else{
      display = true
      console.log(display)
      $(".burger-menu").fadeIn();
    }
  });

  $(".burger-close-byDiv").click(function(){
    if(display){
      display = false
      console.log(display)
      $(".burger-menu").fadeOut();
    }
  });
});


// send email

const Name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('Email');
const phone = document.getElementById('Phone');
const message = document.getElementById('message');
const submit = document.getElementById('btn');

let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
submit.addEventListener('click', function(){

  // tes
  const data ={
    name:Name.value,
    surname:surname.value,
    email:email.value,
    phone:phone.value,
    message: message.value
  }
  console.log(data)
  if(re.test(email.value)){
    if( Name.value && surname.value && phone.value){
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://infinite-castle-76696.herokuapp.com/send");
    xhttp.setRequestHeader("Content-type", 'application/json');
    xhttp.send(JSON.stringify(data));
    alert('Sizinlə əlaqə saxlanılacaq')
    Name.value = ''
    surname.value = ''
    email.value = ''
    phone.value = ''
    message.value= ''
  }else{
    alert('xaiş edirik xanaların hamısını doldurun')
  }
  }else{
    alert("Emaili doğru yazın")
  }
  
  
})

// nav bars




const topNav = document.querySelector('.top-nav')
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if(scroll > 100){
    $(".top-nav").fadeIn();
    topNav.style.height = "50px"
  }else{
    topNav.style.height = "0px"
    $(".top-nav").fadeOut();
  }
});