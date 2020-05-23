import { bannersDATA } from '../services/fetchURL';
import { randomNumber } from '../services/functions';


export const randomBanner = async () => {
  const DOMBanner = document.querySelector('#randomBanner');
  let direction;

  (randomNumber(0,1)) ? direction = 'reverse' : direction = '';
  const data = await bannersDATA();
  // Remove item that links to current page
  const dataRefactored = removeCurrentPageData(data);
  console.log(dataRefactored)
  const bannerData = dataRefactored[randomNumber(0, dataRefactored.length)];
  console.log(bannerData)
  DOMBanner.innerHTML = `
    <div class='banner ${direction}'>
      <div class="banner__text">
        <p class="banner__text__title">Bekijk ook onze</p>
        <span class='banner__text__category'>${bannerData.category}</span>
        <a href="#!/${bannerData.href}" data-navigo>
            <button class="btn-1">Meer info</button>
        </a>
      </div>
      <div class="outer-div">
        <div class="banner__image inner-div" style="background-image: url(${bannerData.image})" alt="image ${bannerData.category}"></div>
      </div>
    </div>
  `;
};


const removeCurrentPageData = (data) => {
  const hrefArr = window.location.href.split('/');
  const pageName = hrefArr[hrefArr.length-1];
  let wrongObj, arr = [];

  data.map((e) => {
    if(pageName !== e.category) {
      arr.push(e)
    }
  });
  return arr;
};