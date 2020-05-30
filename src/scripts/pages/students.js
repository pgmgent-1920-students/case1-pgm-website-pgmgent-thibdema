import { studentsDATA } from '../services/fetchURL';
import { removeDoublesInArray } from '../services/functions';
import { Cards, randomBanner, Paginering } from '../components';

export const mainStudents = async () => {
  const filter = new Filtering;
  const paginering = new Paginering;

  const data = await studentsDATA();

  displayStudents(data);
  randomBanner();
  
  await filter.mainFilter(data);
  await paginering.mainPaginering('personCard');
};

const displayStudents = async (data) => {
  const DOMStudents = document.querySelector('#students');
  let tempStr = '', card = new Cards;
  
  console.log(data)
  data.forEach(e => {
    tempStr += card.personCard('students', e.id, e.fields.img[0].thumbnails.large.url);
  });
  DOMStudents.innerHTML = tempStr;
}

class Filtering {
  async mainFilter(data) {
    const DOMFavoVak = document.querySelector('#favovakken');
    const DOMGeneration = document.querySelector('#generation');
    const DOMForm = document.querySelector('form');
    await this.loadFavovak(DOMFavoVak, data);
    await this.loadGeneration(DOMGeneration, data);
    await this.eventListenerSubmit(DOMForm, data);
  }

  loadFavovak(DOM, data) {
    let tempStr = '', favorieteVakken = ["Show all"];
    data.map((e) => favorieteVakken.push(e.fields.favourite));
    favorieteVakken = removeDoublesInArray(favorieteVakken);
    favorieteVakken.map((e) => tempStr += `<option>${e}</option>`);
    DOM.innerHTML = tempStr;
  }

  loadGeneration(DOM, data) {
    let tempStr = '', generation = ["Show all"];
    data.map((e) => generation.push(e.fields.generation));
    generation = removeDoublesInArray(generation);
    generation.map((e) => tempStr += `<option>${e}</option>`);
    DOM.innerHTML = tempStr;
  }

  eventListenerSubmit(form, data) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // voorkom dat form data wilt versturen
      let formData = new FormData(form);
      let favovak = formData.get('favovakken');
      let generation = formData.get('generation');
      this.filterStudents(favovak, generation, data);
      const newPaginering = new Paginering;
      newPaginering.mainPaginering('personCard');
    });
  }

  filterStudents(favovak, generation, data) {
    let newdata = [];
    if(favovak == "Show all" && generation == "Show all") {
      newdata = data;
    } else if (favovak == "Show all") {
      data.map((student) => (student.fields.generation == generation) ? newdata.push(student) : '');
    } else if (generation == "Show all") {
      data.map((student) => (student.fields.favourite == favovak) ? newdata.push(student) : '');
    } else {
      data.map((student) => (student.fields.favourite == favovak && student.fields.generation == generation) ? newdata.push(student) : '');
    }
    displayStudents(newdata);
  }
}