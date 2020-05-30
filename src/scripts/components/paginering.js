export class Paginering {
  async mainPaginering(typeCard, itemsPerPage) {
    const typeCardID = `.${typeCard}`;
    const allItems = document.querySelectorAll(typeCardID);
    const DOMPages = document.querySelector('#pages');
    await this.loadPages(DOMPages, allItems, itemsPerPage);
    await this.addListeners(typeCardID, itemsPerPage);
    await this.changePage(typeCardID, itemsPerPage);
  }

  loadPages(DOM, allItems, itemsPerPage) {
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

  addListeners(typeCardID, itemsPerPage) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page) => {
      page.addEventListener('click', (e) => {
        this.changeActivePage(page, typeCardID, itemsPerPage);
      });
    });
  }

  changeActivePage(newActivePage, typeCardID, itemsPerPage) {
    const currentActivePage = document.querySelector('.activePage');
    currentActivePage.classList.remove('activePage');
    newActivePage.classList.add('activePage');
    this.changePage(typeCardID, itemsPerPage);
  }

  changePage(typeCardID, itemsPerPage) {
    const pagenumber = document.querySelector('.activePage').innerHTML;
    const maxID = pagenumber * itemsPerPage;
    const minID = maxID - itemsPerPage;
    const persons = document.querySelectorAll(typeCardID);
    persons.forEach((person, index) => (minID <= index && maxID > index) ? person.style.display='block': person.style.display='none');
  }
  
}