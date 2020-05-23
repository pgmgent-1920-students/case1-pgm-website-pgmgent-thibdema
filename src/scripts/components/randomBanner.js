import { bannersDATA } from '../services/fetchURL';
import { randomNumber } from '../services/functions';


export const randomBanner = async () => {
  const banner = document.querySelector('#randomBanner');
  let direction;

  (randomNumber(0,1)) ? direction = 'reverse' : direction = '';
  const data = await bannersDATA();
  const bannerData = data[randomNumber(0, data.length)];

  banner.innerHTML = `
    <div class='banner__content ${direction}'>
      <div class="banner__text">
        <p class="banner__text__title">Bekijk ook onze<br><span class=''>${bannerData.category}</span></p>
        <a href="#!/${bannerData.href}" data-navigo>
            <button class="btn-1">Meer info</button>
        </a>
      </div>
      <img class="banner__image" src="${bannerData.image}" alt="image ${bannerData.category}"></img>
    </div>
  `;
};