import { casesDATA } from '../services/fetchURL';
import { randomBanner } from '../components';

export const mainCaseDetail = async (params) => {
  const allCases = await casesDATA();
  const data = allCases.find((e) => e.id == params.id);
  displaySpecificData(data);
  randomBanner();
};

const displaySpecificData = (data) => {
  const DOMCaseDetail = document.querySelector('#casedetail');
  console.log(data)
  DOMCaseDetail.innerHTML = `
    <h1 class="casedetail__title">${data.title}</h1>
    <div class="detail__content">
      <div class="left-block">
        <div class="casedetail__content__image outer-div">
          <div class="casedetail__content__image_bg inner-div" style="background-image: url(${data.thumbnail})" alt="image ${data.title}"></div>
        </div>
        <p class="detail__date">${data.created_at}</p>
        <p class="detail__reference"><a href="${data.href}">${data.referentie}</a></p>
      </div>
      <div class="right-block">
        <h3 class="casedetail__content__subtitle">${data.vak}</h3>
        <p class="detail__text">${data.text}</p>
      </div>
    </div>
  `;
};