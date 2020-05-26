import { teachersDATA } from '../services/fetchURL';
import { Cards, randomBanner } from '../components';

export const mainTeachers = async () => {
  const data = await teachersDATA();
  displayTeachers(data);
  randomBanner();
};

const displayTeachers = async (data) => {
  const DOMTeachers = document.querySelector('#teachers');
  let tempStr = '', card = new Cards;
  
  console.log(data)
  data.forEach(e => {
    tempStr += card.personCard('teachers', e.id, e.thumbnail);
  });
  DOMTeachers.innerHTML = tempStr;
}