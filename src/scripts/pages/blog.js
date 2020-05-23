import { blogPostsDATA } from '../services/fetchURL';
import { sortBlogPosts } from '../services/sortArray';
import { makeBlogPostCard, randomBanner } from '../components';

export const mainBlog = async () => {
  randomBanner();
  displayBlogPosts();
};

const displayBlogPosts = async () => {
  const DOMBlog = document.querySelector('#BlogPosts');
  let data = await blogPostsDATA();
  let tempStr = '';
  const sortedData = sortBlogPosts(data);
  sortedData.forEach((e) => {
    tempStr += makeBlogPostCard(e);
  });
  DOMBlog.innerHTML = tempStr;
};