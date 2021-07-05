export const banner = (direction, bannerData) => {
  return `
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
}