import { coursesDATA, blogPostsDATA, studentsDATA } from '../services/fetchURL';
import { sortBlogPosts } from '../services/sortArray';
import { makeBlogPostCard } from '../components/blogPostCard';
import { amountOfBlogPostsDisplayed, repeatArraySlider } from '../services/config';

class Home {
  constructor() {
    this.DOMBannerVakken = document.querySelector('#banner-courses');
    this.DOMLastBlogPosts = document.querySelector('#lastBlogPosts');
    this.DOMOurStudents = document.querySelector('#our-students');
  }

  async bannerCourses() {
    const data = await coursesDATA();
    console.log(data.length)
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
    this.DOMBannerVakken.innerHTML += tempStr;
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
            <a href="#!/students/${e.id}" data-navigo>
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
  init.bannerCourses();
  init.lastBlogPosts();
  init.ourStudents();
};