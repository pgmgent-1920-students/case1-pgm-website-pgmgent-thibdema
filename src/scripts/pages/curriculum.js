import { coursesDATA, technologiesDATA } from '../services/fetchURL';
import { removeDoublesInArray } from '../services/functions';
import { randomBanner } from '../components';
import { educationDuration } from '../services/config';

export const mainCurriculum = async () => {
  const data = await coursesDATA();
  const technologies = await technologiesDATA();
  displayHeading();
  randomBanner();
  await fillContent(data);
  await popupWindow(data, technologies);
}

const displayHeading = () => {
  educationDuration.map((e) => {
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
  for (let period = 0; period < educationDuration[2].amount; period += 2) {
    if (period > 3) {
      year = 2;
      currentPeriod = period - 3;
    } else {
      year = 1;
      currentPeriod = period +1;
    }

    let firstContent = false;
    let secondContent = false;
    let firstFull = false;

    data.map((e) => {
      if(e.category == category) {
        let firstItem = e.more.find((zoek) => zoek.periode == currentPeriod && zoek.year == year);
        let secondItem = e.more.find((zoek) => zoek.periode == currentPeriod+1 && zoek.year == year);

        if(firstItem) {
          (firstItem.fullsemester) ? firstFull = true : firstFull = false;
          firstContent = `
            <div class="curriculum__item__${(firstItem.fullsemester) ? 'semester' : 'large'}">
              <div class="flip-card" id="vak" vak="${e.name}" vakID="${firstItem.id}">
                <div class="flip-card-inner">
                  <div class="vakContent flip-card-front">
                    <div class="icon">${e.icon}</div>
                    <div class="studiepunten">${firstItem.studiepunten} <abbr title="studiepunten">sp</abbr></div>
                    ${e.name} ${(firstItem.part) ? firstItem.part : ''}
                    <div class="uren">${firstItem.uur} <abbr title="uren per week">u/w</abbr></div>
                  </div>
                  <div class="hoverVak flip-card-back">
                    <div class="icon">${e.icon}</div>
                    <div class="studiepunten">${firstItem.studiepunten} <abbr title="studiepunten">sp</abbr></div>
                    ${(firstItem.specific) ? firstItem.specific : `${e.name} ${(firstItem.part) ? firstItem.part : ''}` }
                    <div class="uren">${firstItem.uur} <abbr title="uren per week">u/w</abbr></div>
                  </div>
                </div>
              </div>
            </div>`;
        }

        if(secondItem) {
          secondContent = `
            <div class="curriculum__item__${(secondItem.fullsemester) ? 'semester' : 'large'}">
              <div class="flip-card" id="vak" vak="${e.name}" vakID="${secondItem.id}">
                <div class="flip-card-inner">
                  <div class="vakContent flip-card-front">
                    <div class="icon">${e.icon}</div>
                    <div class="studiepunten">${secondItem.studiepunten} <abbr title="studiepunten">sp</abbr></div>
                    ${e.name} ${(secondItem.part) ? secondItem.part : ''}
                    <div class="uren">${secondItem.uur} <abbr title="uren per week">u/w</abbr></div>
                  </div>
                  <div class="hoverVak flip-card-back">
                    <div class="icon">${e.icon}</div>
                    <div class="studiepunten">${secondItem.studiepunten} <abbr title="studiepunten">sp</abbr></div>
                    ${(secondItem.specific) ? secondItem.specific : `${e.name} ${(secondItem.part) ? secondItem.part : ''}` }
                    <div class="uren">${secondItem.uur} <abbr title="uren per week">u/w</abbr></div>
                  </div>
                </div>
              </div>
            </div>`;
        }
      };
    });

    (!firstContent) ? tempStr += `<div class="curriculum__item__large empty"></div>` : tempStr += firstContent;

    if(!firstFull) {
      (!secondContent) ? tempStr += `<div class="curriculum__item__large empty"></div>` : tempStr += secondContent;
    }

  }
  tempStr += '</div>';
  return tempStr;
}

const popupWindow = (data, technologies) => {
  const DOMPopup = document.querySelector('#popup');
  const DOMClose = document.querySelector('#close');
  const vakken = document.querySelectorAll('#vak');
  closePopup(DOMClose, DOMPopup);
  closePopup(DOMPopup, DOMPopup);
  vakken.forEach((vak) => {
    vak.addEventListener('click', (e) => {
      openPopup(DOMPopup);
      displaySpecificData(vak, data, technologies);
    });
  });
}

const openPopup = (DOM) => {
  DOM.classList.add('open');
};

const closePopup = (DOMClose, DOMPopup) => {
  DOMClose.addEventListener('click', (e) => DOMPopup.classList.remove('open'));
};

const displaySpecificData = async (ChosenCourse, data, technologies) => {
  const DOMContent = document.querySelector('#popup__window__content');
  const vak = ChosenCourse.getAttribute('vak');
  const vakid = ChosenCourse.getAttribute('vakid');
  const vakDATA = data.find((v) => v.name == vak);
  const specifiekeDATA = vakDATA.more.find((v) => v.id == vakid);

  DOMContent.innerHTML = `
    <h1 class="popup__window__content__title">${vakDATA.name}${(specifiekeDATA.specific) ? `: ${specifiekeDATA.specific}` : `` }</h1>
    <h3 class="popup__window__content__subtitle"></h3>
    <div class="row">
      <div>
        <h4>Technologies</h4>
        <ul class="popup__window__content__technologies">
          ${listTechnologies(specifiekeDATA, technologies)}
        </ul>
      </div>
      <div>
        <h4>Info</h4>
        <div class="popup__window__content__info">
          <p><b>${specifiekeDATA.studiepunten}</b> studiepunten</p>
          <p><b>${specifiekeDATA.uur}</b> uren les per week</p>
        </div>
      </div>
    </div>
  `;
}

const listTechnologies = (specDATA, technologies) => {
  let tempStr = '', vaktechnologies, currentTECH;
  console.log(technologies);
  (specDATA.technologies == 'all') ? vaktechnologies = technologies : vaktechnologies = specDATA.technologies; 
  vaktechnologies.forEach((technology) => {
    (specDATA.technologies == 'all') ? currentTECH = technology : currentTECH = technologies.find((e) => e.id == technology-1);
    tempStr += `
    <li class="technology">
      <div class="technology__icon">
        ${currentTECH.icon}
      </div>
      <div class="technology__name">
        ${currentTECH.name}
      </div>
    </li>`
  });
  return tempStr;
}