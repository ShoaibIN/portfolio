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

let navbar = document.querySelector('.navbar');
document.addEventListener('scroll', () => {
  if (window.scrollY > 402) {
    navbar.classList.add('shadowed');
    toggle2.classList.remove('toggle-button-nav');
  } else {
    navbar.classList.remove('shadowed');
    toggle2.classList.add('toggle-button-nav');
  }
})