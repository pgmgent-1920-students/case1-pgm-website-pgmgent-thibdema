import { werkpleklerenDATA } from '../services/fetchURL';
import { scrollToTop } from '../services/functions';

export const footer = async () => {
  const init = new Footer;
  await init.loadItems();
  await init.scrollTop();
};



class Footer {
  scrollTop() {
    const navItems = document.querySelectorAll('footer nav a');
    navItems.forEach((e) => scrollToTop(e));
  }
  async loadItems() {
    const DOMWerkpleklerenList = document.querySelector('#footer_nav_werkplekleren');
    let tempStr = '';
    const data = await werkpleklerenDATA();
    console.log(data)
    data.map((e) => tempStr += `<li><a href="${e.href}" target="_blank" rel="noopener noreferrer">${e.category}</a></li>`);
    DOMWerkpleklerenList.innerHTML = tempStr;
  }
}