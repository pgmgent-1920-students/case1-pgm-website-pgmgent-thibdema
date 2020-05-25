import { bannersDATA } from '../services/fetchURL';
import { randomNumber } from '../services/functions';
import { banner } from './banner';

export const randomBanner = async () => {
  const DOMBanner = document.querySelector('#randomBanner');
  if(DOMBanner) {
    let direction;

    (randomNumber(0,2)) ? direction = 'reverse' : direction = '';
    const data = await bannersDATA();
    // Remove item that links to current page
    const dataRefactored = removeCurrentPageData(data);
    const bannerData = dataRefactored[randomNumber(0, dataRefactored.length)];  
    DOMBanner.innerHTML = banner(direction,bannerData);
  }
};


const removeCurrentPageData = (data) => {
  const hrefArr = window.location.href.split('/');
  const pageName = hrefArr[hrefArr.length-1];
  let arr = [];

  data.map((e) => {
    if(pageName !== e.href) {
      arr.push(e)
    }
  });
  return arr;
};