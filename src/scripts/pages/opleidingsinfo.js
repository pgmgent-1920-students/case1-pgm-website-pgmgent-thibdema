import { technologiesDATA } from '../services/fetchURL';
import { randomNumber } from '../services/functions';
import { displayedAmountsOnPages } from '../services/config';

export const mainOpleidingsinfo = async () => {
  const technologyData = await technologiesDATA();
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