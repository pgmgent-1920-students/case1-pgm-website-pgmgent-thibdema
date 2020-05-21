import { coursesDATA } from '../services/fetchURL';

class Home {
  constructor() {
    this.DOMBannerVakken = document.querySelector('#banner-courses');
  }

  async bannerCourses () {
    const data = await coursesDATA();
    let tempStr = '';
    for (let i = 0; i < 20; i++) {
      data.forEach(course => {
        tempStr += `
        <li>
          <span class="courselogo">${course.icon}</span>
          <span class="coursename">${course.name}</span>
        </li>
        `;
      });
    }
    this.DOMBannerVakken.innerHTML += tempStr;
  }
}

export const mainHome = async () => {
  const init = new Home;
  init.bannerCourses();
};