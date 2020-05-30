import { teachersDATA } from '../services/fetchURL';
import { Cards, randomBanner, Paginering } from '../components';
import { removeDoublesInArray } from '../services/functions';
import { displayedAmountsOnPages } from '../services/config';


export const mainTeachers = async () => {
  const filter = new Filtering;
  const paginering = new Paginering;

  const data = await teachersDATA();

  displayTeachers(data);
  randomBanner();
  await filter.mainFilter(data);
  await paginering.mainPaginering('personCard', displayedAmountsOnPages.teachers);
};

const displayTeachers = (data) => {
  const DOMTeachers = document.querySelector('#teachers');
  let tempStr = '', card = new Cards;
  data.forEach((e) => {
    tempStr += card.personCard('teachers', e.id, e.thumbnail);
  });
  DOMTeachers.innerHTML = tempStr;
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
      newPaginering.mainPaginering('personCard', displayedAmountsOnPages.teachers);
    });
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