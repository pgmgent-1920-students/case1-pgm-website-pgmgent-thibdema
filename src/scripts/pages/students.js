import { studentsDATA } from '../services/fetchURL';
import { personCard, randomBanner } from '../components';

export const mainStudents = () => {
  displayStudents();
  randomBanner();
};

const displayStudents = async () => {
  const DOMStudents = document.querySelector('#students');
  let tempStr = '';
  const data = await studentsDATA();
  console.log(data)
  data.forEach(e => {
    tempStr += personCard('students', e.fields.name_first, e.fields.name_last, e.id, e.fields.img[0].thumbnails.large.url);
  });
  DOMStudents.innerHTML = tempStr;
}