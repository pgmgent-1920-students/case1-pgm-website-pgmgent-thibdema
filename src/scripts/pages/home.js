import { coursesDATA, blogPostsDATA, studentsDATA } from '../services/fetchURL';
import { sortBlogPosts } from '../services/sortArray';
import { Cards, randomBanner } from '../components';
import { amountOfBlogPostsDisplayed, repeatArraySlider } from '../services/config';


export const mainHome = async () => {
  const init = new Home;
  init.sliderCourses();
  init.lastBlogPosts();
  init.ourStudents();
  randomBanner();
  formProcessing();
};

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
    let data = await blogPostsDATA(), card = new Cards;
    let tempStr = '';
    const sortedData = sortBlogPosts(data);
    sortedData.slice(0,amountOfBlogPostsDisplayed).forEach((e) => {
      tempStr += card.bigCard('blog', e);
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

const formProcessing = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData;

    const email = formData.get('email');

    const urlToAddSubscriber = "pgm.gent/addSubscriber.php";

    const subscribeObject = {
      subscriber: email,
    };
    postDATA(urlToAddSubscriber, subscribeObject);
  });
}