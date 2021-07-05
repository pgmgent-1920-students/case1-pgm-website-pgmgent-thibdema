import { blogPostsDATA } from '../services/fetchURL';
import { sortBlogPosts } from '../services/sortArray';
import { Cards, randomBanner,Paginering } from '../components';
import { displayedAmountsOnPages } from '../services/config';

export const mainBlog = async () => {
  await displayBlogPosts();
  await randomBanner();

  const newPaginering = new Paginering;
  newPaginering.mainPaginering('bigCard', displayedAmountsOnPages.blog);
};

const displayBlogPosts = async () => {
  const DOMBlog = document.querySelector('#BlogPosts');
  let data = await blogPostsDATA(), card = new Cards;
  let tempStr = '';
  const sortedData = sortBlogPosts(data);
  sortedData.forEach((e) => {
    tempStr += card.bigCard('blog', e);
  });
  DOMBlog.innerHTML = tempStr;
};