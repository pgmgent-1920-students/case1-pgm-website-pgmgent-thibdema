import { mentorsDATA } from '../services/fetchURL';
import { randomBanner } from '../components';

export const mainMentorDetail = async (params) => {
  const allMentors = await mentorsDATA();
  const data = allMentors.find((e) => e.id == params.id);
  displaySpecificData(data);
  randomBanner();
};

const displaySpecificData = (data) => {
  const DOMMentorDetail = document.querySelector('#mentordetail');

  DOMMentorDetail.innerHTML = `
  <h1 class="mentordetail__title">${data.fname} ${data.lname}</h1>
  <div class="detail__content">
    <div class="left-block">
      <div class="mentordetail__content__image outer-div">
        <div class="mentordetail__content__image_bg inner-div" style="background-image: url(${data.thumbnail})" alt="image ${data.fname} ${data.lname}"></div>
      </div>
    </div>
    <div class="right-block">
      <h3 class="mentordetail__content__subtitle">${data.functie}</h3>
      <p class="detail__contact"><b>Email: </b> ${data.email}</p>
      <p class="detail__contact"><b>Telefoon: </b> ${data.telefoon}</p>
    </div>
  </div>
  `;
};