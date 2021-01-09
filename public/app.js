// Invert colors
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

// Darkmode Heading
let toggle = document.querySelector('.darkmode');
let toggle2 = document.querySelector('.darkmode2');
toggle.addEventListener('click', invert);
toggle2.addEventListener('click', invert);

// Darkmode NAvigation
let project = document.querySelector('#projectSection');
let about = document.querySelector('#aboutSection');
let contact = document.querySelector('#contactSection');
let navbar = document.querySelector('.navbar');
let navLink = document.querySelectorAll('.nav__list-item');


document.addEventListener('scroll', () => {
  if (window.scrollY > (project.offsetTop - 20) && window.scrollY < (about.offsetTop - 100)) {
    navLink[0].classList.add('active-nav');
    navLink[1].classList.remove('active-nav');
    navLink[2].classList.remove('active-nav');
    navbar.id = 'shadowed';
    toggle2.classList.add('toggle-button-nav');
  } else if (window.scrollY < (project.offsetTop - 20)) {
    navLink[0].classList.remove('active-nav');
    navbar.removeAttribute('id');
    toggle2.classList.remove('toggle-button-nav');
  } else if (window.scrollY > (about.offsetTop - 100)) {
    navLink[0].classList.remove('active-nav');
    navLink[1].classList.add('active-nav');
    navLink[2].classList.remove('active-nav');
    navbar.removeAttribute('id');
  }

  if (window.scrollY > about.offsetTop && window.scrollY < (contact.offsetTop - 100)) {
    navbar.classList.add('lighten');
  } else if (window.scrollY < about.offsetTop) {
    navbar.classList.remove('lighten');
  } else if (window.scrollY > (contact.offsetTop - 100)) {
    navLink[0].classList.remove('active-nav');
    navLink[1].classList.remove('active-nav');
    navLink[2].classList.add('active-nav');
    navbar.classList.remove('lighten');
  }

  if (window.scrollY > contact.offsetTop) {
    navbar.id = 'shadowed';
    toggle2.classList.add('toggle-button-nav');
  }
});

// Menu Bar
let body = document.querySelector('body');
let menu = document.querySelector('.menu-icon');
let menuItems = document.querySelectorAll('.nav__list-item');

menu.addEventListener('click', () => {
  body.classList.toggle('nav-active');
})

for (items of menuItems) {
  items.addEventListener('click', () => {
    body.classList.toggle('nav-active');
  })
}

let year = new Date;
document.querySelector('#year').innerText = year.getFullYear();

// GSAP Animations
gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline();

tl.from('.stagger2', {
    opacity: 0,
    y: -50,
    stagger: .3,
    ease: 'Power1.easeNone',
    duration: 2
  }, '=.5')
  .from('.stagger1', {
    opacity: 0,
    x: -50,
    stagger: .3,
    ease: 'Power1.easeNone',
    duration: 2
  }, '-=2')
  .from('.logoLeft', {
    opacity: 50,
    x: -20,
    ease: 'Power1.easeNone',
    duration: 0.5
  }, '-=3')
  .from('.logoRight', {
    opacity: 50,
    x: 20,
    ease: 'Power1.easeNone',
    duration: 0.5
  }, '-=2.5')
  .from('.logoCenter', {
    opacity: 50,
    y: -25,
    ease: 'Power1.easeNone',
    duration: 0.5
  }, '-=2')
  .from('.darkmode', {
    opacity: 0,
    y: -25,
    ease: 'Power1.easeNone',
    duration: 0.5
  }, '-=2')
  .from('.arrow', {
    opacity: 0,
    y: -50,
    ease: 'Power1.easeNone',
    duration: 0.5
  }, '-=1.6');

let stagger3 = gsap.utils.toArray('.stagger3');
stagger3.forEach((stagger3) => {
  gsap.from(stagger3, {
    scrollTrigger: {
      trigger: stagger3,
      start: "top center"
    },
    opacity: 0,
    y: -50,
    stagger: .3,
    ease: 'Power1.easeNone',
    duration: 1
  });
});

let portfolioButton = gsap.utils.toArray('.portfolioButton');
portfolioButton.forEach((portfolioButton) => {
  gsap.from(portfolioButton, {
    scrollTrigger: {
      trigger: portfolioButton,
      start: "top center"
    },
    opacity: 0,
    y: 50,
    ease: 'Power1.easeNone',
    duration: .8
  });
});

let portfolioImg = gsap.utils.toArray('.portfolioImg');
portfolioImg.forEach((portfolioImg) => {
  gsap.from(portfolioImg, {
    scrollTrigger: {
      trigger: portfolioImg,
      start: "top center"
    },
    opacity: 0,
    x: 100,
    ease: 'Power1.easeNone',
    duration: 1
  });
});

let ImgLeft = gsap.utils.toArray('#imgLeft');
ImgLeft.forEach((ImgLeft) => {
  gsap.from(ImgLeft, {
    scrollTrigger: {
      trigger: ImgLeft,
      start: "top center"
    },
    opacity: 0,
    x: -100,
    ease: 'Power1.easeNone',
    duration: 1
  });
});

gsap.from('.aboutStagger', {
  scrollTrigger: {
    trigger: '.aboutStagger',
    start: "top center"
  },
  opacity: 0,
  y: 100,
  stagger: .3,
  ease: 'Power1.easeNone',
  duration: 1
});

gsap.from('.stagger5', {
  scrollTrigger: {
    trigger: '.stagger5',
    start: "top bottom"
  },
  opacity: 0,
  x: -50,
  stagger: .3,
  ease: 'Power1.easeNone',
  duration: 1
});