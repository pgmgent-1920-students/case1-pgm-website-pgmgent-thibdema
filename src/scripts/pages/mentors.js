import { mentorsDATA } from '../services/fetchURL';
import { removeDoublesInArray } from '../services/functions';
import { Cards, randomBanner } from '../components';

export const mainMentors = async () => {
  const data = await mentorsDATA();
  displayStudents(data);
  randomBanner();
};

const displayStudents = async (data) => {
  const DOMMentors = document.querySelector('#mentors');
  let tempStr = '', card = new Cards;
  
  data.forEach(e => {
    tempStr += card.personCard('mentors', e.id, e.thumbnail);
  });
  DOMMentors.innerHTML = tempStr;
}