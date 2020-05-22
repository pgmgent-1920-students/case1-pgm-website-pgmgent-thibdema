import { coursesDATA, blogPostsDATA } from '../services/fetchURL';
import { sortBlogPosts } from '../services/sortArray';
import { makeBlogPostCard } from '../components/blogPostCard';
import { amountOfBlogPostsDisplayed } from '../services/config';

class Home {
  constructor() {
    this.DOMBannerVakken = document.querySelector('#banner-courses');
    this.DOMLastBlogPosts = document.querySelector('#lastBlogPosts');
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

  async lastBlogPosts () {
    let data = await blogPostsDATA();
    let tempStr = '';
    const sortedData = sortBlogPosts(data);
    sortedData.slice(0,amountOfBlogPostsDisplayed).forEach((e) => {
      tempStr += makeBlogPostCard(e);
    });
    
    this.DOMLastBlogPosts.innerHTML = tempStr;
  }
}

export const mainHome = async () => {
  const init = new Home;
  init.bannerCourses();
  init.lastBlogPosts();
};