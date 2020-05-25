import { studentsDATA } from '../services/fetchURL';
import { removeDoublesInArray } from '../services/functions';
import { personCard, randomBanner } from '../components';

export const mainStudents = async () => {
  const data = await studentsDATA();
  displayStudents(data);
  randomBanner();
  filtering(data);
};

const displayStudents = async (data) => {
  const DOMStudents = document.querySelector('#students');
  let tempStr = '';
  
  console.log(data)
  data.forEach(e => {
    tempStr += personCard('students', e.id, e.fields.img[0].thumbnails.large.url);
  });
  DOMStudents.innerHTML = tempStr;
}

const filtering = (data) => {
  const showAll = 'Show all';
  favoVak(data, showAll);
  
}

const favoVak = (data, showAll) => {
  const DOMFavoVak = document.querySelector('#favovak');
  let tempStr = '';
  let favorieteVakken = removeDoublesInArray(data.map((e) => e.fields.favourite));
  favorieteVakken.push(showAll);
  favorieteVakken.map((e) => tempStr += `<li>${e}</li>`);
  DOMFavoVak.innerHTML = tempStr;
}