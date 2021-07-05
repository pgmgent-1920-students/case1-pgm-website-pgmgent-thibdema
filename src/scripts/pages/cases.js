import { casesDATA } from '../services/fetchURL';
import { Cards, randomBanner, Paginering } from '../components';
import { displayedAmountsOnPages } from '../services/config';

export const mainCases = async () => {
  const data = await casesDATA();
  displayCases(data);
  randomBanner();
  
  const newPaginering = new Paginering;
  newPaginering.mainPaginering('smallCard', displayedAmountsOnPages.cases);
};

const displayCases = async (data) => {
  const DOMCases = document.querySelector('#cases');
  let tempStr = '', card = new Cards;
  console.log(data)
  data.forEach(e => {
    tempStr += card.smallCard('cases', e.id, e.title, e.vak, e.thumbnail);
  });

  DOMCases.innerHTML = tempStr;
}