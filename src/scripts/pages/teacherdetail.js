import { teachersDATA } from '../services/fetchURL';
import { randomBanner } from '../components';

export const mainTeacherDetail = async (params) => {
  const allTeachers = await teachersDATA();
  const data = allTeachers.find((e) => e.id == params.id);
  displaySpecificData(data);
  randomBanner();
};

const displaySpecificData = (data) => {
  const DOMTeacherDetail = document.querySelector('#teacherdetail');

  DOMTeacherDetail.innerHTML = `
  <h1 class="studentdetail__title">${data.fname} ${data.lname}</h1>
  <div class="detail__content">
    <div class="left-block">
      <div class="teacherdetail__content__image outer-div">
        <div class="teacherdetail__content__image_bg inner-div" style="background-image: url(${data.thumbnail})" alt="image ${data.fname}  ${data.lname}"></div>
      </div>
      <div class="detail__flex">
        <div class="detail__flex__column__center">
          <h4>Vakken</h4>
          <ul class="detail__content__little">
            ${splitArrayToListitems(data.vakken)}
          </ul>
        </div>
        <div class="detail__flex__column__center">
          <h4>Interesses</h4>
          <ul class="detail__content__little">
            ${splitArrayToListitems(data.interests)}
          </ul>
        </div>
      </div>
    </div>
    <div class="right-block">
      <h3 class="studentdetail__content__subtitle">${data.quote}</h3>
      <p class="detail__text">${data.about}</p>
    </div>
  </div>
  `;
};

const splitArrayToListitems = (data) => {
  let tempStr = '';
  data.map((e) => tempStr += `<li>${e}</li>`);
  return tempStr;
}