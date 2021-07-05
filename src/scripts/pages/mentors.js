import { mentorsDATA } from '../services/fetchURL';
import { Cards, randomBanner, Paginering } from '../components';
import { displayedAmountsOnPages } from '../services/config';

export const mainMentors = async () => {
  const data = await mentorsDATA();
  displayStudents(data);
  randomBanner();
  
  const newPaginering = new Paginering;
  newPaginering.mainPaginering('personCard', displayedAmountsOnPages.mentors);
};

const displayStudents = async (data) => {
  const DOMMentors = document.querySelector('#mentors');
  let tempStr = '', card = new Cards;
  
  data.forEach(e => {
    tempStr += card.personCard('mentors', e.id, e.thumbnail);
  });
  DOMMentors.innerHTML = tempStr;
}