import { studentsDATA } from '../services/fetchURL';
import { randomBanner } from '../components'

export const mainStudentDetail = async (params) => {
  const allPosts = await studentsDATA();
  const data = allPosts.find((e) => e.id == params.id);
  displaySpecificData(data);
  randomBanner();
};

const displaySpecificData = (data) => {
  const DOMBlogDetail = document.querySelector('#studentdetail');

  console.log(data)
  DOMBlogDetail.innerHTML = `
  <h1 class="studentdetail__title">${data.fields.name_first} ${data.fields.name_last}</h1>
  <div class="detail__content">
    <div class="left-block">
      <div class="blogdetail__content__image outer-div">
        <div class="blogdetail__content__image_bg inner-div" style="background-image: url(${data.fields.img[0].thumbnails.large.url})" alt="image ${data.title}"></div>
      </div>
      <div class="detail__flex">
        <div class="detail__flex__column__center">
          <div>
            <h4>Favoriete vak</h4>
            <p class="detail__content__little add">${data.fields.favourite}</p>
          </div>
          <div>
            <h4>Generatie</h4>
            <p class="detail__content__little">${data.fields.generation}</p>
          </div>
        </div>
        <div class="detail__flex__column__center">
          <h4>Interesses</h4>
          <ul class="detail__content__little">
            ${interestsList(data.fields.interests)}
          </ul>
        </div>
      </div>
    </div>
    <div class="right-block">
      <h3 class="studentdetail__content__subtitle">${data.fields.quote}</h3>
      <p class="detail__text">${addSpaces(data.fields.about)}</p>
    </div>
  </div>
  `;
};

const addSpaces = (text) => {
  return text.replace('.', '. &nbsp;');
};

const interestsList = (text) => {
  let tempStr = '';
  const items = text.split(',');
  console.log(items)
  items.map((e) => {
    tempStr += `<li>${e.replace(' ', '')}</li>`
  });
  return tempStr;
};