import { technologiesDATA, casesDATA } from '../services/fetchURL';
import { randomNumber } from '../services/functions';
import { displayedAmountsOnPages } from '../services/config';
import { Cards } from '../components';

export const mainOpleidingsinfo = async () => {
  const technologyData = await technologiesDATA();
  const casesData = await casesDATA();

  new Cases(3, casesData);
  const technologies = new RandomTechnologies;
  // Load technologies
  technologies.mainTechnologies(technologyData);
  // Adding eventlistener
  technologies.addOtherTechnologies(technologyData);
}

class RandomTechnologies {
  mainTechnologies(data) {
    const DOMTechnologies = document.querySelector('#randomTechnologies');
    const arrOfNumbers = this.getRandomNumbers(data.length);
    this.loadTechnologies(DOMTechnologies, arrOfNumbers, data);
  }

  loadTechnologies(DOM, arr, technologies) {
    let tempStr = '';
    arr.map((e) => tempStr += this.createTechnologyItem(technologies[e]));
    DOM.innerHTML = tempStr;
  }

  createTechnologyItem(data) {
    return `
      <li class='technologies__content__item'>
        ${data.icon}
        <p>${data.name}</p>
      </li>
    `; 
  }

  getRandomNumbers(maxSize) {
    let newArr = [];
    while(newArr.length < displayedAmountsOnPages.opleidingsinfo_technologies) {
      let number = randomNumber(0, maxSize);
      (!newArr.includes(number)) ? newArr.push(number) : '' ;
    }
    return newArr;
  }

  addOtherTechnologies(data) {
    const BtnOtherTechs = document.querySelector('#otherTechnologies');
    BtnOtherTechs.addEventListener('click', (e) => {
      this.mainTechnologies(data);
    });
  }
}

class Cases {
  constructor(itemsDisplayed, data) {
    this.DOM = document.querySelector('#cases');
    this.itemsDisplayed = itemsDisplayed;
    this.maxSize = data.length;
    this.data = data;
    this.mainCases();
  }

  mainCases() {
    let tempStr = '';
    const arr = this.getRandomCases();
    arr.map((e) => tempStr += this.individualCase(this.data[e]));
    this.DOM.innerHTML = tempStr;
  }

  getRandomCases() {
    let newArr = [];
    while(newArr.length < this.itemsDisplayed) {
      let number = randomNumber(0, this.maxSize);
      (!newArr.includes(number)) ? newArr.push(number) : '' ;
    }
    return newArr;
  }

  individualCase(e) {
    const card = new Cards;
    return card.smallCard(e.category, e.id, e.title, e.vak, e.thumbnail);
  }
}