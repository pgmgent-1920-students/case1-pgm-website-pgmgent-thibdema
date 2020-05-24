import { coursesDATA, blogPostsDATA, studentsDATA } from '../services/fetchURL';
import { sortBlogPosts } from '../services/sortArray';
import { makeBlogPostCard, randomBanner } from '../components';
import { amountOfBlogPostsDisplayed, repeatArraySlider } from '../services/config';

class Home {
  constructor() {
    this.DOMSliderVakken = document.querySelector('#slider-courses');
    this.DOMLastBlogPosts = document.querySelector('#lastBlogPosts');
    this.DOMOurStudents = document.querySelector('#our-students');
  }

  async sliderCourses() {
    const data = await coursesDATA();
    let tempStr = '';
    for (let i = 0; i < repeatArraySlider; i++) {
      data.forEach(course => {
        tempStr += `
        <li>
          <span class="courselogo">${course.icon}</span>
          <span class="coursename">${course.name}</span>
        </li>
        `;
      });
    }
    this.DOMSliderVakken.innerHTML += tempStr;
  }

  async lastBlogPosts() {
    let data = await blogPostsDATA();
    let tempStr = '';
    const sortedData = sortBlogPosts(data);
    sortedData.slice(0,amountOfBlogPostsDisplayed).forEach((e) => {
      tempStr += makeBlogPostCard(e);
    });
    
    this.DOMLastBlogPosts.innerHTML = tempStr;
  }

  async ourStudents() {
    let data = await studentsDATA();
    let tempStr = '';
    for (let i = 0; i < repeatArraySlider; i++) {
      data.forEach((e) => {
        tempStr += `
          <li class="our-students__item">
            <a href="#!/students/detail/${e.id}" data-navigo>
              <div class="our-students__item__img" style="background-image: url('${e.fields.img[0].thumbnails.large.url}')"></div>
            </a>
          </li>
        `;
      });
    }

    this.DOMOurStudents.innerHTML = tempStr;
  }
}

export const mainHome = async () => {
  const init = new Home;
  init.sliderCourses();
  init.lastBlogPosts();
  init.ourStudents();
  randomBanner();
};