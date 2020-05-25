import { navigationDATA } from '../services/fetchURL';
import { closeMenu } from '../components/hamburgermenu';

export const activeNavigation = (href) => {
  const navItems = document.querySelectorAll('header nav ul li a');
  const pageName = getLastPartURL(window.location.href);
  
  navItems.forEach((e) => {
    let href = getLastPartURL(e.getAttribute('href'));
    (href == pageName) ? e.classList.add('activeNav') : e.classList.remove('activeNav');
  });
}

export const makeActive = () => {
  let navItems = document.querySelectorAll('a');
  navItems.forEach((e) => {
    e.addEventListener('click', (e) => {
      mainNavigation();
      if(window.innerWidth < 720) {
        closeMenu();
      }
    });
  });
}

const navConstructor = async () => {
  const navList = document.querySelector('header ul');
  const data = await navigationDATA();
  let tempStr = '';
  data.map((e) => {
    tempStr += `<li><a href="#!/${e.href}" data-navigo>${e.content}</a></li>`;
  });
  navList.innerHTML = tempStr;
}

export const mainNavigation = async () => {
  await navConstructor();
  await activeNavigation();
  await makeActive();
}

const getLastPartURL = (href) => {
  const hrefArr = href.split('/');
  return hrefArr[hrefArr.length-1];
};