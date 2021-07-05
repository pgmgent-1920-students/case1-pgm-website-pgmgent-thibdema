import { scrollToTop } from '../services/functions';

export const arrowUp = () => {
  const DOMArrowUp = document.querySelector('#arrowUp');
  scrollToTop(DOMArrowUp);
}