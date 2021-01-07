const invert = () => {
  document.querySelector('html').classList.toggle('invert');
  let imgs = document.querySelectorAll('img');
  for (img of imgs) {
    img.classList.toggle('invert-img');
  }
  document.querySelector('.light').classList.toggle('toggle-button');
  document.querySelector('.dark').classList.toggle('toggle-button');
  document.querySelector('.light2').classList.toggle('toggle-button');
  document.querySelector('.dark2').classList.toggle('toggle-button');
}

let toggle = document.querySelector('.darkmode');
let toggle2 = document.querySelector('.darkmode2');
toggle.addEventListener('click', invert);
toggle2.addEventListener('click', invert);

document.querySelector('.nav-open').addEventListener('click', () => {
  document.querySelector(".overlay").style.width = '100%';
  document.querySelector("html").style.overflow = 'hidden';
});

document.querySelector('.closebtn').addEventListener('click', () => {
  document.querySelector(".overlay").style.width = '0%';
  document.querySelector("html").style.overflow = 'auto';
});

let mobileLinks = document.querySelectorAll('.navItem');
for (mobile of mobileLinks) {
  mobile.addEventListener('click', () => {
    document.querySelector(".overlay").style.width = '0%';
    document.querySelector("html").style.overflow = 'auto';
  })
}

let project = document.querySelector('#projectSection');
let about = document.querySelector('#aboutSection');
let contact = document.querySelector('#contactSection');
let navbar = document.querySelector('.navbar');
document.addEventListener('scroll', () => {
  if (window.scrollY > (project.offsetTop - 20) && window.scrollY < (about.offsetTop - 100)) {
    navbar.classList.add('shadowed');
    toggle2.classList.remove('toggle-button-nav');
  } else if (window.scrollY < (project.offsetTop - 20)) {
    navbar.classList.remove('shadowed');
    toggle2.classList.add('toggle-button-nav');
  } else if (window.scrollY > (about.offsetTop - 100)) {
    navbar.classList.remove('shadowed');
  }

  if (window.scrollY > about.offsetTop && window.scrollY < (contact.offsetTop - 100)) {
    navbar.classList.add('lighten');
    toggle2.classList.remove('toggle-button-nav');
  } else if (window.scrollY < about.offsetTop) {
    navbar.classList.remove('lighten');
  } else if (window.scrollY > (contact.offsetTop - 100)) {
    navbar.classList.remove('lighten');
  }

  if (window.scrollY > contact.offsetTop) {
    navbar.classList.add('shadowed');
    toggle2.classList.remove('toggle-button-nav');
  }
});


let year = new Date;
document.querySelector('#year').innerText = year.getFullYear();
