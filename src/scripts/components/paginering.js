import { itemsPerPage } from '../services/config';

export class Paginering {
  async mainPaginering() {
    const allItems = document.querySelectorAll('.personCard');
    const DOMPages = document.querySelector('#pages');
    await this.loadPages(DOMPages, allItems);
    await this.addListeners();
    await this.changePage();
  }

  loadPages(DOM, allItems) {
    let tempStr = '';
    const amountOfPages = Math.ceil(allItems.length/itemsPerPage);
    for (let i = 1; i < amountOfPages+1; i++) {
      tempStr += `
        <div class="page ${(i==1) ? 'activePage' : ''} ${(amountOfPages == 1) ? 'onlyPage' : ''}">
          ${i}
        </div>
      `;
    }
    DOM.innerHTML = tempStr;
  }

  addListeners() {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page) => {
      page.addEventListener('click', (e) => {
        this.changeActivePage(page);
      });
    });
  }

  changeActivePage(newActivePage) {
    const currentActivePage = document.querySelector('.activePage');
    currentActivePage.classList.remove('activePage');
    newActivePage.classList.add('activePage');
    this.changePage();
  }

  changePage() {
    const pagenumber = document.querySelector('.activePage').innerHTML;
    const maxID = pagenumber * itemsPerPage;
    const minID = maxID - itemsPerPage;
    const persons = document.querySelectorAll('.personCard');
    persons.forEach((person, index) => (minID <= index && maxID > index) ? person.style.display='block': person.style.display='none');
  }
  
}