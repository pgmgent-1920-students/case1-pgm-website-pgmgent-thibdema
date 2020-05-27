import { coursesDATA } from '../services/fetchURL';
import { removeDoublesInArray } from '../services/functions';
import { randomBanner } from '../components';

export const mainCurriculum = async () => {
  const data = await coursesDATA();
  displayHeading();
  fillContent(data);
  randomBanner();
}

const heading = [
  {
    name: "Jaar",
    amount: "2",
    DOM: "year"
  },
  {
    name: "Semester",
    amount: "4",
    DOM: "semester"
  },
  {
    name: "Periode",
    amount: "8",
    DOM: "period"
  }
];

const displayHeading = () => {
  heading.map((e) => {
    let DOMELEMENT = document.querySelector(`#${e.DOM}`);
    let tempStr = '';
    for (let i = 0; i < e.amount; i++) {
      tempStr += `
        <div class="curriculum__item__${e.DOM}">
          ${e.name} ${i+1}
        </div>`;
    }
    DOMELEMENT.innerHTML = tempStr;
  });
}

const fillContent = (data) => {
  const DOMVakken = document.querySelector('#curriculumVakken');
  let categories = [], tempStr = '';
  data.map((e) => categories.push(e.category));
  categories = removeDoublesInArray(categories);
  console.log(categories)
  categories.map((category) => tempStr += loopRows(category, data));
  DOMVakken.innerHTML = tempStr;
}

const loopRows = (category, data) => {
  let tempStr = `<div class="curriculum__row large ${category}">`, year = 1, currentPeriod = 1;
  for (let period = 0; period < heading[2].amount; period++) {
    if (period > 3) {
      year = 2;
      currentPeriod = period - 3;
    } else {
      year = 1;
      currentPeriod = period +1;
    }

    let tussen = false;
    data.map((e) => {
      if(e.category == category) {
        let exists = e.more.find((zoek) => zoek.periode == currentPeriod && zoek.year == year);
        if(exists) {
          tussen = `
          <div class="curriculum__item__large flip-card">
            <div class="flip-card-inner">
              <div class="vakContent flip-card-front">
                <div class="icon">${e.icon}</div>
                <div class="studiepunten">${exists.studiepunten} sp</div>
                ${e.name} ${(exists.part) ? exists.part : ''}
                <div class="uren">${exists.uur} u/w</div>
              </div>
              <div class="hoverVak flip-card-back">
                <div class="icon">${e.icon}</div>
                <div class="studiepunten">${exists.studiepunten} sp</div>
                ${exists.specific}
                <div class="uren">${exists.uur} u/w</div>
              </div>
            </div>
          </div>`;
        }
      };
    });
    if(tussen == false) {
      tussen = `<div class="curriculum__item__large empty"></div>`;
    }
    tempStr += tussen;
  }
  tempStr += '</div>';
  return tempStr;
}