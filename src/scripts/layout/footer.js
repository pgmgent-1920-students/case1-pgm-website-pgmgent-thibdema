import { werkpleklerenDATA, bannersDATA } from '../services/fetchURL';
import { scrollToTop } from '../services/functions';

export const footer = async () => {
  const init = new Footer;
  await init.loadNavigation();
  await init.scrollTop();
};



class Footer {
  scrollTop() {
    const navItems = document.querySelectorAll('footer nav a');
    navItems.forEach((e) => scrollToTop(e));
  }

  loadNavigation() {
    this.loadWerkpleklerenList();
    this.loadWiezijnweList();
  }

  async loadWerkpleklerenList() {
    const DOMWerkpleklerenList = document.querySelector('#footer_nav_werkplekleren');
    let tempStr = '';
    const data = await werkpleklerenDATA();
    data.map((e) => tempStr += `<li><a href="${e.href}" target="_blank" rel="noopener noreferrer">${e.category}</a></li>`);
    DOMWerkpleklerenList.innerHTML = tempStr;
  }

  async loadWiezijnweList() {
    const DOMWiezijnweList = document.querySelector('#footer_nav_wiezijnwe');
    let tempStr = '';
    const data = await bannersDATA();
    data.map((e) => (e.wiezijnwe) ? tempStr += `<li><a href="/${e.href}" data-navigo>${e.category}</a></li>` : '');
    DOMWiezijnweList.innerHTML = tempStr;
  }
  
}