import { teachersDATA } from '../services/fetchURL';
import { personCard, randomBanner } from '../components';

export const mainTeachers = async () => {
  const data = await teachersDATA();
  displayTeachers(data);
  randomBanner();
};

const displayTeachers = async (data) => {
  const DOMTeachers = document.querySelector('#teachers');
  let tempStr = '';
  
  console.log(data)
  data.forEach(e => {
    tempStr += personCard('teachers', e.id, e.thumbnail);
  });
  DOMTeachers.innerHTML = tempStr;
}