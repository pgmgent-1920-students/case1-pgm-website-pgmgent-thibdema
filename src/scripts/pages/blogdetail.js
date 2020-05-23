import { blogPostsDATA } from '../services/fetchURL';
import { randomBanner } from '../components'

export const mainBlogDetail = async (params) => {
  const allPosts = await blogPostsDATA();
  const data = allPosts.find((e) => e.id == params.id);
  displaySpecificData(data);
  randomBanner();
};

const displaySpecificData = (data) => {
  const DOMBlogDetail = document.querySelector('#blogdetail');

  console.log(data)
  DOMBlogDetail.innerHTML = `
  <h1 class="blogdetail__title">${data.title}</h1>
  <div class="detail__content">
    <div class="left-block">
      <div class="blogdetail__content__image outer-div">
        <div class="blogdetail__content__image_bg inner-div" style="background-image: url(${data.thumbnail})" alt="image ${data.title}"></div>
      </div>
      <p class="detail__date">${data.created_at}</p>
      <p class="detail__bron">${data.bron}</p>
    </div>
    <div class="right-block">
      <h3 class="blogdetail__content__subtitle">${data.subtitle}</h3>
      <p class="detail__text">${data.text}</p>
    </div>
  </div>
  `;
};