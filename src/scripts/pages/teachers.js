import { teachersDATA } from '../services/fetchURL';
import { Cards, randomBanner } from '../components';
import { itemsPerPage } from '../services/config';
import { removeDoublesInArray } from '../services/functions';


export const mainTeachers = async () => {
  const filter = new Filtering;
  const paginering = new Paginering;

  const data = await teachersDATA();

  displayTeachers(data);
  randomBanner();
  await filter.mainFilter(data);
  await paginering.mainPaginering();
};

const displayTeachers = (data) => {
  const DOMTeachers = document.querySelector('#teachers');
  let tempStr = '', card = new Cards;
  data.forEach((e) => {
    tempStr += card.personCard('teachers', e.id, e.thumbnail);
  });
  DOMTeachers.innerHTML = tempStr;
}

class Paginering {
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
        <div class="page ${(i==1) ? 'activePage' : ''}">
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
    const maxID = pagenumber * itemsPerPage-1;
    const minID = maxID - itemsPerPage;
    const teachers = document.querySelectorAll('.personCard');
    teachers.forEach((teacher, index) => (minID <= index && maxID >= index) ? teacher.style.display='block': teacher.style.display='none');
  }
  
}

class Filtering {
  async mainFilter(data) {
    const form = document.querySelector('form');
    await this.loadVakken(data);
    await this.eventListenerSubmit(form, data);
  }

  loadVakken(data) {
    const DOMVakken = document.querySelector('#vakken');
    let vakken = ["Show all"], tempStr = '';
    data.map((e) => e.vakken.map((vak) => vakken.push(vak)));
    vakken = removeDoublesInArray(vakken);
    vakken.forEach((v) => {
      tempStr += `<option>${v}</option>`;
    });
    DOMVakken.innerHTML = tempStr;
  }

  eventListenerSubmit(form, data) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // voorkom dat form data wilt versturen
      let formData = new FormData(form); // formData parameter moet de variable van je form zijn
      let vak = formData.get('vakken'); // get parameter moet value zijn van het name attribuut in je form
      this.filterTeachers(vak, data);
      const newPaginering = new Paginering;
      newPaginering.mainPaginering();
  })
  }

  filterTeachers(vak, data) {
    let newdata = [];
    if(vak == "Show all") {
      displayTeachers(data);
    } else {
      data.map((t) => {
        if(t.vakken.includes(vak)) {
          newdata.push(t);
        }
      });
      displayTeachers(newdata);
    }
  }
}