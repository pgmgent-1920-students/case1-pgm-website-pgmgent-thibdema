const hamdiv = document.querySelector('.hamburgerbtn');
const hamburgerbtn = document.querySelector('.fa-bars');
const closebtn = document.querySelector('.fa-times');
const navul = document.querySelector('header nav ul');
const navitems = document.querySelectorAll('nav a');
const header = document.querySelector('header');

export function toggleMenu() {
  hamdiv.addEventListener("click", (ev) => {
    if(hamburgerbtn.getAttribute("class").includes("invisible")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navitems.forEach((e) => {
    e.addEventListener('click', (ev) => {
      closeMenu();
    });
  });
}

function closeMenu() {
  hamburgerbtn.classList.remove('invisible');
  closebtn.classList.add('invisible');
  navul.classList.add('invisible');
  header.classList.remove('fullheight');
}

function openMenu() {
  closebtn.classList.remove('invisible');
  hamburgerbtn.classList.add('invisible');
  navul.classList.remove('invisible');
  header.classList.add('fullheight');
}